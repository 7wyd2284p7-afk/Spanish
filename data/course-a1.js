window.COURSE = {
  title: '西班牙语 A1 路线',
  subtitle: '从完全零基础，到能处理简单日常交流',
  units: [
    {
      id: 'u1', number: 1, title: '第一次开口', icon: '☀️', color: '#ff9c3d',
      goal: '听清基本声音，完成问候、告别和最基础的求助。',
      lessons: [
        {
          id: 'l1', title: 'Hola！先认识西语的声音', minutes: 8,
          canDo: '听懂并使用“你好、是、不是、再见”。',
          words: [
            {es:'hola', zh:'你好', tip:'h 不发音，读起来接近“哦啦”。'},
            {es:'sí', zh:'是；对', tip:'í 上的重音符号表示这里要重读。'},
            {es:'no', zh:'不；不是', tip:'西语的 o 发音干净，不要拖成“欧”。'},
            {es:'adiós', zh:'再见', tip:'重音落在 ó。'}
          ],
          grammar: {title:'西语元音很稳定', body:'a、e、i、o、u 通常分别保持接近“啊、诶、衣、哦、乌”的声音。先听准，不要求你现在拼写。', examples:['hola · 你好','sí · 是','no · 不']},
          sentence: {es:'Hola, soy Penny.', zh:'你好，我是 Penny。'},
          order: {tokens:['Hola,','soy','Penny.'], answer:'Hola, soy Penny.', zh:'你好，我是 Penny。'},
          dialogue: {context:'第一次见到新同学。', prompt:'对方说：¡Hola!', choices:['¡Hola!','Adiós.','No.','Perdón.'], answer:'¡Hola!', note:'别人问候你时，直接用 Hola 回应就很自然。'}
        },
        {
          id: 'l2', title: '礼貌与听不懂时求助', minutes: 9,
          canDo: '说谢谢、请、对不起，并请对方慢一点或重复。',
          words: [
            {es:'gracias', zh:'谢谢', tip:'常用表达，末尾 s 要轻轻带出。'},
            {es:'por favor', zh:'请', tip:'放在请求后面会更自然。'},
            {es:'perdón', zh:'对不起；劳驾', tip:'可用于道歉或引起别人注意。'},
            {es:'no entiendo', zh:'我不明白', tip:'entender 是“理解”，这里直接记整句。'}
          ],
          grammar: {title:'先学整块表达', body:'初学阶段不用急着拆每个词。把 No entiendo 和 ¿Puede repetir? 当作两块能立刻使用的工具。', examples:['No entiendo. · 我不明白','¿Puede repetir? · 您能重复吗？','Más despacio, por favor. · 请慢一点']},
          sentence: {es:'Más despacio, por favor.', zh:'请说慢一点。'},
          order: {tokens:['No','entiendo.'], answer:'No entiendo.', zh:'我不明白。'},
          dialogue: {context:'对方说得太快，你没有听懂。', prompt:'最合适的回应是：', choices:['¿Puede repetir, por favor?','Muy bien.','Me llamo Penny.','Hasta mañana.'], answer:'¿Puede repetir, por favor?', note:'Puede repetir 是礼貌的“您能重复吗”。'}
        }
      ]
    },
    {
      id: 'u2', number: 2, title: '介绍我自己', icon: '👋', color: '#3f6ee8',
      goal: '交换姓名、国籍、居住地、语言和学习信息。',
      lessons: [
        {
          id: 'l3', title: '名字与身份', minutes: 10,
          canDo: '介绍自己的名字，并询问对方叫什么。',
          words: [
            {es:'me llamo', zh:'我叫……', tip:'ll 在多数地区接近汉语“耶/亚”的起始音。'},
            {es:'soy', zh:'我是……', tip:'来自 ser，用于身份。'},
            {es:'¿cómo?', zh:'怎样；怎么', tip:'疑问词带重音符号。'},
            {es:'mucho gusto', zh:'很高兴认识你', tip:'见面时的固定表达。'}
          ],
          grammar: {title:'Me llamo 和 Soy', body:'Me llamo + 名字表示“我叫……”；Soy + 身份或国籍表示“我是……”。', examples:['Me llamo Penny. · 我叫 Penny','Soy estudiante. · 我是学生','¿Cómo te llamas? · 你叫什么？']},
          sentence: {es:'Me llamo Penny y soy estudiante.', zh:'我叫 Penny，是一名学生。'},
          order: {tokens:['Me','llamo','Penny.'], answer:'Me llamo Penny.', zh:'我叫 Penny。'},
          dialogue: {context:'别人问：¿Cómo te llamas?', prompt:'选择正确回答。', choices:['Me llamo Penny.','Estoy bien.','Soy de China.','Tengo veinte años.'], answer:'Me llamo Penny.', note:'¿Cómo te llamas? 专门询问名字。'}
        },
        {
          id: 'l4', title: '来自哪里、会什么语言', minutes: 11,
          canDo: '说出来自哪里、住在哪里，以及会说什么语言。',
          words: [
            {es:'China', zh:'中国', tip:'西班牙语中 ch 发音接近“吃”的开头。'},
            {es:'español', zh:'西班牙语', tip:'ñ 是西语特色字母，接近“ny”。'},
            {es:'vivo en', zh:'我住在……', tip:'地点前常用 en。'},
            {es:'hablo', zh:'我说；我会说', tip:'h 不发音。'}
          ],
          grammar: {title:'de 表来源，en 表地点', body:'Soy de + 地方表示来自哪里；Vivo en + 地方表示住在哪里。', examples:['Soy de China. · 我来自中国','Vivo en Wuhan. · 我住在武汉','Hablo chino. · 我说中文']},
          sentence: {es:'Soy de China y vivo en Wuhan.', zh:'我来自中国，住在武汉。'},
          order: {tokens:['Vivo','en','Wuhan.'], answer:'Vivo en Wuhan.', zh:'我住在武汉。'},
          dialogue: {context:'对方问：¿De dónde eres?（你来自哪里？）', prompt:'选择正确回答。', choices:['Soy de China.','Vivo bien.','Hablo en China.','Me llamo China.'], answer:'Soy de China.', note:'¿De dónde eres? 询问来源，回答用 Soy de…。'}
        }
      ]
    },
    {
      id: 'u3', number: 3, title: '数字与时间', icon: '🕐', color: '#7b57d1',
      goal: '处理年龄、电话号码、价格、日期和时间。',
      lessons: [
        {
          id: 'l5', title: '数字 0–30 与年龄', minutes: 12,
          canDo: '听懂基础数字，说自己的年龄和电话号码。',
          words: [
            {es:'uno', zh:'一', tip:'放在名词前有时会变成 un。'},
            {es:'diez', zh:'十', tip:'西班牙常读 /θ/，拉美通常读 /s/；都正确。'},
            {es:'veintiuno', zh:'二十一', tip:'放在阳性名词 años 前写作 veintiún。'},
            {es:'años', zh:'岁；年', tip:'ñ 不能读成普通 n。'}
          ],
          grammar: {title:'西语用“拥有”表达年龄', body:'中文说“我是二十一岁”，西语说 Tengo veintiún años，字面是“我拥有二十一年”。', examples:['Tengo veintiún años. · 我二十一岁','¿Cuántos años tienes? · 你几岁？','Mi número es… · 我的号码是……']},
          sentence: {es:'Tengo veintiún años.', zh:'我二十一岁。'},
          order: {tokens:['Tengo','veintiún','años.'], answer:'Tengo veintiún años.', zh:'我二十一岁。'},
          dialogue: {context:'别人问：¿Cuántos años tienes?', prompt:'选择正确回答。', choices:['Tengo veintiún años.','Soy veintiuno.','Me llamo veintiuno.','Vivo veintiuno.'], answer:'Tengo veintiún años.', note:'年龄固定用 tener + 数字 + años。'}
        },
        {
          id: 'l6', title: '星期、日期与几点', minutes: 12,
          canDo: '询问和理解星期、日期及整点时间。',
          words: [
            {es:'hoy', zh:'今天', tip:'h 不发音。'},
            {es:'mañana', zh:'明天；早晨', tip:'具体意思由语境决定。'},
            {es:'lunes', zh:'星期一', tip:'西语的星期通常不大写。'},
            {es:'la hora', zh:'时间；钟点', tip:'¿Qué hora es? 表示“几点了？”'}
          ],
          grammar: {title:'一点用单数，其余用复数', body:'一点说 Es la una；两点及以后说 Son las dos / tres…。', examples:['Es la una. · 一点','Son las tres. · 三点','Hoy es lunes. · 今天星期一']},
          sentence: {es:'Hoy es lunes y son las tres.', zh:'今天星期一，现在三点。'},
          order: {tokens:['Son','las','tres.'], answer:'Son las tres.', zh:'现在三点。'},
          dialogue: {context:'你想知道现在几点。', prompt:'应该怎样问？', choices:['¿Qué hora es?','¿Cuántos años tienes?','¿Cómo te llamas?','¿Dónde vives?'], answer:'¿Qué hora es?', note:'¿Qué hora es? 是询问时间的固定说法。'}
        }
      ]
    },
    {
      id: 'u4', number: 4, title: '家人与人物', icon: '🧑‍🤝‍🧑', color: '#e25475',
      goal: '介绍家人，描述人的外貌和基本性格。',
      lessons: [
        {
          id: 'l7', title: '我的家人', minutes: 11,
          canDo: '说清家庭成员和简单关系。',
          words: [
            {es:'madre', zh:'母亲', tip:'也常说 mamá。'},
            {es:'padre', zh:'父亲', tip:'也常说 papá。'},
            {es:'hermana', zh:'姐妹', tip:'男性兄弟是 hermano。'},
            {es:'familia', zh:'家庭；家人', tip:'重音在 mi。'}
          ],
          grammar: {title:'mi 是“我的”', body:'mi + 单数名词，mis + 复数名词。它不随说话者性别变化。', examples:['mi madre · 我的母亲','mis hermanos · 我的兄弟姐妹','Esta es mi familia. · 这是我的家人']},
          sentence: {es:'Esta es mi madre.', zh:'这是我的母亲。'},
          order: {tokens:['Esta','es','mi','familia.'], answer:'Esta es mi familia.', zh:'这是我的家人。'},
          dialogue: {context:'你向朋友展示一张家庭照。', prompt:'怎样介绍照片中的母亲？', choices:['Esta es mi madre.','Soy mi madre.','Tiene mi madre.','Vivo mi madre.'], answer:'Esta es mi madre.', note:'介绍某人可以用 Este/Esta es…。'}
        },
        {
          id: 'l8', title: '外貌与性格', minutes: 12,
          canDo: '用几个简单词描述一个人。',
          words: [
            {es:'alta', zh:'高的（女性）', tip:'描述男性通常用 alto。'},
            {es:'joven', zh:'年轻的', tip:'男女形式相同。'},
            {es:'simpática', zh:'友善的（女性）', tip:'男性形式是 simpático。'},
            {es:'pelo', zh:'头发', tip:'Tiene el pelo largo = 她/他留长发。'}
          ],
          grammar: {title:'形容词常配合阴阳性', body:'很多以 -o 结尾的形容词描述女性时变成 -a；以 -e 等结尾的词常不变。', examples:['Él es alto. · 他很高','Ella es alta. · 她很高','Ella es joven. · 她很年轻']},
          sentence: {es:'Ella es joven y simpática.', zh:'她年轻而且友善。'},
          order: {tokens:['Ella','es','muy','simpática.'], answer:'Ella es muy simpática.', zh:'她非常友善。'},
          dialogue: {context:'朋友问：¿Cómo es Ana?（Ana 是什么样的人？）', prompt:'选择合适回答。', choices:['Es joven y simpática.','Se llama Ana.','Tiene veinte años de hora.','Vive una hermana.'], answer:'Es joven y simpática.', note:'¿Cómo es…? 常用来询问人的特点。'}
        }
      ]
    },
    {
      id: 'u5', number: 5, title: '我的一天', icon: '🌤️', color: '#20a27a',
      goal: '谈论日常安排、学习和习惯。',
      lessons: [
        {
          id: 'l9', title: '从起床到睡觉', minutes: 12,
          canDo: '按顺序描述一天中的基本活动。',
          words: [
            {es:'me levanto', zh:'我起床', tip:'这是反身动词 levantarse 的“我”形式。'},
            {es:'desayuno', zh:'我吃早餐；早餐', tip:'既可以是动词，也可以是名词。'},
            {es:'estudio', zh:'我学习', tip:'-o 常提示主语是“我”。'},
            {es:'duermo', zh:'我睡觉', tip:'来自 dormir。'}
          ],
          grammar: {title:'先掌握“我”的现在时', body:'许多规则动词的“我”形式以 -o 结尾：hablo、estudio、trabajo。先用它们说自己的生活。', examples:['Estudio español. · 我学西语','Trabajo por la tarde. · 我下午工作','Duermo a las once. · 我十一点睡']},
          sentence: {es:'Estudio por la mañana.', zh:'我上午学习。'},
          order: {tokens:['Me','levanto','a','las','ocho.'], answer:'Me levanto a las ocho.', zh:'我八点起床。'},
          dialogue: {context:'朋友问：¿Qué haces por la mañana?（你上午做什么？）', prompt:'选择合适回答。', choices:['Estudio por la mañana.','Soy la mañana.','Tengo la mañana.','Me llamo mañana.'], answer:'Estudio por la mañana.', note:'¿Qué haces? 是“你做什么？”。'}
        },
        {
          id: 'l10', title: '经常、有时、从不', minutes: 11,
          canDo: '表达活动频率和简单习惯。',
          words: [
            {es:'siempre', zh:'总是', tip:'表示最高频率。'},
            {es:'normalmente', zh:'通常', tip:'很多 -mente 结尾的词相当于副词。'},
            {es:'a veces', zh:'有时', tip:'作为一个固定词组记忆。'},
            {es:'nunca', zh:'从不', tip:'放在动词前可直接否定。'}
          ],
          grammar: {title:'频率词放在动词附近', body:'Siempre estudio…、A veces estudio…、Nunca estudio…。这些词不随人称变化。', examples:['Siempre desayuno. · 我总吃早餐','A veces cocino. · 我有时做饭','Nunca fumo. · 我从不抽烟']},
          sentence: {es:'A veces estudio por la noche.', zh:'我有时晚上学习。'},
          order: {tokens:['Nunca','bebo','café.'], answer:'Nunca bebo café.', zh:'我从不喝咖啡。'},
          dialogue: {context:'别人问：¿Estudias español todos los días?', prompt:'你想说“有时学习”。', choices:['A veces estudio.','Soy estudio.','Estudio nunca a veces.','Tengo español.'], answer:'A veces estudio.', note:'A veces 可以直接放在动词前。'}
        }
      ]
    },
    {
      id: 'u6', number: 6, title: '点餐与购物', icon: '☕', color: '#d98029',
      goal: '在咖啡店、餐厅和商店完成简单交易。',
      lessons: [
        {
          id: 'l11', title: '在咖啡店点单', minutes: 12,
          canDo: '礼貌地点饮料和食物，并请求结账。',
          words: [
            {es:'agua', zh:'水', tip:'虽然以 a 开头，agua 仍是阴性名词。'},
            {es:'café', zh:'咖啡', tip:'é 表示末尾重读。'},
            {es:'quiero', zh:'我想要', tip:'来自 querer。'},
            {es:'la cuenta', zh:'账单', tip:'结账时说 La cuenta, por favor。'}
          ],
          grammar: {title:'Quiero + 东西', body:'Quiero… 直接清楚；在服务场景中加 por favor 就足够礼貌。', examples:['Quiero un café. · 我想要一杯咖啡','Para mí, agua. · 我要水','La cuenta, por favor. · 请结账']},
          sentence: {es:'Quiero un café con leche.', zh:'我想要一杯牛奶咖啡。'},
          order: {tokens:['La','cuenta,','por','favor.'], answer:'La cuenta, por favor.', zh:'请结账。'},
          dialogue: {context:'店员问：¿Qué desea?（您要什么？）', prompt:'你想点一杯咖啡。', choices:['Quiero un café, por favor.','Soy un café.','Tengo la cuenta.','Café llamo.'], answer:'Quiero un café, por favor.', note:'Quiero + 名词是最实用的点单句式。'}
        },
        {
          id: 'l12', title: '价格、颜色和尺码', minutes: 13,
          canDo: '询问价格，并指出想要的颜色或尺码。',
          words: [
            {es:'¿cuánto cuesta?', zh:'多少钱？', tip:'cuánto 是疑问词，要带重音。'},
            {es:'barato', zh:'便宜的', tip:'女性形式 barata。'},
            {es:'grande', zh:'大的；大码', tip:'男女形式相同。'},
            {es:'rojo', zh:'红色的', tip:'女性形式 roja。'}
          ],
          grammar: {title:'名词前常需要 un / una', body:'un 常配阳性单数名词，una 常配阴性单数名词。先跟着词一起记。', examples:['un café · 一杯咖啡','una camiseta · 一件T恤','una talla grande · 一个大码']},
          sentence: {es:'Quiero una camiseta roja.', zh:'我想要一件红色T恤。'},
          order: {tokens:['¿Cuánto','cuesta','esta','camiseta?'], answer:'¿Cuánto cuesta esta camiseta?', zh:'这件T恤多少钱？'},
          dialogue: {context:'你看中一件衣服，想问价格。', prompt:'应该怎样问？', choices:['¿Cuánto cuesta?','¿Qué hora es?','¿Dónde vives?','¿Cómo estás?'], answer:'¿Cuánto cuesta?', note:'问单件商品价格用 ¿Cuánto cuesta?。'}
        }
      ]
    },
    {
      id: 'u7', number: 7, title: '城市与交通', icon: '🚇', color: '#2b8ab7',
      goal: '寻找地点、理解方位并使用基础交通。',
      lessons: [
        {
          id: 'l13', title: '这里有什么、在哪里', minutes: 12,
          canDo: '询问某地是否有设施，以及具体在哪里。',
          words: [
            {es:'hay', zh:'有；存在', tip:'各种数量都用 hay，不变化。'},
            {es:'está', zh:'在……；位于', tip:'询问具体位置时常用。'},
            {es:'baño', zh:'卫生间', tip:'ñ 的声音接近“ny”。'},
            {es:'estación', zh:'车站', tip:'ó 重读。'}
          ],
          grammar: {title:'hay 与 está 不一样', body:'Hay 用来问“有没有”；está 用来问一个已知事物“在哪里”。', examples:['¿Hay un baño? · 有卫生间吗？','¿Dónde está el baño? · 卫生间在哪？','Hay una estación aquí. · 这里有车站']},
          sentence: {es:'Hay una farmacia cerca.', zh:'附近有一家药店。'},
          order: {tokens:['¿Dónde','está','el','baño?'], answer:'¿Dónde está el baño?', zh:'卫生间在哪里？'},
          dialogue: {context:'你不知道附近有没有地铁站。', prompt:'应该怎样问？', choices:['¿Hay una estación de metro cerca?','¿Es una estación?','¿Tengo metro?','¿Cuánto estación?'], answer:'¿Hay una estación de metro cerca?', note:'询问是否存在某处，用 ¿Hay…?。'}
        },
        {
          id: 'l14', title: '方向与乘车', minutes: 13,
          canDo: '听懂左右直行，并询问如何到达。',
          words: [
            {es:'derecha', zh:'右边', tip:'a la derecha = 向右。'},
            {es:'izquierda', zh:'左边', tip:'a la izquierda = 向左。'},
            {es:'todo recto', zh:'一直走', tip:'常见指路表达。'},
            {es:'autobús', zh:'公共汽车', tip:'ú 重读。'}
          ],
          grammar: {title:'¿Cómo llego a…?', body:'用这句询问“我怎么到……？”；方向前常用 a：a la derecha、a la izquierda。', examples:['Todo recto. · 一直走','Gira a la derecha. · 向右转','Voy en autobús. · 我坐公交去']},
          sentence: {es:'Sigue todo recto y gira a la izquierda.', zh:'一直走，然后向左转。'},
          order: {tokens:['Gira','a','la','derecha.'], answer:'Gira a la derecha.', zh:'向右转。'},
          dialogue: {context:'你想去火车站。', prompt:'选择正确问法。', choices:['¿Cómo llego a la estación?','¿Cuánto es la estación?','¿Quién estación?','¿Tengo a la estación?'], answer:'¿Cómo llego a la estación?', note:'¿Cómo llego a…? 是问路的核心句式。'}
        }
      ]
    },
    {
      id: 'u8', number: 8, title: '家与物品', icon: '🏠', color: '#8962c9',
      goal: '描述住所、房间、物品及其位置。',
      lessons: [
        {
          id: 'l15', title: '房间和位置', minutes: 12,
          canDo: '指出家中房间，并描述东西在哪里。',
          words: [
            {es:'cocina', zh:'厨房', tip:'西班牙常读 /θ/，拉美常读 /s/。'},
            {es:'habitación', zh:'房间；卧室', tip:'也常说 dormitorio。'},
            {es:'encima de', zh:'在……上面', tip:'作为整个介词短语记忆。'},
            {es:'debajo de', zh:'在……下面', tip:'与 encima de 相对。'}
          ],
          grammar: {title:'位置表达后接 de', body:'encima de、debajo de、al lado de 后面再接物品或地点。', examples:['encima de la mesa · 在桌上','debajo de la cama · 在床下','al lado de la puerta · 在门旁']},
          sentence: {es:'El libro está encima de la mesa.', zh:'书在桌子上。'},
          order: {tokens:['Está','debajo','de','la','cama.'], answer:'Está debajo de la cama.', zh:'它在床下面。'},
          dialogue: {context:'朋友问：¿Dónde está el libro?', prompt:'书在桌子上。', choices:['Está encima de la mesa.','Hay el libro mesa.','Es encima mesa.','Tiene una mesa.'], answer:'Está encima de la mesa.', note:'具体物品的位置用 está + 位置。'}
        },
        {
          id: 'l16', title: '我的、你的，以及“有”', minutes: 12,
          canDo: '谈论拥有的物品，并辨认是谁的。',
          words: [
            {es:'tengo', zh:'我有', tip:'来自 tener。'},
            {es:'tienes', zh:'你有', tip:'这是 tú 的形式。'},
            {es:'mi', zh:'我的', tip:'复数形式 mis。'},
            {es:'tu', zh:'你的', tip:'这里不带重音；tú 带重音时是“你”。'}
          ],
          grammar: {title:'tengo / tienes', body:'Tengo 表示“我有”，Tienes 表示“你有”。这两个形式要分别记住。', examples:['Tengo un libro. · 我有一本书','¿Tienes coche? · 你有车吗？','Es mi móvil. · 这是我的手机']},
          sentence: {es:'Tengo una habitación pequeña.', zh:'我有一间小房间。'},
          order: {tokens:['¿Tienes','un','ordenador?'], answer:'¿Tienes un ordenador?', zh:'你有电脑吗？'},
          dialogue: {context:'朋友指着手机问：¿Es tu móvil?', prompt:'你想回答“是的，是我的”。', choices:['Sí, es mi móvil.','Sí, tengo tu móvil.','Soy un móvil.','Está mi sí.'], answer:'Sí, es mi móvil.', note:'确认所属关系可用 Sí, es mi…。'}
        }
      ]
    },
    {
      id: 'u9', number: 9, title: '喜欢与计划', icon: '🎧', color: '#d64f91',
      goal: '表达喜好、休闲活动、天气和近期计划。',
      lessons: [
        {
          id: 'l17', title: '我喜欢什么', minutes: 12,
          canDo: '说自己喜欢或不喜欢的事物和活动。',
          words: [
            {es:'me gusta', zh:'我喜欢（单数或活动）', tip:'字面更接近“它令我喜欢”。'},
            {es:'me gustan', zh:'我喜欢（复数事物）', tip:'复数名词前用 gustan。'},
            {es:'música', zh:'音乐', tip:'ú 重读。'},
            {es:'leer', zh:'阅读', tip:'动词原形，可接在 me gusta 后。'}
          ],
          grammar: {title:'gusta 看后面的东西', body:'后面是一个事物或一个活动，用 gusta；后面是多个事物，用 gustan。', examples:['Me gusta el café. · 我喜欢咖啡','Me gusta leer. · 我喜欢阅读','Me gustan los libros. · 我喜欢书']},
          sentence: {es:'Me gusta escuchar música.', zh:'我喜欢听音乐。'},
          order: {tokens:['Me','gustan','los','libros.'], answer:'Me gustan los libros.', zh:'我喜欢书。'},
          dialogue: {context:'别人问：¿Qué te gusta hacer?', prompt:'你想说喜欢阅读。', choices:['Me gusta leer.','Soy leer.','Tengo gusta.','Leo me libros.'], answer:'Me gusta leer.', note:'喜欢做某事：Me gusta + 动词原形。'}
        },
        {
          id: 'l18', title: '天气与简单计划', minutes: 12,
          canDo: '描述常见天气，并说今天或明天要做什么。',
          words: [
            {es:'hace calor', zh:'天气热', tip:'描述天气常用 hacer。'},
            {es:'hace frío', zh:'天气冷', tip:'í 重读。'},
            {es:'llueve', zh:'下雨', tip:'ll 的发音随地区不同。'},
            {es:'voy a', zh:'我要；我打算', tip:'后面接动词原形。'}
          ],
          grammar: {title:'ir a + 动词：近期打算', body:'Voy a + 动词原形，用来表达“我打算做……”。', examples:['Voy a estudiar. · 我要学习','Voy a salir. · 我要出门','Mañana voy a descansar. · 明天我要休息']},
          sentence: {es:'Mañana voy a estudiar español.', zh:'明天我要学习西班牙语。'},
          order: {tokens:['Hoy','hace','mucho','calor.'], answer:'Hoy hace mucho calor.', zh:'今天天气很热。'},
          dialogue: {context:'朋友问：¿Qué vas a hacer mañana?', prompt:'你想说明天要休息。', choices:['Voy a descansar.','Soy descanso.','Hace descansar.','Tengo mañana.'], answer:'Voy a descansar.', note:'近期计划用 voy a + 动词原形。'}
        }
      ]
    },
    {
      id: 'u10', number: 10, title: '生存交流与终点关', icon: '🧭', color: '#176f69',
      goal: '处理身体不适、旅行住宿，并综合运用 A1 能力。',
      lessons: [
        {
          id: 'l19', title: '身体不舒服与旅行求助', minutes: 13,
          canDo: '简单表达疼痛、需要帮助和住宿需求。',
          words: [
            {es:'me duele', zh:'我……疼', tip:'后接一个部位：Me duele la cabeza。'},
            {es:'ayuda', zh:'帮助；救命', tip:'¡Ayuda! 可用于紧急求助。'},
            {es:'farmacia', zh:'药店', tip:'寻找药店时非常实用。'},
            {es:'reserva', zh:'预订', tip:'Tengo una reserva = 我有预订。'}
          ],
          grammar: {title:'Me duele + 身体部位', body:'表达一个部位疼用 me duele；此阶段先记最常用的完整句。', examples:['Me duele la cabeza. · 我头疼','Necesito ayuda. · 我需要帮助','Tengo una reserva. · 我有预订']},
          sentence: {es:'Necesito una farmacia, por favor.', zh:'我需要找一家药店。'},
          order: {tokens:['Me','duele','la','cabeza.'], answer:'Me duele la cabeza.', zh:'我头疼。'},
          dialogue: {context:'到酒店前台，你已经预订了房间。', prompt:'应该怎样说？', choices:['Tengo una reserva.','Soy una reserva.','Me duele la reserva.','Hay mi hotel.'], answer:'Tengo una reserva.', note:'酒店前台最常用的开场句之一。'}
        },
        {
          id: 'l20', title: 'A1 综合挑战', minutes: 15,
          canDo: '综合完成自我介绍、时间、点餐、问路和求助。',
          checkpoint: true,
          words: [
            {es:'¿De dónde eres?', zh:'你来自哪里？', tip:'回答 Soy de…。'},
            {es:'¿Cuánto cuesta?', zh:'多少钱？', tip:'购物场景。'},
            {es:'¿Dónde está…?', zh:'……在哪里？', tip:'询问具体位置。'},
            {es:'¿Puede repetir?', zh:'您能重复吗？', tip:'听不懂时的自救句。'}
          ],
          grammar: {title:'A1 的核心是“能做什么”', body:'不追求复杂句，而是能在对方说得慢且愿意配合时，处理具体、可预测的日常需要。', examples:['介绍自己','获取时间、价格与方向','点单、购物、住宿与简单求助']},
          sentence: {es:'Hola, me llamo Penny y soy de China.', zh:'你好，我叫 Penny，来自中国。'},
          order: {tokens:['Quiero','un','café,','por','favor.'], answer:'Quiero un café, por favor.', zh:'我想要一杯咖啡，谢谢。'},
          dialogue: {context:'你问了路，但对方说得太快。', prompt:'选择最有用的回应。', choices:['Más despacio, por favor.','¿Cuánto cuesta?','Tengo veinte años.','Me gusta leer.'], answer:'Más despacio, por favor.', note:'能主动请求放慢和重复，也是 A1 互动能力的一部分。'}
        }
      ]
    }
  ]
};

// 在原有 20 节生存入门课之后，为每个单元补充两个深化课和一个阶段复习。
// 保留 l1–l20 的 ID，确保已经产生的学习进度继续有效。
const A1_DEEPENING = {
  u1: [
    {
      id:'l21', title:'五个元音与清晰节奏', minutes:10,
      canDo:'听出 a、e、i、o、u，并用稳定元音读出常见词。',
      words:[
        {es:'casa',zh:'房子',tip:'a 始终接近清晰的“啊”，不要滑动。'},
        {es:'mesa',zh:'桌子',tip:'e 接近短促的“诶”，保持口型稳定。'},
        {es:'vino',zh:'葡萄酒',tip:'i 接近“衣”，v 在西语里通常与 b 的发音接近。'},
        {es:'foto',zh:'照片',tip:'o 接近短促的“哦”，不要读成“欧”。'},
        {es:'luna',zh:'月亮',tip:'u 接近“乌”；每个元音都要清楚。'}
      ],
      grammar:{title:'西语元音很稳定',body:'同一个元音在不同词里通常保持相近的声音。先把每个音节读清楚，再追求速度。',examples:['ca-sa · 两个清楚音节','me-sa · e 与 a 都不滑动','fo-to · 两个 o 基本一致']},
      sentence:{es:'La casa tiene una mesa.',zh:'房子里有一张桌子。'},
      order:{tokens:['La','foto','está','en','la','mesa.'],answer:'La foto está en la mesa.',zh:'照片在桌子上。'},
      dialogue:{context:'老师让你分音节读 casa。',prompt:'哪一种读法最符合西语节奏？',choices:['ca-sa','cai-sa','ca-sei','caa-sa'],answer:'ca-sa',note:'西语常按清楚、均匀的音节推进。'}
    },
    {
      id:'l22', title:'重音、问句与听力自救', minutes:11,
      canDo:'找到常见词的重读位置，并请求重复、解释或慢一点。',
      words:[
        {es:'teléfono',zh:'电话',tip:'重音符号告诉你 lé 音节要重读。'},
        {es:'español',zh:'西班牙语',tip:'ñ 接近“ny”；最后的音节重读。'},
        {es:'¿Qué significa?',zh:'是什么意思？',tip:'询问一个词或表达的含义。'},
        {es:'No entiendo.',zh:'我没听懂。',tip:'比沉默更有用的基础自救句。'},
        {es:'Otra vez, por favor.',zh:'请再说一次。',tip:'otra vez 表示“再一次”。'}
      ],
      grammar:{title:'重音符号不是装饰',body:'带重音符号的元音通常明确标出重读位置；问句要同时写开头和结尾问号。',examples:['te-LÉ-fo-no','es-pa-ÑOL','¿Qué significa?']},
      sentence:{es:'No entiendo. Otra vez, por favor.',zh:'我没听懂，请再说一次。'},
      order:{tokens:['¿Qué','significa','esta','palabra?'],answer:'¿Qué significa esta palabra?',zh:'这个词是什么意思？'},
      dialogue:{context:'你听见一个新词，但不知道意思。',prompt:'怎样请对方解释？',choices:['¿Qué significa?','¿Cuánto cuesta?','¿Dónde vives?','¿Qué hora es?'],answer:'¿Qué significa?',note:'¿Qué significa? 可以直接询问词或表达的含义。'}
    },
    {
      id:'l23', title:'单元复习：我能让对话继续', minutes:12, checkpoint:true,
      canDo:'完成问候，并在没听清时主动维持简单对话。',
      words:[
        {es:'Buenos días.',zh:'早上好。',tip:'通常在上午使用。'},
        {es:'Mucho gusto.',zh:'很高兴认识你。',tip:'初次见面时常用。'},
        {es:'Perdón.',zh:'不好意思；抱歉。',tip:'引起注意或轻微道歉。'},
        {es:'Más despacio, por favor.',zh:'请慢一点。',tip:'请求对方降低语速。'},
        {es:'Ahora sí.',zh:'现在听懂了。',tip:'表示这一次明白了。'}
      ],
      grammar:{title:'先回应，再提出需要',body:'简单对话不要求每句都长。先用礼貌词回应，再明确说“重复”“慢一点”或“什么意思”。',examples:['Perdón. No entiendo.','Otra vez, por favor.','Gracias. Ahora sí.']},
      sentence:{es:'Perdón, ¿puede repetir más despacio?',zh:'不好意思，您能慢一点再说一遍吗？'},
      order:{tokens:['Buenos','días,','mucho','gusto.'],answer:'Buenos días, mucho gusto.',zh:'早上好，很高兴认识你。'},
      dialogue:{context:'对方重复后，你终于听懂了。',prompt:'最自然的回应是什么？',choices:['Gracias, ahora sí.','No tengo mesa.','Son las dos.','Me duele aquí.'],answer:'Gracias, ahora sí.',note:'感谢对方并说明现在听懂了，可以自然结束修复过程。'}
    }
  ],
  u2: [
    {
      id:'l24', title:'一个、这个：名词的性与冠词', minutes:11,
      canDo:'用 el、la、un、una 指认常见的人和物。',
      words:[
        {es:'el libro',zh:'这本书；书',tip:'阳性单数名词常与 el 搭配。'},
        {es:'la mesa',zh:'这张桌子；桌子',tip:'阴性单数名词常与 la 搭配。'},
        {es:'un amigo',zh:'一位男性朋友',tip:'un 表示不特定的阳性单数。'},
        {es:'una amiga',zh:'一位女性朋友',tip:'una 表示不特定的阴性单数。'},
        {es:'este / esta',zh:'这个 / 这个（阴性）',tip:'形式要与后面的名词呼应。'}
      ],
      grammar:{title:'把冠词和名词一起记',body:'名词的语法性别不一定等于现实性别。学习新词时，把 el 或 la 当作词的一部分。',examples:['el teléfono','la ciudad','un estudiante / una estudiante']},
      sentence:{es:'Esta es una amiga y este es un amigo.',zh:'这是一位女性朋友，这是一位男性朋友。'},
      order:{tokens:['Este','es','el','libro','de','Ana.'],answer:'Este es el libro de Ana.',zh:'这是 Ana 的书。'},
      dialogue:{context:'别人指着桌上的物品问：¿Qué es esto?',prompt:'你想回答“这是一张桌子”。',choices:['Es una mesa.','Soy una mesa.','Está una mesa.','Hay la mesa yo.'],answer:'Es una mesa.',note:'指认事物时可以用 Es + un/una + 名词。'}
    },
    {
      id:'l25', title:'职业、单位与联系方式', minutes:12,
      canDo:'说出职业、工作或学习地点，并交换基础联系方式。',
      words:[
        {es:'Soy estudiante.',zh:'我是学生。',tip:'职业前通常不加 un/una。'},
        {es:'Trabajo en una oficina.',zh:'我在办公室工作。',tip:'trabajar en + 地点。'},
        {es:'Estudio en la universidad.',zh:'我在大学学习。',tip:'estudiar en + 学习地点。'},
        {es:'Mi número es…',zh:'我的号码是……',tip:'用于提供电话号码。'},
        {es:'Mi correo es…',zh:'我的邮箱是……',tip:'correo 在这里指电子邮箱。'}
      ],
      grammar:{title:'职业前通常不用冠词',body:'用 ser 表示身份或职业时，直接说 Soy estudiante / Es médica；描述工作地点则用 trabajar en。',examples:['Soy profesora.','Trabajo en una tienda.','Estudio español en casa.']},
      sentence:{es:'Soy estudiante y estudio español en casa.',zh:'我是学生，在家学西班牙语。'},
      order:{tokens:['Trabajo','en','una','empresa','pequeña.'],answer:'Trabajo en una empresa pequeña.',zh:'我在一家小公司工作。'},
      dialogue:{context:'新同学问：¿Cuál es tu número de teléfono?',prompt:'哪句可以提供号码？',choices:['Mi número es 612 345 678.','Soy de China.','Trabajo por la tarde.','Tengo una hermana.'],answer:'Mi número es 612 345 678.',note:'¿Cuál es tu número? 询问号码，回答用 Mi número es…。'}
    },
    {
      id:'l26', title:'单元复习：完整介绍自己', minutes:13, checkpoint:true,
      canDo:'用姓名、来源、语言、职业和联系方式完成简短自我介绍。',
      words:[
        {es:'Me llamo…',zh:'我叫……',tip:'介绍姓名。'},
        {es:'Soy de…',zh:'我来自……',tip:'介绍来源地。'},
        {es:'Vivo en…',zh:'我住在……',tip:'介绍现居地。'},
        {es:'Hablo…',zh:'我会说……',tip:'介绍语言。'},
        {es:'¿Y tú?',zh:'你呢？',tip:'把同一个问题自然地问回去。'}
      ],
      grammar:{title:'用 y 把短句连接起来',body:'A1 自我介绍不需要复杂长句。把几个正确短句用 y 连接，就能形成清楚的连续表达。',examples:['Me llamo Penny y soy de China.','Vivo en Wuhan y estudio español.','Hablo chino y un poco de inglés.']},
      sentence:{es:'Me llamo Penny, vivo en Wuhan y estudio español.',zh:'我叫 Penny，住在武汉，学习西班牙语。'},
      order:{tokens:['Hablo','chino','y','un','poco','de','inglés.'],answer:'Hablo chino y un poco de inglés.',zh:'我会说中文和一点英语。'},
      dialogue:{context:'你做完自我介绍，想了解对方。',prompt:'如何自然地把话题交给对方？',choices:['¿Y tú?','¿Cuánto es?','Está aquí.','Tengo hambre.'],answer:'¿Y tú?',note:'¿Y tú? 简短但非常高频，可以把相同问题问回去。'}
    }
  ],
  u3: [
    {
      id:'l27', title:'三十一到一百：价格与号码', minutes:12,
      canDo:'听懂和说出 31–100 的常见价格、年龄与号码。',
      words:[
        {es:'treinta',zh:'三十',tip:'30 之后常用 y 连接个位数。'},
        {es:'cuarenta',zh:'四十',tip:'注意 cua- 的发音。'},
        {es:'cincuenta',zh:'五十',tip:'cin-cuen-ta，共三个音节。'},
        {es:'setenta',zh:'七十',tip:'不要和 sesenta（六十）混淆。'},
        {es:'cien',zh:'一百',tip:'正好 100 用 cien。'}
      ],
      grammar:{title:'31–99：十位 + y + 个位',body:'个位不是零时，在十位与个位之间放 y；整十不需要 y。',examples:['treinta y uno · 31','cuarenta y cinco · 45','noventa · 90']},
      sentence:{es:'Cuesta cuarenta y cinco euros.',zh:'价格是四十五欧元。'},
      order:{tokens:['Mi','número','termina','en','setenta','y','dos.'],answer:'Mi número termina en setenta y dos.',zh:'我的号码最后是七十二。'},
      dialogue:{context:'店员说：Son treinta y ocho euros.',prompt:'价格是多少？',choices:['38 欧元','28 欧元','48 欧元','83 欧元'],answer:'38 欧元',note:'treinta y ocho 是 30 + 8。'}
    },
    {
      id:'l28', title:'日历、日期与约时间', minutes:12,
      canDo:'询问和确认星期、日期以及简单约会时间。',
      words:[
        {es:'hoy',zh:'今天',tip:'不与冠词搭配。'},
        {es:'mañana',zh:'明天；早晨',tip:'具体含义由上下文决定。'},
        {es:'el lunes',zh:'在星期一',tip:'说某个星期几常用 el。'},
        {es:'el quince de mayo',zh:'5 月 15 日',tip:'日期用“日 + de + 月”。'},
        {es:'¿Te va bien?',zh:'你方便吗？',tip:'用于确认时间是否合适。'}
      ],
      grammar:{title:'日期前用 el',body:'说某天发生事情时可用 el + 星期/日期。询问日期用 ¿Qué fecha es hoy?，询问星期用 ¿Qué día es hoy?。',examples:['Hoy es martes.','La cita es el viernes.','Es el dos de junio.']},
      sentence:{es:'La clase es el lunes a las seis.',zh:'课在星期一六点。'},
      order:{tokens:['¿Te','va','bien','mañana','a','las','cinco?'],answer:'¿Te va bien mañana a las cinco?',zh:'明天五点你方便吗？'},
      dialogue:{context:'朋友提议周五见面，你那天方便。',prompt:'怎样确认？',choices:['Sí, el viernes me va bien.','No, tengo treinta años.','Es una mesa grande.','Voy en autobús.'],answer:'Sí, el viernes me va bien.',note:'me va bien 表示“这个时间对我合适”。'}
    },
    {
      id:'l29', title:'单元复习：安排一次见面', minutes:13, checkpoint:true,
      canDo:'交换日期、时间与号码，并确认一个简单安排。',
      words:[
        {es:'¿Cuándo?',zh:'什么时候？',tip:'询问日期或时间。'},
        {es:'¿A qué hora?',zh:'几点？',tip:'专门询问钟点。'},
        {es:'a mediodía',zh:'在中午',tip:'固定时间表达。'},
        {es:'por la tarde',zh:'在下午',tip:'表示一天中的时间段。'},
        {es:'Perfecto, hasta mañana.',zh:'很好，明天见。',tip:'确认安排并结束对话。'}
      ],
      grammar:{title:'从宽到窄确认时间',body:'先问 cuándo，再问具体几点；最后重复日期和时间，可以减少误会。',examples:['¿Cuándo es la clase?','¿A qué hora?','El martes a las seis, ¿verdad?']},
      sentence:{es:'Nos vemos el martes por la tarde.',zh:'我们星期二下午见。'},
      order:{tokens:['La','cita','es','el','doce','a','las','cuatro.'],answer:'La cita es el doce a las cuatro.',zh:'预约在 12 号四点。'},
      dialogue:{context:'对方确认：El jueves a las diez.',prompt:'你同意并结束安排。',choices:['Perfecto, hasta el jueves.','Tengo diez euros.','Hoy es una ciudad.','No hablo la mesa.'],answer:'Perfecto, hasta el jueves.',note:'重复星期可以确认你听到的安排。'}
    }
  ]
};

Object.assign(A1_DEEPENING, {
  u4: [
    {
      id:'l30', title:'我的家、你的家：复数与所有', minutes:12,
      canDo:'用复数和 mi、tu、su 介绍家庭成员。',
      words:[
        {es:'mis padres',zh:'我的父母',tip:'复数名词前用 mis。'},
        {es:'tu hermano',zh:'你的兄弟',tip:'tu 不随名词性别变化。'},
        {es:'su hija',zh:'他/她/您的女儿',tip:'su 的具体指代由上下文决定。'},
        {es:'nuestros amigos',zh:'我们的男性朋友或混合朋友',tip:'nuestro 要与名词配合。'},
        {es:'sus abuelos',zh:'他/她/您的祖父母',tip:'复数名词前用 sus。'}
      ],
      grammar:{title:'mi 变 mis，tu 变 tus',body:'mi、tu、su 根据后面名词的单复数变化，不根据拥有者的性别变化。',examples:['mi madre / mis padres','tu amiga / tus amigos','su hijo / sus hijos']},
      sentence:{es:'Mis padres viven con mi hermano.',zh:'我的父母和我的兄弟住在一起。'},
      order:{tokens:['Esta','es','mi','hermana','y','estos','son','mis','padres.'],answer:'Esta es mi hermana y estos son mis padres.',zh:'这是我姐姐/妹妹，这是我的父母。'},
      dialogue:{context:'别人指着照片问：¿Quiénes son?',prompt:'你想说“他们是我的祖父母”。',choices:['Son mis abuelos.','Es mi abuelo.','Soy sus abuelos.','Están mi familia.'],answer:'Son mis abuelos.',note:'复数人物用 son，mis 与复数 abuelos 搭配。'}
    },
    {
      id:'l31', title:'ser、estar 与穿着描述', minutes:13,
      canDo:'区分人物特征、当前状态和当天穿着。',
      words:[
        {es:'Es alto.',zh:'他个子高。',tip:'稳定特征常用 ser。'},
        {es:'Está cansada.',zh:'她累了。',tip:'当前状态常用 estar。'},
        {es:'Lleva una camisa azul.',zh:'他/她穿着蓝衬衫。',tip:'描述当下穿着用 llevar。'},
        {es:'Tiene el pelo corto.',zh:'他/她留着短发。',tip:'描述头发常用 tener。'},
        {es:'Parece joven.',zh:'他/她看起来年轻。',tip:'parecer 用于表达外观印象。'}
      ],
      grammar:{title:'特征用 ser，状态用 estar',body:'ser 常描述身份和相对稳定的特点；estar 常描述此刻状态。穿着用 llevar，身体特征也常用 tener。',examples:['Es simpática.','Está contento hoy.','Lleva pantalones negros.']},
      sentence:{es:'Mi amiga es alta y hoy lleva una chaqueta roja.',zh:'我的朋友个子高，今天穿着红色外套。'},
      order:{tokens:['Está','cansado,','pero','está','bien.'],answer:'Está cansado, pero está bien.',zh:'他累了，但状态还好。'},
      dialogue:{context:'你要帮朋友在人群中找 Ana。',prompt:'哪句描述最有用？',choices:['Es alta y lleva una camisa blanca.','Tiene una cita mañana.','Son las cinco y media.','Me gusta el café.'],answer:'Es alta y lleva una camisa blanca.',note:'稳定特征加当天穿着能帮助辨认人物。'}
    },
    {
      id:'l32', title:'单元复习：根据照片介绍人物', minutes:14, checkpoint:true,
      canDo:'用关系、外貌、性格和状态连续描述一个人。',
      words:[
        {es:'a la izquierda',zh:'在左边',tip:'用于指出照片中的位置。'},
        {es:'a la derecha',zh:'在右边',tip:'与 izquierda 相对。'},
        {es:'muy simpático',zh:'非常友好',tip:'muy 放在形容词前。'},
        {es:'un poco tímida',zh:'有一点害羞',tip:'un poco 可以柔和描述。'},
        {es:'hoy está contenta',zh:'她今天很开心',tip:'当天状态用 estar。'}
      ],
      grammar:{title:'描述顺序让表达更清楚',body:'先说明人物关系和位置，再说稳定特征，最后补充当天状态或穿着。',examples:['A la izquierda está mi hermano.','Es alto y simpático.','Hoy lleva una camiseta azul.']},
      sentence:{es:'A la derecha está mi madre; es amable y hoy está muy contenta.',zh:'右边是我妈妈；她很和善，今天很开心。'},
      order:{tokens:['Mi','hermano','tiene','el','pelo','corto','y','es','tímido.'],answer:'Mi hermano tiene el pelo corto y es tímido.',zh:'我兄弟留着短发，而且有些害羞。'},
      dialogue:{context:'对方问照片里左边的人是谁。',prompt:'选择完整回应。',choices:['Es mi prima; es baja y lleva un vestido verde.','Son las tres menos cuarto.','Quiero dos cafés.','Voy al centro en metro.'],answer:'Es mi prima; es baja y lleva un vestido verde.',note:'先说明关系，再补充外貌与穿着。'}
    }
  ],
  u5: [
    {
      id:'l33', title:'现在时：我、你、他都能说', minutes:13,
      canDo:'用规则现在时谈自己和他人的日常活动。',
      words:[
        {es:'trabajo / trabajas',zh:'我工作 / 你工作',tip:'-ar 动词的我、你形式常为 -o、-as。'},
        {es:'come / comemos',zh:'他吃 / 我们吃',tip:'-er 动词注意词尾变化。'},
        {es:'vivo / vive',zh:'我住 / 他住',tip:'-ir 动词的我形式也以 -o 结尾。'},
        {es:'¿Qué haces?',zh:'你做什么？',tip:'hacer 的 tú 形式是 haces。'},
        {es:'normalmente',zh:'通常',tip:'可放在句首或动词前后。'}
      ],
      grammar:{title:'先掌握高频人称',body:'A1 阶段优先熟练 yo、tú、él/ella 和 nosotros 的现在时，不必一次背完所有表格。',examples:['Yo trabajo.','Tú estudias.','Ella vive aquí.','Comemos a las dos.']},
      sentence:{es:'Normalmente trabajo por la mañana y estudio por la tarde.',zh:'我通常上午工作，下午学习。'},
      order:{tokens:['¿Qué','haces','después','de','clase?'],answer:'¿Qué haces después de clase?',zh:'你下课后做什么？'},
      dialogue:{context:'朋友问：¿Trabajas los sábados?',prompt:'你想说“不是，我星期六学习”。',choices:['No, estudio los sábados.','Sí, soy sábado.','No, estoy trabajo.','Tengo los sábados.'],answer:'No, estudio los sábados.',note:'否定句把 no 放在变位动词前。'}
    },
    {
      id:'l34', title:'起床以后：反身动词与顺序', minutes:13,
      canDo:'按顺序描述起床、洗漱、出门和睡觉。',
      words:[
        {es:'me levanto',zh:'我起床',tip:'me 与 yo 搭配。'},
        {es:'me ducho',zh:'我洗澡',tip:'反身动作前保留 me。'},
        {es:'me visto',zh:'我穿衣服',tip:'vestirse 的词干在这里发生变化。'},
        {es:'salgo de casa',zh:'我出门',tip:'salir 的 yo 形式是 salgo。'},
        {es:'primero / después',zh:'首先 / 然后',tip:'帮助听者跟上顺序。'}
      ],
      grammar:{title:'反身动作需要 me、te、se',body:'描述自己给自己完成的日常动作时，yo 常与 me 搭配，tú 与 te，él/ella 与 se。',examples:['Me levanto a las siete.','¿A qué hora te duchas?','Se acuesta tarde.']},
      sentence:{es:'Primero me ducho y después me visto.',zh:'我先洗澡，然后穿衣服。'},
      order:{tokens:['Después','del','desayuno,','salgo','de','casa.'],answer:'Después del desayuno, salgo de casa.',zh:'早餐后，我出门。'},
      dialogue:{context:'别人问：¿Qué haces primero por la mañana?',prompt:'你先起床，然后洗澡。',choices:['Primero me levanto y después me ducho.','Primero soy las siete.','Después tengo mañana.','Me gusta la cama azul.'],answer:'Primero me levanto y después me ducho.',note:'primero 与 después 清楚标记动作顺序。'}
    },
    {
      id:'l35', title:'单元复习：讲清我的一天', minutes:14, checkpoint:true,
      canDo:'用时间、频率和顺序词描述完整的一天。',
      words:[
        {es:'todos los días',zh:'每天',tip:'表示稳定频率。'},
        {es:'casi siempre',zh:'几乎总是',tip:'频率高于 a veces。'},
        {es:'de vez en cuando',zh:'偶尔',tip:'很常用的频率词块。'},
        {es:'antes de',zh:'在……之前',tip:'后接名词或不定式。'},
        {es:'después de',zh:'在……之后',tip:'与 antes de 相对。'}
      ],
      grammar:{title:'时间 + 顺序 + 频率',body:'把几点、先后顺序和频率放进同一段描述，短句就会变成连贯表达。',examples:['Me levanto a las siete.','Después desayuno.','De vez en cuando trabajo en casa.']},
      sentence:{es:'Todos los días me levanto a las siete, desayuno y voy al trabajo.',zh:'我每天七点起床，吃早餐，然后去上班。'},
      order:{tokens:['Antes','de','dormir,','leo','de','vez','en','cuando.'],answer:'Antes de dormir, leo de vez en cuando.',zh:'睡前我偶尔会阅读。'},
      dialogue:{context:'同学问你平日几点睡。',prompt:'你通常十一点睡，但周末晚一点。',choices:['Normalmente me acuesto a las once, pero los fines de semana más tarde.','Soy once todos los días.','Tengo dormir en fin de semana.','Voy a la cama azul.'],answer:'Normalmente me acuesto a las once, pero los fines de semana más tarde.',note:'normalmente 和 pero 能把常态与例外连接起来。'}
    }
  ],
  u6: [
    {
      id:'l36', title:'食物、数量与我的偏好', minutes:13,
      canDo:'表达喜欢、不喜欢、饥渴和简单饮食选择。',
      words:[
        {es:'Tengo hambre.',zh:'我饿了。',tip:'西语用 tener hambre，不用 estar。'},
        {es:'Tengo sed.',zh:'我渴了。',tip:'固定搭配 tener sed。'},
        {es:'Me gusta el pescado.',zh:'我喜欢鱼。',tip:'单数事物或动作常用 gusta。'},
        {es:'Me gustan las frutas.',zh:'我喜欢水果。',tip:'复数事物常用 gustan。'},
        {es:'No como carne.',zh:'我不吃肉。',tip:'no 放在动词前。'}
      ],
      grammar:{title:'gusta 还是 gustan，看后面的事物',body:'后面是单数名词或动作时用 gusta；后面是复数名词时用 gustan。',examples:['Me gusta el café.','Me gusta cocinar.','Me gustan las verduras.']},
      sentence:{es:'Tengo hambre, pero no como carne.',zh:'我饿了，但我不吃肉。'},
      order:{tokens:['Me','gustan','las','verduras','y','el','pescado.'],answer:'Me gustan las verduras y el pescado.',zh:'我喜欢蔬菜和鱼。'},
      dialogue:{context:'服务员问：¿Carne o pescado?',prompt:'你不吃肉，想选鱼。',choices:['Pescado, por favor. No como carne.','Tengo una camisa verde.','Son las ocho.','Voy en metro.'],answer:'Pescado, por favor. No como carne.',note:'先做选择，再说明饮食限制，表达清楚而礼貌。'}
    },
    {
      id:'l37', title:'从看菜单到结账', minutes:14,
      canDo:'索要菜单、询问菜品、点单并正确结账。',
      words:[
        {es:'La carta, por favor.',zh:'请给我菜单。',tip:'la carta 指单点菜单。'},
        {es:'¿Qué lleva?',zh:'里面有什么？',tip:'询问菜品配料。'},
        {es:'Para mí…',zh:'我要……',tip:'点单时很自然的开头。'},
        {es:'Sin cebolla, por favor.',zh:'请不要洋葱。',tip:'sin + 食材表示去掉。'},
        {es:'La cuenta, por favor.',zh:'请结账。',tip:'用餐结束的高频表达。'}
      ],
      grammar:{title:'con 是加，sin 是不要',body:'点餐时用 con 添加或说明配料，用 sin 去掉配料；无需组织复杂句。',examples:['café con leche','agua sin gas','una ensalada sin cebolla']},
      sentence:{es:'Para mí, una ensalada sin cebolla y agua sin gas.',zh:'我要一份不加洋葱的沙拉和无气泡水。'},
      order:{tokens:['¿Qué','lleva','el','plato','del','día?'],answer:'¿Qué lleva el plato del día?',zh:'今日套餐里有什么？'},
      dialogue:{context:'吃完饭后服务员经过。',prompt:'怎样礼貌结账？',choices:['La cuenta, por favor.','La talla mediana.','Estoy a la derecha.','Mañana hace sol.'],answer:'La cuenta, por favor.',note:'la cuenta 是账单；加 por favor 即可礼貌提出请求。'}
    },
    {
      id:'l38', title:'单元复习：完成一次点餐', minutes:15, checkpoint:true,
      canDo:'从询问、选择、调整配料到付款完成整段餐厅交流。',
      words:[
        {es:'¿Tiene una mesa para uno?',zh:'有一人桌吗？',tip:'进入餐厅时询问座位。'},
        {es:'¿Cuál recomienda?',zh:'您推荐哪一个？',tip:'在几个选择中询问推荐。'},
        {es:'Está muy rico.',zh:'很好吃。',tip:'评价当前食物常用 estar rico。'},
        {es:'¿Puedo pagar con tarjeta?',zh:'可以刷卡吗？',tip:'pagar con tarjeta 表示刷卡支付。'},
        {es:'Algo más',zh:'别的；其他东西',tip:'¿Algo más? 是店员常问的话。'}
      ],
      grammar:{title:'用一组固定词块完成交易',body:'餐厅对话高度可预测。熟练座位、菜单、点单、调整和付款五组词块，比背长句更实用。',examples:['Una mesa para uno.','Para mí, la sopa.','¿Puedo pagar con tarjeta?']},
      sentence:{es:'Está muy rico. La cuenta, por favor.',zh:'很好吃，请结账。'},
      order:{tokens:['¿Puedo','pagar','con','tarjeta?'],answer:'¿Puedo pagar con tarjeta?',zh:'我可以刷卡吗？'},
      dialogue:{context:'店员问：¿Algo más?',prompt:'你不需要别的了。',choices:['No, nada más, gracias.','Sí, soy de China.','Está al lado del banco.','Me levanto temprano.'],answer:'No, nada más, gracias.',note:'nada más 表示“没有别的”，适合结束点单。'}
    }
  ]
});

Object.assign(A1_DEEPENING, {
  u7: [
    {
      id:'l39', title:'hay 还是 está：城市里有什么', minutes:13,
      canDo:'询问某地有没有某设施，并说明它的具体位置。',
      words:[
        {es:'Hay un banco.',zh:'有一家银行。',tip:'hay 用于第一次说明某物存在。'},
        {es:'El banco está aquí.',zh:'银行就在这里。',tip:'estar 用于已知事物的具体位置。'},
        {es:'cerca de',zh:'在……附近',tip:'后面接地点。'},
        {es:'lejos de',zh:'离……很远',tip:'与 cerca de 相对。'},
        {es:'al lado de',zh:'在……旁边',tip:'很常用的相对位置表达。'}
      ],
      grammar:{title:'hay 介绍存在，estar 定位',body:'第一次问“有没有”用 hay；已经知道是哪一个地点，再问“在哪里”用 estar。',examples:['¿Hay una farmacia cerca?','Sí, hay una.','La farmacia está al lado del banco.']},
      sentence:{es:'Hay una farmacia cerca y está al lado del supermercado.',zh:'附近有一家药店，就在超市旁边。'},
      order:{tokens:['¿Hay','una','estación','cerca','de','aquí?'],answer:'¿Hay una estación cerca de aquí?',zh:'这附近有车站吗？'},
      dialogue:{context:'别人问：¿Dónde está el banco?',prompt:'你知道银行在广场旁边。',choices:['Está al lado de la plaza.','Hay un banco.','Es una plaza.','Tengo una estación.'],answer:'Está al lado de la plaza.',note:'问题询问已知银行的位置，因此用 está。'}
    },
    {
      id:'l40', title:'转弯、过街与购买车票', minutes:14,
      canDo:'听懂基础方向指示，并购买一张简单交通票。',
      words:[
        {es:'todo recto',zh:'一直往前',tip:'问路回答中的固定词块。'},
        {es:'gira a la derecha',zh:'右转',tip:'girar a + 方向。'},
        {es:'cruza la calle',zh:'穿过马路',tip:'cruzar 表示横穿。'},
        {es:'un billete de ida',zh:'一张单程票',tip:'ida 表示去程。'},
        {es:'¿De qué andén sale?',zh:'从哪个站台出发？',tip:'andén 指火车或地铁站台。'}
      ],
      grammar:{title:'方向指令先作为词块掌握',body:'A1 可以先整体理解 sigue、gira、cruza 等高频指令，不必立即背完整命令式变化。',examples:['Sigue todo recto.','Gira a la izquierda.','Cruza la plaza.']},
      sentence:{es:'Sigue todo recto y gira a la derecha en el banco.',zh:'一直走，到银行那里右转。'},
      order:{tokens:['Quiero','un','billete','de','ida','a','Madrid.'],answer:'Quiero un billete de ida a Madrid.',zh:'我想买一张去马德里的单程票。'},
      dialogue:{context:'售票员问：¿Ida o ida y vuelta?',prompt:'你只需要单程。',choices:['Solo ida, por favor.','A la derecha.','Está muy lejos.','Voy a las ocho.'],answer:'Solo ida, por favor.',note:'solo ida 简洁明确地表示只买单程。'}
    },
    {
      id:'l41', title:'单元复习：从酒店到车站', minutes:15, checkpoint:true,
      canDo:'问到车站的路线、确认距离并买到合适车票。',
      words:[
        {es:'¿Cómo llego a…?',zh:'我怎么到……？',tip:'询问前往某地的路线。'},
        {es:'¿Está lejos?',zh:'远吗？',tip:'确认距离。'},
        {es:'a pie',zh:'步行',tip:'ir a pie 表示走路去。'},
        {es:'en metro',zh:'乘地铁',tip:'交通工具前常用 en。'},
        {es:'¿A qué hora sale?',zh:'几点出发？',tip:'询问班次时间。'}
      ],
      grammar:{title:'路线对话要确认三个信息',body:'目的地、交通方式和时间是最重要的三项。重复其中的数字或站名能降低误会。',examples:['¿Cómo llego a la estación?','¿Voy a pie o en metro?','¿Sale a las nueve?']},
      sentence:{es:'La estación está lejos; es mejor ir en metro.',zh:'车站很远，最好乘地铁去。'},
      order:{tokens:['¿A','qué','hora','sale','el','tren','a','Sevilla?'],answer:'¿A qué hora sale el tren a Sevilla?',zh:'去塞维利亚的火车几点出发？'},
      dialogue:{context:'工作人员说火车 9:15 从 4 号站台出发。',prompt:'怎样确认关键信息？',choices:['A las nueve y cuarto, andén cuatro, ¿verdad?','Quiero una camisa pequeña.','Mi hermana es médica.','Está muy rico.'],answer:'A las nueve y cuarto, andén cuatro, ¿verdad?',note:'重复时间和站台并加 ¿verdad?，可以确认你听对了。'}
    }
  ],
  u8: [
    {
      id:'l42', title:'房间、家具与精确位置', minutes:13,
      canDo:'描述房间里的基本家具及它们的位置。',
      words:[
        {es:'el dormitorio',zh:'卧室',tip:'也常听到 la habitación。'},
        {es:'el salón',zh:'客厅',tip:'部分地区也用 la sala。'},
        {es:'encima de',zh:'在……上面',tip:'强调上方位置。'},
        {es:'debajo de',zh:'在……下面',tip:'与 encima de 相对。'},
        {es:'entre',zh:'在……之间',tip:'常连接两个参照物。'}
      ],
      grammar:{title:'位置词后常接 de',body:'encima、debajo、delante、detrás 等位置词后用 de 连接参照物；de + el 合并成 del。',examples:['encima de la mesa','debajo de la cama','delante del sofá']},
      sentence:{es:'La lámpara está encima de la mesa, al lado de la cama.',zh:'灯在桌子上，在床旁边。'},
      order:{tokens:['El','sofá','está','entre','la','mesa','y','la','ventana.'],answer:'El sofá está entre la mesa y la ventana.',zh:'沙发在桌子和窗户之间。'},
      dialogue:{context:'别人问钥匙在哪里，你看见它在沙发下面。',prompt:'怎样回答？',choices:['Está debajo del sofá.','Hay un sofá grande.','Es una llave nueva.','Tengo un dormitorio.'],answer:'Está debajo del sofá.',note:'钥匙是已知物品，用 estar 加精确位置。'}
    },
    {
      id:'l43', title:'这是我的：拥有、需要与借用', minutes:13,
      canDo:'说明物品属于谁，并提出简单借用或需求。',
      words:[
        {es:'Es mío / mía.',zh:'是我的。',tip:'形式与所指物品的性别配合。'},
        {es:'¿Es tuyo?',zh:'是你的吗？',tip:'指阳性单数物品。'},
        {es:'Necesito una toalla.',zh:'我需要一条毛巾。',tip:'necesitar 后直接接所需物品。'},
        {es:'¿Me prestas…?',zh:'你能借我……吗？',tip:'熟人之间常用。'},
        {es:'Aquí tienes.',zh:'给你。',tip:'递给对方物品时使用。'}
      ],
      grammar:{title:'名词在场用 mi，不重复名词用 mío',body:'mi libro 表示“我的书”；如果名词已经明确，可以只说 Es mío。mío、mía、míos、mías要与物品配合。',examples:['mi teléfono','La mochila es mía.','Los libros son tuyos.']},
      sentence:{es:'Necesito un bolígrafo. ¿Me prestas el tuyo?',zh:'我需要一支笔。你能把你的借给我吗？'},
      order:{tokens:['Esta','mochila','no','es','mía.'],answer:'Esta mochila no es mía.',zh:'这个背包不是我的。'},
      dialogue:{context:'朋友把你要借的书递给你并说 Aquí tienes。',prompt:'最自然的回应是什么？',choices:['Muchas gracias.','Está en la cocina.','Son mis padres.','Hace frío.'],answer:'Muchas gracias.',note:'收到物品后直接感谢即可。'}
    },
    {
      id:'l44', title:'单元复习：描述并解决居家需要', minutes:15, checkpoint:true,
      canDo:'描述住房、定位物品，并礼貌提出简单需求。',
      words:[
        {es:'Vivo en un piso pequeño.',zh:'我住在一套小公寓里。',tip:'西班牙常用 piso，拉美常见 apartamento。'},
        {es:'Hay dos dormitorios.',zh:'有两间卧室。',tip:'hay 不随数量变化。'},
        {es:'No funciona.',zh:'坏了；不能用。',tip:'报告设备问题的实用句。'},
        {es:'Falta una toalla.',zh:'少一条毛巾。',tip:'faltar 表示缺少。'},
        {es:'¿Puede traer otra?',zh:'您能再拿一条/一个吗？',tip:'otra 指同类的另一个阴性物品。'}
      ],
      grammar:{title:'先说明问题，再提出请求',body:'居住或酒店场景中，先用 No funciona / Falta… 描述问题，再用 ¿Puede…? 提出解决办法。',examples:['La luz no funciona.','Falta una silla.','¿Puede traer otra?']},
      sentence:{es:'La ducha no funciona y falta una toalla.',zh:'淋浴坏了，而且少一条毛巾。'},
      order:{tokens:['Perdón,','¿puede','traer','otra','toalla?'],answer:'Perdón, ¿puede traer otra toalla?',zh:'不好意思，您能再拿一条毛巾吗？'},
      dialogue:{context:'酒店房间的灯坏了。',prompt:'怎样清楚报告？',choices:['La luz de la habitación no funciona.','Me gusta la luz azul.','Hay una habitación en Madrid.','La cuenta, por favor.'],answer:'La luz de la habitación no funciona.',note:'指出具体物品并用 no funciona，问题最清楚。'}
    }
  ],
  u9: [
    {
      id:'l45', title:'休闲、运动与会不会', minutes:13,
      canDo:'谈喜欢的休闲活动，并说明会不会做某事。',
      words:[
        {es:'jugar al fútbol',zh:'踢足球',tip:'jugar + a + el 合并成 al。'},
        {es:'hacer senderismo',zh:'徒步',tip:'许多活动与 hacer 搭配。'},
        {es:'ir al cine',zh:'去电影院',tip:'ir + a + el 合并成 al。'},
        {es:'sé nadar',zh:'我会游泳',tip:'saber + 不定式表示掌握技能。'},
        {es:'no sé bailar',zh:'我不会跳舞',tip:'否定词 no 放在 sé 前。'}
      ],
      grammar:{title:'会做某事：saber + 不定式',body:'表达掌握某项技能时用 saber + 动词原形；表达可能或有能力做时常用 poder。',examples:['Sé cocinar.','No sé esquiar.','¿Puedes venir mañana?']},
      sentence:{es:'Me gusta hacer senderismo, pero no sé esquiar.',zh:'我喜欢徒步，但不会滑雪。'},
      order:{tokens:['¿Sabes','jugar','al','tenis?'],answer:'¿Sabes jugar al tenis?',zh:'你会打网球吗？'},
      dialogue:{context:'朋友邀请你去游泳，但你不会游泳。',prompt:'怎样回应最清楚？',choices:['Gracias, pero no sé nadar.','No, soy una piscina.','Tengo el cine mañana.','Está debajo del agua.'],answer:'Gracias, pero no sé nadar.',note:'先感谢，再用 pero 说明限制，既礼貌又清楚。'}
    },
    {
      id:'l46', title:'周末计划与发出邀请', minutes:14,
      canDo:'用 ir a 表达近期计划，并邀请、接受或婉拒。',
      words:[
        {es:'voy a descansar',zh:'我要休息',tip:'ir a + 不定式表示近期计划。'},
        {es:'¿Quieres venir?',zh:'你想一起来吗？',tip:'直接而自然的邀请。'},
        {es:'¡Claro!',zh:'当然！',tip:'积极接受邀请。'},
        {es:'Lo siento, no puedo.',zh:'抱歉，我不行。',tip:'礼貌拒绝并说明不能。'},
        {es:'Quizá otro día.',zh:'也许改天。',tip:'为婉拒留下余地。'}
      ],
      grammar:{title:'ir a + 动词原形表示计划',body:'voy、vas、va 加 a 和动词原形，可以表达已经想到或准备做的近期计划。',examples:['Voy a estudiar.','¿Vas a salir?','Vamos a comer juntos.']},
      sentence:{es:'El sábado voy a ir al cine con unos amigos.',zh:'星期六我要和几个朋友去看电影。'},
      order:{tokens:['¿Quieres','venir','con','nosotros','el','domingo?'],answer:'¿Quieres venir con nosotros el domingo?',zh:'你星期天想和我们一起来吗？'},
      dialogue:{context:'朋友邀请你周六吃饭，但你要工作。',prompt:'怎样礼貌拒绝？',choices:['Lo siento, el sábado no puedo; voy a trabajar.','Sí, tengo una mesa.','Hace sol en el trabajo.','Voy a la derecha.'],answer:'Lo siento, el sábado no puedo; voy a trabajar.',note:'先表达遗憾，再说明具体原因，回应完整自然。'}
    },
    {
      id:'l47', title:'单元复习：根据天气安排周末', minutes:15, checkpoint:true,
      canDo:'谈天气、喜好与能力，并商定一个周末计划。',
      words:[
        {es:'¿Qué tiempo va a hacer?',zh:'天气会怎样？',tip:'询问近期天气预报。'},
        {es:'Si hace buen tiempo…',zh:'如果天气好……',tip:'A1 可先整体掌握这个条件词块。'},
        {es:'podemos ir al parque',zh:'我们可以去公园',tip:'podemos + 不定式提出可能方案。'},
        {es:'prefiero quedarme en casa',zh:'我更想待在家',tip:'preferir 表达选择偏好。'},
        {es:'Entonces, a las cinco.',zh:'那就五点。',tip:'entonces 用来推进决定。'}
      ],
      grammar:{title:'提议、偏好、决定三步走',body:'先用 podemos 提议，再用 prefiero 表达偏好，最后用 entonces 确认共同决定。',examples:['Podemos ir al cine.','Prefiero el sábado.','Entonces, nos vemos a las seis.']},
      sentence:{es:'Si hace buen tiempo, podemos hacer senderismo.',zh:'如果天气好，我们可以去徒步。'},
      order:{tokens:['Prefiero','ir','al','cine','porque','hace','frío.'],answer:'Prefiero ir al cine porque hace frío.',zh:'我更想去看电影，因为天气冷。'},
      dialogue:{context:'周日会下雨，朋友提议去公园。',prompt:'提出更合适的选择。',choices:['Va a llover; prefiero ir al cine.','La lluvia está debajo del parque.','Sé una película.','Tengo domingo.'],answer:'Va a llover; prefiero ir al cine.',note:'先说明天气，再用 prefiero 提出替代方案。'}
    }
  ],
  u10: [
    {
      id:'l48', title:'身体、疼痛与持续时间', minutes:14,
      canDo:'说明哪里不舒服、有什么症状以及持续多久。',
      words:[
        {es:'Me duele la cabeza.',zh:'我头疼。',tip:'单数部位用 duele。'},
        {es:'Me duelen los ojos.',zh:'我眼睛疼。',tip:'复数部位用 duelen。'},
        {es:'Tengo fiebre.',zh:'我发烧。',tip:'症状常与 tener 搭配。'},
        {es:'Estoy mareada.',zh:'我头晕。',tip:'女性说 mareada，男性说 mareado。'},
        {es:'desde ayer',zh:'从昨天开始',tip:'说明症状开始时间。'}
      ],
      grammar:{title:'duele 还是 duelen，看疼的部位',body:'疼痛部位是单数用 duele，复数用 duelen；很多其他症状直接用 tener。',examples:['Me duele el estómago.','Me duelen las piernas.','Tengo tos.']},
      sentence:{es:'Me duele la garganta y tengo fiebre desde ayer.',zh:'我从昨天开始嗓子疼并发烧。'},
      order:{tokens:['Me','duelen','las','piernas','desde','esta','mañana.'],answer:'Me duelen las piernas desde esta mañana.',zh:'我从今天早上开始腿疼。'},
      dialogue:{context:'医生问：¿Desde cuándo?',prompt:'症状从昨晚开始。',choices:['Desde anoche.','En la farmacia.','Dos pastillas.','Estoy de China.'],answer:'Desde anoche.',note:'¿Desde cuándo? 询问开始时间，回答用 desde + 时间点。'}
    },
    {
      id:'l49', title:'药店、紧急情况与酒店问题', minutes:15,
      canDo:'在药店说明需要，在紧急时求助，并报告旅行住宿问题。',
      words:[
        {es:'Necesito algo para el dolor.',zh:'我需要缓解疼痛的药。',tip:'algo para + 症状/用途。'},
        {es:'¿Cómo se toma?',zh:'这个怎么服用？',tip:'询问服用方法。'},
        {es:'Llame a una ambulancia.',zh:'请叫救护车。',tip:'紧急情况下的明确指令。'},
        {es:'He perdido mi pasaporte.',zh:'我的护照丢了。',tip:'先作为完整紧急词块掌握。'},
        {es:'La reserva está a mi nombre.',zh:'预订登记的是我的名字。',tip:'酒店入住时确认预订。'}
      ],
      grammar:{title:'紧急时优先说需求和关键信息',body:'不追求复杂语法，先说 Necesito…、He perdido… 或 No funciona，再补充地点、姓名和时间。',examples:['Necesito un médico.','He perdido mi móvil.','La habitación no tiene agua caliente.']},
      sentence:{es:'He perdido mi pasaporte y necesito ayuda.',zh:'我的护照丢了，我需要帮助。'},
      order:{tokens:['La','reserva','está','a','nombre','de','Penny.'],answer:'La reserva está a nombre de Penny.',zh:'预订登记在 Penny 名下。'},
      dialogue:{context:'药剂师把药给你，但你不知道怎么服用。',prompt:'最重要的问题是什么？',choices:['¿Cómo se toma?','¿Dónde está el museo?','¿Qué talla tiene?','¿A qué hora sale el tren?'],answer:'¿Cómo se toma?',note:'拿到药后应确认服用方法；具体医疗建议应遵循专业人员说明。'}
    },
    {
      id:'l50', title:'A1 精学终点：独立完成一天旅程', minutes:18, checkpoint:true,
      canDo:'综合完成自我介绍、安排时间、出行、点餐、住宿与简单求助。',
      words:[
        {es:'Primero…',zh:'首先……',tip:'开始叙述步骤。'},
        {es:'Después…',zh:'然后……',tip:'推进事件顺序。'},
        {es:'porque…',zh:'因为……',tip:'给出一个简单理由。'},
        {es:'pero…',zh:'但是……',tip:'连接转折信息。'},
        {es:'Al final…',zh:'最后……',tip:'结束一段连续表达。'}
      ],
      grammar:{title:'把短句组织成一段能完成任务的话',body:'A1 的终点不是背完术语，而是能用 primero、después、pero、porque、al final 把熟悉内容连起来。',examples:['Primero voy a la estación.','Después compro un billete.','Al final llego al hotel.']},
      sentence:{es:'Primero voy a la estación, después compro un billete y al final llego al hotel.',zh:'我先去车站，然后买票，最后到达酒店。'},
      order:{tokens:['No','entiendo','porque','habla','muy','rápido.'],answer:'No entiendo porque habla muy rápido.',zh:'我没听懂，因为他说得太快。'},
      dialogue:{context:'旅途中你没听懂工作人员的话，后面还有人在等。',prompt:'选择既礼貌又能解决问题的回应。',choices:['Perdón, no entiendo. ¿Puede repetir más despacio?','Soy estudiante y tengo una hermana.','La cuenta está debajo de la mesa.','Mañana llevo una camisa azul.'],answer:'Perdón, no entiendo. ¿Puede repetir más despacio?',note:'先说明没听懂，再提出具体请求，是 A1 独立互动的关键能力。'}
    }
  ]
});

window.COURSE.units.forEach((unit) => {
  const extraLessons = A1_DEEPENING[unit.id] || [];
  unit.lessons.push(...extraLessons);
});
window.COURSE.title = '西班牙语 A1 精学路线';
window.COURSE.subtitle = '50 节微课：从零基础到能处理熟悉的日常交流';
