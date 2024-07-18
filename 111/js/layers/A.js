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
 mult = mult.mul(hasChallenge("D", 22)?1e15:1)
 mult = mult.mul(hasUpgrade('C',12)?10:1)
 mult = mult.mul(hasUpgrade("D", 31)?upgradeEffect('D',31):1)
 mult = mult.mul(hasUpgrade("D", 33)?1e10:1)
 mult = mult.mul(hasUpgrade("B",52)?upgradeEffect("B",52):1)
 mult = mult.pow(hasChallenge("A", 11)?1.1:1)
 mult = mult.pow(hasChallenge("C", 12)?1.025:1)
 mult = mult.pow(hasChallenge("D", 22)?1.1:1)
 mult = mult.pow(hasUpgrade('A',51)?1.25:1)
 mult = mult.pow(hasUpgrade('B',53)?2:1)
 mult = mult.pow(hasUpgrade('B',73)?upgradeEffect('B',73):1)
 mult = mult.mul(buyableEffect("B",11))
 mult = mult.mul(buyableEffect("E",11))
 if(mult.gte(2)) mult=mult.div(2).pow(0.5).mul(2)//sc3
 if(mult.gte(1e7)) mult=mult.div(1e7).pow(0.3).mul(1e7)//sc48
 if(mult.gte(1e9)) mult=mult.div(1e9).pow(0.3).mul(1e9)//sc59
 if(mult.gte(1e100)) mult=mult.div(1e100).pow(0.8).mul(1e100)//sc89
 if(mult.gte(1e250)) mult=mult.div(1e250).pow(0.8).mul(1e250)//sc99
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
     "Buyables": {
  unlocked() {return (hasUpgrade("B", 66))},
  content: ["buyables"]    },
 }
    },
    tabFormat: [ ["infobox","introBox"],
 "main-display",
 "prestige-button",
 ["microtabs", "stuff"],
 ["blank", "25px"],
    ],
    automate(){
  if (player.B.auto2&&hasMilestone("B",5)) {
   layers.A.buyables[11].buyMax()  ;
   layers.A.buyables[12].buyMax()  ;
  }
  },
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
  if(hasUpgrade("A",54)) ef=ef.mul(3e4)
  
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
  if (hasUpgrade('A',52)) efa9 = efa9.pow(1.25)
  if (hasUpgrade('s',13)&&!inChallenge('A',12)) efa9 = efa9.pow(upgradeEffect('s',13))

  if (inChallenge("A",12)) efa9 = efa9.pow(-1)
  if (inChallenge("A",22)) efa9 = efa9.pow(-0.5)
  if (inChallenge("A",31)) efa9 = n(1)
  if(efa9.gte(2)) efa9=efa9.div(2).pow(0.5).mul(2)//sc5
  if(efa9.gte(5)) efa9=efa9.div(5).pow(0.6).mul(5)//sc6
  if(efa9.gte(10)) efa9=efa9.div(10).pow(0.7).mul(10)//sc7
  if(efa9.gte(100)) efa9=efa9.div(100).pow(0.8).mul(100)//sc22
  if(efa9.gte(1e20)) efa9=efa9.div(1e20).pow(0.9).mul(1e20)//sc49
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
  if (hasUpgrade('A',52)) ef = ef.pow(1.5)
  if(ef.gte(5)) ef=ef.div(5).pow(0.5).mul(5)//sc8
  if(ef.gte(1e10)) ef=ef.div(1e10).pow(0.1).mul(1e10)//sc30
  if(ef.gte(1e20)) ef=ef.div(1e20).pow(0.1).mul(1e20)//sc50
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
     description: "A ^1.1.",
     cost:new Decimal('5e32'),
     unlocked() { return (hasChallenge('C', 11))},
 },
 52: {
     title:'A22',
     description: "D ^1.5, A9 ^1.25 and A15 ^1.5.<br>unlock a C challenge.",
     cost:new Decimal("5e33"),
     unlocked() { return (hasUpgrade(this.layer, 51))},
 },
 53: {
     title:'A23',
     description: "B26 ^5.",
     cost:new Decimal('1e103'),
     unlocked() { return (hasUpgrade('B', 62))},
 },
 54: {
     title:'A24',
     description: "log2(slog(points)) boost Bb1-2 base.",
     cost:new Decimal('1e104'),
     effect()  { 
   let ef = player.points.max(1).slog().max(2).log(2)
   return ef;  
   },
   effectDisplay() { return "^"+format(this.effect(),4)},
     unlocked() { return (hasUpgrade(this.layer, 53))},
 },
 55: {
     title:'A25',
     description: "A24^0.5 boost Bb3-4 base.",
     cost:new Decimal('1e112'),
     effect()  { 
   let ef = upgradeEffect('A',54).pow(0.5).max(1)
   return ef;  
   },
   effectDisplay() { return "^"+format(this.effect(),4)},
     unlocked() { return (hasUpgrade(this.layer, 54))},
 },
 56: {
     title:'A25.5',
     description: "D15.5 affects Bb and A25^0.5 boost Bb5 base.",
     cost:new Decimal('1e114'),
     effect()  { 
   let ef = upgradeEffect('A',55).pow(0.5).max(1)
   return ef;  
   },
   effectDisplay() { return "^"+format(this.effect(),4)},
     unlocked() { return (hasUpgrade(this.layer, 55))},
 },
 61: {
     title:'A26',
     description: "mult to C and D based on Bb1 eff.",
     cost:new Decimal('1e350'),
     effect()  { 
  let ef = buyableEffect('B',11).pow(0.02).times(buyableEffect('B',11).add(10).log(10).pow(1.5))
  if(hasUpgrade('A',62)) ef=ef.mul(upgradeEffect('A',62))
  if(ef.gte(1e50)) ef=ef.div(1e50).pow(0.25).mul(1e50)//sc95
  return ef},
     effectDisplay() { return format(this.effect())+"x" }, 
     unlocked() { return (hasMilestone('B', 6))},
 },
 62: {
     title:'A27',
     description: "mult to A26 based on Bb2 eff.",
     cost:new Decimal('3.68e368'),
     effect()  { 
  let efa27 = buyableEffect('B',12).add(2).log(2).pow(5)
  return efa27;},
     effectDisplay() { return format(this.effect())+"x" }, 
     unlocked() { return (hasUpgrade(this.layer, 61))},
 },
 63: {
     title:'A28',
     description: "Ab2 x1.2.",
     cost:new Decimal('1e500'),
     unlocked() { return (hasUpgrade(this.layer, 62))},
 },
 64: {
     title:'A29',
     description: "mult to Ab1 based on Bb1 eff.",
     cost:new Decimal('5.26e526'),
     effect()  { 
  let ef = buyableEffect('B',11).pow(1.5)
  return ef},
     effectDisplay() { return format(this.effect())+"x"},
     tooltip:"The effect is weak actually.",
     unlocked() { return (hasUpgrade(this.layer, 63))},
 },
 65: {
     title:'A30',
     description: "remove Bb1-5's base price.",
     cost:new Decimal('1e529'),
     unlocked() { return (hasUpgrade(this.layer, 64))},
 },
 66: {
     title:'A30.5',
     description: "remove Ab-2's base price.",
     cost:new Decimal('1e535'),
     unlocked() { return (hasUpgrade(this.layer, 65))},
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
     challengeDescription() {return "Points gain is log10(points)"},
     unlocked() { return (hasMilestone("D", 3))},
     goalDescription: format(n(2).pow(1024).log10(),3)+' points /sec',
     canComplete() {return getPointGen().gte(n(2).pow(1024).log10())},
     rewardDescription: "^1.5 D.",
 },
 41: {
     name: "Ac7",
     completionLimit() {
      let lim = 5
      if(hasUpgrade('B',75)) lim = 10
      return lim
     },
     challengeDescription: function() {
  return "Points gain ^^0.1.<br> Completion: " +challengeCompletions("A", 41) + "/"+this.completionLimit()},
     unlocked() { return (hasMilestone("B", 4))},
     goal(){
  if (challengeCompletions("A", 41) == 0) return Decimal.pow(10,32);
  if (challengeCompletions("A", 41) == 1) return Decimal.pow(10,38);
  if (challengeCompletions("A", 41) == 2) return Decimal.pow(10,41).mul(2);
  if (challengeCompletions("A", 41) == 3) return Decimal.pow(10,44);
  if (challengeCompletions("A", 41) == 4) return Decimal.pow(10,54);
  if (challengeCompletions("A", 41) == 5 && hasUpgrade('B',75)) return Decimal.pow(10,111);
  if (challengeCompletions("A", 41) == 5 && !hasUpgrade('B',75)) return Decimal.pow(10,1/0);
  if (challengeCompletions("A", 41) == 6) return Decimal.pow(10,121);
  if (challengeCompletions("A", 41) == 7) return Decimal.pow(10,150);
  if (challengeCompletions("A", 41) == 8) return Decimal.pow(10,320);
  if (challengeCompletions("A", 41) == 9) return Decimal.pow(10,404);
  if (challengeCompletions("A", 41) == 10) return Decimal.pow(10,1/0);
     },     
     goalDescription:  function() {return format(this.goal())+' points'},
     canComplete() {return player.points.gte(this.goal())},
     rewardDescription: "Boost Ab2 Effect.",
     rewardEffect() {
  let ef = n(1).add(n(challengeCompletions('A',41)).mul(0.05))
  if (challengeCompletions("A", 41) >= 1)  return ef
  else return new Decimal(1)
     },
     rewardDisplay() {return "^"+format(this.rewardEffect())},
 },
    },
    buyables:{
  11: {
   title: "Ab1", 
   baseCost() {
    let cost = n(1e125)
    if(hasUpgrade('A',66)) cost=n(1)
    return cost
   },
   cost(x=player[this.layer].buyables[this.id]) {
  let cost = n(this.baseCost()).mul(n(2).pow(x.pow(1.05)))
  return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   buy() {
   if (!hasMilestone('B',4)) player[this.layer].points = player[this.layer].points.sub(this.cost())
   setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
   buyMax() {
   if (!this.canAfford()) return;
			 	let tempBuy = player.A.points.div(this.baseCost()).max(1).log(2).root(1.05)
   let target = tempBuy.plus(1).floor();
   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
   base(){   let base = n(100)
   if(hasUpgrade('B',71)) base=base.mul(10)
   if(hasUpgrade('s',25)) base=base.pow(upgradeEffect('s',25))
  return base
   },
   effect(x=player[this.layer].buyables[this.id]) { 
   let ef = Decimal.pow(this.base(),x)
   if(hasUpgrade('A',64)) ef = ef.mul(upgradeEffect('A',64))
   if(ef.gte(1e200)) ef=ef.div(1e200).pow(0.25).mul(1e200)//sc85
   if(ef.log10().gte(500)) ef = n(10).pow(ef.log10().sub(500).pow(0.5).add(500))//sc90
   return ef},
   display() { 
   return "Bb1,2,3,4 x"+ format(this.base()) + " effect<br>Cost: " + format(this.cost()) + " A<br>Amount: " + player[this.layer].buyables[this.id]  +"<br>  Effect: x" + format(this.effect()) + " effect" },
   unlocked() { return hasUpgrade('B',66) }
  },
  12: {
   title: "Ab2", 
   baseCost() {
    let cost = n(1e167)
    if(hasUpgrade('A',66)) cost=n(1)
    return cost
   },
   cost(x=player[this.layer].buyables[this.id]) {
  let cost = n(this.baseCost()).mul(n(3).pow(x.pow(1.1)))
  return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   buy() {
   if (!hasMilestone('B',4)) player[this.layer].points = player[this.layer].points.sub(this.cost())
   setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
   buyMax() {
   if (!this.canAfford()) return;
			 	let tempBuy = player.A.points.div(this.baseCost()).max(1).log(3).root(1.1)
   let target = tempBuy.plus(1).floor();
   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target);
				},
			base() {
			 let base=n(1)
			 if(hasUpgrade('s',26)) base=base.add(upgradeEffect('s',26))
			 return base
			},
   effect(x=player[this.layer].buyables[this.id]) { 
   let ef = this.base().mul(x)
   if(hasChallenge('A',41)) ef=ef.pow(challengeEffect('A',41))
   if(hasUpgrade('A',63)) ef=ef.mul(1.2)
   if(hasUpgrade('B',82)) ef=ef.mul(1.35)
   if(ef.gte(10)) ef=ef.div(10).pow(0.5).mul(10)//sc85
   if(ef.gte(100)) ef=ef.div(100).pow(0.5).mul(100)//sc93
   return ef},
   display() { 
   return "All Bbs' Effective Amount +"+ format(this.base()) + "<br>Cost: " + format(this.cost()) + " A<br>Amount: " + player[this.layer].buyables[this.id]  +"<br>  Effect: +" + format(this.effect()) + " Amount" },
   unlocked() { return hasMilestone('B',4) }
  },
    },
})
