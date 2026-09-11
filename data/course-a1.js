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

