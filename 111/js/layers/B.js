addLayer("B", {
    name: "B", 
    symbol: "B", 
    position: 1, 
    startData() { return {
  unlocked: false,
		points: new Decimal(0),
		pointsAc1: new Decimal(0),
    }},
    passiveGeneration(){    let pg=1
  if (hasMilestone("C", 2))  pg=pg+2
  if (hasMilestone("C", 3))  pg=pg*1000
  if (hasMilestone("D", 1))  pg=pg*100
  if (hasMilestone("D", 2))  pg=pg*100
  return (hasUpgrade("C", 11))?pg:0},
    color: "#7AAA2C",
    requires: new Decimal(1e4), 
    resource: "B", 
    baseResource: "A", 
    baseAmount() {return player.A.points}, 
    type: "normal", 
    exponent: 0.2, 
    gainExp() {
  return new Decimal(1)
    },
    row: 0, 
    update(diff) {
     if(inChallenge('A',11)) player.B.pointsAc1=player.B.pointsAc1.max(player.points).min(1e8)
    },
    hotkeys: [
  {key: "b", description: "B: Reset for B points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){  if (player.B.unlocked) return true
  else return (hasUpgrade("A", 35))},
    gainMult() { 
  mult = new Decimal(1)
  mult = mult.mul(hasUpgrade(this.layer,14)?2:1)
  mult = mult.mul(hasUpgrade(this.layer,15)?1.5:1)
  mult = mult.mul(hasUpgrade(this.layer,22)?2:1)
  mult = mult.mul(hasUpgrade(this.layer,24)?2:1)
  mult = mult.mul(hasUpgrade(this.layer,25)?2:1)
  mult = mult.mul(hasUpgrade("s",12)?upgradeEffect('s',12):1)
  mult = mult.mul(hasUpgrade('C',12)?10:1)
  mult = mult.mul(hasUpgrade('C',25)?50:1)
  mult = mult.pow(hasChallenge("A", 11)?1.1:1)
  mult = mult.mul(hasChallenge("A", 12)?10:1)
  mult = mult.mul(hasChallenge("A", 21)?10:1)
  mult = mult.mul(hasChallenge("A", 22)?10:1)
  mult = mult.mul(buyableEffect("B",12))
  mult = mult.mul(hasUpgrade("B", 34)?50:1)
  mult = mult.mul(hasUpgrade("B", 41)?15:1)
  mult = mult.mul(hasUpgrade("B", 51)?20:1)
  mult = mult.mul(hasUpgrade("B", 53)?30:1)
  mult = mult.mul(hasUpgrade("B", 61)?upgradeEffect('B',61):1)
  mult = mult.mul(hasMilestone("B", 6)?100:1)
  mult = mult.mul(hasMilestone("B", 7)?1e5:1)
  mult = mult.mul(buyableEffect("E",12))
  mult = mult.mul(hasUpgrade("E", 82)?upgradeEffect('E',82):1)  
  mult = mult.mul(hasUpgrade("E",92)?upgradeEffect("E",92):1)
  mult = mult.pow(hasUpgrade("E", 65)?1.004:1)
  mult = mult.pow(hasUpgrade("B", 36)?1.1:1)
if(mult.gte(10)) mult=mult.div(10).pow(0.5).mul(10)//sc15
  return mult
    },
    microtabs: {
  stuff: {       
   "Upgrades": {
       unlocked() {return true},
       content: [ "upgrades"]}, 
   "Buyables": {
       unlocked() {return (hasMilestone("D", 2))},
       content: [
       ["raw-html", () => `<h4 style="opacity:.5">Bbs' cost increase faster above 400 purchases,<br> can be delayed in upcoming contents.</h4>`],"buyables"]}, 
   "Milestones": {
       unlocked() {return (hasUpgrade("B", 53))},
       content: ["milestones"]  },
  }
    },
    tabFormat: [
  "main-display",
  "prestige-button",
  ["microtabs", "stuff"],
  ["blank", "25px"],
    ],
    branches: ["A"],
    milestones: {
  0: {requirementDescription: "1e65 total B",
   done() {return player[this.layer].total.gte('1e65')}, 
   effectDescription: "buyables cost nothing.",
  },
  1: {requirementDescription: "1e74 total B",
   done() {return player[this.layer].total.gte('1e74')}, 
   effectDescription: "B26 effect divide Bb cost.",
  },
  2: {requirementDescription: "1e111 total B",
   done() {return player[this.layer].total.gte('1e111')}, 
   effectDescription: "autobuy B buyables.",
   toggles: [ ["B","auto"] ]
  },
  3: {requirementDescription: "1e140 total B",
   done() {return player[this.layer].total.gte('1e140')}, 
   effectDescription: "unlock 5th buyable.",
  },
  4: {requirementDescription: "1e200 total B",
   done() {return player[this.layer].total.gte('1e200')}, 
   effectDescription: "unlock a chal.",
  },
  5: {requirementDescription: "1.79e308 total B",
   done() {return player[this.layer].total.gte('1.79e308')}, 
   effectDescription: "100x C/D passive.",
  },
  6: {requirementDescription: "1e658 total B",
   done() {return player[this.layer].total.gte('1e658')}, 
   effectDescription: "x100 B,unlock a upg.",
  },
  7: {requirementDescription: "1e1700 total B",
   done() {return player[this.layer].total.gte('1e1700')}, 
   effectDescription: "x1e5 B,unlock a layer.",
  },
  8: {requirementDescription: "1e2345 total B",
   done() {return player[this.layer].total.gte('1e2345')}, 
   effectDescription: "bulk buy x10 B buyables(currently does nothing).",
  },
    },
    upgrades: {
  11: {
   title:'B1',
   description: function() {return '5x points. 0.5x passive generate A.<br>layer B total:<br>'+ format(this.effect()) +'x'},
   tooltip:"All the upgrades that multiples points with a static multiplier in this layer are counted in this upgrade.",
   effect()  { 
       let ef = 5
       if (hasUpgrade('B',12)) ef = ef*5
       if (hasUpgrade('B',13)) ef = ef*5
       if (hasUpgrade('B',15)) ef = ef*5
       if (hasUpgrade('B',24)) ef = ef*10
       if (hasUpgrade('B',25)) ef = ef*10
       if (hasUpgrade('B',31)) ef = ef*20
       if (hasUpgrade('B',36)) ef = ef*1e3
       if (hasUpgrade('B',42)) ef = ef*2e4
       if (hasUpgrade('B',64)) ef = ef*5e4
       if (hasUpgrade('B',72)) ef = ef*5e4
       if (hasUpgrade('B',81)) ef = ef*1e5
       
       ef=Decimal.pow(ef,buyableEffect("B",21))
       if(ef.gte(5)) ef=ef.div(5).pow(0.5).mul(5)//sc10
       if(ef.gte(100)) ef=ef.div(100).pow(0.5).mul(100)//sc16
       if(ef.gte(1000)) ef=ef.div(1000).pow(0.5).mul(1000)//sc25
       return ef;    
   },
   cost:new Decimal(10),
  },
  12: {
   title:'B2',
   description: "5x points.",
   cost:new Decimal(15),
   unlocked() { return (hasUpgrade(this.layer, 11))},
  },
  13: {
   title:'B3',
   description: "5x points.",
   cost:new Decimal(20),
   unlocked() { return (hasUpgrade(this.layer, 12))},
  },
  14: {
   title:'B4',
   description: "2x B.",
   cost:new Decimal(25),
   unlocked() { return (hasUpgrade(this.layer, 13))},
  },
  15: {
   title:'B5',
   description: "1.5x B,5x points.",
   cost:new Decimal(60),
   unlocked() { return (hasUpgrade(this.layer, 14))},
  },
  16: {
   title:'B5.5',
   description: "B^0.2 boost A.",
   cost: new Decimal(80),
   unlocked() { return (hasUpgrade(this.layer, 15))},
   effect()  { 
       let efb = 0.2
       
       let ef=player[this.layer].points.pow(efb); 
       if(hasUpgrade('A',44)) ef=ef.pow(15)
       if(ef.gte(2.5)) ef=ef.div(2.5).pow(0.5).mul(2.5)//sc12
       if(ef.gte(1e4)) ef=ef.div(1e4).pow(0.1).mul(1e4)//sc34
       if(ef.gte(1e6)) ef=ef.div(1e6).pow(0.01).mul(1e6)//sc34
       return ef
   },
   effectDisplay() { return format(this.effect())+"x" }, 
  },
  21: {
   title:'B6',
   description: "B^0.3 boost points.",
   cost: new Decimal(140),
   unlocked() { return (hasUpgrade(this.layer, 15))},
   effect()  { 
       let efb6 = 0.3
       if (hasUpgrade('B', 32))  efb6 = efb6*1.5
       if (hasUpgrade('C', 14))  efb6 = efb6*15
       if (hasUpgrade('C', 22))  efb6 = efb6*10

       let ef=player[this.layer].points.pow(efb6);  
       if(ef.gte(4)) ef=ef.div(4).pow(0.5).mul(4)//sc13
       if(ef.gte(25)) ef=ef.div(25).pow(0.2).mul(25)//sc21
       if(ef.gte(1e6)) ef=ef.div(1e6).pow(0.1).mul(1e6)//sc27
       return ef
   },
   effectDisplay() { return format(this.effect())+"x" }, 
  },
  22: {
   title:'B7',
   description: "2x B.",
   cost:new Decimal(200),
   unlocked() { return (hasUpgrade(this.layer, 21))},
  },
  23: {
   title:'B8',
   description: "An additional 1.5x A passive generation.",
   cost:new Decimal(350),
   unlocked() { return (hasUpgrade(this.layer, 22))},
  },
  24: {
   title:'B9',
   description: "2x B,10x points.",
   cost:new Decimal(600),
   unlocked() { return (hasUpgrade(this.layer, 23))},
  },
  25: {
   title:'B10',
   description: "2x B,10x points.<br>unlock A chal.",
   cost:new Decimal(2e3),
   unlocked() { return (hasUpgrade(this.layer, 24))},
  },
  26: {
   title:'B10.5',
   description: "Best points in Ac1 boost points.(capped at 1e8)",
   cost: new Decimal(10000),
   unlocked() { return (hasUpgrade(this.layer, 25))},
   effect()  { 
       let ef=player.B.pointsAc1.min(1e8).pow(0.1).max(1)
       if(hasUpgrade('A',44)) ef=ef.pow(15)
       if(ef.gte(5)) ef=ef.div(5).pow(0.5).mul(5)//sc18
       return ef
   },
   tooltip() {return "Current best points: "+format(player.B.pointsAc1)},
   effectDisplay() { return format(this.effect())+"x" }, 
  },
  31: {
   title:'B11',
   description: "20x points.",
   cost:new Decimal(3e4),
   unlocked() { return (hasUpgrade(this.layer, 25))},
  },
  32: {
   title:'B12',
   description: "A5 exp+0.5, unlock a challenge.",
   cost:new Decimal(5e4),
   unlocked() { return (hasUpgrade(this.layer, 31))},
  },
  33: {
   title:'B13',
   description: "A9^1.5.",
   tooltip: "Make sure you have completed Ac2",
   cost:new Decimal(1.5e5),
   unlocked() { return (hasUpgrade(this.layer, 32))},
  },
  34: {
   title:'B14',
   description: "A9^5 and B x50.",
   cost:new Decimal(2e5),
   unlocked() { return (hasUpgrade(this.layer, 33))},
  },
  35: {
   title:'B15',
   description: "A5 exp+1 and unlock a challenge.",
   cost:new Decimal(1.5e6),
   unlocked() { return (hasUpgrade(this.layer, 34))},
  },
  36: {
   title:'B15.5',
   description: "B ^1.1 and 1000x points.",
   cost:new Decimal(1e7),
   unlocked() { return (hasUpgrade(this.layer, 35))},
  },
  41: {
   title:'B16',
   description: "x15 B,unlock 2nd bab.",
   cost:new Decimal('3e39'),
   unlocked() { return player.B.total.gte('1e39')},
  },
  42: {
   title:'B17',
   description: "x2e4 points<br>,unlock 3rd bab.",
   cost:new Decimal('1e41'),
   unlocked() { return (hasUpgrade(this.layer, 41))},
  },
  43: {
   title:'B18',
   description: "Bb1-2 are cheaper.",
   cost:new Decimal('2e45'),
   unlocked() { return (hasUpgrade(this.layer, 42))},
  },
  44: {
   title:'B19',
   description: "mult to pts based on Bb1 eff.",
   cost:new Decimal('3e46'),
   effect()  { 
       let efb19 = buyableEffect('B',11).pow(0.2).times(buyableEffect('B',11).add(1).log(10).pow(2))
       if (hasUpgrade('B',55)) efb19=Decimal.pow(efb19,1.25)
       return efb19;    
   },
   unlocked() { return (hasUpgrade(this.layer, 43))},
   effectDisplay() { return format(this.effect())+"x" }, 
  },
  45: {
   title:'B20',
   description: "2e4x pts,unlock 4th bab.",
   cost:new Decimal('4e48'),
   unlocked() { return (hasUpgrade(this.layer, 44))},
  },
  51: {
   title:'B21',
   description: "x20 B.<br>Bb3 is stronger.",
   cost:new Decimal('3e50'),
   unlocked() { return (hasUpgrade(this.layer, 45))},
  },
  52: {
   title:'B22',
   description: "mult to pts based on Bb2 eff.",
   cost:new Decimal('5e55'),
   effect()  { 
       let efb22 = buyableEffect('B',12).pow(0.25).times(buyableEffect('B',11).add(1).log(10).pow(2))
       if (hasUpgrade('B',55)) efb22=Decimal.pow(efb22,1.25)
       return efb22;    
   },
   unlocked() { return (hasUpgrade(this.layer, 51))},
   effectDisplay() { return format(this.effect())+"x" }, 
  },
  53: {
   title:'B23',
   description: "30x B,Bb1 100x cheaper.",
   cost:new Decimal('2e58'),
   unlocked() { return (hasUpgrade(this.layer, 52))},
  },
  54: {
   title:'B24',
   description: "Bb1 base +0.05.",
   cost:new Decimal('5e65'),
   unlocked() { return (hasUpgrade(this.layer, 53))},
  },
  55: {
   title:'B25',
   description: "B19/B22 ^1.3.",
   cost:new Decimal('2e68'),
   unlocked() { return (hasUpgrade(this.layer, 54))},
  },
  61: {
   title:'B26',
   description: "lg pts mult B.",
   cost:new Decimal('1e70'),
   effect()  { 
       let efb26 = player.points.add(10).log(10)
       if (hasUpgrade('A',53)) efb26=Decimal.mul(efb26,10)
       if (hasUpgrade('A',54)) efb26=Decimal.mul(efb26,10)
       if (hasUpgrade('B',63)) efb26=Decimal.pow(efb26,1.15)
       if (hasUpgrade('B',64)) efb26=Decimal.pow(efb26,1.15)
       if (hasUpgrade('B',74)) efb26=Decimal.pow(efb26,1.3)
       if (hasUpgrade('A',62)) efb26=Decimal.mul(efb26,upgradeEffect('A',62))
       if (hasUpgrade('E',31)) efb26=Decimal.pow(efb26,1.1)
       if (hasMilestone('E',8)) efb26=Decimal.pow(efb26,1.05)
       if (hasMilestone('E',10)) efb26=Decimal.pow(efb26,1.05)
       if (hasUpgrade('E',105)) efb26=Decimal.pow(efb26,1.05)
       return efb26;    
   },
   unlocked() { return (hasUpgrade(this.layer, 55))},
   effectDisplay() { return format(this.effect())+"x" }, 
  },
  62: {
   title:'B27',
   description: "unlock new A upg.",
   cost:new Decimal('1e81'),
   unlocked() { return (hasUpgrade(this.layer, 61))},
  },
  63: {
   title:'B28',
   description: "B26 ^1.15.",
   cost:new Decimal('1e113'),
   unlocked() { return (hasMilestone(this.layer, 2))},
  },
  64: {
   title:'B29',
   description: "B26 ^1.15,5e4x pts.",
   cost:new Decimal('1e116'),
   unlocked() { return (hasUpgrade(this.layer, 63))},
  },
  65: {
   title:'B30',
   description: "Bb1-4 are cheaper.",
   cost:new Decimal('1e133'),
   unlocked() { return (hasUpgrade(this.layer, 64))},
  },
  71: {
   title:'B31',
   description: "Bb1-2 base +0.05.",
   cost:new Decimal('1e150'),
   unlocked() { return (hasMilestone(this.layer, 3))},
  },
  72: {
   title:'B32',
   description: "5e4x pts.",
   cost:new Decimal('1e170'),
   unlocked() { return (hasUpgrade(this.layer, 71))},
  },
  73: {
   title:'B33',
   description: "Bb1 base x1.025.",
   cost:new Decimal('1e500'),
   unlocked() { return (hasUpgrade(this.layer, 72))},
  },
  74: {
   title:'B34',
   description: "B26 ^1.3.",
   cost:new Decimal('1e540'),
   unlocked() { return (hasUpgrade(this.layer, 73))},
  },
  75: {
   title:'B35',
   description: "Bb5 is cheaper.",
   cost:new Decimal('1e585'),
   unlocked() { return (hasUpgrade(this.layer, 74))},
  },
  81: {
   title:'B36',
   description: "x1e5 pts.",
   cost:new Decimal('1e1058'),
   unlocked() { return (hasUpgrade('A', 65))},
  },
  82: {
   title:'B37',
   description: "Bb1-2 is cheaper.",
   cost:new Decimal('1e1185'),
   unlocked() { return (hasUpgrade(this.layer, 81))},
  },
    },
    automate(){
  if (player.B.auto) {if (hasMilestone("B",2))  buyBuyable("B",11),buyBuyable("B",12),buyBuyable("B",21)
   ,buyBuyable("B",22),buyBuyable("B",23) }
    },
    buyables:{
  11: {
   title: "Bb1", 
   cost(x) { 
       let cost = Decimal.pow(4, x.pow(1.035)).times('1e38')
       if (hasUpgrade('B',43)) cost = Decimal.pow(3.8, x.pow(1.03)).times('1e37')
       if (hasUpgrade('B',53)) cost = Decimal.pow(3.8, x.pow(1.03)).times('1e35')
       if (hasUpgrade('B',65)) cost = Decimal.pow(3.7, x.pow(1.028)).times('1e34')
       if (hasUpgrade('B',82)) cost = Decimal.pow(3.6, x.pow(1.027)).times('1e27')
       let sc=400
       if (hasMilestone('E',15)) sc=Decimal.add(sc,100)
       if (inChallenge('E',42)) sc=Decimal.add(sc,-300)
       sc = Decimal.add(sc,tmp.E.ekf.ceil())
       let scpow=0.45
       if (hasUpgrade('A',65)) scpow=Decimal.add(scpow,-0.01)
       if (hasUpgrade('E',103)) scpow=Decimal.add(scpow,-0.005)
       let t=800
       if (hasUpgrade('A',65)) t=Decimal.add(t,150)
       if (hasUpgrade('E',103)) t=Decimal.add(t,50)
       if (hasMilestone('B',1)) cost = cost.div(upgradeEffect('B',61))

       if (x.gte(sc)) cost =Decimal.pow(cost,x.sub(sc).div(t).add(1).pow(scpow))
       if (hasUpgrade('E',43)) cost = Decimal.pow(cost, 0.992)
       if (hasUpgrade('E',73)) cost = Decimal.pow(cost, 0.99)
       if (hasChallenge('E',31)) cost = Decimal.pow(cost, challengeEffect('E',31))
       return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   //bulk(x) {
   //    let target = this.cost(getBuyableAmount(this.layer, this.id).add(x))
   //    if (player[this.layer].points.gte(target)) {
   //  if (dvdhasMilestone("B", 8))  player.B.buyables[11] = player.B.buyables[11].add(x)}
   //    },
   buy() {
       //if (hasMilestone('B',8)) this.bulk(10)
       if (hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(0)
       else player[this.layer].points = player[this.layer].points.sub(this.cost())
       setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
   base(){   let bas = 3
       if (hasUpgrade('B',54)) bas = bas + 0.05
       if (hasUpgrade('B',71)) bas = bas + 0.05
       if (hasUpgrade('B',73)) bas = bas * 1.02
       if (hasMilestone('B',3)) bas = Decimal.add(bas,buyableEffect('B',23))
       if (inChallenge('E',12)) bas = 2
       if (inChallenge('E',31)) bas = 1.2
       return bas},
   effect(x) { 
       let efbb1 = Decimal.pow(this.base(),x.pow(1.01))
       if (inChallenge('A',32)) efbb1=Decimal.pow(efbb1,0.5)
       return efbb1},
   display() { 
       return "give A a x"+ format(this.base()) + " mult \n\
       Cost: " + format(this.cost()) + " B \n\
       Amount: " + player[this.layer].buyables[this.id]  +" \n\
       Effect: x" + format(this.effect()) + " A" },
   unlocked() { return hasMilestone('D',2) }
  },
  12: {
   title: "Bb2", 
   cost(x) { 
       let cost = Decimal.pow(10, x.pow(1.045)).times('1e40')
       let sc=400
       if (hasMilestone('E',15)) sc=Decimal.add(sc,100)
       if (inChallenge('E',42)) sc=Decimal.add(sc,-300)
       sc = Decimal.add(sc,tmp.E.ekf)
       if (hasUpgrade('B',43)) cost = Decimal.pow(9, x.pow(1.041)).times('1e39')
       if (hasUpgrade('B',65)) cost = Decimal.pow(9, x.pow(1.04)).times('1e38')
       if (hasUpgrade('B',82)) cost = Decimal.pow(8, x.pow(1.04)).times('1e30')
       let scpow=0.45
       if (hasUpgrade('A',65)) scpow=Decimal.add(scpow,-0.01)
       if (hasUpgrade('E',103)) scpow=Decimal.add(scpow,-0.005)
       let t=800
       if (hasUpgrade('A',65)) t=Decimal.add(t,150)
       if (hasUpgrade('E',103)) t=Decimal.add(t,50)
       if (hasMilestone('B',1)) cost = cost.div(upgradeEffect('B',61))

       if (x.gte(sc)) cost =Decimal.pow(cost,x.sub(sc).div(t).add(1).pow(scpow))
       if (hasUpgrade('E',43)) cost = Decimal.pow(cost, 0.992)
       if (hasUpgrade('E',73)) cost = Decimal.pow(cost, 0.99)
       if (hasChallenge('E',31)) cost = Decimal.pow(cost, challengeEffect('E',31))
       return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   buy() {
       if (hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(0)
       else player[this.layer].points = player[this.layer].points.sub(this.cost())
       setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
   base(){   let bas = 2
       if (hasUpgrade('B',71)) bas = bas + 0.05
       if (hasMilestone('B',3)) bas = Decimal.add(bas,buyableEffect('B',23))
       if (inChallenge('E',12)) bas = 2
       if (inChallenge('E',31)) bas = 1.2
       return bas},
   effect(x) { 
       let efbb2 = Decimal.pow(this.base(), x.pow(1.006))
       if (inChallenge('A',32)) efbb2=Decimal.pow(efbb2,0.5)
       return efbb2},
   display() { 
       return "give B a x" + format(this.base()) + " mult \n\
       Cost: " + format(this.cost()) + " B \n\
       Amount: " + player[this.layer].buyables[this.id]  +" \n\
       Effect: x" + format(this.effect()) + " B" },
   unlocked() { return hasUpgrade('B',41) }
  },
  21: {
   title: "Bb3", 
   cost(x) { 
       let sc=400
       if (inChallenge('E',42)) sc=Decimal.add(sc,-300)
       let cost = Decimal.pow(10, x.pow(1.07)).times('1e41')
       if (hasUpgrade('B',65))  cost = Decimal.pow(10, x.pow(1.065)).times('1e40')
       let scpow=0.45
       if (hasUpgrade('A',65)) scpow=Decimal.add(scpow,-0.01)
       if (hasUpgrade('E',103)) scpow=Decimal.add(scpow,-0.005)
       let t=800
       if (hasUpgrade('A',65)) t=Decimal.add(t,150)
       if (hasUpgrade('E',103)) t=Decimal.add(t,150)
       if (hasMilestone('B',1)) cost = cost.div(upgradeEffect('B',61))

       if (x.gte(sc)) cost =Decimal.pow(cost,x.sub(sc).div(t).add(1).pow(scpow))
       if (hasChallenge('E',31)) cost = Decimal.pow(cost, challengeEffect('E',31))
       return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   buy() {
       if (hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(0)
       else player[this.layer].points = player[this.layer].points.sub(this.cost())
       setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
   effect(x) { 
       let ef = Decimal.pow(x/1.3+1,0.6).div(6).add(0.8333)
       if (hasUpgrade('B',51)) ef = Decimal.pow(x/1.25+1,0.6).div(4.5).add(0.777)
       if (hasUpgrade('A',55)) ef = Decimal.pow(x/1.23+1,0.6).div(4).add(0.75)
       if (inChallenge('A',41)) ef= 1
       if (inChallenge('E',31)) ef=1
       if (inChallenge('E',42)) ef=1
       return ef},
   display() {
       return "boost to B's pts mult(exp) \n\
       Cost: " + format(this.cost()) + " B \n\
       Amount: " + player[this.layer].buyables[this.id]  +" \n\
       Effect: ^" + format(this.effect())},
   unlocked() { return hasUpgrade('B',42) }
  },
  22: {
   title: "Bb4", 
   cost(x) { 
       let cost = Decimal.pow(16, x.pow(1.07)).times('1e49')
       let sc=400
       if (inChallenge('E',42)) sc=Decimal.add(sc,-300)
       let scpow=0.45
       if (hasUpgrade('A',65)) scpow=Decimal.add(scpow,-0.01)
       if (hasUpgrade('E',103)) scpow=Decimal.add(scpow,-0.005)
       let t=800
       if (hasUpgrade('A',65)) t=Decimal.add(t,150)
       if (hasUpgrade('E',103)) t=Decimal.add(t,50)
       if (hasUpgrade('B',65))  cost = Decimal.pow(16, x.pow(1.065)).times('1e48')
       if (hasMilestone('B',1)) cost = cost.div(upgradeEffect('B',61))
       if (x.gte(sc)) cost =Decimal.pow(cost,x.sub(sc).div(t).add(1).pow(scpow))

       if (hasChallenge('E',31)) cost = Decimal.pow(cost, challengeEffect('E',31))
       return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   buy() {
       if (hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(0)
       else player[this.layer].points = player[this.layer].points.sub(this.cost())
       setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
   effect(x) { 
       let ef = Decimal.pow(x/1.3+1,0.7).div(6).add(0.8333)
       if (hasUpgrade('A',55)) ef= Decimal.pow(x/1.26+1,0.7).div(5).add(0.8)
       if(inChallenge('A',41)) ef=1
       if (inChallenge('E',31)) ef=1
       if (inChallenge('E',42)) ef=1
       return ef},
   display() { 
       return "boost to A's pts mult(exp) \n\
       Cost: " + format(this.cost()) + " B \n\
       Amount: " + player[this.layer].buyables[this.id]  +" \n\
       Effect: ^" + format(this.effect())},
   unlocked() { return hasUpgrade('B',45) }
  },
  23: {
   title: "Bb5", 
   cost(x) { 
       let cost = Decimal.pow(1234, x.pow(1.2)).times('1e140')
       let sc=400
       if (inChallenge('E',42)) sc=Decimal.add(sc,-300)
       let scpow=0.45
       if (hasUpgrade('A',65)) scpow=Decimal.add(scpow,-0.01)
       if (hasUpgrade('E',103)) scpow=Decimal.add(scpow,-0.005)
       let t=800
       if (hasUpgrade('A',65)) t=Decimal.add(t,150)
       if (hasUpgrade('E',103)) t=Decimal.add(t,50)
       if (hasUpgrade('B',75)) cost = Decimal.pow(1200, x.pow(1.2)).times('1e135')
       if (hasUpgrade('E',62)) cost = Decimal.pow(1100, x.pow(1.2)).times('1e135')
       if (x.gte(sc)) cost =Decimal.pow(cost,x.sub(sc).div(t).add(1).pow(scpow))

       if (hasUpgrade('D',44)) cost = Decimal.pow(cost,0.98)
       if (hasChallenge('E',31)) cost = Decimal.pow(cost, challengeEffect('E',31))
       return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   buy() {
       if (hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(0)
       else player[this.layer].points = player[this.layer].points.sub(this.cost())
       setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
   effect(x) { 
       let ef = Decimal.pow(x/40+1,0.7).sub(1)
       if (inChallenge('A',41)) ef = 0
       if (hasUpgrade('A',63)) ef = Decimal.mul(ef,1.02)
       if (hasUpgrade('E',34)) ef = Decimal.mul(ef,1.02)
       if (hasUpgrade('E',45)) ef = Decimal.mul(ef,1.02)
       if (hasUpgrade('E',53)) ef = Decimal.mul(ef,1.03)
       if (inChallenge('E',41)) ef = Decimal.mul(ef,0.4)
       if (inChallenge('E',42)) ef = 0
       return ef},
   display() { 
       return "boost Bb1-2 base \n\
       Cost: " + format(this.cost()) + " B \n\
       Amount: " + player[this.layer].buyables[this.id]  +" \n\
       Effect: +" + format(this.effect())},
   unlocked() { return hasMilestone('B',3) }
  }
    }
})
