addLayer("B", {
 infoboxes: {
introBox: {
  title: "B",
  body(){return "…It's quite easy, wasn't it? I hope you will beat these softcaps."},
        },
},
  name: "B", 
  symbol: "B", 
  position: 1, 
  startData() { return {
  unlocked: false,
		points: new Decimal(0),
		pointsAc1: new Decimal(0),
		Bblim: new Decimal(1000),
  }},
  passiveGeneration(){  let pg=1
  if (hasMilestone("C", 2))  pg=pg+2
  if (hasMilestone("C", 3))  pg=pg*1000
  if (hasMilestone("D", 1))  pg=pg*100
  if (hasMilestone("D", 2))  pg=pg*1000
  if (hasMilestone("E", 10))  pg=pg*10
  return (hasUpgrade("C", 11))?pg:0},
  color: "#7AAA2C",
  requires: new Decimal(1e4), 
  resource: "B", 
  baseResource: "A", 
  baseAmount() {return player.A.points}, 
  type: "normal", 
  exponent: 0.2, 
  gainExp() {
   let exp=n(1)
   if(inChallenge('E',22)) exp=n(1).mul(layers.E.challenges[22].nerf())
  return exp
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
  mult = mult.mul(hasChallenge("D", 22)?1e15:1)
  mult = mult.mul(buyableEffect("B",12))
  mult = mult.mul(hasUpgrade("B", 34)?50:1)
  mult = mult.mul(hasUpgrade("B", 41)?1500:1)
  mult = mult.mul(hasUpgrade("B", 45)?2e4:1)
  mult = mult.mul(hasUpgrade("B", 53)?30:1)
  mult = mult.mul(hasUpgrade("B", 61)?upgradeEffect('B',61):1)
  mult = mult.mul(buyableEffect("E",12))
  mult = mult.mul(hasUpgrade("D", 31)?upgradeEffect('D',31):1)  
  mult = mult.mul(hasUpgrade("E", 82)?upgradeEffect('E',82):1)  
  mult = mult.mul(hasUpgrade("E",92)?upgradeEffect("E",92):1)
  mult = mult.pow(hasUpgrade("B", 36)?1.1:1)
  mult = mult.pow(hasUpgrade("C", 34)?1.1:1)
  mult = mult.pow(hasUpgrade("D", 22)?1.2:1)
  mult = mult.pow(hasChallenge("D", 12)?1.35:1)
  mult = mult.pow(hasMilestone("B", 3)?1.15:1)
  mult = mult.pow(hasUpgrade('B',73)?upgradeEffect('B',73):1)
  if(inChallenge('E',11)) mult=mult.max(10).tetrate(0.1)
if(mult.gte(10)) mult=mult.div(10).pow(0.5).mul(10)//sc15
if(mult.gte(1e10)) mult=mult.div(1e10).pow(0.5).mul(1e10)//sc54
if(mult.gte(1e25)) mult=mult.div(1e25).pow(0.5).mul(1e25)//sc63
if(mult.gte(1e40)) mult=mult.div(1e40).pow(0.5).mul(1e40)//sc69
if(mult.gte(1e100)) mult=mult.div(1e100).pow(0.5).mul(1e100)//sc77
if(mult.gte(1e250)) mult=mult.div(1e250).pow(0.5).mul(1e250)//sc92
if(mult.log10().gte(400)) mult = n(10).pow(mult.log10().sub(400).pow(0.5).add(400))//sc37
  return mult
  },
  directMult() {
     let mult = n(1)
     mult = mult.mul(buyableEffect("E",12))
     if(hasUpgrade('E',16)) mult=mult.mul(upgradeEffect('E',16)[1])
     if(hasUpgrade('s',12)&&hasMilestone('E',6)) mult=mult.mul(upgradeEffect('s',12))
     if (hasChallenge("E", 21)) mult=mult.mul(challengeEffect('E',21)[1])
     return mult
    },
  microtabs: {
  stuff: {   
   "Upgrades": {
   unlocked() {return true},
   content: [ "upgrades"]}, 
   "Buyables": {
   unlocked() {return (hasMilestone("D", 2))},
   content: [["raw-html", () => `<h4 style="opacity:.5">The purchase limit of B buyables is ` + format(player.B.Bblim)],"buyables"]},
   "Milestones": {
   unlocked() {return (hasUpgrade("B", 53))},
   content: ["milestones"]  },
  }
  },
  tabFormat: [ ["infobox","introBox"],
  "main-display","resource-display",,
  "prestige-button",
  ["microtabs", "stuff"],
  ["blank", "25px"],
  ],
  branches: ["A"],
  milestones: {
  0: {requirementDescription: "1e66 total B",
   done() {return player[this.layer].total.gte('1e66')}, 
   effectDescription: "buyables cost nothing.",
  },
  1: {requirementDescription: "1e74 total B",
   done() {return player[this.layer].total.gte('1e74')}, 
   effectDescription: "All Bbs' effect ^2.",
  },
  2: {requirementDescription: "1e111 total B",
   done() {return player[this.layer].total.gte('1e111')}, 
   effectDescription: "Automatically buy max B buyables.",
   toggles: [ ["B","auto"] ]
  },
  3: {requirementDescription: "1e140 total B",
   done() {return player[this.layer].total.gte('1e140')},
   effectDescription: "B ^1.15 and unlock more B upgrades.",
  },
  4: {requirementDescription: "1e200 total B",
   done() {return player[this.layer].total.gte('1e200')}, 
   effectDescription: "unlock one A chal.<br>A buyables cost nothing and unlock Ab2.",
  },
  5: {requirementDescription: "1e250 total B",
   done() {return player[this.layer].total.gte('1e250')},
   effectDescription: "100x C/D passive and auto buy A buyables.",
   toggles: [ ["B","auto2"] ]
  },
  6: {requirementDescription: "3.65e365 total B",
   done() {return player[this.layer].total.gte('3.65e365')}, 
   effectDescription: "Unlock an A upg.",
  },
  7: {requirementDescription: "1e535 total B",
   done() {return player[this.layer].total.gte('1e535')}, 
   effectDescription: "Unlock the layer E.",
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
   if (hasUpgrade('B',42)) ef = ef*1e10
   if (hasUpgrade('B',64)) ef = ef*5e4
   if (hasUpgrade('B',72)) ef = ef*1e240
   ef=n(ef)
   if (hasUpgrade('B',81)) ef = ef.mul("1e25000")
   
   if(ef.gte(5)) ef=ef.div(5).pow(0.5).mul(5)//sc10
   if(ef.gte(100)) ef=ef.div(100).pow(0.5).mul(100)//sc16
   if(ef.gte(1000)) ef=ef.div(1000).pow(0.5).mul(1000)//sc25
   if(ef.gte(1e30)) ef=ef.div(1e30).pow(0.5).mul(1e30)//sc86
   if(ef.gte(1e100)) ef=ef.div(1e100).pow(0.5).mul(1e100)//sc100
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
   return ef.max(1)
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
   return ef.max(1)
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
   description: "x1500 B,unlock 2nd buyable.",
   cost:new Decimal('2e31'),
   unlocked() { return hasUpgrade('D',35)},
  },
  42: {
   title:'B17',
   description: "x1e10 points.<br>D15.5 is boosted and it affects Bb3.<br>unlock 2 buyables.",
   cost:new Decimal('1e34'),
   unlocked() { return (hasUpgrade(this.layer, 41))},
  },
  43: {
   title:'B18',
   description: "Bb2 and Bb2.5 are stronger.",
   cost:new Decimal('5e46'),
   unlocked() { return (hasUpgrade(this.layer, 42))},
  },
  44: {
   title:'B19',
   description: "mult to pts based on Bb1 eff.",
   cost:new Decimal('1e49'),
   effect()  { 
   let ef = buyableEffect('B',11).pow(0.2).times(buyableEffect('B',11).add(1).log(10).pow(2))
   if (hasUpgrade('B',55)) ef=Decimal.pow(ef,1.5)
   if(ef.gte(1e10)) ef=ef.div(1e10).pow(0.5).mul(1e10)//sc65
   if(ef.gte(1e30)) ef=ef.div(1e30).pow(0.5).mul(1e30)//sc65
   return ef  
   },
   unlocked() { return (hasUpgrade(this.layer, 43))},
   effectDisplay() { return format(this.effect())+"x" }, 
  },
  45: {
   title:'B20',
   description: "2e4x B,unlock a buyable.",
   cost:new Decimal('1e50'),
   unlocked() { return (hasUpgrade(this.layer, 44))},
  },
  46: {
   title:'B20.5',
   description: "D15.5 is boosted and it affects Bb4.",
   cost:new Decimal('1e52'),
   unlocked() { return (hasUpgrade(this.layer, 45))},
  },
  51: {
   title:'B21',
   description: "Unlock the last B buyable.",
   cost:new Decimal(1e63),
   unlocked() { return (hasUpgrade(this.layer, 46))},
  },
  52: {
   title:'B22',
   description: "mult to pts and A based on Bb2 eff.",
   cost:new Decimal(1e64),
   effect()  { 
   let ef = buyableEffect('B',12).pow(0.2)
   if (hasUpgrade('B',55)) ef=Decimal.pow(ef,1.5)
   if(ef.gte(1e50)) ef=ef.div(1e50).pow(0.25).mul(1e50)//sc62
   return ef;  
   },
   unlocked() { return (hasUpgrade(this.layer, 51))},
   effectDisplay() { return format(this.effect())+"x" }, 
  },
  53: {
   title:'B23',
   description: "A's Gainmult^2.<br>Unlock B Milestones.",
   cost:new Decimal(1e65),
   unlocked() { return (hasUpgrade(this.layer, 52))},
  },
  54: {
   title:'B24',
   description: "Boost D15.5 again.",
   cost:new Decimal(6.66e66),
   unlocked() { return (hasUpgrade(this.layer, 53))},
  },
  55: {
   title:'B25',
   description: "B19/B22 ^1.5.",
   cost:new Decimal(1e72),
   unlocked() { return (hasUpgrade(this.layer, 54))},
  },
  56: {
   title:'B25.5',
   description: "Unlock D Challenges.",
   cost:new Decimal(1e81),
   unlocked() { return (hasUpgrade(this.layer, 55))},
  },
  61: {
   title:'B26',
   description: "log1.0001 pts mult B.",
   cost:new Decimal(1e114),
   effect()  { 
   let ef = player.points.add(10).log(1.0001)
   if (hasUpgrade('A',53)) ef=ef.pow(5)
   if (hasUpgrade('B',63)) ef=Decimal.pow(ef,upgradeEffect('B',63))
   if (hasUpgrade('B',64)) ef=Decimal.pow(ef,10)
   if (hasUpgrade('E',31)) ef=Decimal.pow(ef,1.1)
   if (hasMilestone('E',10)) ef=Decimal.pow(ef,1.05)
   if (hasUpgrade('E',105)) ef=Decimal.pow(ef,1.05)
   if(ef.gte(1e10)) ef=ef.div(1e10).pow(0.5).mul(1e10)//sc73
   if(ef.gte(1e20)) ef=ef.div(1e20).pow(0.5).mul(1e20)//sc74
   if(ef.gte(1e50)) ef=ef.div(1e50).pow(0.5).mul(1e50)//sc78
   if(ef.gte(1e80)) ef=ef.div(1e80).pow(0.25).mul(1e80)//sc81
   if(ef.gte(1e100)) ef=ef.div(1e100).pow(0.25).mul(1e100)//sc82
   return ef;  
   },
   unlocked() { return (hasMilestone('B',2))},
   effectDisplay() { return format(this.effect())+"x" }, 
  },
  62: {
   title:'B27',
   description: "unlock new A upg.",
   cost:new Decimal('1e116'),
   unlocked() { return (hasUpgrade(this.layer, 61))},
  },
  63: {
   title:'B28',
   description: "B26 ^(total B upgrades^0.5).",
   cost:new Decimal('1e136'),
   effect() {
    let ef=n(player.B.upgrades.length).pow(0.5)
    return ef
   },
   effectDisplay() { return "^"+format(this.effect())}, 
   unlocked() { return (hasUpgrade(this.layer,62))},
  },
  64: {
   title:'B29',
   description: "B26 ^10 and 5e4x pts.",
   cost:new Decimal('1e150'),
   unlocked() { return (hasMilestone(this.layer, 3))},
  },
  65: {
   title:'B30',
   description: "Bb3-5 base x2",
   cost:new Decimal('1e156'),
   unlocked() { return (hasUpgrade(this.layer, 64))},
  },
  66: {
   title:'B30.5',
   description: "Unlock two D challenges.<br> Unlock A buyables.",
   cost:new Decimal('1.56e156'),
   unlocked() { return (hasUpgrade(this.layer, 65))},
  },
  71: {
   title:'B31',
   description: "Ab1 base x5.",
   cost:new Decimal('1e160'),
   unlocked() { return (hasUpgrade(this.layer, 66))},
  },
  72: {
   title:'B32',
   description: "1e240x pts.",
   cost:new Decimal('1e191'),
   unlocked() { return (hasUpgrade(this.layer, 71))},
  },
  73: {
   title:'B33',
   description: "Boost A and B based on A beyond 1.8e308.",
   effect() {
    let ef=player.A.points.max(n(2).pow(1024)).log(2).log(2).sub(9).pow(0.8).max(1)
    if(hasUpgrade('B',74)) ef=ef.mul(upgradeEffect('B',74))
    return ef
   },
   effectDisplay() { return "^"+format(this.effect(),4)},
   cost:new Decimal('3.21e321'),
   unlocked() { return (hasUpgrade(this.layer, 72))},
  },
  74: {
   title:'B34',
   description: "Boost B33 based on B beyond 9.88e319 (2^1063).",
   effect() {
    let ef=player.B.points.max(n(2).pow(1063)).log(2).sub(39).log(2).sub(9).pow(0.5).max(1)
    if(hasUpgrade('B',76)) ef=ef.pow(1.35)
    return ef
   },
   effectDisplay() { return format(this.effect(),4)+"x"},
   cost:new Decimal('1e325'),
   unlocked() { return (hasUpgrade(this.layer, 73))},
  },
  75: {
   title:'B35',
   description: "You can complete Ac7 more than 5 times.",
   cost:new Decimal('1e330'),
   unlocked() { return (hasUpgrade(this.layer, 74))},
  },
  76: {
   title:'B35.5',
   description: "B34 ^1.1",
   cost:new Decimal('1e520'),
   unlocked() { return (hasUpgrade(this.layer, 75))},
  },
  81: {
   title:'B36',
   description: "'x1e25000' pts.",
   cost:new Decimal('1e530'),
   unlocked() { return (hasUpgrade('A', 65))},
  },
  82: {
   title:'B37',
   description: "Ab2 effect x1.35.",
   cost:new Decimal('2e530'),
   unlocked() { return (hasUpgrade(this.layer, 81))},
  },
  83: {
   title:'B38',
   description: "Eb12 affects Abs.",
   cost:new Decimal('2.5e692'),
   unlocked() { return (hasUpgrade("E",64))},
  },
  84: {
   title:'B39',
   description: "Boost to E directly based on total Bb amount beyond 6300.<br>(with Ab2 effect)",
   cost:new Decimal('6.97e697'),
   effect() {
    let ef=gba('B',11).add(gba('B',12)).add(gba('B',13)).add(gba('B',21)).add(gba('B',22)).add(gba('B',23)).add(buyableEffect('A',12).mul(6)).sub(6300).max(1).pow(0.6)
    if(ef.gte(10)) ef=ef.div(10).pow(0.5).mul(10)//sc146
    return ef
   },
   tooltip() {return "Amount:"+format(gba('B',11).add(gba('B',12)).add(gba('B',13)).add(gba('B',21)).add(gba('B',22)).add(gba('B',23)).add(buyableEffect('A',12).mul(6)))},
   effectDisplay() { return format(this.effect())+"x"},
   unlocked() { return (hasUpgrade("B",83))},
  },
  85: {
   title:'B40',
   description: "Ec1-4 effect ^1.2.",
   cost:new Decimal('7e700'),
   unlocked() { return (hasUpgrade("B",84))},
  },
  86: {
   title:'B40.5',
   description: "E21, E26, E28 and E30 ^1.5.",
   cost:new Decimal('2e704'),
   unlocked() { return (hasUpgrade("B",85))},
  },
  },
  automate(){
  if (player.B.auto&&hasMilestone("B",2)) {
   layers.B.buyables[11].buyMax()  ;
   layers.B.buyables[12].buyMax()  ;
   layers.B.buyables[13].buyMax()  ;
   layers.B.buyables[21].buyMax()  ;
   layers.B.buyables[22].buyMax()  ;
   layers.B.buyables[23].buyMax()  ;
  }
  },
  buyables:{
  11: {
   title: "Bb1", 
   baseCost() {
    let cost = n(1e23)
    if(hasUpgrade('A',65)) cost=n(1)
    cost=cost.div(buyableEffect('E',24))
    return cost
   },
   cost(x=player[this.layer].buyables[this.id]) {
  let cost = n(this.baseCost()).mul(n(4).pow(x.pow(1.2)))
  return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   buy() {
   if (!hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(this.cost())
   setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
   buyMax() {
   if (!this.canAfford()) return;
			 	let tempBuy = player.B.points.div(this.baseCost()).max(0).max(1).log(4).root(1.2)
   let target = tempBuy.plus(1).floor();
   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.B.Bblim)
				},
   base(){   let bas = n(3)
   if (hasUpgrade('D',36)) bas = bas.add(upgradeEffect('D',36))
   if(hasChallenge('D',11)) bas = bas.mul(2)
   
   if(hasUpgrade('A',54)) bas=bas.pow(upgradeEffect('A',54))
   if (inChallenge('E',12)) bas = n(1)
   if (inChallenge('E',31)) bas = n(1.3)
   bas=n(bas)
   if(bas.gte(1e5)) bas=bas.div(1e5).pow(0.2).mul(1e5)//sc75
  return bas
   },
   effect(x=player[this.layer].buyables[this.id]) { 
    if(gba('A',12)) x=x.add(buyableEffect('A',12))
   let ef = Decimal.pow(this.base(),x)
   ef=ef.mul(buyableEffect('A',11))
   if(hasMilestone('B',1)) ef=ef.pow(1.2)
   if(inChallenge('D',12)) ef=n("1e-4")
   return ef},
   display() { 
    let a = format(gba(this.layer,this.id))
    if(gba('A',12).gt(0)) a = a+"+"+format(buyableEffect('A',12))+"="+format(gba(this.layer,this.id).add(buyableEffect('A',12)))
   return "give A a x"+ format(this.base()) + " mult<br>Cost: " + format(this.cost()) + " B<br>Amount: " +  a +"<br>  Effect: x" + format(this.effect()) + " A" },
   purchaseLimit() {return player.B.Bblim},
   unlocked() { return hasMilestone('D',2) }
  },
  12: {
   title: "Bb2", 
   baseCost() {
    let cost = n(1e31)
    if(hasUpgrade('A',65)) cost=n(1)
    cost=cost.div(buyableEffect('E',24))
    return cost
   },
   cost(x=player[this.layer].buyables[this.id]) {
  let cost = n(this.baseCost()).mul(n(2).pow(x.pow(1.25)))
  return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   buy() {
   if (hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(0)
   else player[this.layer].points = player[this.layer].points.sub(this.cost())
   setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
   buyMax() {
   if (!this.canAfford()) return;
   let tempBuy = player.B.points.div(this.baseCost()).max(0).max(1).log(2).root(1.25)
   let target = tempBuy.plus(1).floor();
   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.B.Bblim)
				},
   base(){   let bas = n(3)
   if (hasUpgrade('D',36)) bas = bas.add(upgradeEffect('D',36))
   if(hasUpgrade('B',43)) bas=bas.mul(2)
   if(hasChallenge('D',11)) bas = bas.mul(2)
   if(hasUpgrade('A',54)) bas=bas.pow(upgradeEffect('A',54))
   
   if (inChallenge('E',12)) bas = n(1)
   if (inChallenge('E',31)) bas = n(1.2)
   
   if(bas.gte(1e5)) bas=bas.div(1e5).pow(0.2).mul(1e5)//sc76
   return bas},
   effect(x=player[this.layer].buyables[this.id]) { 
   if(gba('A',12)) x=x.add(buyableEffect('A',12))
   let ef = Decimal.pow(this.base(), x)
   ef=ef.mul(buyableEffect('A',11))
   if(hasMilestone('B',1)) ef=ef.pow(1.2)
   if(inChallenge('D',12)) ef=n("1e-4")
   return ef},
   display() { 
    let a = format(gba(this.layer,this.id))
    if(gba('A',12).gt(0)) a = a+"+"+format(buyableEffect('A',12))+"="+format(gba(this.layer,this.id).add(buyableEffect('A',12)))
   return "give B a x" + format(this.base()) + " mult <br>Cost: " + format(this.cost()) + " B<br>Amount: " + a  +"<br> Effect: x" + format(this.effect()) + " B" },
   purchaseLimit() {return player.B.Bblim},
   unlocked() { return hasUpgrade('B',41) },
  },
  13: {
   title: "Bb2.5", 
   baseCost() {
    let cost = n(1e33)
    if(hasUpgrade('A',65)) cost=n(1)
    cost=cost.div(buyableEffect('E',24))
    return cost
   },
   cost(x=player[this.layer].buyables[this.id]) {
  let cost = n(this.baseCost()).mul(n(2).pow(x.pow(1.2)))
  return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   buy() {
   if (hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(0)
   else player[this.layer].points = player[this.layer].points.sub(this.cost())
   setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
   buyMax() {
   if (!this.canAfford()) return;
   let tempBuy = player.B.points.div(this.baseCost()).max(0).max(1).log(2).root(1.2)
   let target = tempBuy.plus(1).floor();
   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.B.Bblim)
				},
   effect(x=player[this.layer].buyables[this.id]) { 
   if(gba('A',12)) x=x.add(buyableEffect('A',12))
   if(hasChallenge('D',11)) x=x.mul(2)
   if(hasUpgrade('B',43)) x=x.pow(1.25)
   if(hasMilestone('B',1)) x=x.pow(2)
   if(inChallenge('D',12)) x=n(-1)
   return x},
   display() { 
    let a = format(gba(this.layer,this.id))
    if(gba('A',12).gt(0)) a = a+"+"+format(buyableEffect('A',12))+"="+format(gba(this.layer,this.id).add(buyableEffect('A',12)))
   return "D6 effect base +" + format(this.effect()) + "<br>Cost: " + format(this.cost()) + " B<br>Amount: " + a },
   purchaseLimit() {return player.B.Bblim},
   unlocked() { return hasUpgrade('B',42) },
  },
  21: {
   title: "Bb3", 
   baseCost() {
    let cost = n(1e33)
    if(hasUpgrade('A',65)) cost=n(1)
    cost=cost.div(buyableEffect('E',24))
    return cost
   },
   cost(x=player[this.layer].buyables[this.id]) {
  let cost = n(this.baseCost()).mul(n(3).pow(x.pow(1.2)))
  return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   buy() {
   if (hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(0)
   else player[this.layer].points = player[this.layer].points.sub(this.cost())
   setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
   buyMax() {
   if (!this.canAfford()) return;
   let tempBuy = player.B.points.div(this.baseCost()).max(0).max(1).log(3).root(1.2)
   let target = tempBuy.plus(1).floor();
   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.B.Bblim)
				},
				base(){   let base = n(3)
				if (hasUpgrade('D',36)&&hasUpgrade('B',42)) base = base.add(upgradeEffect('D',36))
				if(hasChallenge('D',11)) base = base.mul(2)
				if(hasUpgrade('B',65)) base = base.mul(2)
				if(hasUpgrade('A',55)) base=base.pow(upgradeEffect('A',55))
				if(base.gte(1e5)) base=base.div(1e5).pow(0.2).mul(1e5)//sc83
				return base
				},
				effect(x=player[this.layer].buyables[this.id]) { 
   if(gba('A',12)) x=x.add(buyableEffect('A',12))
   let ef = Decimal.pow(this.base(), x)
   ef=ef.mul(buyableEffect('A',11))
   if(hasMilestone('B',1)) ef=ef.pow(1.2)
   if(inChallenge('D',12)) ef=n("1e-4")
   return ef},
   display() { 
    let a = format(gba(this.layer,this.id))
    if(gba('A',12).gt(0)) a = a+"+"+format(buyableEffect('A',12))+"="+format(gba(this.layer,this.id).add(buyableEffect('A',12)))
   return "give C a x" + format(this.base()) + " mult <br>Cost: " + format(this.cost()) + " B<br>Amount: " + a  +"<br> Effect: x" + format(this.effect()) + " C" },
   purchaseLimit() {return player.B.Bblim},
   unlocked() { return hasUpgrade('B',42) }
  },
  22: {
   title: "Bb4", 
   baseCost() {
    let cost = n(1e50)
    if(hasUpgrade('A',65)) cost=n(1)
    cost=cost.div(buyableEffect('E',24))
    return cost
   },
   cost(x=player[this.layer].buyables[this.id]) {
  let cost = n(this.baseCost()).mul(n(3).pow(x.pow(1.25)))
  return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   buy() {
   if (hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(0)
   else player[this.layer].points = player[this.layer].points.sub(this.cost())
   setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
   buyMax() {
   if (!this.canAfford()) return;
   let tempBuy = player.B.points.div(this.baseCost()).max(0).max(1).log(3).root(1.25)
   let target = tempBuy.plus(1).floor();
   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.B.Bblim)
				},
				base(){   let base = n(3)
				if (hasUpgrade('D',36)&&hasUpgrade('B',46)) base = base.add(upgradeEffect('D',36))
				if(hasChallenge('D',11)) base = base.mul(2)
				if(hasUpgrade('B',65)) base = base.mul(2)
				if(hasUpgrade('A',55)) base=base.pow(upgradeEffect('A',55))
				if(base.gte(1e5)) base=base.div(1e5).pow(0.2).mul(1e5)//sc84
				return base
				},
				effect(x=player[this.layer].buyables[this.id]) { 
   if(gba('A',12)) x=x.add(buyableEffect('A',12))
   let ef = Decimal.pow(this.base(), x)
   ef=ef.mul(buyableEffect('A',11))
   if(inChallenge('D',12)) ef=n("1e-4")
   return ef},
   display() { 
    let a = format(gba(this.layer,this.id))
    if(gba('A',12).gt(0)) a = a+"+"+format(buyableEffect('A',12))+"="+format(gba(this.layer,this.id).add(buyableEffect('A',12)))
   return "give D a x" + format(this.base()) + " mult <br>Cost: " + format(this.cost()) + " B<br>Amount: " + a  +"<br> Effect: x" + format(this.effect()) + " D" },
   purchaseLimit() {return player.B.Bblim},
   unlocked() { return hasUpgrade('B',45) }
  },
  23: {
   title: "Bb5", 
   baseCost() {
    let cost = n(1e60)
    if(hasUpgrade('A',65)) cost=n(1)
    cost=cost.div(buyableEffect('E',24))
    return cost
   },
   cost(x=player[this.layer].buyables[this.id]) {
  let cost = n(this.baseCost()).mul(n(2).pow(x.pow(1.5)))
  return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   buy() {
   if (hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(0)
   else player[this.layer].points = player[this.layer].points.sub(this.cost())
   setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
   buyMax() {
   if (!this.canAfford()) return;
   let tempBuy = player.B.points.div(this.baseCost()).max(0).max(1).log(2).root(1.5)
   let target = tempBuy.plus(1).floor();
   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.B.Bblim)
				},
				base(){   let base = n(10)
				if (hasUpgrade('D',36)&&hasUpgrade('A',56)) base = base.add(upgradeEffect('D',36))
				if(hasChallenge('D',11)) base = base.mul(2)
				if(hasUpgrade('A',56)) base=base.pow(upgradeEffect('A',56))
				if(hasUpgrade('B',65)) base = base.mul(2)
				if(base.gte(100)) base=base.div(100).pow(0.5).mul(100)//sc80
				return base
				},
				effect(x=player[this.layer].buyables[this.id]) { 
			if(gba('A',12)) x=x.add(buyableEffect('A',12))
   let ef = Decimal.pow(this.base(), x)
   if(hasMilestone('B',1)) ef=ef.pow(1.2)
   if(inChallenge('D',12)) ef=n("1e-4")
   if(ef.gte("1e1024")) ef=ef.div("1e1024").pow(0.1).mul("1e1024")//sc96
   return ef},
   display() { 
    let a = format(gba(this.layer,this.id))
    if(gba('A',12).gt(0)) a = a+"+"+format(buyableEffect('A',12))+"="+format(gba(this.layer,this.id).add(buyableEffect('A',12)))
   return "give Points a x" + format(this.base()) + " mult <br>Cost: " + format(this.cost()) + " B<br>Amount: " + a  +"<br> Effect: x" + format(this.effect()) + " Points" },
   purchaseLimit() {return player.B.Bblim},
   unlocked() { return hasUpgrade('B',51) }
  },
  }
})
