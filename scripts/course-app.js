(() => {
  const $ = id => document.getElementById(id);
  const allLessons = COURSE.units.flatMap((unit, unitIndex) =>
    unit.lessons.map((lesson, lessonIndex) => ({...lesson, unit, unitIndex, lessonIndex}))
  );
  const soundSvg = () => $('soundIcon').innerHTML;
  const storageKey = 'pennySpanishA1V2';
  const legacy = JSON.parse(localStorage.getItem('pennySpanishProgress') || '{}');
  const saved = JSON.parse(localStorage.getItem(storageKey) || 'null') || {
    xp: Number(legacy.xp || 0), streak: Number(legacy.streak || 1), lastDay: legacy.lastDay || null,
    completed: {}, wrong: [], currentId: 'l1'
  };
  const state = { lesson:null, step:0, score:0, total:0, mistakes:0, review:false, reviewItems:[] };
  const stageNames = ['目标','认识','规律','回忆','配对','听辨','读句','造句','对话','完成'];

  function persist() { localStorage.setItem(storageKey, JSON.stringify(saved)); }
  function shuffle(items) {
    const a = [...items];
    for (let i=a.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    return a;
  }
  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  }
  function speak(text, rate=.86) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text); u.lang='es-ES'; u.rate=rate; u.pitch=1;
    const voice = speechSynthesis.getVoices().find(v => v.lang.toLowerCase().startsWith('es'));
    if (voice) u.voice=voice;
    speechSynthesis.speak(u);
  }
  function firstIncompleteIndex() {
    const index = allLessons.findIndex(l => !saved.completed[l.id]);
    return index === -1 ? allLessons.length - 1 : index;
  }
  function isUnlocked(index) { return index <= firstIncompleteIndex() || !!saved.completed[allLessons[index].id]; }
  function nextLesson() { return allLessons[firstIncompleteIndex()] || allLessons[0]; }

  function renderDashboard() {
    $('dashboard').hidden=false; $('lessonScreen').hidden=true;
    const completeCount = Object.keys(saved.completed).filter(id => allLessons.some(l => l.id===id)).length;
    const percent = Math.round(completeCount/allLessons.length*100);
    const next = nextLesson();
    $('coursePercent').textContent=`${percent}%`;
    $('courseProgress').style.width=`${percent}%`;
    $('unitCount').textContent=COURSE.units.length;
    $('lessonCount').textContent=allLessons.length;
    $('nextLessonTitle').textContent = completeCount===allLessons.length ? 'A1 路线已完成，可以自由复习' : `${next.unit.number}.${next.lessonIndex+1} ${next.title}`;
    $('nextLessonGoal').textContent = completeCount===allLessons.length ? '你已经走完整条路线。继续重练薄弱课程，让表达更稳定。' : next.canDo;
    $('continueBtn').textContent = completeCount ? (completeCount===allLessons.length ? '重练终点关' : '继续学习') : '开始第一课';
    $('xp').textContent=saved.xp; $('streak').textContent=saved.streak;
    $('reviewCount').textContent=saved.wrong.length;
    $('reviewBtn').hidden=saved.wrong.length===0;
    $('courseMap').innerHTML='';
    COURSE.units.forEach((unit, ui) => {
      const completedInUnit=unit.lessons.filter(l=>saved.completed[l.id]).length;
      const wrap=document.createElement('article'); wrap.className='unit-card'; wrap.style.setProperty('--unit-color',unit.color);
      wrap.innerHTML=`<div class="unit-head"><span class="unit-icon">${unit.icon}</span><div class="unit-copy"><small>UNIT ${unit.number}</small><h3>${escapeHtml(unit.title)}</h3><p>${escapeHtml(unit.goal)}</p></div><span class="unit-state">${completedInUnit}/${unit.lessons.length}</span></div><div class="lesson-list"></div>`;
      const list=wrap.querySelector('.lesson-list');
      unit.lessons.forEach((lesson, li) => {
        const globalIndex=allLessons.findIndex(l=>l.id===lesson.id);
        const unlocked=isUnlocked(globalIndex); const complete=saved.completed[lesson.id]; const current=globalIndex===firstIncompleteIndex();
        const btn=document.createElement('button');
        btn.className=`lesson-node ${complete?'complete':''} ${current&&!complete?'current':''}`; btn.disabled=!unlocked;
        btn.innerHTML=`<span class="node-index">${complete?'✓':globalIndex+1}</span><span class="node-copy"><strong>${escapeHtml(lesson.title)}</strong><small>${lesson.minutes} 分钟 · ${lesson.checkpoint?'综合关卡':'微课'}</small></span>${complete?`<span class="node-score">${complete.score}%</span>`:`<span class="lock">${unlocked?'›':'🔒'}</span>`}`;
        btn.addEventListener('click',()=>startLesson(allLessons[globalIndex])); list.appendChild(btn);
      });
      $('courseMap').appendChild(wrap);
    });
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function showLesson() {
    $('dashboard').hidden=true; $('lessonScreen').hidden=false; window.scrollTo({top:0,behavior:'smooth'});
  }
  function startLesson(lesson) {
    state.lesson=lesson; state.step=0; state.score=0; state.total=0; state.mistakes=0; state.review=false;
    saved.currentId=lesson.id; persist(); showLesson(); renderStage();
  }
  function nextStage() { state.step+=1; renderStage(); }
  function prevStage() { if(state.step>0){state.step-=1;renderStage();} }
  function updateLessonProgress(total=stageNames.length) {
    const current=Math.min(state.step+1,total);
    $('lessonStep').textContent=`${current} / ${total}`;
    $('lessonProgress').style.width=`${Math.max(5,(state.step/(total-1))*100)}%`;
    document.querySelector('.lesson-progress').setAttribute('aria-valuenow',Math.round(state.step/(total-1)*100));
  }
  function actionButtons(nextLabel='继续') {
    return `<div class="stage-actions"><button class="secondary-btn" data-action="back">返回</button><button class="primary-btn" data-action="next">${nextLabel}</button></div>`;
  }
  function bindNav() {
    document.querySelector('[data-action="next"]')?.addEventListener('click',nextStage);
    document.querySelector('[data-action="back"]')?.addEventListener('click',prevStage);
  }
  function shell(kicker,title,sub,body,actions='') {
    $('lessonStage').innerHTML=`<div class="stage-kicker">${kicker}</div><h1>${title}</h1>${sub?`<p class="stage-sub">${sub}</p>`:''}<div class="stage-body">${body}</div>${actions}`;
  }

  function renderStage() {
    if (state.review) return renderReview();
    updateLessonProgress();
    const l=state.lesson;
    if(state.step===0) {
      shell(`UNIT ${l.unit.number} · 第 ${l.lessonIndex+1} 课`,l.title,'先知道这节课结束时，你能做到什么。',`<div class="intro-icon">${l.unit.icon}</div><div class="can-do"><b>学完我能：</b><br>${escapeHtml(l.canDo)}</div>`,actionButtons('开始认识'));
      bindNav(); return;
    }
    if(state.step===1) {
      const cards=l.words.map(w=>`<div class="word-card"><strong>${escapeHtml(w.es)}</strong><span>${escapeHtml(w.zh)}</span><button class="mini-sound" data-speak="${escapeHtml(w.es)}" aria-label="播放 ${escapeHtml(w.es)}">${soundSvg()}</button><div class="word-tip">发音与用法：${escapeHtml(w.tip)}</div></div>`).join('');
      shell('先认识',`今天认识 ${l.words.length} 个核心表达`,'每个表达都点一次喇叭，先听，再跟读两遍。',`<div class="word-grid">${cards}</div>`,actionButtons('看看规律'));
      bindSpeak(); bindNav(); return;
    }
    if(state.step===2) {
      shell('一个规律',escapeHtml(l.grammar.title),'只讲今天马上用得上的部分。',`<div class="grammar-card"><h2>${escapeHtml(l.grammar.title)}</h2><p>${escapeHtml(l.grammar.body)}</p><div class="examples">${l.grammar.examples.map(x=>`<span>${escapeHtml(x)}</span>`).join('')}</div></div>`,actionButtons('先主动回忆'));
      bindNav(); return;
    }
    if(state.step===3) return renderRecall();
    if(state.step===4) return renderMatch();
    if(state.step===5) return renderListen();
    if(state.step===6) return renderMeaning();
    if(state.step===7) return renderOrder();
    if(state.step===8) return renderDialogue();
    finishLesson();
  }

  function renderRecall() {
    const l=state.lesson;
    shell('主动回忆 · 不计分','先试着说，再看答案','看着中文，在心里或出声说出完整西语。想不全也没关系。',`<div class="recall-card"><span>想说：</span><strong>${escapeHtml(l.sentence.zh)}</strong><button class="reveal-btn" id="revealBtn">我想好了，看答案</button><div class="recall-answer" id="recallAnswer" hidden><b>${escapeHtml(l.sentence.es)}</b><button class="mini-sound" data-speak="${escapeHtml(l.sentence.es)}" aria-label="播放答案">${soundSvg()}</button><small>听一遍，再完整跟读两遍。重点是把声音说出来。</small></div></div>`,`<div class="stage-actions"><button class="secondary-btn" data-action="back">返回</button></div>`);
    bindSpeak(); bindNav();
    $('revealBtn').addEventListener('click',()=>{
      $('revealBtn').disabled=true; $('recallAnswer').hidden=false;
      $('lessonStage').insertAdjacentHTML('beforeend','<div class="stage-actions"><button class="primary-btn" data-action="next">开始配对</button></div>');
      document.querySelector('[data-action="next"]').addEventListener('click',nextStage);
    });
  }

  function bindSpeak() {
    document.querySelectorAll('[data-speak]').forEach(btn=>btn.addEventListener('click',()=>speak(btn.dataset.speak)));
  }
  function renderMatch() {
    const l=state.lesson; const selected={es:null,zh:null}; let matched=0;
    shell('热身 · 不计分','把词和意思配成对','先建立“看到就懂”的连接，点错也没关系。',`<div class="match-grid" id="matchGrid"></div><div class="match-status" id="matchStatus">已配对 0 / ${l.words.length}</div>`,'');
    const items=shuffle(l.words.flatMap((w,i)=>[{side:'es',text:w.es,pair:i},{side:'zh',text:w.zh,pair:i}]));
    items.forEach(item=>{const btn=document.createElement('button');btn.className='match-item';btn.textContent=item.text;btn.dataset.side=item.side;btn.dataset.pair=item.pair;btn.addEventListener('click',()=>{
      if(selected[item.side]) selected[item.side].classList.remove('selected'); selected[item.side]=btn; btn.classList.add('selected');
      if(selected.es&&selected.zh){
        if(selected.es.dataset.pair===selected.zh.dataset.pair){selected.es.classList.remove('selected');selected.zh.classList.remove('selected');selected.es.classList.add('matched');selected.zh.classList.add('matched');selected.es.disabled=true;selected.zh.disabled=true;matched++;$('matchStatus').textContent=`已配对 ${matched} / ${l.words.length}`;selected.es=null;selected.zh=null;if(matched===l.words.length){setTimeout(()=>{$('lessonStage').insertAdjacentHTML('beforeend',`<div class="stage-actions"><button class="primary-btn" data-action="next">进入听力</button></div>`);document.querySelector('[data-action="next"]').addEventListener('click',nextStage);},250)}}
        else{const a=selected.es,b=selected.zh;setTimeout(()=>{a.classList.remove('selected');b.classList.remove('selected')},280);selected.es=null;selected.zh=null}
      }
    });$('matchGrid').appendChild(btn)});
  }

  function recordWrong(item) {
    state.mistakes+=1;
    const key=`${state.lesson.id}-${item.type}`;
    if(!saved.wrong.some(w=>w.key===key)) saved.wrong.push({...item,key,lessonId:state.lesson.id,lessonTitle:state.lesson.title});
    persist();
  }
  function renderChoices(choices,answer,note,onResult) {
    const box=$('answersBox');
    shuffle(choices).forEach(choice=>{const btn=document.createElement('button');btn.className='answer';btn.textContent=choice;btn.addEventListener('click',()=>{
      if(box.dataset.locked) return; box.dataset.locked='1'; const ok=choice===answer;
      [...box.children].forEach(b=>{b.disabled=true;if(b.textContent===answer)b.classList.add('correct')}); if(!ok)btn.classList.add('wrong');
      onResult(ok); $('lessonStage').insertAdjacentHTML('beforeend',`<div class="feedback ${ok?'good':'bad'}"><div><strong>${ok?'¡Muy bien! 答对了':'正确答案：'+escapeHtml(answer)}</strong><small>${escapeHtml(note)}</small></div><button class="primary-btn" data-action="next"><span>继续</span></button></div>`);document.querySelector('[data-action="next"]').addEventListener('click',nextStage);
    });box.appendChild(btn)});
  }
  function renderListen() {
    const l=state.lesson,w=l.words[0]; state.total+=1;
    shell('练习 1 · 听辨','你听到了什么意思？','点蓝色按钮播放，也可以再听慢速。',`<div class="listen-box"><button class="sound-main" id="soundMain" aria-label="播放西班牙语">${soundSvg()}</button><div><b>先不要看文字</b><br><button class="slow-btn" id="slowBtn">🐢 慢速再听</button></div></div><div class="answers" id="answersBox"></div>`,'');
    $('soundMain').addEventListener('click',()=>speak(w.es)); $('slowBtn').addEventListener('click',()=>speak(w.es,.58));
    renderChoices(l.words.map(x=>x.zh),w.zh,w.tip,ok=>{if(ok)state.score+=1;else recordWrong({type:'choice',prompt:'🔊 听音选择',speak:w.es,answer:w.zh,choices:l.words.map(x=>x.zh),note:w.tip})});
  }
  function sentenceDistractors(l) {
    return shuffle(allLessons.filter(x=>x.id!==l.id).map(x=>x.sentence.zh)).slice(0,3);
  }
  function renderMeaning() {
    const l=state.lesson; state.total+=1; const choices=[l.sentence.zh,...sentenceDistractors(l)];
    shell('练习 2 · 读句','选出整句话的意思','不必逐词分析，先抓住你认识的部分。',`<div class="big-prompt">${escapeHtml(l.sentence.es)}</div><button class="slow-btn" data-speak="${escapeHtml(l.sentence.es)}">🔊 听整句</button><div class="answers" id="answersBox"></div>`,'');bindSpeak();
    renderChoices(choices,l.sentence.zh,l.grammar.body,ok=>{if(ok)state.score+=1;else recordWrong({type:'choice',prompt:l.sentence.es,speak:l.sentence.es,answer:l.sentence.zh,choices,note:l.grammar.body})});
  }
  function renderOrder() {
    const l=state.lesson; state.total+=1; const selected=[];
    shell('练习 3 · 词块造句','按正确顺序点词块',`目标意思：${escapeHtml(l.order.zh)}。不用键盘，也不考拼写。`,`<div class="sentence-line" id="sentenceLine"></div><div class="token-bank" id="tokenBank"></div><div class="order-tools"><button class="secondary-btn" id="clearOrder">清空</button><button class="check-btn" id="checkOrder" disabled>检查</button></div>`,'');
    shuffle(l.order.tokens.map((text,id)=>({text,id}))).forEach(token=>{const btn=document.createElement('button');btn.className='token';btn.textContent=token.text;btn.dataset.id=token.id;btn.addEventListener('click',()=>{selected.push(token);btn.classList.add('used');renderSelected()});$('tokenBank').appendChild(btn)});
    function renderSelected(){const line=$('sentenceLine');line.innerHTML='';selected.forEach((token,i)=>{const b=document.createElement('button');b.className='token';b.textContent=token.text;b.addEventListener('click',()=>{selected.splice(i,1);document.querySelector(`#tokenBank [data-id="${token.id}"]`).classList.remove('used');renderSelected()});line.appendChild(b)});$('checkOrder').disabled=selected.length!==l.order.tokens.length}
    $('clearOrder').addEventListener('click',()=>{selected.splice(0);document.querySelectorAll('#tokenBank .token').forEach(b=>b.classList.remove('used'));renderSelected()});
    $('checkOrder').addEventListener('click',()=>{const answer=selected.map(x=>x.text).join(' ');const ok=answer===l.order.answer;if(ok)state.score+=1;else recordWrong({type:'order',prompt:l.order.zh,answer:l.order.answer,tokens:l.order.tokens,note:'按自然语序重新排列这些词块。'});document.querySelectorAll('.token,#clearOrder,#checkOrder').forEach(b=>b.disabled=true);$('lessonStage').insertAdjacentHTML('beforeend',`<div class="feedback ${ok?'good':'bad'}"><div><strong>${ok?'¡Perfecto! 语序正确':'正确句子：'+escapeHtml(l.order.answer)}</strong><small>${escapeHtml(l.order.zh)}</small></div><button class="primary-btn" data-action="next"><span>继续</span></button></div>`);document.querySelector('[data-action="next"]').addEventListener('click',nextStage)});
  }
  function renderDialogue() {
    const l=state.lesson,d=l.dialogue; state.total+=1;
    shell('练习 4 · 情境对话','在这个情境里怎么回应？','把刚学的表达放进真实交流。',`<div class="context">${escapeHtml(d.context)}</div><div class="big-prompt">${escapeHtml(d.prompt)}</div><div class="answers" id="answersBox"></div>`,'');
    renderChoices(d.choices,d.answer,d.note,ok=>{if(ok)state.score+=1;else recordWrong({type:'choice',prompt:`${d.context} ${d.prompt}`,answer:d.answer,choices:d.choices,note:d.note})});
  }
  function finishLesson() {
    const l=state.lesson; const score=state.total?Math.round(state.score/state.total*100):100;
    const existing=saved.completed[l.id]; saved.completed[l.id]={score:Math.max(score,existing?.score||0),date:new Date().toISOString()};
    const idx=allLessons.findIndex(x=>x.id===l.id); const next=allLessons[idx+1]; if(next)saved.currentId=next.id;
    saved.xp+=40+state.score*10; updateStreak(); persist();
    updateLessonProgress(); $('lessonProgress').style.width='100%';
    shell('本课完成',score>=75?'¡Muy bien! 学会了': '完成了，错题已经留下',score>=75?l.canDo:'不用卡在这里。下一课已解锁，错题会在复习区等你。',`<div class="summary"><div class="summary-icon">${score>=75?'🌞':'🌱'}</div><div class="score-ring">${score}%</div><div class="summary-list"><span>⚡ +${40+state.score*10} XP</span><span>答对 ${state.score}/${state.total}</span><span>错题 ${state.mistakes}</span></div></div>`,`<div class="stage-actions"><button class="secondary-btn" data-action="home">课程地图</button><button class="primary-btn" data-action="continue">${next?'下一课':'回到课程首页'}</button></div>`);
    document.querySelector('[data-action="home"]').addEventListener('click',renderDashboard);
    document.querySelector('[data-action="continue"]').addEventListener('click',()=>next?startLesson(next):renderDashboard());
  }
  function updateStreak() {
    const today=new Date().toISOString().slice(0,10); if(saved.lastDay&&saved.lastDay!==today){const diff=(new Date(today)-new Date(saved.lastDay))/86400000;saved.streak=diff===1?saved.streak+1:1} saved.lastDay=today;
  }

  function startReview() {
    state.review=true; state.reviewItems=shuffle(saved.wrong).slice(0,Math.min(10,saved.wrong.length));state.step=0;state.score=0;state.total=state.reviewItems.length;showLesson();renderReview();
  }
  function renderReview() {
    const total=state.reviewItems.length+1; updateLessonProgress(total);
    if(state.step>=state.reviewItems.length){
      shell('复习完成','今天的错题复习结束',`答对 ${state.score} / ${state.total}。答对的题已经从错题本移除。`,`<div class="summary"><div class="summary-icon">🧠</div><div class="score-ring">${state.total?Math.round(state.score/state.total*100):100}%</div></div>`,`<div class="stage-actions"><button class="primary-btn" data-action="home">回到课程地图</button></div>`);document.querySelector('[data-action="home"]').addEventListener('click',renderDashboard);return;
    }
    const item=state.reviewItems[state.step];
    if(item.type==='order') return renderReviewOrder(item);
    shell(`错题复习 ${state.step+1}/${state.reviewItems.length}`,'再试一次',item.prompt,`${item.speak?`<button class="sound-main" data-speak="${escapeHtml(item.speak)}">${soundSvg()}</button>`:''}<div class="answers" id="answersBox"></div>`,'');bindSpeak();
    renderChoices(item.choices,item.answer,item.note,ok=>{if(ok){state.score++;saved.wrong=saved.wrong.filter(w=>w.key!==item.key);persist()}});
  }
  function renderReviewOrder(item) {
    const selected=[]; shell(`错题复习 ${state.step+1}/${state.reviewItems.length}`,'重新排列词块',item.prompt,`<div class="sentence-line" id="sentenceLine"></div><div class="token-bank" id="tokenBank"></div><div class="order-tools"><button class="secondary-btn" id="clearOrder">清空</button><button class="check-btn" id="checkOrder" disabled>检查</button></div>`,'');
    shuffle(item.tokens.map((text,id)=>({text,id}))).forEach(token=>{const b=document.createElement('button');b.className='token';b.textContent=token.text;b.dataset.id=token.id;b.addEventListener('click',()=>{selected.push(token);b.classList.add('used');draw()});$('tokenBank').appendChild(b)});
    function draw(){$('sentenceLine').innerHTML='';selected.forEach((t,i)=>{const b=document.createElement('button');b.className='token';b.textContent=t.text;b.addEventListener('click',()=>{selected.splice(i,1);document.querySelector(`#tokenBank [data-id="${t.id}"]`).classList.remove('used');draw()});$('sentenceLine').appendChild(b)});$('checkOrder').disabled=selected.length!==item.tokens.length}
    $('clearOrder').addEventListener('click',()=>{selected.splice(0);document.querySelectorAll('#tokenBank .token').forEach(b=>b.classList.remove('used'));draw()});$('checkOrder').addEventListener('click',()=>{const ok=selected.map(x=>x.text).join(' ')===item.answer;if(ok){state.score++;saved.wrong=saved.wrong.filter(w=>w.key!==item.key);persist()}document.querySelectorAll('.token,#clearOrder,#checkOrder').forEach(b=>b.disabled=true);$('lessonStage').insertAdjacentHTML('beforeend',`<div class="feedback ${ok?'good':'bad'}"><div><strong>${ok?'语序正确':'正确句子：'+escapeHtml(item.answer)}</strong><small>${escapeHtml(item.note)}</small></div><button class="primary-btn" data-action="next"><span>继续</span></button></div>`);document.querySelector('[data-action="next"]').addEventListener('click',()=>{state.step++;renderReview()})});
  }

  function registerModelTools() {
    const context=document.modelContext;if(!context?.registerTool)return;const lifecycle=new AbortController();
    const register=tool=>{try{Promise.resolve(context.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{})}catch(_){}};
    register({name:'read_spanish_course_progress',title:'读取西语课程进度',description:'读取 Penny 的 A1 课程进度、下一课和错题数量，不修改数据。',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute(){const next=nextLesson();return{completed:Object.keys(saved.completed).length,total:allLessons.length,next_lesson:next.title,review_count:saved.wrong.length,xp:saved.xp}}});
    register({name:'start_next_spanish_lesson',title:'开始下一节西语课',description:'在页面上打开课程路线中的下一节 A1 微课。',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(){const next=nextLesson();startLesson(next);return{lesson:next.title,objective:next.canDo}}});
  }

  $('continueBtn').addEventListener('click',()=>startLesson(nextLesson()));
  $('reviewBtn').addEventListener('click',startReview);
  $('homeBtn').addEventListener('click',renderDashboard);
  $('closeLesson').addEventListener('click',renderDashboard);
  renderDashboard(); registerModelTools();
})();
