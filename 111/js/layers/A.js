addLayer("A", {
 infoboxes: {
introBox: {
  title: "Welcome!",
  body(){return "Welcome to Anti-Anti-Softcap Tree (AAST)! This is a mod based on Anti-Softcap Tree. Instead of No-Softcaps, there will be a lot of softcaps in this mod, as well as timewalls."},
        },
},
    name: "A", 
    symbol: "A", 
    position: 0, 
    startData() { return {
 unlocked: true,
		points: new Decimal(0),
    }},
    passiveGeneration(){
 let a_pg=0.5
 if (hasUpgrade("B", 23))  a_pg=a_pg+1.5
 if (hasMilestone("C", 1))  a_pg=a_pg*10
 if (hasMilestone("C", 2))  a_pg=a_pg*10
 if (hasMilestone("D", 1))  a_pg=a_pg*100
 if (hasMilestone("D", 2))  a_pg=a_pg*1e4
 return hasUpgrade("B",11)?a_pg:0},
    color: "#4bdc13",
    requires: new Decimal(10), 
    resource: "A", 
    baseResource: "points", 
    baseAmount() {return player.points}, 
    type: "normal", 
    exponent: 0.5, 
    gainExp() {
 return new Decimal(1)
    },
    row: 0, 
    hotkeys: [
 {key: "a", description: "A: Reset for A points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    gainMult() { 
 mult = new Decimal(1)
 mult = mult.mul(hasUpgrade(this.layer,22)?3:1)
 mult = mult.mul(hasChallenge("A", 22)?20:1)
 mult = mult.mul(hasChallenge("A", 31)?20:1)
 mult = mult.mul(hasUpgrade("B",16)?upgradeEffect('B',16):1)
 mult = mult.mul(hasUpgrade("s",12)?upgradeEffect('s',12):1)
 mult = mult.mul(hasChallenge("C", 12)?10:1)
 mult = mult.mul(hasUpgrade('C',12)?10:1)
 mult = mult.pow(hasChallenge("A", 11)?1.1:1)
 mult = mult.pow(hasChallenge("C", 12)?1.025:1)
 mult = mult.mul(buyableEffect("B",11))
 mult = mult.mul(buyableEffect("E",11))
 if(mult.gte(2)) mult=mult.div(2).pow(0.5).mul(2)//sc3
 return mult
    },
    microtabs: {
 stuff: {       
     "Upgrades": {
  unlocked() {return true},
  content: [ "upgrades"]}, 
     "Challenges": {
  unlocked() {return (hasUpgrade("B", 25))},
  content: ["challenges"]    },
 }
    },
    tabFormat: [ ["infobox","introBox"],
 "main-display",
 "prestige-button",
 ["microtabs", "stuff"],
 ["blank", "25px"],
    ],
    upgrades: {
 11: {
     title:'A1',
     description: function() {return '2x points <br>layer A total:<br>' + format(this.effect()) +'x'},
     tooltip:"All the upgrades that multiples points with a static multiplier in this layer are counted in this upgrade.",
     effect(){
  let ef=n(1)
  if(hasUpgrade("A",11)) ef=ef.mul(2)
  if(hasUpgrade("A",12)) ef=ef.mul(2)
  if(hasUpgrade("A",13)) ef=ef.mul(2)
  if(hasUpgrade("A",14)) ef=ef.mul(2)
  if(hasUpgrade("A",16)) ef=ef.mul(3)
  if(hasUpgrade("A",21)) ef=ef.mul(3)
  if(hasUpgrade("A",23)) ef=ef.mul(3)
  if(hasUpgrade("A",25)) ef=ef.mul(5)
  if(hasUpgrade("A",26)) ef=ef.mul(4)
  if(hasUpgrade("A",41)) ef=ef.mul(1e10)
  if(hasUpgrade("A",43)) ef=ef.mul(5e20)
  if(hasUpgrade("A",45)) ef=ef.mul(1e100)
  if(hasUpgrade("A",46)) ef=ef.mul('1e1000')
  if(hasUpgrade("A",51)) ef=ef.mul(4000)
  if(hasUpgrade("A",54)) ef=ef.mul(3e4)
  ef=Decimal.pow(ef,buyableEffect("B",22))
  
  if(ef.gte(2)) ef=ef.div(2).pow(0.5).mul(2)//sc1
  if(ef.gte(10)) ef=ef.div(10).pow(0.6).mul(10)//sc4
  if(ef.gte(1e10)) ef=ef.div(1e10).pow(0.7).mul(1e10)//sc32
  if(ef.gte(1e12)) ef=ef.div(1e12).pow(0.8).mul(1e12)//sc35
  if(ef.gte(1e25)) ef=ef.div(1e25).pow(0.9).mul(1e25)//sc36
  if(ef.log10().gte(30)) ef = n(10).pow(ef.log10().sub(30).pow(0.1).add(30))//sc37
  return ef
     },
     cost:new Decimal(1),
 },
 12: {
     title:'A2',
     description: "2x points.",
     cost: new Decimal(1),
     unlocked() { return (hasUpgrade(this.layer, 11))},
 },
 13: {
     title:'A3',
     description: "2x points.",
     cost: new Decimal(2),
     unlocked() { return (hasUpgrade(this.layer, 12))},
 },
 14: {
     title:'A4',
     description: "2x points.",
     cost: new Decimal(4),
     unlocked() { return (hasUpgrade(this.layer, 13))},
 },
 15: {
     title:'A5',
     description: "point/s^1.1.",
     cost: new Decimal(12),
     unlocked() { return (hasUpgrade(this.layer, 14))},
     effect()  {let efa5=0.1
  if (hasUpgrade('B', 32))  efa5 = efa5+0.5
  if (hasUpgrade('B', 35))  efa5 = efa5+1.5
  if (inChallenge("A", 12))  efa5 = efa5*-1
  if (inChallenge("A", 31))  efa5 = 0
  let ef= player.points.pow(efa5).add(1)
  if (inChallenge("A", 22))  ef = ef.pow(-2)
  if (hasUpgrade('s',14)) ef = ef.pow(upgradeEffect('s',14))
  if(ef.gte(2)) ef=ef.div(2).pow(0.5).mul(2)//sc2
  if(ef.gte(100)) ef=ef.div(100).pow(0.5).mul(100)//sc19
  if(ef.gte(1e6)) ef=ef.div(1e6).pow(0.5).mul(1e6)//sc23
  return ef
     },
     effectDisplay() { return format(this.effect())+"x" }, 
 },
 16: {
     title:'A5.5',
     description: "3x points.",
     cost:new Decimal(200),
     unlocked() { return (hasUpgrade(this.layer, 25))},
 },
 21: {
     title:'A6',
     description: "3x points.",
     cost:new Decimal(20),
     unlocked() { return (hasUpgrade(this.layer, 15))},
 },
 22: {
     title:'A7',
     description: "3x A.",
     cost: new Decimal(30),
     unlocked() { return (hasUpgrade(this.layer, 21))},
 },
 23: {
     title:'A8',
     description: "3x points.",
     cost:new Decimal(100),
     unlocked() { return (hasUpgrade(this.layer, 22))},
 },
 24: {
     title:'A9',
     description: "lg(points) mults point/s.",
     cost: new Decimal(180),
     unlocked() { return (hasUpgrade(this.layer, 23))},
     effect()  { 
  let efa9 = player.points.add(10).log(10)
  if (hasUpgrade('A',31)) efa9 = efa9.mul(5)
  if (hasUpgrade('A',32)) efa9 = efa9.mul(5)
  if (hasUpgrade('A',33)) efa9 = efa9.pow(1.3)
  if (hasUpgrade('A',34)) efa9 = efa9.pow(1.25)
  if (hasUpgrade('B',33)&&!inChallenge('A',12)) efa9 = efa9.pow(1.5)
  if (hasUpgrade('B',34)&&!inChallenge('A',12)) efa9 = efa9.pow(5)
  if (hasUpgrade('A',52)) efa9 = efa9.pow(1.15)
  if (hasUpgrade('s',13)&&!inChallenge('A',12)) efa9 = efa9.pow(upgradeEffect('s',13))

  if (inChallenge("A",12)) efa9 = efa9.pow(-1)
  if (inChallenge("A",22)) efa9 = efa9.pow(-0.5)
  if (inChallenge("A",31)) efa9 = n(1)
  if(efa9.gte(2)) efa9=efa9.div(2).pow(0.5).mul(2)//sc5
  if(efa9.gte(5)) efa9=efa9.div(5).pow(0.6).mul(5)//sc6
  if(efa9.gte(10)) efa9=efa9.div(10).pow(0.7).mul(10)//sc7
  if(efa9.gte(100)) efa9=efa9.div(100).pow(0.8).mul(100)//sc22
  return efa9;   
     },
     effectDisplay() { return format(this.effect())+"x" }, 
 },
 25: {
     title:'A10',
     description: "5x points, unlock 2 upgrades.",
     cost:new Decimal(350),
     unlocked() { return (hasUpgrade(this.layer, 24))},
 },
 26: {
     title:'A10.5',
     description: "4x points.",
     cost:new Decimal(400),
     unlocked() { return (hasUpgrade(this.layer, 25))},
 },
 31: {
     title:'A11',
     description: "A9 x5.",
     cost:new Decimal(450),
     unlocked() { return (hasUpgrade(this.layer, 26))},
 },
 32: {
     title:'A12',
     description: "A9 x5.",
     cost:new Decimal(750),
     unlocked() { return (hasUpgrade(this.layer, 31))},
 },
 33: {
     title:'A13',
     description: "A9^1.3.",
     cost:new Decimal(1500),
     unlocked() { return (hasUpgrade(this.layer, 32))},
 },
 34: {
     title:'A14',
     description: "A9^1.25.",
     cost:new Decimal(2e3),
     unlocked() { return (hasUpgrade(this.layer, 33))},
 },
 35: {
     title:'A15',
     description: "A^0.2 boost points. unlock B and softcap upgrades.",
     cost: new Decimal(3e3),
     unlocked() { return (hasUpgrade(this.layer, 34))},
     effect()  { 
  let efa15 = 0.2
  if (hasUpgrade('A', 36))  efa15 = efa15*1.5        
  if (hasUpgrade('A', 42))  efa15 = efa15*15    
  let ef = player[this.layer].points.pow(efa15);   
  if(ef.gte(5)) ef=ef.div(5).pow(0.5).mul(5)//sc8
  if(ef.gte(1e10)) ef=ef.div(1e10).pow(0.1).mul(1e10)//sc30
  return ef
     },
     effectDisplay() { return format(this.effect())+"x" }, 
 },
 36: {
     title:'A15.5',
     description: "A15 ^1.5",
     cost:new Decimal('5e3'),
     unlocked() { return (hasUpgrade(this.layer, 35))},
 },
 41: {
     title:'A16',
     description: "1e10x points.",
     cost:new Decimal('1e14'),
     unlocked() { return (hasChallenge(this.layer, 31))},
 },
 42: {
     title:'A17',
     description: "A15 ^15.",
     cost:new Decimal('1e15'),
     unlocked() { return (hasUpgrade(this.layer, 41))},
 },
 43: {
     title:'A18',
     description: "5e20x points.",
     cost:new Decimal('2e16'),
     unlocked() { return (hasUpgrade(this.layer, 42))},
 },
 44: {
     title:'A19',
     description: "B5.5 and B10.5 ^15",
     cost:new Decimal('1e18'),
     unlocked() { return (hasUpgrade(this.layer, 43))},
 },
 45: {
     title:'A20',
     description: "1e100x points,C ^1.5.",
     cost:new Decimal('2e20'),
     unlocked() { return (hasUpgrade(this.layer, 44))},
 },
 46: {
     title:'A20.5',
     description: "1e1000x points,C ^1.5.",
     cost:new Decimal('5e21'),
     unlocked() { return (hasUpgrade(this.layer, 45))},
 },
 51: {
     title:'A21',
     description: "4000x points.",
     cost:new Decimal('1e73'),
     unlocked() { return (hasChallenge('C', 11))},
 },
 52: {
     title:'A22',
     description: "D x2,A9^1.15.",
     cost:new Decimal('1e76'),
     unlocked() { return (hasUpgrade(this.layer, 51))},
 },
 53: {
     title:'A23',
     description: "B26 x10.",
     cost:new Decimal('5e264'),
     unlocked() { return (hasUpgrade('B', 62))},
 },
 54: {
     title:'A24',
     description: "B26 x10,x3e4 pts.",
     cost:new Decimal('2e277'),
     unlocked() { return (hasUpgrade(this.layer, 53))},
 },
 55: {
     title:'A25',
     description: "Bb3-4 are stronger.",
     cost:new Decimal('1e322'),
     unlocked() { return (hasUpgrade(this.layer, 54))},
 },
 61: {
     title:'A26',
     description: "mult to C based on Bb1 eff.",
     cost:new Decimal('1e1896'),
     effect()  { 
  let efa26 = buyableEffect('B',11).pow(0.02).times(buyableEffect('B',11).add(10).log(10).pow(1.5))
  return efa26;},
     effectDisplay() { return format(this.effect())+"x" }, 
     unlocked() { return (hasMilestone('B', 6))},
 },
 62: {
     title:'A27',
     description: "mult to B26 based on Bb1 eff.",
     cost:new Decimal('1e2020'),
     effect()  { 
  let efa27 = buyableEffect('B',11).add(10).log(10).pow(1.2)
  return efa27;},
     effectDisplay() { return format(this.effect())+"x" }, 
     unlocked() { return (hasUpgrade(this.layer, 61))},
 },
 63: {
     title:'A28',
     description: "Bb5 x1.02.",
     cost:new Decimal('1e2391'),
     unlocked() { return (hasUpgrade(this.layer, 62))},
 },
 64: {
     title:'A29',
     description: "mult to D based on Bb1 eff.",
     cost:new Decimal('1e2488'),
     effect()  { 
  let efa29 = buyableEffect('B',11).pow(0.006).times(buyableEffect('B',11).add(10).log(10).pow(1.25))
  return efa29;},
     effectDisplay() { return format(this.effect())+"x" }, 
     unlocked() { return (hasUpgrade(this.layer, 63))},
 },
 65: {
     title:'A30',
     description: "nerf Bb1-5's price scaling .",
     cost:new Decimal('1e2541'),
     unlocked() { return (hasUpgrade(this.layer, 64))},
 },
    },
    challenges: {
 11: {
     name: "Ac1",
     completionLimit: 1,
     challengeDescription() {return "points ^0.75"},
     unlocked() { return (hasUpgrade("B", 25))},
     goalDescription: '2.5e5 points /sec',
     canComplete() {return getPointGen().gte('2.5e5')},
     rewardDescription: "A and B ^1.1.",
 },
 12: {
     name: "Ac2",
     completionLimit: 1,
     challengeDescription() {return "A5 exponent x-1 and A9 effect ^-1"},
     unlocked() {  return (hasChallenge(this.layer, 11))},
     goalDescription: '1e6 points with at least 2e4 points /sec',
     canComplete() {return player.points.gte('1e6')&&getPointGen().gte(2e4)},
     rewardDescription: "B x10.",
 },
 21: {
     name: "Ac3",
     completionLimit: 1,
     challengeDescription() {return "points ^0.5"},
     unlocked() { return (hasUpgrade("B", 32))},
     goalDescription: '1.35e5 points /sec',
     canComplete() {return getPointGen().gte('1.35e5')},
     rewardDescription: "50x points and 10x B.",
 },
 22: {
     name: "Ac4",
     completionLimit: 1,
     challengeDescription() {return "A5 effect ^-2 and A9 effect ^-0.5"},
     unlocked() { return (hasUpgrade("B", 35))},
     goalDescription: '5 points',
     canComplete() {return player.points.gte('5')},
     rewardDescription: "100x points,20x A,10x B.<br>unlock C.",
 },
 31: {
     name: "Ac5",
     completionLimit: 1,
     challengeDescription() {return "points ^0.15 and A5/A9 are disabled"},
     unlocked() { return (hasUpgrade("C", 15))},
     goalDescription: '7.5e5 points /sec',
     canComplete() {return getPointGen().gte(7.5e5)},
     rewardDescription: "2e5x points,20x A,2x C.",
 },
 32: {
     name: "Ac6",
     completionLimit: 1,
     challengeDescription() {return "Bb1-2 ^0.5"},
     unlocked() { return (hasMilestone("D", 3))},
     goalDescription: '1e302 points',
     canComplete() {return player.points.gte('1e302')},
     rewardDescription: "^1.01 points.",
 },
 41: {
     name: "Ac7",
     completionLimit: 5,
     challengeDescription: function() {
  return "Bb3-5 are disabled <br> Completion: " +challengeCompletions("A", 41) + "/5"},
     unlocked() { return (hasMilestone("B", 4))},
     goal(){
  if (challengeCompletions("A", 41) == 0) return Decimal.pow(10,777);
  if (challengeCompletions("A", 41) == 1) return Decimal.pow(10,1325);
  if (challengeCompletions("A", 41) == 2) return Decimal.pow(10,1540);
  if (challengeCompletions("A", 41) == 3) return Decimal.pow(10,2024);
  if (challengeCompletions("A", 41) >= 4) return Decimal.pow(10,2600);
     },     
     goalDescription:  function() {return format(this.goal())+' points'},
     canComplete() {return player.points.gte(this.goal())},
     rewardDescription: "boost to pts base on Bb1-2.",
     rewardEffect() {
  let bas = Decimal.pow(challengeCompletions("A", 41),1.25)
  let ef1 = Decimal.pow(buyableEffect('B',11),0.12+bas/40)
  let ef2 = Decimal.pow(buyableEffect('B',12),0.12+bas/40)
  let ef = Decimal.mul(ef1,ef2)
  if (hasUpgrade('E',52)) ef=Decimal.pow(ef,upgradeEffect('E',52))
  if (challengeCompletions("A", 41) >= 1)  return ef
  else return new Decimal(1)
     },
     rewardDisplay() {return format(this.rewardEffect())+"x"},
 },
    }
})
