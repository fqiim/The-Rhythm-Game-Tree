//Other Rows
addLayer("A", {
  infoboxes: {
 introBox: {
  title: "成就",
  body(){return "成就页面可以帮助你查看当前的进度！标🏆的成就还有奖励哦！"},
        },
},
  name:"Achievements",
  symbol:"🏆",
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        ach: new Decimal(0),
    }},
    color: "#ffe125",
    resource: "成就", 
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("成就")
    },
    achievementPopups: true,
    achievements: {
        11: {
            name: "音游之始",
            done() {return player.s.points.gte(1)}, 
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "获得你的第一首歌曲！", 
            textStyle: {'color': '#ABCDEF'},
        },
        12: {
            name: "进展很快",
            done() {return player.points.gte(1.79e308)}, 
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "获得1.8e308Notes！", 
            textStyle: {'color': '#ABABAB'},
        },
        13: {
            name: "制作音游<br>🏆",
            done() {return player.a.points.gte(1)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "获得一个源点！<br>奖励：源点获取基本指数为0.5，Note*1e50",
            textStyle: {'color': '#DDBBDD'},
        },
        14: {
            name: "进展快吗",
            done() {return player.points.gte('1e400')},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "达到1e400Notes！",
            textStyle: {'color': '#DDAAAA'},
        },
        15: {
            name: "进入挑战",
            done() {return hasUpgrade('a',15)},
           onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "解锁挑战！",
            textStyle: {'color': '#DDCCCC'},
        },
        21: {
            name: "音游之盛",
            done() {return player.s.points.gte(1e15)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "达到1e15歌曲！",
            textStyle: {'color': '#ABBBBB'},
        },
        22: {
            name: "韵律源点<br>🏆",
            done() {return player.a.points.gte(1e10)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "达到1e10源点！<br>奖励：歌曲基本指数+0.616",
            textStyle: {'color': '#DD66AA'},
        },
        23: {
            name: "调律诗篇",
            done() {return player.l.points.gte(1)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "获得一个诗篇",
            textStyle: {'color': '#44DDDD'},
        },
        24: {
            name: "一古戈尔",
            done() {return player.s.points.gte(1e100)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "获得1e100(1 Googol)歌曲",
            textStyle: {'color': '#5244ff'},
        },
        25: {
            name: "有必要吗",
            done() {return player.a.ptt.gte(2.886499075)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "获得2.886499075PTT",
            textStyle: {'color': '#ff5eee'},
        },
        31: {
            name: "下一进展<br>🏆",
            done() {return player.p.points.gte(1)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "获得一个PhiData！<br>奖励：源点获取量变为原来的10倍（软上限前），解锁剧情",
            textStyle: {'color': '#CC11AA'},
            
        },
        32: {
            name: "再次挑战",
            done() {return hasUpgrade('p',13)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "解锁Phidata挑战！",
            textStyle: {'color': '#CCBBAA'},
            
        },
        33: {
            name: "遗忘的层<br>🏆",
            done() {return player.l.points.gte(8)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "获得8个诗篇！<br>奖励：100%Phidata每秒",
            textStyle: {'color': '#98f8f2'},
            
        },
        34: {
            name: "从未遗忘<br>🏆",
            done() {return player.l.points.gte(15)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "获得15个诗篇！<br>奖励：解锁更多Phidata升级",
            textStyle: {'color': '#BBCCDD'},
            
        },
        35: {
            name: "DABCABCD<br>ABCADBAA<br>BABCABCD<br>BAAADBAB",
            done() {return hasUpgrade('a',32)},
           onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "购买升级“Cyaegha”<br>梗来源：人声部分的空耳",
            textStyle: {'color': '#DABCAB'},
            
        },
        41: {
            name: "困难魔王<br>🏆",
            done() {return hasUpgrade('p',27)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "解锁第五个层级：魔王曲<br>奖励：Phidata^1.1",
            textStyle: {'color': '#55BB11'},
            
        },
        42: {
            name: "人如其名",
            done() {return hasUpgrade('a',35)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "购买升级“#1f1e33”",
            textStyle: {'color': '#1f1e33'},
            
        },
        43: {
            name: "韵律源神<br>🏆",
            done() {return player.a.points.gte(1e100)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "达到1e100源点！<br>奖励：源点^1.04（软上限后）",
            textStyle: {'color': '#e381caf7'},
        },
        44: {
            name: "韵律源神<br>II",
            onComplete(){player.A.ach=player.A.ach.add(1)},
            done() {return player.a.points.gte(1e175)},
            tooltip: "达到1e175源点！",
            textStyle: {'color': '#e989d1e7'},
        },
        45: {
            name: "韵律源神<br>III",
            onComplete(){player.A.ach=player.A.ach.add(1)},
            done() {return player.a.points.gte(1e240)},
            tooltip: "达到1e240源点！<br>你无不无聊……",
            textStyle: {'color': '#d47ac9d6'},
        },
        51: {
            name: "创新纪元",
            onComplete(){player.A.ach=player.A.ach.add(1)},
            done() {return player.c.points.gt(0)},
            tooltip: "获得一个Cyten（第四行重置资源）！",
            textStyle: {'color': '#a3a3a3'},
        },
        52: {
            name: "韵律能源",
            onComplete(){player.A.ach=player.A.ach.add(1)},
            done() {return player.c.power.gte(100000)},
            tooltip: "得到100000个Cytus力量！",
            textStyle: {'color': '#666666'},
        },
        53: {
            name: "红框大神",
            done() {return player.a.ptt.gte(11)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "获得11PTT<br>奖励：基于PTT增益RKS上限<br>在游戏Arcaea中，PTT达到11时外框会变成红色",
            textStyle: {'color': '#ff5eee'},
        },
        54: {
            name: "混沌之初",
            done() {return hasChallenge('c',11)
            },
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "完成一个Cytus挑战",
            textStyle: {'color': '#362f29'},
        },
        55: {
            name: "追光之梦",
            done() {return hasUpgrade('a',43)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "获得升级“Aegleseeker”",
            textStyle: {'color': '#ec38eee5'},
        },
        61: {
            name: "Chart Designer",
            done() {return player.ch.points.gte(1)},
            onComplete(){player.A.ach=player.A.ach.add(1)},
            tooltip: "获得一个谱面（第七层级）",
            textStyle: {'color': '#ffe000'},
        },
        62: {
            name: "混沌之间",
            done() {return hasChallenge('c',12)},
            onComplete(){player.A.ach=27},
            tooltip: "完成第二个Cytus挑战",
            textStyle: {'color': '#404040'},
        },
        63: {
            name: "韵律源神<br>IV",
            onComplete(){player.A.ach=player.A.ach.add(1)},
            done() {return player.a.points.gte('1e1500')},
            tooltip: "达到1e1500源点！",
            textStyle: {'color': '#fa89f1e9'},
        },
       64: {
            name: "Not A Note<br>🏆",
            onComplete(){player.A.ach=player.A.ach.add(1)},
            done() {return player.points.gte('1e210000')},
            tooltip: "达到1e210000Notes！<br>奖励：2023/11/17 0.18版本游戏结局！恭喜通关！",
            textStyle: {'color': '#e9a7a7e9'},
        },
    },
    tabFormat: {
   "成就": {
        content: [ ["infobox","introBox"],
    ["display-text",
      function() {return '你有 ' + player.A.ach + ' 成就!'},
     {"color": "#ffe125", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "blank",
    "achievements",
],
  unlocked(){return true}
},
},
},
)//Achievements
addLayer("t", {
  infoboxes: {
 introBox: {
  title: "炸档测试",
  body(){return "如果你存档出了问题（比如Note无止尽的增长），请重置本层级！（本层级保留所有层级的升级、挑战、可购买等，只会重置Note和每层的资源）"},
        },
},
    name: "test",
    symbol: "T",
    position: 0,
    startData() { return {
        unlocked() { return true},
		points: new Decimal(0),
    }},
    color: "#ffffff",
    requires: new Decimal(0), 
    resource: "测试",
    baseResource: "notes", 
    baseAmount() {return player.points}, 
    type: "static", 
    exponent: 1, 
    effect(){
      return {Notes: 1}
    },
    effectDescription() { 
    },
    gainMult() { 
        mult = new Decimal(1)
        return mult
    },
    gainExp() { 
      exp= new Decimal(0.5)
       return exp
    },
    row: 4, 
    hotkeys: [
        {key: "t", description: "T： Reset for Test", },
    ],
    layerShown(){ return true},
    
})//test
addLayer("S", {
  infoboxes: {
 introBox: {
  title: "统计层级",
  body(){return "本层级统计部分游戏内数据，会随着游戏进度增加"},
        },
},
    name: "Statistics",
    symbol: "St",
    color: "#ffffff",
    resource: "-", 
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("统计")
    },
    tabFormat: {
   "统计": {
       content: [ ["infobox","introBox"],
       ["display-text",
      function() {if(player.s.unlocked)
        {return '你有 ' + format(player.s.points) + ' 歌曲<br>歌曲基本获得量：' + format(tmp.s.gainMult) + '<br>歌曲获得指数：' + format(tmp.s.gainExp) }},
     {"color": "#ffffff", "font-size": "22px", "font-family": "Comic Sans MS"},],//s
     "blank",
     "blank",
     ["display-text",
      function() {if(player.a.unlocked())
        {return '你有 ' + format(player.a.points) + ' 源点<br>源点基本获得量：' + format(tmp.a.gainMult) + '<br>源点获得指数：' + format(tmp.a.gainExp) }},
     {"color": "#ffffff", "font-size": "22px", "font-family": "Comic Sans MS"},],//a
     ["display-text",
      function() {if(player.a.ptt.gt(0))
        {return '你有 ' + format(player.a.ptt) + ' PTT<br>PTT上限1：' + format(player.a.pttMax.mul(player.a.pttMax2)) + '<br>PTT上限2：' + format(player.a.pttMax) }},
     {"color": "#ffffff", "font-size": "16px", "font-family": "Comic Sans MS"},],//ptt
     "blank",
     "blank",
     ["display-text",
      function() {if(player.l.unlocked())
        {return '你有 ' + format(player.l.points) + ' 诗篇<br>诗篇基本获得量：' + format(tmp.l.gainMult) + '<br>诗篇获得指数：' + format(tmp.l.gainExp) }},
     {"color": "#ffffff", "font-size": "22px", "font-family": "Comic Sans MS"},],//l
     "blank",
     "blank",
     ["display-text",
      function() { if(player.p.unlocked())
        {return '你有 ' + format(player.p.points) + ' Phidata<br>Phidata基本获得量：' + format(tmp.p.gainMult) + '<br>Phidata获得指数：' + format(tmp.p.gainExp) } },
     {"color": "#ffffff", "font-size": "22px", "font-family": "Comic Sans MS"},],//p
      ["display-text",
      function() {if(player.p.rks.gt(0))
        {return '你有 ' + format(player.p.rks) + ' RKS<br>RKS上限1：' + format(player.p.rksMax.mul(player.p.rksMax2)) + '<br>RKS上限2：' + format(player.p.rksMax) }},
     {"color": "#ffffff", "font-size": "16px", "font-family": "Comic Sans MS"},],//ptt
     "blank",
     "blank",
     ["display-text",
      function() {if(player.m.unlocked())
        {return '你有 ' + format(player.m.points) + ' 魔王曲<br>魔王曲基本获得量：' + format(tmp.m.gainMult) + '<br>魔王曲获得指数：' + format(tmp.m.gainExp) }},
     {"color": "#ffffff", "font-size": "22px", "font-family": "Comic Sans MS"},],//m
     "blank",
     "blank",
     ["display-text",
      function() {if(player.c.unlocked())
        {return '你有 ' + format(player.c.points) + ' Cyten<br>Cyten基本获得量：' + format(tmp.c.gainMult) + '<br>Cyten获得指数：' + format(tmp.c.gainExp)+"<br>当前Cytus力量："+format(player.c.power)}},
     {"color": "#ffffff", "font-size": "22px", "font-family": "Comic Sans MS"},],//c
     "blank",
     "blank",
     ["display-text",
      function() {if(player.ch.unlocked())
        {return '你有 ' + format(player.ch.points) + ' 谱面<br>谱面基本获得量：' + format(tmp.ch.gainMult) + '<br>谱面获得指数：' + format(tmp.ch.gainExp)}},
     {"color": "#ffffff", "font-size": "22px", "font-family": "Comic Sans MS"},],//ch
   ["display-text",
      function() {if(hasMilestone('ch',1)) return '当前物量: ' + format(player.ch.note) + '<br>物量对应定数：'+format(player.ch.dif)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],//note&dif
    ["display-text",
      function() {if(hasUpgrade('ch',21)) return '当前P-Note: ' + format(player.ch.pnote) + '<br>蓝键：'+format(player.ch.tap)},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],//note&dif
     "blank",
     "blank",



],
    }},
})//Statistcs

//Row 0
addLayer("s", {
  infoboxes: {
 introBox: {
  title: "层级1--歌曲",
  body(){return "欢迎您来到本游戏！本游戏的玩法是模组树，主题是音乐游戏！<br>目前你玩到的版本是2023/10/18开始重新平衡的NG-！修改了大部分升级的效果，并且添加了更多内容<br>本层级减益：歌曲*0.5，歌曲基本指数为0.1"},
        },
},
    name: "songs", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#abcdef",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "歌曲", // Name of prestige currency
    baseResource: "notes", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.05,
    // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(0.5)
        mult = mult.times(player['a'].points).add(1)
        if (hasUpgrade('a', 11)) mult = mult.times(upgradeEffect('a', 11))
        if (hasUpgrade('a', 11)&&hasUpgrade('s',15)) mult = mult.times(100)
        if (hasUpgrade('a', 12)) mult = mult.times(upgradeEffect('a', 12))
        mult=mult.times(buyableEffect('s',11))
        if (hasUpgrade('p',13)) mult = mult.times(1e15)
        if (hasUpgrade('p',24)) mult = mult.pow(1.2)
        if(hasChallenge('p',14)){mult = mult.pow(challengeEffect('p',14))}
       mult = mult.times(player['p'].points.add(1).pow(1).pow(player.m.points.add(1).pow(0.5)))
       if(hasUpgrade('p',11)) mult = mult.times(player['p'].points.add(1).pow(4).pow(player.m.points.add(1).pow(0.5)))
       if(hasUpgrade('p',31)) mult = mult.times(player['p'].points.add(1).pow(3).pow(player.m.points.add(1).pow(0.5)))
        if(hasChallenge('p',15)){mult = mult.pow(challengeEffect('p',15))}
        
        if(mult>1e160) mult = mult.times(mult.div(1e160).pow(-0.35))//sc1
         
         if(buyableEffect('c',13)>1) mult = mult.times(buyableEffect('c',13))
         
        if(inChallenge('c',11))mult=mult.pow(0.1)
        if(inChallenge('c',13))mult = mult.pow(new Decimal(0.9).pow(player.c.challengeTime))
        
        if(mult.log10()>15000) mult = new Decimal(10).pow(mult.log10().sub(15000).pow(0.5).add(15000))//sc2
        if(!hasChallenge('c',13)) mult=mult.min('1e15000')
        return mult
    },
    gainExp() { 
      exp= new Decimal(0.1)
      if(hasUpgrade('a',21)){exp= exp.add(0.15)}
      if(hasUpgrade('s',23)){exp= exp.add(0.5)}
      if(hasAchievement('A',22)){exp= exp.add(0.616)}
      if (hasUpgrade('c', 12)) exp = exp.add(upgradeEffect('c', 12))
      if(hasUpgrade('a',23)){exp= exp.add(1)}
      if(inChallenge('a',11)){exp= exp.times(0.6)}
      if(hasChallenge('a',11)){exp= exp.times(1.2)}
      if(hasUpgrade('a',16)){exp= exp.times(1.25)}
      if(inChallenge('a',13)){exp= exp.times(0.35)}
      if(hasUpgrade('a',22)){exp= exp.times(1.2)}
      if(hasUpgrade('a',24)){exp= exp.times(1.2)}
      if(inChallenge('a',14)){exp= exp.times(0.15)}
      if(hasChallenge('a',14)){exp= exp.times(1.2)}
      if(hasUpgrade('p',24)){exp= exp.times(1.2)}
      if(inChallenge('p',11)){exp= exp.times(0.5)}
      if(inChallenge('p',12)){exp= exp.times(0.1)}
      if(hasUpgrade('s',26)){exp= exp.times(1.1)}
      if(inChallenge('p',13)){exp= exp.times(0.1)}
     if(hasChallenge('p',15)){exp = exp.times(challengeEffect('p',15))}
     if (hasUpgrade('p', 33)) exp = exp.times(upgradeEffect('p', 33))
     if(hasUpgrade('l',15)){exp= exp.times(1.035)}
     if(tmp.ch.holdEff>1) exp = exp.times(tmp.ch.holdEff)
     
     if(inChallenge('c',11))exp=exp.pow(0.1)
     

if(!hasChallenge('c',12)) exp=exp.min(12.5)
      return exp
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "s", description: "S: Reset for songs", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches(){return ['a','l']},
    deactivated(){de = false
      if(inChallenge('p',13))de = true
      return de
    },
    layerShown(){return true},
    tabFormat: {
   "主要": {
        content: [ ["infobox","introBox"],
          "main-display",
    "prestige-button",
        ["display-text",
      function() {return '你有 ' + format(player.points) + ' Notes<br>你正在获得 ' + format(new Decimal(tmp.s.resetGain).mul(tmp.a.passiveGeneration))+' 歌曲每秒'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
     "blank",
        ["display-text",
      function() {
        if(tmp.s.gainMult.gte('1e15000')&&!hasChallenge('c',13)) return "由于歌曲获取量超过1e10，歌曲获得量减少！//1<br>由于歌曲获取量超过1e15000，歌曲获得量已被上限！//2"
        if(tmp.s.gainMult.gte(1e10)) return "由于歌曲获取量超过1e10，歌曲获得量减少！//1"
      },
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
        ["display-text",
      function() {
        if(hasChallenge('c',13)) return "由于歌曲获取量超过1e15000，歌曲获得量超出1e15000部分指数^0.5！//2"
      },
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
    "buyables",
    "upgrades",

],
    }},
 passiveGeneration()
  {mult = new Decimal(0)
  if(hasUpgrade('a',13))
  mult = new Decimal(1);
  if(hasUpgrade('s',17))
  mult = new Decimal(2);
  if(hasMilestone('p',0))
  mult = mult.add(5);
  if(hasUpgrade('p',13))
  mult = mult.times(5);
  mult= mult.add(0)
  return mult},
  softcap:new Decimal (1e20),
  softcapPower:new Decimal(0.05),
  autoUpgrade() {upg=false
 if(hasMilestone('l',0)||hasMilestone('c',0))upg=true
    if(inChallenge('c',11)) upg=false
    return upg},
  resetsNothing() {return hasMilestone('p',3)},
  doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
            if (resettingLayer == "a") {
                if (hasUpgrade("a", 12)&&!player.a.activeChallenge) {kept.push("upgrades")}
            }
            if (resettingLayer == "p") {
                if (hasMilestone("p", 5)) {kept.push("buyables")}
            }
            if (resettingLayer == "m") {
                if (hasMilestone("m", 1)) {kept.push("buyables")}
            }
            if (resettingLayer == "c") {
                if (hasMilestone("c", 3)) {kept.push("upgrades")}
            }
            if (resettingLayer == "ch") {
                if (hasMilestone("ch", 0)) {kept.push("upgrades")}
            }
            if (resettingLayer == "t") {
                kept.push()
            }
            layerDataReset(this.layer, kept)
        }
    },
      upgrades: {
    11:{ title: "困难游戏的开始",
                description: "欢迎您来到本游戏！将Note获取乘以1e100，因为这实在是太难了！",
                cost: new Decimal(1),
                effect() { return 1e100 },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    12:{ title: "游戏可真<困难>",
                description:"增加Note获取量，效果为歌曲^6",
                cost: new Decimal(25),
                unlocked() { return (hasUpgrade('s', 11))},
                effect() {
             return player.s.points.add(1).pow(6).min(new Decimal('1e13000'))
                },
     effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    13:{ title: "这游戏不要太“简单”？？",
                description:"Note获取量*1e200",
                cost: new Decimal(60),
                unlocked() { return (hasUpgrade('s', 12))},
                effect() {
        return new Decimal(1e200)},},
    14:{ title: "不需要的升级",
                description:"升级12的效果加强（^6——^10）",
                cost: new Decimal(1000),
                unlocked() { return (hasUpgrade('s', 13))},
                effect() {
        return player.s.points.add(1).pow(4).min(new Decimal('1e8000'))
        },
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    15:{ title: "这游戏就这点内容吗？",
                description:"解锁下一个层级，韵律，歌曲*100（软上限前）（在获得一个韵律升级后生效）",
                cost: new Decimal(1500),
                unlocked() { return (hasUpgrade('s', 14))},
              },
    16:{title:"我讨厌挂机",
    description:"源点获取量指数+0.3（0.5-0.8），并且增益乘以2倍",
    cost: new Decimal(10000),
    unlocked() { return (hasUpgrade('a', 14))}, },
    17:{ title: "讨厌的时间墙",
                description:"解锁一个Arcaea升级，每秒获得200%歌曲和源点",
                unlocked() { return (hasUpgrade('s', 16))},
                cost: new Decimal(1e5),},
    21:{title:"为何不多点升级？",
    description:"源点增益Note效果增强（源点^10）",
    cost: new Decimal(1e6),
    unlocked() { return (hasUpgrade('s', 17))},
      effect() {
        return player.a.points.add(1).pow(10)},
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    22:{title:"终于结束挂机",
    description:"解锁更多Arcaea升级，源点获取量变为原来的10倍（源点软上限：1e10）",
    cost: new Decimal(1e7),
    unlocked() { return (hasChallenge('a', 11))},
      effect() {
        return new Decimal(10) }, },
    23:{title:"单曲精选集",
    description:"歌曲基本指数增加0.5，源点获取量*5",
    cost: new Decimal(1e14),
    unlocked() { return (hasUpgrade('a', 17))},},
    24:{title:"歌曲太多了…",
    description:"解锁两个歌曲可购买，源点获取指数+0.1（软上限前）",
    cost: new Decimal(1e28),
    unlocked() { return (hasUpgrade('a', 21))},},
    25:{title:"极限数值",
    description:"根据歌曲数量增益源点获取量",
    cost: new Decimal(1e96),
    unlocked() { return (hasMilestone('l', 1))},
    effect() {
        return player.s.points.add(10).log(2).pow(1.2).add(1) },
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
    },
    26:{title:"无限歌曲",
    description:"歌曲指数乘以1.1",
    cost: new Decimal('1.80e308'),
    unlocked() { return (hasUpgrade('s', 25))}, },
    27:{title:"10^2^9=1e512",
    description:"源点指数乘以1.15",
    cost: new Decimal('1e512'),
    unlocked() { return (hasUpgrade('s', 26))}, },
    31:{title:"Songs.mp3",
    description:"再次根据歌曲数量提升Notes<br>想不出升级名字，如有好的会替换",
    cost: new Decimal('1e8100'),
    unlocked() { return hasChallenge('c',11)},
    effect() {
        return player.s.points.pow(0.3).min('1e3000') },
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×"},
    },
    32:{title:"Songs.wav",
    description:"降低Phidata对源点的需求(1e17--1e10)",
    cost: new Decimal('1e8666'),
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('a',41)},
    },
    33:{title:"Songs.mpeg",
    description() {return "Cyten获取指数*1.2"},
    cost: new Decimal('9.6e9696'),
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('c',16)},
    },
    34:{title:"Songs.wma",
    description() {return "基于Notes提升Notes"},
    cost: new Decimal('1e11666'),
    effect() {
        return new Decimal(2).pow(player.points.log(1000).pow(0.75)).pow(5).min('1e5000')},
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×"},
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('l',16)},
    },
    35:{title:"Songs.midi",
    description() {return "自动获得RKS，解锁下一个Cytus可购买"},
    cost: new Decimal('1e12121'),
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('a',44)},
    },
    36:{title:"Songs.SONGS",
    description() {return "Notes×1e300（所有效果后）"},
    cost: new Decimal(2e1408),
    unlocked() { return inChallenge('c',11)&&hasUpgrade('a',46)},
    },
},
    buyables: {
    11: {
        cost(){return this.effect().pow(3)},
        display() { return "基于购买次数增加歌曲的乘数（软上限前）<br>价格："+format(this.cost())+"歌曲<br>效果：×"+format(this.effect())},
        title: "著名曲师",
        effect() {return new Decimal(2).pow(getBuyableAmount(this.layer,this.id).add(1))},
        unlocked(){unlock= false
        if(hasChallenge('a',13)) unlock=true
        if(hasMilestone('p',1)) unlock=true
          return unlock
        },
        canAfford() { return player[this.layer].points.gte(this.cost())&&!player.s.points.gte('1e12000') },
        buy() {
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer,this.id).add((player.s.points.div(this.cost())).log(2).div(3)))
        },
        if (canAfford=true&&!player.s.points.gte('1e12000')&&hasUpgrade('s',24)) {
          setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer,this.id).add((player.s.points.div(this.cost().add(1)).max(1)).log(3).div(2)))},
    },
    12: {
        cost(){return this.effect().pow(2)},
        display() { return "基于购买次数增加Note乘数<br>价格："+format(this.cost())+"歌曲<br>效果：×"+format(this.effect())},
        title: "著名谱师",
        effect() {return new Decimal(3).pow(getBuyableAmount(this.layer,this.id).add(1))},
        unlocked(){unlock= false
        if(hasUpgrade('s',24)) unlock=true
        if(hasMilestone('p',1)) unlock=true
          return unlock
        },
        canAfford() { return player[this.layer].points.gte(this.cost())&&!player.s.points.gte('1e12000') },
        buy() {
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer,this.id).add((player.s.points.div(this.cost())).log(3).div(2)))
        },
        if(canAfford=true&&!player.s.points.gte('1e12000')&&hasUpgrade('s',24))  {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer,this.id).add((player.s.points.div(this.cost().add(1)).max(1)).log(3).div(2)))},
    },
    13: {
        cost(){return this.effect().pow(10)},
        display() { return "基于购买次数增加源点乘数<br>价格："+format(this.cost())+"歌曲<br>效果：×"+format(this.effect())},
        title: "著名画师",
        effect() {return new Decimal(5).pow(getBuyableAmount(this.layer,this.id).add(1))},
        unlocked(){unlock= false
        if(hasUpgrade('s',24)) unlock=true
          return unlock
        },
        canAfford() { return player[this.layer].points.gte(this.cost())&&!player.s.points.gte('1e12000') },
        buy() {
            if(!hasMilestone('p',1)){player[this.layer].points = player[this.layer].points.sub(this.cost())}
            if(!hasMilestone('p',1)){setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))}
            if(hasMilestone('p',1)){setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer,this.id).add((player.s.points.div(this.cost())).log(5).div(5)))}
        },
        if(canAfford=true&&hasMilestone('p',3)&&!player.s.points.gte('1e12000'))  {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer,this.id).add((player.s.points.div(this.cost().add(1)).max(1)).log(5).div(5)))},
    },
}
})//Songs

//Row 1
addLayer("a", {
  infoboxes: {
    introBox: {
    title: "层级2--Arcaea",
    body(){ return "欢迎来到第二层！本层级会重置上一层的升级和其他一些东西，但是会有更多的增益，加油！<br>本层级减益：*0.5，^0.1（软上限前）<br>资源名称由来：Arcaea中文名：韵律源点"
                },
        },
    chalBox: {
    title: "Arcaea挑战",
    body(){ return "欢迎来到挑战！你可以进入挑战让游戏变得更困难，但是完成挑战会有更多提升，也能解锁后面的游戏内容！"
    },
        },
    pttBox: {
    title: "PTT",
    body(){ return "PTT是Arcaea中的游戏实力衡量标准，有了越多的PTT，就会给其他资源一些增益，不过PTT是有上限的，接下来可以解锁更多和PTT相关的内容"
    },
        },
},
    name: "Arcaea",
    symbol: "A",
    position: 0,
    startData() { return {
        unlocked() { return (hasUpgrade('s', 15))},
		points: new Decimal(0),
		ptt: new Decimal(0),
		pttMax: new Decimal(1),
		pttMax2: new Decimal(1),
    }},
    color: "#DDBBDD",
    requires: new Decimal(2000), 
    resource: "源点",
    baseResource: "歌曲", 
    baseAmount() {return player['s'].points}, 
    type: "normal", 
    exponent: 0.15, 
    effect(){
      return {Notes: player['a'].points.add(1)}
    },
    effectDescription() { 
            return "Note和歌曲增益乘以"+format(player['a'].points.add(1))},
    gainMult() { 
        mult = new Decimal(.5)
        if (hasUpgrade('s', 16)) mult = mult.times(2)
        if (hasChallenge('a', 12)) mult = mult.times(15)
        if (hasUpgrade('s', 22)) mult = mult.times(10)
        if(hasUpgrade('s',23)){mult = mult.times(5)}
        if(hasUpgrade('s',25)){mult = mult.times(upgradeEffect('s',25))}
        if (hasChallenge('p',11)) mult = mult.times(challengeEffect('p',11))
        mult=mult.times(buyableEffect('s',13))
        if(hasChallenge('p',14)){mult = mult.pow(challengeEffect('p',14))}
       mult = mult.times(player['p'].points.add(1).pow(1).pow(player.m.points.add(1).pow(0.5)))
       if(hasUpgrade('p',11)) mult = mult.times(player['p'].points.add(1).pow(4).pow(player.m.points.add(1).pow(0.5)))
       if(hasUpgrade('p',31)) mult = mult.times(player['p'].points.add(1).pow(3).pow(player.m.points.add(1).pow(0.5)))
        if(hasChallenge('p',15)){mult = mult.pow(challengeEffect('p',15))}
        if(hasUpgrade('a',26)){mult = mult.times(upgradeEffect('a',26))}
        if(buyableEffect('c',21)>1) mult = mult.times(buyableEffect('c',21))
        if (hasUpgrade('a', 45)) mult = mult.pow(1.2)
        
        if(inChallenge('c',11))mult = mult.pow(0.2)
        if(inChallenge('c',13))mult = mult.pow(new Decimal(0.9).pow(player.c.challengeTime))
        
        if(mult.log10()>4000) mult = new Decimal(10).pow(mult.log10().sub(4000).pow(0.5).add(4000))//sc1
       if(!hasChallenge('c',13)) mult=mult.min('1e4000')
        return mult
    },
    gainExp() { 
      exp= new Decimal(0.1)
      if(hasAchievement('A',13)){exp= exp.add(0.4)}
      if(hasUpgrade('a',23)){exp= exp.add(1)}
      if(hasUpgrade('s',16)){exp= exp.add(0.2)}
      if(hasUpgrade('s',24)){exp= exp.add(0.1)}
      if(hasChallenge('a',14)){exp= exp.times(1.2)}
      if(inChallenge('p',11)){exp= exp.times(0.5)}
      if(inChallenge('p',12)){exp= exp.times(0.1)}
      if(hasUpgrade('a',25)){exp= exp.times(1.2)}
      if(hasUpgrade('p',21)){exp= exp.times(upgradeEffect('p',21))}
      if(hasUpgrade('s',27)){exp= exp.times(1.15)}
      if(inChallenge('p',13)){exp= exp.times(0.1)}
      if(hasChallenge('p',15)){exp = exp.times(challengeEffect('p',15))}
      if(hasAchievement('A',33)){exp= exp.times(1.04)}
      if(hasUpgrade('p',34)){exp= exp.times(upgradeEffect('p',34))}
      if(hasUpgrade('a',36)){exp= exp.times(1.005)}
      if (hasUpgrade('a', 45)) exp= exp.times(1.1)
      if(tmp.ch.holdEff>1) exp = exp.times(tmp.ch.holdEff)
      
     if(inChallenge('c',11))exp=exp.pow(0.2)
     
     if(!hasChallenge('c',12)) exp=exp.min(4.5)
      return exp
    },
    row: 1, 
    branches(){return ['p','m']},
    deactivated(){de = false
      if(inChallenge('p',13))de = true
      return de
    },
    hotkeys: [
        {key: "a", description: "A: Reset for Arcaea", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    update(diff) {
			if (hasMilestone('c',8)) layers.a.clickables[11].onClick()
			if (hasMilestone('c',8)) layers.a.clickables[12].onClick()
			if (hasMilestone('c',8)) layers.a.clickables[13].onClick()
		},
    layerShown(){shown= false
    if(hasUpgrade('s',15)){shown=true}
    if(hasUpgrade('a',11)){shown=true}
    if(hasMilestone('p',0)){shown=true}
    return shown},
 passiveGeneration(){
   mult = new Decimal(0)
  if(hasUpgrade('s',17))
  mult = new Decimal(2)
  if(hasMilestone('p',0))
  mult = mult.add(5)
  if(hasUpgrade('p',13))
  mult = mult.times(5)
  mult= mult.add(0)
  return mult },
  softcap:new Decimal (1e10),
  softcapPower:new Decimal(0.05),
  autoUpgrade() {upg=false
 if(hasMilestone('p',2)||hasMilestone('c',0))upg=true
    if(inChallenge('c',11)) upg=false
    return upg},
  resetsNothing() {return hasMilestone('p',3)},
  doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
            if (resettingLayer == "t") {
                kept.push("challenges")
            }
            if (resettingLayer == "p") {
              if (hasMilestone("p", 0)||hasMilestone("c", 0)) {kept.push("ptt","pttMax","pttMax2")}
                if (hasMilestone("p", 4)||hasMilestone("c", 0)) {kept.push("challenges")}
            }
            if (resettingLayer == "m") {
                if (hasMilestone("m", 1)||hasMilestone("c", 0)) {kept.push("challenges","ptt","pttMax","pttMax2")}
            }
            if (resettingLayer == "c") {
                if (hasMilestone("c", 0)) {kept.push("challenges")}
                if (hasMilestone("c", 3)) {kept.push("challenges","upgrades")}
            if (hasMilestone("c", 5)) {kept.push("challenges","upgrades","ptt","pttMax","pttMax2")}
            }
            if (resettingLayer == "ch") {
            if (hasMilestone("ch", 0)) {kept.push("challenges","upgrades","ptt","pttMax","pttMax2")}}
            
            layerDataReset(this.layer, kept)
        }
    },
challenges: {
    11: {
        name: "Past",
        challengeDescription: "歌曲获取量变为原来的0.6次方",
        goalDescription:"1e440 Notes",
        rewardDescription:"歌曲获取量^1.2",
        unlocked(){unlock= false
        if(hasUpgrade('a',15)) unlock=true
          return unlock
        },
        canComplete: function() {return player.points.gte('1e440')||hasMilestone('p',0)},
    },
    12: {
        name: "Present",
        challengeDescription:"Note获取量变为原来的1e-500倍",
        goalDescription:"1e20 Notes",
        rewardDescription:"源点获取量变为原来的15倍",
        unlocked(){unlock= false
        if(hasChallenge('a',11)) unlock=true
          return unlock
        },
        canComplete: function() {return player.points.gt(1e20)||hasMilestone('p',0)},
    },
    13: {
        name: "Future",
        challengeDescription:"歌曲获取量^0.35，且Note获取量*1e-500",
        goalDescription:"1e200 Notes",
        rewardDescription:"解锁一个歌曲可购买，并自动购买",
        unlocked(){unlock= false
        if(hasChallenge('a',12)) unlock=true
          return unlock
        },
        canComplete: function() {return player.points.gt(1e200)||hasMilestone('p',0)},
    },
    14: {
        name: "Beyond",
        challengeDescription:"歌曲获取量^0.15，且Note获取量*1e-800",
        goalDescription:"114514 Notes",
        rewardDescription:"解锁下一个层级，歌曲和源点的指数*1.2（软上限前）",
        unlocked(){unlock= false
        if(hasUpgrade('a',24)) unlock=true
          return unlock
        },
        canComplete: function() {return player.points.gt(114514)||hasMilestone('p',0)},
    },
},
upgrades: {
    11:{ title: "我们音游玩家是这样的",
    description:"根据源点乘以歌曲的获取量，效果是源点^3",
    cost: new Decimal(1),
    effect() {
    return player['a'].points.add(1).pow(3)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    12:{ title: "韵律的力量",
    description:"升级11效果提升（源点^3——^8），源点不重置歌曲升级",
    cost: new Decimal(2),
    unlocked() { return (hasUpgrade('a', 11))},
    effect() {
   return player['a'].points.add(1).pow(5)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    13:{ title: "我知道，这很痛苦",
    description:"每秒获得100%重置时获得的歌曲",
   cost: new Decimal(2),
    unlocked() { return (hasUpgrade('a', 12))},
     },
    14:{ title: "优质曲库",
   description:"解锁更多歌曲升级",
    cost: new Decimal(5),
    unlocked() { return (hasUpgrade('a', 13))},},
    15:{title:"PoTenTial",
    description:"解锁挑战",
    cost: new Decimal(500),
    unlocked() { return (hasUpgrade('s', 17))},},
    16:{title:"有那么快吗？",
    description:"歌曲^1.25，Notes*1e30（挑战中可能有效！）",
    cost: new Decimal(9999),
    unlocked() { return (hasChallenge('a', 11))},},
    17:{title:"高质量曲库",
    description:"再次解锁更多歌曲升级",
    cost: new Decimal(199999),
    unlocked() { return (hasChallenge('a', 12))},},
     21:{title:"挑战3的额外奖励？？",
    description:"歌曲基本指数增加0.25",
    cost: new Decimal(3e8),
    unlocked() { return (hasChallenge('a', 13))},},
    22:{title:"购买歌曲",
    description:"歌曲指数乘以1.2（软上限前）",
    cost: new Decimal(3e9),
    unlocked() { return (hasUpgrade('a', 21))},},
    23:{title:"真的有软上限吗？",
    description:"歌曲和源点指数+1（软上限前）",
    cost: new Decimal(1e12),
    unlocked() { return (hasUpgrade('a', 22))},},
    24:{title:"未来的挑战",
    description:"解锁第四个挑战“Beyond”，歌曲指数*1.2（软上限前）",
    cost: new Decimal(1e13),
    unlocked() { return (hasUpgrade('a', 23))},},
    25:{ title: "韵律之光",
    description:"源点指数乘以1.2（软上限前）",
    cost: new Decimal(5e14),
    unlocked() { return (hasMilestone('l', 0))}, },
    26:{ title: "韵律的力量 II",
    description:"根据PTT增益源点，效果是100^(PTT+1)（软上限前）",
    cost: new Decimal(1.5e15),
    unlocked() { return (hasMilestone('l', 1))},
    effect() {
   return new Decimal(100).pow(player.a.ptt.add(1))
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    27:{ title: "韵律之神",
    description: "解锁下一个层级，Phigros",
    cost: new Decimal(1e17),
    unlocked() { return (hasMilestone('l', 2))}, },
    31:{ 
      fullDisplay() {return "Singularity<br>加强PTT对Phidata的增益效果<br>当前效果："+format(this.effect())+"×<br>需要：8 PTT"},
    cost() {return new Decimal(8)},
    canAfford() {return player.a.ptt.gte(8)},
    unlocked() { return (hasUpgrade('p', 23))},
    effect() {
   return new Decimal(2).pow(player.a.ptt.div(3))
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    32:{ 
      fullDisplay() {return "Cyaegha<br>基于歌曲增益Phidata获取量<br>当前效果："+format(this.effect())+"×<br>需要：8.1 PTT"},
    canAfford() {return player.a.ptt.gte(8.1)},
    unlocked() { return (hasUpgrade('a', 31))},
    effect() {
   return player.s.points.add(10).log(3).pow(0.25)},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    33:{ 
      fullDisplay() {return "烈華RESONANCE<br>基于源点增益Phidata获取量<br>当前效果："+format(this.effect())+"×<br>需要：8.2 PTT"},
    canAfford() {return player.a.ptt.gte(8.2)},
    unlocked() { return (hasUpgrade('a', 32))},
    effect() {
   return player.a.points.add(10).log(2).pow(0.4)},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    34:{ 
      fullDisplay() {return "Halcyon<br>基于魔王曲增益Phidata获取量<br>当前效果："+format(this.effect())+"×<br>需要：8.5 PTT"},
    canAfford() {return player.a.ptt.gte(8.5)},
    unlocked() { return (hasMilestone('m',0))},
    effect() {
   return player.m.points.mul(3).add(1).pow(4)},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    35:{ 
      fullDisplay() {return "#1f1e33<br>基于Phidata增益Phidata获取量<br>当前效果："+format(this.effect())+"×<br>需要：8.9 PTT"},
    canAfford() {return player.a.ptt.gte(8.9)},
    unlocked() { return (hasMilestone('m',1))},
    effect() {
   return player.p.points.add(10).log(10).pow(1.2)},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    36:{ 
      fullDisplay() {return "Dantalion<br>源点^1.005（软上限后）<br>当前效果：^1.005<br>需要：9.3 PTT"},
    canAfford() {return player.a.ptt.gte(9.3)},
    unlocked() { return (hasUpgrade('p',35))},},
    37:{ 
      fullDisplay() {return "CHAOS<br>是时候了<br>...<br>解锁下一个层级，Cytus<br>需要：10.8 PTT"},
      onPurchase() {if(!hasMilestone('c',0)) confirm("…下一纪元，Cytus。")},
    canAfford() {return player.a.ptt.gte(10.8)},
    unlocked() { return hasUpgrade('p',37)},},
    41:{ 
      fullDisplay() {return "最强STRONGER<br>基于PTT增益Notes<br>当前效果:"+format(this.effect())+"×<br>价格: 1e830源点"},
      cost: new Decimal('1e830'),
      effect() {return new Decimal(10).pow(player.a.ptt.pow(2.5).min(2000))},
    unlocked() { return hasChallenge('c',11)},},
    42:{ 
      fullDisplay() {return "Abstruse Dilemma<br>基于RKS增益Notes<br>当前效果:"+format(this.effect())+"×<br>价格: 8.88e880源点"},
      cost: new Decimal('8.88e880'),
      effect() {return new Decimal(10).pow(player.p.rks.mul(5).pow(2.25).min(2000))},
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('s',32)},},
    43:{ 
      fullDisplay() {return "Aegleseeker<br>基于源点降低诗篇的基本需求<br>当前效果:^"+format(this.effect())+"<br>价格: 1.060e1060源点"},
      cost: new Decimal('1.06e1060'),
      effect() {return new Decimal(1).div(player.a.points.add(15).log(10000).pow(0.3).min(10).max(1))},
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('s',33)},},
    44:{ 
      fullDisplay() {return "Grievous Lady<br>基于源点降低魔王曲的基本需求<br>当前效果:^"+format(this.effect())+"<br>价格: 1e1185源点"},
      cost: new Decimal('1e1185'),
      effect() {return new Decimal(1).div(player.a.points.add(15).log(150).pow(0.2).min(8).max(1))},
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('s',34)},},
    45:{ 
      fullDisplay() {return "Tempetissimo<br>根据累计Cytus可购买数量增益Note<br>当前效果:×"+format(this.effect())+"<br>价格: 1e1230源点"},
      cost: new Decimal('1e1230'),
      effect() {return new Decimal(2.02e20).pow(getBuyableAmount('c',11).add(getBuyableAmount('c',12)).add(getBuyableAmount('c',13)).add(getBuyableAmount('c',14)).add(getBuyableAmount('c',21)).add(getBuyableAmount('c',22)).add(getBuyableAmount('c',23)).add(getBuyableAmount('c',24)))},
    unlocked() { return hasChallenge('c',11)&&hasUpgrade('l',17)},},
},
clickables: {
    11: {
      title() {return "增加PTT"},
      display() {return "点击或按住以增加PTT！"},
      canClick() {return true},
      onClick() {player.a.ptt = player.a.ptt.add(new Decimal(10).pow(player.a.pttMax.add(1)).log(2).div(new Decimal(10).pow(player.a.ptt.add(1)).log(2)).log(3).div(5).max(0))},
      onHold() {player.a.ptt = player.a.ptt.add(new Decimal(10).pow(player.a.pttMax.add(1)).log(2).div(new Decimal(10).pow(player.a.ptt.add(1)).log(2)).log(3).div(5).max(0))},
    },
    12: {
      title() {return "增加PTT上限"},
      display() {return "点击或按住以增加PTT上限<br>（基于诗篇数量，最大35）"},
      canClick() {return true},
      onClick() {player.a.pttMax = player.a.pttMax.add(player.l.points.min(35).add(1).log(10).add(1).pow(2).sub(player.a.pttMax.mul(player.a.pttMax2)).div(2).max(0))},
      onHold() {player.a.pttMax = player.a.pttMax.add(player.l.points.min(35).add(1).log(10).add(1).pow(2).sub(player.a.pttMax.mul(player.a.pttMax2)).div(2).max(0))},
      unlocked() {return hasMilestone('l',2)||hasMilestone('p',1)}
    },
    13: {
      title() {return "增加PTT上限2"},
      display() {return "增加上一个可点击效果的上限（基于Phidata数量）<br>上限×"+format(new Decimal(1).div(player.a.pttMax2))+"<br>确切来说，×"+new Decimal(1).div(player.a.pttMax2)},
      canClick() {return true},
      onClick() {player.a.pttMax2 = player.a.pttMax2.sub(player.p.points.add(1).log(100).add(1).div(5).pow(0.5).mul(player.a.pttMax2.pow(10)).max(player.a.pttMax2.div(100)).sub(player.a.pttMax2.div(100)).min(player.a.pttMax2.mul(0.1)))},
      onHold() {player.a.pttMax2 = player.a.pttMax2.sub(player.p.points.add(1).log(100).add(1).div(5).pow(0.5).mul(player.a.pttMax2.pow(10)).max(player.a.pttMax2.div(100)).sub(player.a.pttMax2.div(100)).min(player.a.pttMax2.mul(0.1)))},
      unlocked() {return hasUpgrade('l',13)}
    },
},
tabFormat: {
   "升级": {
        content: [ ["infobox","introBox"],
          "main-display",
    "prestige-button",
        ["display-text",
      function() {return '你有 ' + format(player.s.points) + ' 歌曲<br>你正在获得 ' + format(new Decimal(tmp.a.resetGain).mul(tmp.a.passiveGeneration))+' 源点每秒'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
    "upgrades",
],
    },
   "挑战": {
        content: [ ["infobox","chalBox"],
   "main-display",
    "prestige-button",
    "challenges",
],
  unlocked(){return hasUpgrade('a',15)}
},
   "PTT": {
        content: [ ["infobox","pttBox"],
          "main-display",
    "prestige-button",
    ["display-text",
      function() {return '你有 ' + format(player.a.ptt.mul(10000).floor().div(10000)) + ' PTT!'},
     {"color": "#ff5eee", "font-size": "20px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return '当前PTT上限： ' + format(player.a.pttMax.mul(10000).floor().div(10000)) + ' PTT'},
     {"color": "#ff9af6", "font-size": "15px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return '确切来说，你有 ' + player.a.ptt + ' PTT'+'<br>当前的PTT上限为 ' + player.a.pttMax},
     {"color": "#ffffff", "font-size": "9px", "font-family": "Comic Sans MS"}],
     "blank",
    "clickables",
    ['row',[['upgrade',31],['upgrade',32],['upgrade',33],['upgrade',34],['upgrade',35],['upgrade',36],['upgrade',37]]],
      ['row',[['upgrade',41],['upgrade',42],['upgrade',43],['upgrade',44],['upgrade',45],['upgrade',46],['upgrade',47]]],
],
  unlocked(){return hasUpgrade('l',11)||hasMilestone('p',1)}
},
},
})//Arcaea
addLayer("l", {
  infoboxes: {
    introBox: {
    title: "层级3--Lanota",
    body(){ return "欢迎来到第三层！本层级和上一层一样，会重置歌曲的升级和其他一些东西，但是这个层级是“静态”的，所以你不可以像源点一样获得很多很多。不过，这个层级会有更多的增益，继续加油！<br>资源名称由来：Lanota中文名：调律诗篇"
                },
        },
},
    name: "调律诗篇",
    symbol: "L",
    position: 0,
    startData() { return {
        unlocked() { return (hasChallenge('a', 14))},
		points: new Decimal(0),
    }},
    color: "#44DDDD",
    requires() {req=new Decimal(1e90)
    if(hasUpgrade('a',43))req=req.pow(upgradeEffect('a',43))
    return req},
    resource: "诗篇",
    baseResource: "歌曲", 
    baseAmount() {return player['s'].points}, 
    type: "static", 
    exponent: 1, 
    gainMult() { 
        mult = new Decimal(1)
        return mult
    },
    gainExp() { 
      exp= new Decimal(0.07)
      if(player.l.points.gte(4)) exp= new Decimal(0.06)
      if(player.l.points.gte(15)) exp= new Decimal(0.015).div(player.l.points.sub(14).pow(0.5))
      if(player.l.points.gte(30)) exp= new Decimal(0.001)
      if(hasChallenge('c',11)) exp=new Decimal(0.003)
      if(buyableEffect('c',24)>1) exp = exp.times(buyableEffect('c',24))
       return exp
    },
    row: 1, 
    branches(){return ['p','m']},
    canBuyMax(){return hasChallenge('c',11)},
    hotkeys: [
        {key: "l", description: "L: Reset for Lanota", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){shown= false
    if(hasChallenge('a',14)){shown=true}
    if(hasMilestone('p',0)){shown=true}
    return shown},
    autoPrestige() {return hasUpgrade('p',12)},
    resetsNothing() {return hasUpgrade('p',12)},
    autoUpgrade() {upg=false
 if(hasMilestone('p',2)||hasMilestone('c',0))upg=true
    if(inChallenge('c',11)) upg=false
    return upg},
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
          if (resettingLayer == "t") {
                kept.push()
            }
            let kept = ["unlocked", "auto"]
            if (resettingLayer == "p") {
                if (hasMilestone("p", 1)||hasMilestone("c", 1)) {kept.push("milestones")}
            }
            if (resettingLayer == "m") {
                if (hasMilestone("m", 1)||hasMilestone("c", 1)) {kept.push("milestones")}
            }
            if (resettingLayer == "c") {
                if (hasMilestone("c", 1)) {kept.push("milestones")}
                if (hasMilestone("c", 3)) {kept.push("milestones","upgrades")}
            }
            if (resettingLayer == "ch") {
                if (hasMilestone("ch", 0)) {kept.push("milestones","upgrades")}
            }
            layerDataReset(this.layer, kept)
        }
    },
  softcap:new Decimal (1e1000000),
  softcapPower:new Decimal(0.05),
    upgrades: {
    11:{ title: "本源之点",
    description:"在源点层级解锁“PTT”界面",
    cost: new Decimal(2),
    unlocked() {return hasMilestone('l',1)}, },
    12:{ title: "潜能无限",
    description() {return "解锁下一个PTT可点击，PTT对Note也有提升效果"},
    effect() {return player.a.ptt.add(10).log(10).min(1.25)},
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))},
    cost: new Decimal(3),
    unlocked() {return hasMilestone('l',2)}, },
    13:{ title: "小潜力股",
    description() {return "再解锁下一个PTT可点击，PTT对Phidata也有提升效果"},
    effect() {return new Decimal(2).pow(player.a.ptt.div(3).add(1))},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×"},
    cost: new Decimal(11),
    unlocked() {return hasUpgrade('p',22)}, },
    14:{ title: "潜能无限 II",
    description() {return "让RKS也生效于“潜能无限”的效果（基于RKS指数提升Note）"},
    effect() {return player.p.rks.add(9).log(10).min(1.1)},
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))},
    cost: new Decimal(25),
    unlocked() {return hasUpgrade('p',37)}, },
    15:{ title: "歌曲串烧",
    description() {return "歌曲^1.035（软上限后）"},
    cost: new Decimal(28),
    unlocked() {return hasUpgrade('p',37)}, },
    16:{ title: "诗笺之理",
    description() {return "基于诗篇提升Notes"},
    effect() {return player.l.points.max(1).pow(player.l.points.max(1)).pow(10).min('1e5000')
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×"},
    cost: new Decimal(110),
    unlocked() {return hasChallenge('c',11)&&hasUpgrade('a',43)}, },
    17:{ title: "空笺之理",
    description() {return "基于魔王曲提升Notes<br>升级谐音反物质维度：时间之理、空间之理"},
    effect() {return player.m.points.add(1).pow(player.m.points.mul(3).max(100)).pow(4).min('1e1200') },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×"},
    cost: new Decimal(129),
    unlocked() {return hasUpgrade('s',35)}, },
   },
    milestones: {
    0: {
        requirementDescription: "获得1个诗篇",
        effectDescription: "自动购买歌曲升级，解锁一个Arcaea升级",
        done() { return player.l.points.gte(1) }
    },
    1: {
        requirementDescription: "获得2个诗篇",
        effectDescription: "解锁一个歌曲升级和一个Arcaea升级，解锁Lanota升级",
        unlocked() {return hasMilestone('l',0)},
        done() { return player.l.points.gte(2) }
    },
    2: {
        requirementDescription: "获得3个诗篇",
        effectDescription: "解锁更多升级",
        unlocked() {return hasMilestone('l',1)},
        done() { return player.l.points.gte(3) }
    },
},
tabFormat: {
    "里程碑": {
        content: [ ["infobox","introBox"],
          "main-display",
    "prestige-button",
        ["display-text",function() {if(!hasChallenge('c',11)) return '软上限：3诗篇，15诗篇，30诗篇！'},
        {"color": "#ffffff", "font-size": "px", "font-family": "Comic Sans MS"}],
    "milestones",],},
    "升级": {
        content: [ 
     "main-display",
    "prestige-button",
    "upgrades",
],
unlocked(){return hasMilestone('l',1)}
    },
},
})//Lanota

//Row 2
addLayer("p", {
    infoboxes: {
    introBox: {
    title: "层级4--Phigros",
    body(){
      return "欢迎来到第四层！恭喜你，已经来到了第三行！本层级不仅会重置“歌曲”层级，还会重置“Arcaea”层级和“Lanota”层级。不过，你可以通过获得里程碑来给予一些重置时的补助！<br>资源名称由来：Phigros中的“Phi”和Phigros中的机制“data”结合：Phidata"},
    },
    upgBox: {
    title: "Phigros升级",
    body(){ return "和前面的升级类似，Phigros升级也需要Phidata购买，不同的是，大部分升级不是购买上一个就解锁了，而是需要别的解锁条件"
                },
        },
    chalBox: {
    title: "Phigros挑战",
    body(){ return "和前面的挑战不同的是，Phigros挑战可以完成多次，后续还可以提升挑战次数，根据你的完成次数，挑战的奖励会变得更强"
                },
        },
    RKSBox: {
    title: "RKS",
    body(){ return "和PTT类似，RKS是Phigros中的游戏实力衡量标准，有了越多的RKS，就会给其他资源一些增益，不过RKS是有上限的，接下来可以解锁更多和RKS相关的内容。不同点是，RKS可点击并非随时可以点击"
                },
        },
    p1: {
    title: "Phigros•冰封世界",
    body(){ return "本层级所有剧情来自Phigros官方！接下来会根据你的游戏进度解锁更多剧情<br>楔子<br>曾有流浪人，未受洗礼，未信神。<br>攀似绿箩藤，圣石登宵，持剑诰。<br>我要这，穹顶降镐，地霜共冰消，渊无饥骨，路非遥。<br>垂髫闻，沉思莞尔，教后生：何不，振臂筑塔，通云霄。——2089.10.27"},
    unlocked() {return hasMilestone('p',0)},
        },
    p2: {
    title: "诗笺#1",
    body(){ return "诗笺#1  收集时间770/03/27  保管单位：deathMark  等级：main  逃吧。   事到如今  转瞬即逝的虹  还能逃到哪里去  哪里容得  醉人的花香，  故去的残想，  清醒的思想，  虚构的梦乡。  哪里就是  我的故乡。  "},
    unlocked() {return hasUpgrade('p',13)},
        },
    p3: {
    title: "诗笺#2",
    body(){ return "诗笺#2  收集时间770/02/29  保管单位：deathMark  等级：main  冰封世界，融化中。    五神鸟拙追旭日，光携风行列成诗。  春照唤鸠归，剑已出鞘，难再回。  峰上两相遇，针芒相对，淋绦絮。  三寸巧舌嚼不烂，五丈坚岩立俩人。  云开雾散仰苍穹，古韵幽弹檄终曲。  萨里巅，悉听风，风何言，言何语，皆被小儿闲涂。  常言道，东海吞象无尸骨，覆水浇地亦难收。  且叫豪侠驾车迎，连营下榻待新机。  "},
    unlocked() {return hasUpgrade('p',22)},
        },
    p4: {
    title: "诗笺#3",
    body(){ return "诗笺#3  收集时间770/03/01  保管单位：deathMark  等级：main  咕。咕。咕。咕。  溲泡泛。   细鳞片鲴炖白𬞟，馍汤灌口魄神还。  乐府兴来调琴瑟，秦人似获蛊中音。  驰行冰原二十载，唯闻笛笙青河沿。  求留小憩痴人苑，细问客从何处来。  "},
    unlocked() {return hasUpgrade('p',25)},
        },
    p5: {
    title: "诗笺#4",
    body(){ return "诗笺#4  收集时间770/03/06  保管单位：deathMark  等级：main  人类的身份这么重要吗……  活物需要名字，  死物也需要名字。  活物为了  厚土埋身  亦存生机。  死物无欲，  只求活着。"},
    unlocked() {return hasUpgrade('p',27)},
        },
    p6: {
    title: "诗笺#5",
    body(){ return "诗笺#5  收集时间770/03/03  保管单位：deathMark  等级：main  学不会写诗……   春天，  万物复苏的季节。  "},
    unlocked() {return hasUpgrade('p',33)},
        },
    p7: {
    title: "诗笺#6",
    body(){ return "诗笺#6  收集时间770/03/32  保管单位：deathMark  等级：main  光。   流亡时代，  鸢尾将开出花来，  万丈光芒，  穿透阴霭，  拨见云开。  "},
    unlocked() {return hasUpgrade('p',37)},
        },
},
    name: "Phigros",
    symbol: "P",
    position: 0,
    startData() { return {
        unlocked() { return (hasUpgrade('a', 27))},
		points: new Decimal(0),
		rks: new Decimal(0),
		rksMax: new Decimal(1),
		rksMax2:new Decimal(1),
    }},
    color: "#CC11AA",
    requires() {req=new Decimal(1e17)
    if(hasUpgrade('s',32)) req=new Decimal(1e10)
    return req},
    resource: "Phidata",
    baseResource: "源点", 
    baseAmount() {return player['a'].points}, 
    type: "normal", 
    exponent: 0.05, 
    effect(){
        if(!hasUpgrade('p',11)){return player['p'].points.add(1).pow(player.m.points.add(1).pow(0.5))}
      if(hasUpgrade('p',11)&&!hasUpgrade('p',31)){return player['p'].points.add(1).pow(5).pow(player.m.points.add(1).pow(0.5))}
      if(hasUpgrade('p',31)){return player['p'].points.add(1).pow(8).pow(player.m.points.add(1).pow(0.5))}
    },
    effectDescription() { 
      if(!hasUpgrade('p',11)){
            return "歌曲和源点增益乘以"+format(player['p'].points.add(1).pow(player.m.points.add(1).pow(0.5)))}
      if(hasUpgrade('p',11)&&!hasUpgrade('p',31)){return "歌曲和源点增益乘以"+format(player['p'].points.add(1).pow(5).pow(player.m.points.add(1).pow(0.5)))}
      if(hasUpgrade('p',31)){return "歌曲和源点增益乘以"+format(player['p'].points.add(1).pow(8).pow(player.m.points.add(1).pow(0.5)))}
    },
    gainMult() { 
        mult = new Decimal(1)
        if(hasChallenge('p',12)){mult = mult.times(challengeEffect('p',12))}
        if(hasUpgrade('p',15)){mult = mult.times(upgradeEffect('p',15))}
        if(hasUpgrade('p',16)){mult = mult.times(upgradeEffect('p',16))}
        if(hasUpgrade('p',17)){mult = mult.times(upgradeEffect('p',17))}
        if(hasUpgrade('l',13)){mult = mult.times(upgradeEffect('l',13))}
        if(hasUpgrade('a',31)){mult = mult.times(upgradeEffect('a',31))}
        if(hasUpgrade('a',32)){mult = mult.times(upgradeEffect('a',32))}
        if(hasUpgrade('a',33)){mult = mult.times(upgradeEffect('a',33))}
        if(hasUpgrade('a',34)){mult = mult.times(upgradeEffect('a',34))}
        if(hasUpgrade('a',35)){mult = mult.times(upgradeEffect('a',35))}
        if(hasChallenge('p',14)){mult = mult.pow(challengeEffect('p',14))}
        if(hasChallenge('p',15)){mult = mult.pow(challengeEffect('p',15))}
        if(hasUpgrade('m',11)){mult = mult.times(100000)}
        if(hasUpgrade('p',37)){mult = mult.times(1e8)}
        if(buyableEffect('c',12)>1) mult = mult.times(buyableEffect('c',12))
        if(hasUpgrade('ch',15)){mult = mult.times(upgradeEffect('ch',15))}
        
        if(hasUpgrade('p',36)){mult = mult.pow(upgradeEffect('p',36))}
        if(inChallenge('c',11))mult=mult.pow(0.5)
        if(inChallenge('c',13))mult = mult.pow(new Decimal(0.9).pow(player.c.challengeTime))
        
       if(!hasUpgrade('ch',15)) mult=mult.min(1e100)
        return mult
    },
    gainExp() { 
      exp= new Decimal(1)
      if(hasUpgrade('p',26)){exp = exp.times(1.15)}
      if(hasChallenge('p',15)){exp = exp.times(challengeEffect('p',15))}
      if(hasAchievement('A',41)){exp = exp.times(1.1)}
      if(tmp.ch.holdEff>1) exp = exp.times(tmp.ch.holdEff)


         if(inChallenge('c',11))exp=exp.pow(0.2)
       return exp
    },
    row: 2, 
    branches(){return ['c','ch']},
    update(diff) {
			if (hasUpgrade('s',35)) layers.p.clickables[11].onClick()
			if (hasUpgrade('s',35)) layers.p.clickables[12].onClick()
			if (hasUpgrade('s',35)) layers.p.clickables[13].onClick()
	},
    hotkeys: [
        {key: "p", description: "P: Reset for Phigros", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){shown= false
    if(hasUpgrade('a',27)){shown=true}
    if(hasMilestone('p',0)){shown=true}
    return shown},
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
            if (resettingLayer == "t") {
               kept.push("challenges")
            }
            if (resettingLayer == "c") {
            if(hasMilestone('c',1))kept.push("milestones")
            if(hasMilestone('c',2))kept.push("milestones","rks","rksMax","rksMax2")
            if(hasMilestone('c',4))kept.push("milestones","rks","rksMax","rksMax2","challenges")
            }
            if (resettingLayer == "ch") {
            if(hasMilestone('ch',0))kept.push("milestones","rks","rksMax","rksMax2","challenges")
            }
            layerDataReset(this.layer, kept)
        }
    },
 passiveGeneration()
  { mult = new Decimal(0)
  if(hasAchievement('A',33)) mult = new Decimal(1)
  if(hasUpgrade('p',25)) mult = new Decimal(5)
    mult= mult.add(0)
  return mult},
  softcap:new Decimal (1e10),
  softcapPower:new Decimal(0.15),
  autoUpgrade() {upg=false
 if(hasMilestone('c',3))upg=true
    if(inChallenge('c',11)) upg=false
    return upg},
  challenges: {
      11: {
        name: "EZ",
        challengeDescription(){
          if(!hasUpgrade('p',21)){return "歌曲和源点获取为原来的平方根<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/2"}
          if(hasUpgrade('p',21)){return "歌曲和源点获取为原来的平方根<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/10"}},
        goalDescription(){return "1e"+new Decimal(8).add(new Decimal(challengeCompletions(this.layer,this.id)).mul(4))+"源点"},
        rewardDescription(){return "根据挑战完成次数增益源点（软上限前）<br>效果：×"+challengeEffect(this.layer,this.id).floor()},
        rewardEffect() {return new Decimal( challengeCompletions(this.layer,this.id)).add(1).pow(10)},
        unlocked(){unlock= false
        if(hasUpgrade('p',13)) unlock=true
          return unlock },
        completionLimit(){
          if(!hasUpgrade('p',21)){return new Decimal(2)}
          if(hasUpgrade('p',21)){return new Decimal(10)}},
        canComplete: function() {
          return player.a.points.gte(new Decimal(10).pow(8).mul(new Decimal(10).pow(new Decimal(challengeCompletions(this.layer,this.id)).mul(4))))},
        },
      12: {
        name: "HD",
       challengeDescription(){
          if(!hasUpgrade('p',21)){return "Note、歌曲和源点获取^0.1<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/2"}
          if(hasUpgrade('p',21)){return "Note、歌曲和源点获取^0.1<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/10"}},
        goalDescription(){return "1e"+new Decimal(50).add(new Decimal(challengeCompletions(this.layer,this.id)).mul(20))+" Notes"},
        rewardDescription(){return "根据挑战完成次数增益Phidata<br>效果：×"+challengeEffect(this.layer,this.id).floor()},
        rewardEffect() {return new Decimal( challengeCompletions(this.layer,this.id)).add(1).pow(2)},
        unlocked(){unlock= false
        if(hasUpgrade('p',14)) unlock=true
          return unlock },
        completionLimit(){
          if(!hasUpgrade('p',21)){return new Decimal(2)}
          if(hasUpgrade('p',21)){return new Decimal(10)}},
        canComplete: function() { return player.points.gte(new Decimal(10).pow(50).mul(new Decimal(10).pow(20).pow(challengeCompletions(this.layer,this.id))))}
        },
      13: {
        name: "IN",
       challengeDescription(){
          if(!hasUpgrade('p',21)){return "歌曲和源点层级被禁用，歌曲和源点^0.1，Note×1e-55<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/2"}
          if(hasUpgrade('p',21)){return "歌曲和源点层级被禁用，歌曲和源点^0.1，Note×1e-55<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/5"}},
        goalDescription(){return "1e"+new Decimal(200).add(new Decimal(challengeCompletions(this.layer,this.id)).mul(100))+" Notes"},
        rewardDescription(){return "根据挑战完成次数指数提升Notes<br>效果：^"+challengeEffect(this.layer,this.id).mul(100).round().div(100)},
        rewardEffect() {return new Decimal( challengeCompletions(this.layer,this.id)).add(1).pow(0.2).div(5.2).add(0.8077)},
        unlocked(){unlock= false
        if(hasMilestone('p',6)) unlock=true
          return unlock },
        completionLimit(){
          if(!hasUpgrade('p',21)){return new Decimal(2)}
          if(hasUpgrade('p',21)){return new Decimal(5)}},
        canComplete: function() {return player.points.gte(new Decimal(10).pow(200).mul(new Decimal(10).pow(100).pow(challengeCompletions(this.layer,this.id))))}
        },
      14: {
        name: "AT",
       challengeDescription(){
         if(!hasUpgrade('p',32)){return "同时进入前三个挑战<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/2"}
          if(hasUpgrade('p',32)){return "同时进入前三个挑战<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/5"}},
        goalDescription(){return "1e"+new Decimal(100).add(new Decimal(challengeCompletions(this.layer,this.id)).mul(50))+" Notes"},
        rewardDescription(){return "根据挑战完成次数指数提升歌曲、源点和Phidata<br>效果：^"+challengeEffect(this.layer,this.id).mul(100).round().div(100)},
        rewardEffect() {return new Decimal( challengeCompletions(this.layer,this.id)).add(1).pow(0.25).div(10).add(0.9)},
        countsAs: [11, 12, 13],
        unlocked(){unlock= false
        if(hasUpgrade('p',32)) unlock=true
          return unlock },
        completionLimit(){
          if(!hasUpgrade('p',32)){return new Decimal(2)}
          if(hasUpgrade('p',32)){return new Decimal(5)}},
        canComplete: function() {return player.points.gte(new Decimal(10).pow(100).mul(new Decimal(10).pow(50).pow(challengeCompletions(this.layer,this.id))))}
        },
      15: {
        name: "SP",
       challengeDescription(){return "同时进入前三个挑战，Note再次^0.3<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/10"},
        goalDescription(){return "1e"+new Decimal(30).add(new Decimal(challengeCompletions(this.layer,this.id)).mul(15))+" Notes"},
        rewardDescription(){return "根据挑战完成次数提升歌曲，源点，Phidata获取指数<br>效果：×"+challengeEffect(this.layer,this.id).mul(100).round().div(100)},
        rewardEffect() {return new Decimal( challengeCompletions(this.layer,this.id)).add(1).pow(0.25).div(10).add(0.9)},
        countsAs: [11, 12, 13],
        unlocked(){unlock= false
        if(hasUpgrade('p',32)) unlock=true
          return unlock },
        completionLimit(){
          return new Decimal(10)},
        canComplete: function() {return player.points.gte(new Decimal(10).pow(30).mul(new Decimal(10).pow(15).pow(challengeCompletions(this.layer,this.id))))}
        },
    },
    upgrades: {
    11:{ title: "增强data I",
    description:"data对歌曲和源点的增益变为原来的5次方",
    cost: new Decimal(1),
    unlocked() {return hasMilestone('p',4)},
    effect() {
    return player['p'].points.add(1).pow(5)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    12:{ title: "Qol为什么不在里程碑里面？",
    description:"自动购买诗篇，诗篇不重置任何东西",
    cost: new Decimal(2),
    unlocked() {return hasUpgrade('p',11)},
    },
    13:{ title: "别搞时间墙了",
    description:"解锁Phidata挑战和剧情，被动获取歌曲和源点速度*5",
    cost: new Decimal(3),
    unlocked() {return hasUpgrade('p',12)},
    },
    14:{ title: "增强data II",
    description:"data对歌曲和源点的增益以5次方的提升对Note生效，解锁下一个挑战",
    cost: new Decimal(15),
    unlocked() {return hasChallenge('p',11)},
    effect() {
    return player['p'].points.add(1).pow(25)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    15:{ title: "韵律的力量 III",
    description:"源点增益Phidata获取量，效果为源点^0.02",
    cost: new Decimal(50),
    unlocked() {return hasChallenge('p',12)},
    effect() {
    return player.a.points.add(1).pow(0.02)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    16:{ title: "Phigros的力量",
    description:"诗篇增益Phidata获取量，效果为诗篇^0.6",
    cost: new Decimal(1000),
    unlocked() {return challengeCompletions('p',12)>1},
    effect() {
    return player.l.points.add(1).pow(0.6)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    17:{ title: "高物量歌曲",
    description:"Notes增益Phidata获取量，效果为log(Notes)^0.2",
    cost: new Decimal(10000),
    unlocked() {return hasUpgrade('p',16)},
    effect() {
    return player.points.add(10).log(10).pow(0.2)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" }, },
    21:{ title: "Phigros大神",
    description:"基于Phidata数量指数提升源点，增加前几个挑战的上限",
    cost: new Decimal(100000),
    unlocked() {return challengeCompletions('p',13)>0},
    effect() {
    return player.p.points.add(10).log(10).pow(0.1).div(10).add(1)
    },
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))}, },
    22:{ title: "RKS11.00",
    description:"解锁更多Lanota升级",
    cost: new Decimal(200000),
    unlocked() {return challengeCompletions('p',12)>2},},
    23:{ title: "RKS12.00",
    description:"解锁PTT升级",
    cost: new Decimal(1e7),
    unlocked() {return hasAchievement('A',34)},},
    24:{ title: "RKS13.00",
    description:"弱化歌曲软上限（歌曲^1.2（软上限后））",
    cost: new Decimal(5e7),
    unlocked() {return hasUpgrade('p',23)},},
    25:{ title: "RKS14.00??",
    description:"Notes获取量*1e308，500%Phidata每秒",
    cost: new Decimal(1e9),
    unlocked() {return hasUpgrade('p',24)},},
    26:{ title: "RKS15.00??!!",
    description:"Phidata获取量^1.15<br>tips:Phidata软上限：1e10",
    cost: new Decimal(1e10),
    unlocked() {return hasUpgrade('a',32)},},
    27:{ title: "RKS16.00之力",
    description:"解锁下一个层级：魔王曲",
    cost: new Decimal(5e12),
    unlocked() {return hasUpgrade('p',26)},},
    31:{ title: "Painful",
    description:"增加Phidata公式的效果<br>(^5~^8)",
    cost: new Decimal(1e13),
    unlocked() {return hasMilestone('m',0)},},
    32:{ title: "Horrible",
    description:"解锁两个Phidata挑战：AT、SP",
    cost: new Decimal(1e14),
    unlocked() {return hasUpgrade('p',31)},},
    33:{ title: "Impossible",
    description:"PTT对歌曲也有提升效果（软上限后）",
    cost: new Decimal(3e14),
    unlocked() {return hasMilestone('m',1)},
    effect() {return player.a.ptt.add(10).log(10).pow(0.5)},
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))},
    },
    34:{ title: "Difficult",
    description:"PTT对源点提升增加（软上限后）",
    cost: new Decimal(5e14),
    unlocked() {return hasMilestone('m',1)},
    effect() {return player.a.ptt.add(10).log(10).pow(0.4)},
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))},
    },
    35:{ title: "Anxious",
    description:"解锁更多PTT升级，解锁魔王曲升级",
    cost: new Decimal(8e14),
    unlocked() {return hasUpgrade('p',34)},
    },
    36:{ title: "Terrible",
    description:"RKS指数提升Phidata,源点,歌曲获取量（软上限前）",
    cost: new Decimal(2e15),
    unlocked() {return hasUpgrade('p',35)},
    effect() {return player.p.rks.add(1).pow(0.4).div(5).add(0.8)},
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))},
    },
    37:{ title: "Anguished",
    description:"解锁更多升级，解锁下一个RKS可点击，Phidata*1e8（软上限前）<br>有没有发现这一行升级的首字母是Phidata",
    cost: new Decimal(1e18),
    unlocked() {return hasUpgrade('p',36)},
    },
   },
    milestones: {
    0: {
        requirementDescription: "获得1个Phidata",
        effectDescription: "源点挑战要求为0，被动获取歌曲和源点增加500%每秒（PTT永远不重置），解锁剧情",
        done() { return player.p.points.gte(1) }
    },
    1: {
        requirementDescription: "获得2个Phidata",
        effectDescription: "保留Lanota里程碑",
        done() { return player.p.points.gte(2) }
    },
    2: {
        requirementDescription: "获得3个Phidata",
        effectDescription: "自动购买Arcaea升级和Lanota升级",
        done() { return player.p.points.gte(3) }
    },
    3: {
        requirementDescription: "获得4个Phidata",
        effectDescription: "歌曲和源点层级不重置任何东西",
        done() { return player.p.points.gte(4) }
    },
    4: {
        requirementDescription: "获得5个Phidata",
        effectDescription: "保留源点挑战，解锁Phidata升级",
        done() { return player.p.points.gte(5) }
    },
    5: {
        requirementDescription: "获得300个Phidata",
        effectDescription: "保留歌曲可购买数量（挑战中仍然生效哦！）",
        unlocked() {return hasChallenge('p',12)},
        done() { return player.p.points.gte(300) }
    },
    6: {
        requirementDescription: "获得100000个Phidata",
        effectDescription: "解锁下一个Phidata挑战",
        unlocked() {return hasUpgrade('p',17)},
        done() { return player.p.points.gte(100000) }
    },
},
    clickables:{
      11: {
      title() {return "增加RKS"},
      display() {return "这是有规律的哦！点击增加RKS"},
      canClick() {return rksRandom()<0.3||hasUpgrade('c',11)},
      onClick() {player.p.rks=player.p.rks.add(player.p.rksMax.sub(player.p.rks).div(5))},
      onHold() {if(hasUpgrade('c',11)) player.p.rks=player.p.rks.add(player.p.rksMax.sub(player.p.rks).div(5))},
    },
      12: {
      title() {return "增加RKS上限"},
      display() {d="基于Phidata增加RKS上限"
      if(hasAchievement('A',53))d="基于Phidata和PTT增加RKS上限"
      return d},
      canClick() {return rksRandom()>0.7||hasUpgrade('c',11)},
      onClick() {player.p.rksMax = player.p.rksMax.add(player.p.points.add(1).log(20).add(1).log(10).sub(player.p.rksMax.mul(player.p.rksMax2).mul(new Decimal(1).div(player.a.ptt.add(10).log(10).pow(0.1).max(1.25)))).div(2).max(0.001).sub(0.001))},
      onHold() {if(hasUpgrade('c',11)) player.p.rksMax = player.p.rksMax.add(player.p.points.add(1).log(20).add(1).log(10).sub(player.p.rksMax.mul(player.p.rksMax2).mul(new Decimal(1).div(player.a.ptt.add(10).log(10).pow(0.1).max(1.25)))).div(2).max(0.001).sub(0.001))},
      unlocked() {return hasUpgrade('p',37)}
    },
      13: {
      title() {return "增加RKS上限2"},
      display() {return "基于Cytus力量增加上一个可点击效果的上限<br>上限×"+format(new Decimal(1).div(player.p.rksMax2))+"<br>确切来说，×"+ new Decimal(1).div(player.p.rksMax2)},
      canClick() {return true},
      onClick() {
        if(hasUpgrade('c',11)) player.p.rksMax2 = player.p.rksMax2.sub(player.c.power.add(1).log(10).add(1).div(5).pow(0.5).mul(player.p.rksMax2.pow(10)).max(player.p.rksMax2.div(100)).sub(player.p.rksMax2.div(100)).min(player.p.rksMax2.mul(0.1)))
        if(hasUpgrade('ch',23)) player.p.rksMax2 = player.p.rksMax2.sub(player.c.power.add(1).log(2).add(1).div(2).pow(0.8).mul(player.p.rksMax2.pow(10)).max(player.p.rksMax2.div(100)).sub(player.p.rksMax2.div(100)).min(player.p.rksMax2.mul(0.1)))
      },
      onHold() {player.p.rksMax2 = player.p.rksMax2.sub(player.c.power.add(1).log(10).add(1).div(5).pow(0.5).mul(player.p.rksMax2.pow(10)).max(player.p.rksMax2.div(100)).sub(player.p.rksMax2.div(100)).min(player.p.rksMax2.mul(0.1)))
        if(hasUpgrade('ch',23)) player.p.rksMax2 = player.p.rksMax2.sub(player.c.power.add(1).log(2).add(1).div(2).pow(0.8).mul(player.p.rksMax2.pow(10)).max(player.p.rksMax2.div(100)).sub(player.p.rksMax2.div(100)).min(player.p.rksMax2.mul(0.1)))
      },
      unlocked() {return hasUpgrade('c',11)}
    },
    },
tabFormat: {
    "里程碑": {
        content: [    ["infobox","introBox"],
        "main-display",
    "prestige-button",
            ["display-text",
      function() {return '你有 ' + format(player.a.points) + ' 源点<br>你正在获得 ' + format(new Decimal(tmp.p.resetGain).mul(tmp.p.passiveGeneration))+' Phidata每秒'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
    "milestones",],},
    "升级": {
        content: [ ["infobox","upgBox"],
          "main-display",
    "prestige-button",
    "upgrades",
],
unlocked(){return hasMilestone('p',4)}
    },
    "挑战": {
        content: [["infobox","chalBox"],
          "main-display",
    "prestige-button",
    "challenges",
],
  unlocked(){return hasUpgrade('p',13)}
},
    "RKS": {
     content: [["infobox","RKSBox"],
          "main-display",
    "prestige-button",
       ["display-text",
      function() {return '你有 ' + format(player.p.rks)+ ' RKS!'},
     {"color": "#ff5eee", "font-size": "20px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return '当前RKS上限： ' + format(player.p.rksMax) + ' RKS'},
     {"color": "#ff9af6", "font-size": "15px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return '确切来说，你有 ' + player.p.rks + ' RKS'+'<br>当前的RKS上限为 ' + player.p.rksMax},
     {"color": "#ffffff", "font-size": "9px", "font-family": "Comic Sans MS"}],
    "clickables",
],
  unlocked(){return hasUpgrade('m',11)}
},
 "剧情": {
        content: [ 
        ["infobox","p1"],
        ["infobox","p2"],
        ["infobox","p3"],
        ["infobox","p4"],
        ["infobox","p5"],
        ["infobox","p6"],
        ["infobox","p7"],
],
  unlocked(){return hasMilestone('p',0)}
},
},
})//Phigros
addLayer("m", {
  infoboxes: {
    introBox: {
    title: "层级5--魔王曲",
    body(){
      return "欢迎来到第五层！本层级也会重置“歌曲”层级，“Arcaea”层级和“Lanota”层级。而且，本层级和Lanota类似，也是静态层级。你可以通过里程碑获得更多增益！<br>"},
    },
    upgBox: {
    title: " ",
    body(){return "n"},
        },
    chalBox: {
    title: "",
    body(){ return "n"
                },
        },
},
    name: "魔王曲",
    symbol: "M",
    position: 0,
    startData() { return {
        unlocked() { return (hasUpgrade('p', 27))||hasMilestone('m',0)},
		points: new Decimal(0),
    }},
    color: "#55BB11",
    requires() {req=new Decimal(1e40)
    if(hasUpgrade('a',44))req=req.pow(upgradeEffect('a',44))
    return req}, 
    resource: "魔王曲",
    baseResource: "源点", 
    baseAmount() {return player['a'].points}, 
    type: "static", 
    exponent: 1, 
    effect(){
      return {Notes: player.m.points.add(1).pow(0.5)}
    },
    effectDescription() { 
      if(!hasUpgrade('m',21)){
            return "Phidata效果变成原来的"+format(player.m.points.add(1).pow(0.5))+"次方"}
    },
    gainMult() { 
        mult = new Decimal(1)
        return mult
    },
    gainExp() { 
      exp= new Decimal(0.008)
      if(buyableEffect('c',23)>1) exp = exp.times(buyableEffect('c',23))
      if(hasUpgrade('c',17)) exp=exp.times(1.001)
      
       return exp
    },
    row: 2, 
    branches(){return ['c','ch']},
    hotkeys: [
        {key: "m", description: "M: Reset for Monster Songs", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    resetsNothing() {return hasMilestone('c',8)},
    canBuyMax(){return hasMilestone('c',8)},
    autoPrestige() {return hasMilestone('c',6)},
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
            if (resettingLayer == "t") {
               kept.push("upgrades")
            }
            if (resettingLayer == "c") {
               if(hasMilestone("c", 1))kept.push("milestones")
               if(hasMilestone("c", 3))kept.push("milestones","upgrades")
            }
            if (resettingLayer == "ch") {
               if(hasMilestone("ch", 0))kept.push("milestones","upgrades")
            }
            layerDataReset(this.layer, kept)
        }
    },
    layerShown(){shown= false
    if(hasUpgrade('p',27)){shown=true}
    if(hasMilestone('m',0)){shown=true}
    return shown},
  softcap:new Decimal (1e1000000),
  softcapPower:new Decimal(0.05),
    challenges: {
    11: {
        name: "EZ",
        challengeDescription(){
          if(!hasUpgrade('p',22)){return "歌曲和源点获取为原来的平方根<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/5"}
          if(hasUpgrade('p',22)){return "歌曲和源点获取为原来的平方根<br>完成次数:"+challengeCompletions(this.layer,this.id)+"/100"}},
        goalDescription(){return "1e"+new Decimal(14).add(challengeCompletions(this.layer,this.id))+"源点"},
        rewardDescription(){return "根据挑战完成次数增益源点<br>效果：×"+challengeEffect(this.layer,this.id).floor()},
        rewardEffect() {return new Decimal( challengeCompletions(this.layer,this.id)).add(1).pow(5)},
        unlocked(){unlock= false
        if(hasUpgrade('p',13)) unlock=true
          return unlock },
        completionLimit(){
          if(!hasUpgrade('p',22)){return new Decimal(5)}
          if(hasUpgrade('p',22)){return new Decimal(100)}},
        canComplete: function() {
          return player.a.points.gte(new Decimal(10).pow(14).mul(new Decimal(10).pow(challengeCompletions(this.layer,this.id))))}
        },
    },
    upgrades: {
    11:{ title: "Rrhar'il",
    description:"解锁RKS（在Phidata界面），Phidata×1e5（软上限前）",
    cost: new Decimal(0),
    unlocked() {return hasUpgrade('p',35)}, },
    12:{ title: "Testify",
    description:"基于RKS和PTT增益Cytus力量获得量",
    cost: new Decimal(8),
    effect() {
        return player.p.rks.pow(5).mul(player.a.ptt).max(1)},
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
    unlocked() {return hasMilestone('c',7)}, },
    13:{ title: "黄道、知希朋友と紡ぎありく",
    description:"基于魔王曲增益Cytus力量获取量",
    cost: new Decimal(15),
    effect() {
        return new Decimal(1.4).pow(player.m.points)},
 effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"×" },
    unlocked() {return hasUpgrade('c',13)}, },
   },
    milestones: {
    0: {
        requirementDescription: "获得1首魔王曲",
        effectDescription: "解锁更多Phidata升级和PTT升级",
        done() { return player.m.points.gte(1) }
    },
    1: {
        requirementDescription: "获得2首魔王曲",
        effectDescription: "再次解锁更多升级，Phidata里程碑对魔王曲也生效",
        done() { return player.m.points.gte(2) }
    },
},
tabFormat: {
    "里程碑": {
        content: [ ["infobox","introBox"],
    "main-display",
    "prestige-button",
    "milestones",],},
    "升级": {
        content: [ "main-display",
    "prestige-button",
    "upgrades",
],
unlocked(){return hasUpgrade('p',35)}
    },
},
})//Monster Songs

//Row 3
addLayer("c", {
  infoboxes: {
 introBox: {
    title: "层级6--Cytus",
    body(){
      return "欢迎来到第六层！恭喜你，已经来到了第四行！本层级会重置前三行，也就是所有之前的进度！不用担心，接下来会解锁更多、更好、更有趣的内容，继续前行吧！<br>资源名称由来：自己想的"},
    },
    upgBox: {title: "Cytus升级",
    body(){
      return "与前面的升级并无两样，继续购买吧！"},},
      buyBox: {title: "Cytus可购买",
    body(){
      return "这些是Cytus可购买，你可以消耗Cytus力量（基于Cyten数量和一些升级）购买，这些可购买拥有不同的效果，随着进度还会解锁更多可购买"},},
      chalBox: {title: "Cytus挑战",
    body(){
      return "完成Cytus挑战获得奖励！如果无法完成，再刷刷别的资源吧"},},},
    name: "Cytus",
    symbol: "C",
    position: 1,
    startData() { return {
        unlocked() { return hasUpgrade('a',37)||hasMilestone('c',0)   },
		points: new Decimal(0),
		power: new Decimal(0),
		challengeTime: new Decimal(0),
    }},
    color: "#a3a3a3",
    requires: new Decimal(1e20), 
    resource: "Cyten",
    baseResource: "Phidata", 
    baseAmount() {return player.p.points}, 
    type: "normal", 
    exponent: 1, 
    effect(){
      eff=player.c.points.add(1).pow(2).sub(1)
      return eff
    },
    effectDescription() { return "生成"+format(tmp.c.powercal)+" Cytus力量每秒"
    },
    gainMult() { 
        mult = new Decimal(1)
        if(buyableEffect('c',22)>1) mult = mult.times(buyableEffect('c',22))
        if(hasUpgrade('ch',11)) mult = mult.times(upgradeEffect('ch',11))
        
        if(buyableEffect('ch',21)>1) mult = mult.pow(buyableEffect('ch',21))
        return mult
    },
    gainExp() { 
      exp= new Decimal(0.05)
      if(hasUpgrade('ch',11)) exp= exp.add(0.05)
      if(hasUpgrade('s',33))exp= exp.times(1.2)
      
      return exp
    },
    powercal(){
      mult = player.c.points.add(1).pow(2).sub(1)
      if(hasUpgrade('ch',17)) mult = player.c.points.add(1).pow(3).sub(1)
      if(buyableEffect('c',14)>1) mult = mult.times(buyableEffect('c',14))
      if(tmp.ch.tapEff>1) mult = mult.times(tmp.ch.tapEff)
      if(hasUpgrade('m',12)) mult = mult.times(upgradeEffect('m',12))
      if(hasUpgrade('c',13)) mult = mult.times(upgradeEffect('c',13))
      if(hasUpgrade('m',13)) mult = mult.times(upgradeEffect('m',13))
      if(hasUpgrade('c',15)) mult = mult.times(10)
      
      if(hasUpgrade('c',14)) mult = mult.pow(1.1)
      return mult
},
    row: 3, 
    passiveGeneration()
  {mult = new Decimal(0)
  if(hasUpgrade('c',16))
  mult = new Decimal(1)
    mult= mult.add(0)
    return mult
  },
    doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
            if (resettingLayer == "t") {
               kept.push("upgrades","challenges")
            }

            layerDataReset(this.layer, kept)
        }
    },
    hotkeys: [
        {key: "c", description: "C： Reset for Cytus",onPress(){if (canReset(this.layer)) doReset(this.layer)} },
    ],
    layerShown(){ return hasUpgrade('a',37)||hasMilestone('c',0)
    },
    update(diff) {
			if (player.c.unlocked()) player.c.power = player.c.power.add(tmp.c.powercal.mul(diff));
			if (inChallenge('c',13)) player.c.challengeTime=player.c.challengeTime.add(1)
			if (hasUpgrade('ch',24)&&layers.c.buyables[11].canAfford()) layers.c.buyables[11].buy();
			if (hasUpgrade('ch',24)&&layers.c.buyables[12].canAfford()) layers.c.buyables[12].buy();
			if (hasUpgrade('ch',24)&&layers.c.buyables[13].canAfford()) layers.c.buyables[13].buy();
			if (hasUpgrade('ch',24)&&layers.c.buyables[14].canAfford()) layers.c.buyables[14].buy();
			if (hasUpgrade('ch',24)&&layers.c.buyables[21].canAfford()) layers.c.buyables[21].buy();
			if (hasUpgrade('ch',24)&&layers.c.buyables[22].canAfford()) layers.c.buyables[22].buy();
			if (hasUpgrade('ch',24)&&layers.c.buyables[23].canAfford()) layers.c.buyables[23].buy();
			if (hasUpgrade('ch',24)&&layers.c.buyables[24].canAfford()) layers.c.buyables[24].buy();
		},
		upgrades: {
    11:{ title: "Cytus I",
    description:"解锁第三个RKS可点击，RKS可点击随时都可以点击",
    cost: new Decimal(5),
    unlocked() {return hasMilestone('c',7)}, },
    12:{ title: "Cytus II",
    description:"基于Cytus力量增益歌曲基本获得指数",
    cost: new Decimal(25),
    effect() {return player.c.power.add(100).log(100).add(10).log(10).sub(1)},
    effectDisplay() { return "+"+format(upgradeEffect(this.layer, this.id))},
    unlocked() {return hasMilestone('c',8)}, },
    13:{ title: "Cytoid",
    description:"解锁第六个Cytus可购买和一个魔王曲升级，基于游玩时间增益Cytus力量",
    cost: new Decimal(30),
    effect() {return player.A.resetTime},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id),5)+"×"},
    unlocked() {return hasUpgrade('c',12)}, },
    14:{ title: "扫线，不是下落",
    description:"Cytus力量^1.1，解锁第七个Cytus可购买",
    cost: new Decimal(50),
    unlocked() {return hasUpgrade('c',13)}, },
    15:{ title: "时代既去",
    description:"解锁Cytus挑战，Cytus力量*10",
    cost: new Decimal(100),
    unlocked() {return hasUpgrade('c',14)}, },
    16:{ title: "长夜将尽",
    description:"每秒获得100%重置时获得的Cyten",
    cost: new Decimal(300),
    unlocked() {return hasUpgrade('a',42)}, },
    17:{ title: "黎明已至",
    description:"解锁下一个层级(Chart)，魔王曲获取指数*1.001",
    cost: new Decimal(10000),
    unlocked() {return hasUpgrade('a',45)||hasUpgrade('c',17)}, },
   },
		milestones: {
    0: {
        requirementDescription: "获得一个Cyten",
        effectDescription: "永久自动购买歌曲、Arcaea、Lanota升级，保留Arcaea挑战",
        done() { return player.c.points.gt(0) }
    },
    1: {
        requirementDescription: "1500 Cytus力量",
        effectDescription: "保留Lanota里程碑，Phidata里程碑和魔王曲里程碑",
        unlocked() {return true},
        done() { return player.c.power.gte(1500) }
    },
    2: {
        requirementDescription: "2 Cytens && 5000 Cytus力量",
        effectDescription: "保留RKS，解锁Cytus可购买",
        unlocked() {return hasMilestone('c',0)},
        done() { return player.c.points.gte(2)&&player.c.power.gte(5000) }
    },
    3: {
        requirementDescription: "3 Cytens",
        effectDescription: "保留歌曲、Arcaea、Lanota、魔王曲升级，自动购买Phidata升级",
        unlocked() {return hasMilestone('c',1)},
        done() { return player.c.points.gte(3) }
    },
    4: {
        requirementDescription: "4 Cytens",
        effectDescription: "保留Phidata挑战，解锁下一个Cytus可购买",
        unlocked() {return hasMilestone('c',2)},
        done() { return player.c.points.gte(4) }
    },
    5: {
        requirementDescription: "5 Cytens",
        effectDescription: "保留PTT，再次解锁下一个Cytus可购买",
        unlocked() {return hasMilestone('c',3)},
        done() { return player.c.points.gte(5) }
    },
    6: {
        requirementDescription: "6 Cytens",
        effectDescription: "自动购买魔王曲，再次解锁下一个Cytus可购买",
        unlocked() {return hasMilestone('c',4)},
        done() { return player.c.points.gte(6) }
    },
    7: {
        requirementDescription: "10 Cytens",
        effectDescription: "解锁Cytus升级和更多魔王曲升级",
        unlocked() {return hasMilestone('c',5)},
        done() { return player.c.points.gte(10) }
    },
    8: {
        requirementDescription: "20 Cytens",
        effectDescription: "魔王曲什么也不重置，你可以购买最大魔王曲，自动获得PTT，解锁更多Cytus升级和可购买",
        unlocked() {return hasMilestone('c',6)},
        done() { return player.c.points.gte(20) }
    },
},
    buyables: {
			rows: 4,
			cols: 4,
			11: {
				title: "音乐世界",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(2, x.mul(2).pow(1.5))
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {return new Decimal(1e80).pow(x.pow(2))},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>Note获取量×" + format(data.effect))
                },
      unlocked() { return hasMilestone('c',2)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
    if(!hasUpgrade('ch',25)) player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
     buyMax() {
					if (!this.canAfford()) return;
					if (tempBuy.gte(25) && tmp[this.layer].buyables[this.id].costScalingEnabled) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
                style: {'height':'200px'},
			},
			12: {
				title: "音乐星球",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(3).div(25)
     let cost = Decimal.pow(2, x.mul(2).pow(1.6))
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {return new Decimal(100).pow(x)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>Phidata获取量×" + format(data.effect))
      },
      unlocked() { return hasMilestone('c',4)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
   if(!hasUpgrade('ch',25)) player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {
					if (!this.canAfford()) return;
					if (tempBuy.gte(25) && tmp[this.layer].buyables[this.id].costScalingEnabled) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
                style: {'height':'200px'},
			},
			13: {
				title: "音乐恒星",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(2, x.mul(2).pow(1.5))
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {return new Decimal(1e50).pow(x)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>歌曲获取量×" + format(data.effect)+"（软上限后）" )
      },
      unlocked() { return hasMilestone('c',5)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
   if(!hasUpgrade('ch',25)) player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {
					if (!this.canAfford()) return;
					if (tempBuy.gte(25) && tmp[this.layer].buyables[this.id].costScalingEnabled) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
                style: {'height':'200px'},
			},
			14: {
				title: "音乐星云",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(2, x.mul(1.6).pow(1.5))
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {return new Decimal(2).pow(x)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>Cytus力量获取量×" + format(data.effect))
      },
      unlocked() { return hasMilestone('c',6)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
   if(!hasUpgrade('ch',25)) player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {
					if (!this.canAfford()) return;
					if (tempBuy.gte(25) && tmp[this.layer].buyables[this.id].costScalingEnabled) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
                style: {'height':'200px'},
			},
			21: {
				title: "音乐星团",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(1.8, x.mul(1.8).pow(1.8))
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {return new Decimal(1e5).pow(x)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>源点获取量×" + format(data.effect))
      },
      unlocked() { return hasMilestone('c',8)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
  if(!hasUpgrade('ch',25))  player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {
					if (!this.canAfford()) return;
					if (tempBuy.gte(25) && tmp[this.layer].buyables[this.id].costScalingEnabled) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
                style: {'height':'200px'},
			},
			22: {
				title: "音乐星系",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(2, x.mul(1.5).pow(2))
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {return new Decimal(100).pow(x)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>Cyten获取量×" + format(data.effect))
      +" (软上限前)"},
      unlocked() { return hasUpgrade('c',13)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
  if(!hasUpgrade('ch',25)) cost = tmp[this.layer].buyables[this.id].cost
    player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {
					if (!this.canAfford()) return;
					if (tempBuy.gte(25) && tmp[this.layer].buyables[this.id].costScalingEnabled) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
                style: {'height':'200px'},
			},
			23: {
				title: "音乐系群",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(1.5, x.add(-1).mul(1.6).pow(2))
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {return x.add(10).log(10).mul(0.75).add(0.25).pow(0.5)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>魔王曲获取指数×" + format(data.effect))},
      unlocked() { return hasUpgrade('c',14)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
   if(!hasUpgrade('ch',25)) cost = tmp[this.layer].buyables[this.id].cost
    player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {
					if (!this.canAfford()) return;
					if (tempBuy.gte(25) && tmp[this.layer].buyables[this.id].costScalingEnabled) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
                style: {'height':'200px'},
			},
			24: {
				title: "音乐宇宙",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(1.5, x.mul(2).pow(2))
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {return x.add(15).log(15).mul(0.8).add(0.2).pow(0.5)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>诗篇获取指数×" + format(data.effect))},
      unlocked() { return hasUpgrade('s',35)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
   if(!hasUpgrade('ch',25)) player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {
					if (!this.canAfford()) return;
					if (tempBuy.gte(25) && tmp[this.layer].buyables[this.id].costScalingEnabled) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
                style: {'height':'200px'},
			},
			31: {
				title: "音乐次元",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = Decimal.pow(1.5, x.mul(2).pow(2))
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {return x.add(15).log(15).mul(0.8).add(0.2).pow(0.5)},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("价格: " + format(data.cost) + " Cytus力量")+"<br>数量: " + format(player[this.layer].buyables[this.id])
      +"<br>诗篇获取指数×" + format(data.effect))},
      unlocked() { return hasUpgrade('s',335)}, 
      canAfford() {
      return player[this.layer].power.gte(tmp[this.layer].buyables[this.id].cost)},
                buy() { 
   cost = tmp[this.layer].buyables[this.id].cost
  if(!hasUpgrade('ch',25))  player[this.layer].power = player[this.layer].power.sub(cost)	
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
                buyMax() {
					if (!this.canAfford()) return;
					if (tempBuy.gte(25) && tmp[this.layer].buyables[this.id].costScalingEnabled) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},

                style: {'height':'200px'},
			},
		},
		challenges: {
    11: {
        name: "“EASY”",
        challengeDescription: "歌曲、源点、Phidata获取量被极大削弱",
        goalDescription:"1.070e1070 Notes",
        rewardDescription:"诗篇获取量略微削弱，但诗篇没有软上限，自动购买最大诗篇，解锁更多升级",
        style: {'height':'300px'},
        unlocked(){unlock= false
        if(hasUpgrade('c',14)) unlock=true
          return unlock
        },
        canComplete: function() {return player.points.gte('1.07e1070')},
    },
    12: {
        name: "HARD²",
        challengeDescription: "进入上一个挑战的同时，Note获取量被极大削弱",
        countsas:[11],
        goalDescription:"1.145e1145 Notes",
        rewardDescription:"去除歌曲和源点的获取指数上限，解锁一些谱面升级",
        style: {'height':'300px'},
        unlocked(){unlock= false
        if(hasUpgrade('ch',17)) unlock=true
          return unlock
        },
        canComplete: function() {return player.points.gte('1.145e1145')},
    },
    13: {
        name: "CHAOS∞",
        challengeDescription() {return "进入上一个挑战的同时，Note,歌曲,源点,Phidata获取量每tick变成原来的0.9次方<br>当前效果：^"+format(new Decimal(0.9).pow(player.c.challengeTime))},
        countsas:[12],
        onEnter() {player.c.challengeTime=new Decimal(0)},
        onExit() {player.c.challengeTime=new Decimal(0)},
        goalDescription:"1e82205 Notes",
        rewardDescription:"去除歌曲和源点的获取量上限，但它们被严重软上限，解锁更多升级",
        style: {'height':'350px'},
        unlocked(){unlock= false
        if(hasUpgrade('ch',17)) unlock=true
          return unlock
        },
        canComplete: function() {return player.points.gte('1e82205')},
    },
},
    tabFormat: {
    "里程碑": {
        content: [ ["infobox","introBox"],
    "main-display",
    "prestige-button",
    ["display-text",
      function() {return '你有 ' + format(player.p.points) + ' Phidata<br>你正在获得 ' + format(new Decimal(tmp.c.resetGain).mul(tmp.c.passiveGeneration))+' Cyten每秒'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
    ["display-text",
      function() {return '你有 ' + format(player.c.power)+' Cytus力量'},
     {"color": "#ffffff", "font-size": "14px", "font-family": "Comic Sans MS"}],
    "milestones",
     ],},
   "可购买": {
        content: [ ["infobox","buyBox"],
    "main-display",
    "prestige-button",
    ["display-text",
      function() {return '你有 ' + format(player.c.power)+' Cytus力量'},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
    "buyables",
     ],
     unlocked(){return hasMilestone('c',2)}
   },
    "升级": {
        content: [ ["infobox","upgBox"],
        "main-display",
    "prestige-button",
    "upgrades",
],
unlocked(){return hasMilestone('c',7)}
    },
"挑战": {
        content: [ ["infobox","chalBox"],
          "main-display",
    "prestige-button",
    "challenges",
],
  unlocked(){return hasUpgrade('c',15)}
},

},
})//Cytus
addLayer("ch", {
  infoboxes: {
 introBox: {
    title: "层级7--Chart",
    body(){
      return "欢迎来到第七层！本层级也是静态层级，在本层级，你可以解锁相当有趣的功能！<br>资源名称由来：音乐游戏中“Chart”翻译为谱面"},
    },
    chartBox: {title: "谱面",
    body(){
      return "欢迎来到谱面！在这里，你需要通过Note来换取物量和谱面，购买升级，增长谱面的定数"},},
      phiBox: {title: "Phigros",
    body(){
      return "当你解锁了这一部分之后，有趣的地方开始了！首先，基于当前的物量，你将会获得一些Phigros-Note(PN)，你需要根据当前的PN购买特殊Note，这些特殊note会给一些东西增益，同时，定数会提升特殊note的效果"},},
      chalBox: {title: "Cytus挑战",
    body(){
      return ""},},},
    name: "Chart",
    symbol: "Ch",
    position: 2,
    startData() { return {
        unlocked() { return hasUpgrade('c',17)},
		points: new Decimal(0),
		note: new Decimal(0),//物量
		dif: new Decimal(1),//difficulty
		pnote: new Decimal(0),//Phigros-Note
		tap: new Decimal(0),//蓝键
		drag: new Decimal(0),//黄键
		flick: new Decimal(0),//红键
		hold: new Decimal(0),//长条
    }},
    color: "#ffe000",
    requires: new Decimal('1e100000'), 
    resource: "谱面",
    baseResource: " Notes", 
    baseAmount() {return player.points}, 
    type: "static", 
    exponent: 1, 
    gainMult() { 
        mult = new Decimal(1)
        return mult
    },
    gainExp() { 
      exp= new Decimal(0.0001)
       return exp
    },
    note() {
      if(!hasUpgrade('ch',14)) mult= player.points.add(10).log(5).sub(100000).max(1).pow(0.5).div(4.5).max(0)
      if(hasUpgrade('ch',14)) mult= player.points.add(10).log(4).max(1).pow(0.5).div(4).max(0)
    if(hasUpgrade('ch',12)) mult=mult.times(upgradeEffect('ch',12))
    if(hasUpgrade('ch',16)) mult=mult.times(upgradeEffect('ch',16))
      return mult
    },
    dif() {
      dif = player.ch.note.div(50).pow(0.8).max(1)
      return dif
    },
    pnote() {
     pnote = player.ch.note.div(10).pow(0.8).max(0)
      return pnote.floor()
    },
    tapEff() {
      tap = new Decimal(2).pow(player.ch.tap.max(0))
    tap=tap.pow(player.ch.dif)
      return tap},
    dragEff() {
      drag = player.ch.drag.add(1).log(10).div(10).add(1).min(1.5)
    drag=drag.pow(player.ch.dif.max(1).log(10).add(1)).min(2)
      return drag},
    flickEff() {
      flick = player.ch.flick.add(1).log(5).div(5).add(1).min(2)
    flick=flick.pow(player.ch.dif.max(1).log(10).add(1)).min(3)
      return flick},
    holdEff() {
      hold = player.ch.hold.add(1).log(100).div(25).add(1).min(1.2)
    hold = hold.pow(player.ch.dif.max(1).log(20).add(1)).min(1.44)
      return hold},
    row: 3, 
    hotkeys: [
        {key: "h", description: "H: Reset for charts", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){ return hasUpgrade('c',17)},
    update(diff) {
			player.ch.note = tmp.ch.note.max(player.ch.note)
			player.ch.dif = tmp.ch.dif.max(player.ch.dif).min(player.p.rks)
			player.ch.pnote = tmp.ch.pnote.max(player.ch.pnote)
			player.ch.tap =getBuyableAmount('ch',11)
	player.ch.drag =getBuyableAmount('ch',12)
		player.ch.flick =getBuyableAmount('ch',21)
	player.ch.hold =getBuyableAmount('ch',22)
		},
		canBuyMax(){return hasUpgrade('ch',16)},
		doReset(resettingLayer) {
        if (layers[resettingLayer].row > layers[this.layer].row) {
            let kept = ["unlocked", "auto"]
            if (resettingLayer == "t") {
               kept.push("upgrades","milestones")
            }

            layerDataReset(this.layer, kept)
        }
    },
    tabFormat: {
   "里程碑": {
        content: [ ["infobox","introBox"],
          "main-display",
    "prestige-button",
     "blank",
    "milestones",
],
    },
  "谱面": {
        content: [
          ["infobox","chartBox"],
          "main-display",
    "prestige-button",
     "blank",
        ["display-text",
      function() {return '当前物量: ' + format(player.ch.note) + '<br>物量对应定数：'+format(player.ch.dif)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
       ["display-text",
      function() {return '定数上限为当前RKS: ' + format(player.p.rks)+ '<br>确切来说，'+player.p.rks},
     {"color": "#ffffff", "font-size": "16px", "font-family": "Comic Sans MS"}],
        ["display-text",
      function() {return '确切来说，当前物量: ' + player.ch.note + '<br>物量对应定数：'+player.ch.dif},
     {"color": "#ffffff", "font-size": "12px", "font-family": "Comic Sans MS"}],
"upgrades",
],
unlocked(){return hasMilestone('ch',1)}
    },
  "Phigros": {
        content: [ ["infobox","phiBox"],
          "main-display",
    "prestige-button",
     "blank",
    ["display-text",
      function() { return '你有 ' + format(player.ch.pnote) + ' 个Phigros-Note(PN)<br>下一个需要 '+format(player.ch.pnote.add(1).pow(1.25).mul(10))+' 物量<br>当前物量：'+format(player.ch.note)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "blank",
     "blank",
    ["display-text",
      function() {if(hasUpgrade('ch',21)) return '你有 ' + format(player.ch.tap) + ' 个蓝键<br>蓝键对应效果：Cytus力量×'+format(tmp.ch.tapEff)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "blank",
      ["display-text",
      function() {if(hasUpgrade('ch',22)) return '你有 ' + format(player.ch.drag) + ' 个黄键<br>黄键对应效果：Note^'+format(tmp.ch.dragEff)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "blank",
       ["display-text",
      function() {if(hasUpgrade('ch',25)) return '你有 ' + format(player.ch.flick) + ' 个红键<br>红键对应效果：Cyten获取量^'+format(tmp.ch.flickEff)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
     "blank",
        ["display-text",
      function() {if(hasUpgrade('ch',27)) return '你有 ' + format(player.ch.hold) + ' 个长条<br>长条对应效果：歌曲,源点,Phidata获取指数×'+format(tmp.ch.holdEff)},
     {"color": "#ffffff", "font-size": "20px", "font-family": "Comic Sans MS"}],
"buyables",
],
unlocked(){return hasUpgrade('ch',21)}
    },
    },
    milestones: {
    0: {
        requirementDescription: "获得1谱面",
        effectDescription: "Cytus里程碑对谱面也生效，Notes *1e960",
        done() { return player.ch.points.gt(0) }
    },
    1: {
        requirementDescription: "获得2谱面",
        effectDescription: "解锁标签页“谱面”，notes*1e1145",
        done() { return player.ch.points.gt(1) }
    },
},
upgrades:{
  11:{ 
    fullDisplay() {return "Introduction<br>基于物量的Cyten乘数，Cyten基本获得指数*2<br>当前效果："+format(this.effect())+"×<br>需要：50物量 && 2谱面"},
    canAfford() {return player.ch.note.gte(50)},
    cost() {return new Decimal(2)},
      effect() { return player.ch.note.add(1).pow(3)},
  },
  12:{ 
    fullDisplay() {return "Glaciaxion EZ 1.0<br>基于谱面提升物量获取量<br>当前效果："+format(this.effect())+"×<br>需要：52.6物量 && 4谱面"},
    unlocked(){return hasUpgrade('ch',11)},
    canAfford() {return player.ch.note.gte(52.6)},
    cost() {return new Decimal(4)},
      effect() { eff= player.ch.points.add(10).log(10)
        if(eff.gte(2)) eff= eff.mul(8).pow(0.25)
        return eff
      },
  },
  13:{ 
    fullDisplay() {return "Initialize EZ 2.5<br>基于谱面和物量增加Note乘数<br>当前效果："+format(this.effect())+"×<br>需要：60.34物量 && 4谱面"},
    unlocked(){return hasUpgrade('ch',12)},
    canAfford() {return player.ch.note.gte(60.34)},
    cost() {return new Decimal(4)},
      effect() { eff= new Decimal(1e100).pow(player.ch.points.add(1).mul(2))
        eff= eff.mul(new Decimal(1e10).pow(player.ch.note))
        if(eff.gte('1e10000')) eff= eff.mul('1e30000').pow(0.25)
        return eff
      },
  },
  14:{ 
    fullDisplay() {return "dBdoll HD 3.5<br>改善物量获取公式<br>需要：68.85物量 && 6谱面"},
    unlocked(){return hasUpgrade('ch',13)},
    canAfford() {return player.ch.note.gte(68.85)},
    cost() {return new Decimal(6)},
  },
  15:{ 
    fullDisplay() {return "SIGMA EZ 5.0<br>打破Phidata获取量上限并基于定数提升它<br>当前效果："+format(this.effect())+"×<br>需要：132.82物量 && 6谱面"},
    unlocked(){return hasUpgrade('ch',14)},
    canAfford() {return player.ch.note.gte(132.82)},
    cost() {return new Decimal(6)},
      effect() { eff= new Decimal(100).pow(player.ch.dif.mul(100).pow(0.3).max(0))
        return eff
      },
  },
  16:{ 
    fullDisplay() {return "Chronostasis EZ 6.5<br>你可以购买最大谱面，基于Cyten提升物量<br>当前效果："+format(this.effect())+"×<br>需要：132.95物量 && 6谱面"},
    unlocked(){return hasUpgrade('ch',15)},
    canAfford() {return player.ch.note.gte(132.95)},
    cost() {return new Decimal(6)},
      effect() { eff= player.c.points.add(1).log(10).pow(0.2).max(1)
        return eff
      },
  },
  17:{ 
    fullDisplay() {return "DESTRUCTION 3,2,1 EZ 7.0<br>改善Cyten对Cytus力量公式(^2--^3)，解锁下一个Cytus挑战<br>需要：209.5物量 && 7谱面"},
    unlocked(){return hasUpgrade('ch',16)},
    canAfford() {return player.ch.note.gte(209.5)},
    cost() {return new Decimal(7)},
  },
  21:{ 
    fullDisplay() {return "GOODRAGE HD 7.5<br>解锁Phigros页面，Note^1.01<br>需要：237.1物量 && 11谱面"},
    unlocked(){return hasChallenge('c',12)},
    canAfford() {return player.ch.note.gte(237.1)},
    cost() {return new Decimal(11)},
  },
  22:{ 
    fullDisplay() {return "Diamond Eyes HD 8.2<br>解锁特殊note中的黄键<br>需要：271.3物量 && 16谱面"},
    unlocked(){return hasUpgrade('ch',21)},
    canAfford() {return player.ch.note.gte(271.3)},
    cost() {return new Decimal(16)},
  },
  23:{ 
    fullDisplay() {return "Aphasia HD 8.8<br>自动获得谱面并且它们不重置任何东西，更改RKS计算公式<br>需要：298物量 && 20谱面"},
    unlocked(){return hasUpgrade('ch',22)},
    canAfford() {return player.ch.note.gte(298)},
    cost() {return new Decimal(20)},
  },
  24:{ 
    fullDisplay() {return "Another Me HD 9.2<br>解锁第三个Cytus挑战，自动购买Cytus可购买<br>你知道吗，两个AM HD定数一样！<br>需要：304物量 && 21谱面"},
    unlocked(){return hasUpgrade('ch',23)},
    canAfford() {return player.ch.note.gte(304)},
    cost() {return new Decimal(21)},
  },
  25:{ 
    fullDisplay() {return "XING HD 9.9<br>Cytus可购买不消耗任何东西，解锁特殊note中的红键<br>需要：318.7物量 && 23谱面"},
    unlocked(){return hasChallenge('c',13)},
    canAfford() {return player.ch.note.gte(318.7)},
    cost() {return new Decimal(23)},
  },
  26:{ 
    fullDisplay() {return "Secret Illumination HD 10.5<br>Note获取量^1.02<br>作者更新这里时，Phigros 3.3.0更新！<br>需要：372物量 && 29谱面"},
    unlocked(){return hasUpgrade('ch',25)},
    canAfford() {return player.ch.note.gte(372)},
    cost() {return new Decimal(29)},
  },
  27:{ 
    fullDisplay() {return "Fractured Angel HD 10.9<br>Note获取量^1.05，解锁特殊note中的长条，解锁课题模式（未制作）<br>需要：395.5物量 && 33谱面"},
    unlocked(){return hasUpgrade('ch',26)},
  canAfford() {return player.ch.note.gte(395.5)},
    cost() {return new Decimal(33)},
  },
},
buyables:{
  11: {
				title: "获得一个蓝键",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = x.pow(2)
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {return x},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("需要 " + format(data.cost) + " 个PN(Phigros-Note)")+"<br>数量: " + format(player[this.layer].buyables[this.id]))
                },
      unlocked() { return hasUpgrade('ch',21)}, 
      canAfford() {
      return player[this.layer].pnote.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
     buyMax() {
					if (!this.canAfford()) return;
					if (tempBuy.gte(25) && tmp[this.layer].buyables[this.id].costScalingEnabled) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
     style: {'height':'100px'},
			},
  12: {
				title: "获得一个黄键",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = x.mul(3).pow(2.5).div(3)
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {return x},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("需要 " + format(data.cost) + " 个PN(Phigros-Note)")+"<br>数量: " + format(player[this.layer].buyables[this.id]))
                },
      unlocked() { return hasUpgrade('ch',22)}, 
      canAfford() {
      return player[this.layer].pnote.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
     buyMax() {
					if (!this.canAfford()) return;
					if (tempBuy.gte(25) && tmp[this.layer].buyables[this.id].costScalingEnabled) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
     style: {'height':'100px'},
			},
	21: {
				title: "获得一个红键",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = x.mul(2.5).pow(2.5).div(2.5)
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {return x},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("需要 " + format(data.cost) + " 个PN(Phigros-Note)")+"<br>数量: " + format(player[this.layer].buyables[this.id]))
                },
      unlocked() { return hasUpgrade('ch',25)}, 
      canAfford() {
      return player[this.layer].pnote.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
     buyMax() {
					if (!this.canAfford()) return;
					if (tempBuy.gte(25) && tmp[this.layer].buyables[this.id].costScalingEnabled) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
     style: {'height':'100px'},
			},
	22: {
				title: "获得一个长条",
				cost(x=player[this.layer].buyables[this.id]) { // cost for buying xth buyable, can be an object if there are multiple currencies
     if (x.gte(25)) x = x.pow(2).div(25)
     let cost = x.mul(3).pow(2).div(2)
    return cost.floor()
                },
				effect(x=player[this.layer].buyables[this.id]) {return x},
				display() { // Everything else displayed in the buyable button after the title
       let data = tmp[this.layer].buyables[this.id]
       return (("需要 " + format(data.cost) + " 个PN(Phigros-Note)")+"<br>数量: " + format(player[this.layer].buyables[this.id]))
                },
      unlocked() { return hasUpgrade('ch',27)}, 
      canAfford() {
      return player[this.layer].pnote.gte(tmp[this.layer].buyables[this.id].cost)},
       buy() { 
    player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
                },
     buyMax() {
					if (!this.canAfford()) return;
					if (tempBuy.gte(25) && tmp[this.layer].buyables[this.id].costScalingEnabled) tempBuy = tempBuy.times(25).sqrt();
					let target = tempBuy.plus(1).floor();
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
     style: {'height':'100px'},
			},
},
})//chart