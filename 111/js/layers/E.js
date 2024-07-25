addLayer("E", {
  name: "E", 
  symbol: "E", 
  position: 2, 
  startData() { return {
   unlocked: false,
		points: new Decimal(0),
		 Eblim: n(40),
   Em: new Decimal(0),
   Ek: new Decimal(0),
  }},
  passiveGeneration(){  let pg=25
   if (hasMilestone('E',10)) pg=pg*2
   if (hasMilestone('E',11)) pg=pg*10
   if (hasMilestone('E',15)) pg=pg*10
   return (hasMilestone("E", 0))?pg:0},
  color: "#789A89",
  requires: new Decimal('1e535'), 
  resource: "E", 
  baseResource: "B", 
  baseAmount() {return player.B.points}, 
  type: "normal", 
  exponent() {
   let exp=n(0.008)
   exp=exp.add(buyableEffect('E',14))
   return exp
  },
  gainExp() {
   return new Decimal(1)
  },
  resetsNothing() {return true},
  row: 1, 
  hotkeys: [
   {key: "e", description: "E: Reset for E points", onPress(){if (canReset(this.layer)&&!hasMilestone('E',10)) doReset(this.layer)}},
  ],
  layerShown(){  if (player.E.unlocked) return true
  else return (hasMilestone("B", 7))},
  gainMult() {
   //let emxp=0.25
   //if (hasMilestone('E',12))  emxp=emxp+0.02
   mult = new Decimal(1)
   mult = mult.mul(hasUpgrade("E",12)?upgradeEffect("E",12):1)
   mult = mult.mul(hasUpgrade("E",13)?upgradeEffect("E",13):1)
   mult = mult.mul(hasUpgrade("E",14)?upgradeEffect("E",14):1)
   mult = mult.mul(hasUpgrade("E",26)?upgradeEffect("E",26):1)
   mult = mult.mul(hasUpgrade("E",21)?2:1)
   //mult = mult.mul(hasUpgrade("E",51)?2500:1)
   //mult = mult.mul(hasUpgrade("E",54)?100:1)
   mult = mult.mul(hasUpgrade("E",23)?upgradeEffect("E",23):1)
   mult = mult.mul(hasUpgrade("E",32)?upgradeEffect("E",32):1)
   mult = mult.mul(hasUpgrade("E",35)?upgradeEffect("E",35):1)
   mult = mult.mul(hasUpgrade("E",36)?upgradeEffect("E",36):1)
   mult = mult.mul(hasUpgrade("E",51)?upgradeEffect("E",51):1)
   mult = mult.mul(hasUpgrade("C",32)?upgradeEffect("C",32):1)
   mult = mult.mul(hasUpgrade("D",42)?upgradeEffect("D",42):1)
   mult = mult.mul(hasUpgrade("s",31)?upgradeEffect("s",31):1)
   //mult = mult.mul(hasMilestone("E",11)?player.E.Em.max(1).pow(emxp):1)
   mult = mult.mul(hasMilestone("E",11)?tmp.E.emf:1)
   mult = mult.mul(hasMilestone("E",20)?2024:1)
   mult = mult.mul(hasUpgrade("E",71)?upgradeEffect("E",71):1)
   mult = mult.mul(hasUpgrade("E",102)?upgradeEffect("E",102):1)
   if (hasChallenge("E", 11))  mult = mult.mul(challengeEffect('E',11))
   if (hasChallenge("E", 12))  mult = mult.mul(challengeEffect('E',12))
   if(mult.gte(1e5)) mult=mult.div(1e5).pow(0.5).mul(1e5)//sc113
   if(mult.gte(1e10)) mult=mult.div(1e10).pow(0.75).mul(1e10)//sc131
   return mult
  },
  directMult() {
   let mult = n(1)
   mult=mult.mul(buyableEffect('E',21))
   if(hasUpgrade('s',31)&&hasMilestone('E',6)) mult=mult.mul(upgradeEffect('s',31))
   if(hasUpgrade('E',61)) mult=mult.mul(upgradeEffect('E',61))
   if(hasUpgrade('E',63)) mult=mult.mul(upgradeEffect('E',63))
   if(hasUpgrade('B',84)) mult=mult.mul(upgradeEffect('B',84))
   return mult
  },
  branches: ['A','B','D'],
  clickables: {
   11: {
    title(){return "A Qol for mobile players."},
    display: "Hold on to auto reset for E.",
    canClick() {return !hasMilestone('E',10)},
    onClick() { doReset('E') },
    onHold() { doReset('E') },
    unlocked(){return true},
        },
  },
  milestones: {
   0: {requirementDescription: "1500 total E",
  done() {return player[this.layer].total.gte('1500')}, 
  effectDescription: "unlock E upgrades.<br>get 2500% of E every second.",
   },
   1: {requirementDescription: "40000 total E",
  done() {return player[this.layer].total.gte('40000')}, 
  effectDescription: "unlock E buyables.",
   },
   2: {requirementDescription: "1e6 total E",
  done() {return player[this.layer].total.gte('1e6')}, 
  effectDescription: "unlock E chal.",
   },
   3: {requirementDescription: "1e10 total E",
  done() {return player[this.layer].total.gte('1e10')}, 
  effectDescription: "E12 and E15 ^1.5,unlock Ec2.",
   },
   4: {requirementDescription: "1e15 total E",
  done() {return player[this.layer].total.gte('1e15')}, 
  effectDescription: "autobuy Eb1-3 and unlock Eb3.5.",
  toggles: [ ["E","auto"] ]
   },
   5: {requirementDescription: "1e31 total E",
  done() {return player[this.layer].total.gte('1e31')}, 
  effectDescription: "Eb3 base +1 and unlock Eb12.",
   },
   6: {requirementDescription: "1e34 total E",
  done() {return player[this.layer].total.gte('1e34')}, 
  effectDescription: "autobuy Eb3.5 and Eb4.<br>ScU2,6,7,13 also boost them directly, and boost ScU13.",
  toggles: [ ["E","auto2"] ]
   },
   7: {requirementDescription: "1e40 total E",
  done() {return player[this.layer].total.gte('1e40')}, 
  effectDescription: "auto buy Eb10,11,12.<br>unlock 2 new E chal.",
  toggles: [ ["E","auto3"] ]
   },
   8: {requirementDescription: "1e49 total E",
  done() {return player[this.layer].total.gte('1e49')}, 
  effectDescription: "unlock new E upg, Ec3 effect ^1.25.",
   },
   9: {requirementDescription: "1e60 total E",
  done() {return player[this.layer].total.gte('1e60')}, 
  effectDescription: "Ec4 effect ^1.25.",
   },
   10: {requirementDescription: "1e63 total E",
  done() {return player[this.layer].total.gte('1e63')},
  effectDescription: "10x B and 2x E passive but disable hotkeys and mobile Qol for E.",
   },
   11: {requirementDescription: "6.66e66 total E",
  done() {return player[this.layer].total.gte('6.66e666')},
  effectDescription: "10x E passive again,unlock Em.<br>Congratulations! You have beat the game!!",
   },
   //12: {requirementDescription: "1e9 total Em",
   //  done() {return player.E.Em.total.gte('1e9')},
   //  effectDescription: "10x E passive again.",
   //},
   12: {requirementDescription: "1e90 total E",
  done() {return player[this.layer].total.gte('1e90')},
  effectDescription: "Em eff exp +0.02.",
   },
   13: {requirementDescription: "1e111 total E",
  done() {return player[this.layer].total.gte('1e111')}, 
  effectDescription: "autobuy Eb5-7.",
  toggles: [ ["E","auto4"] ]
   },
   14: {requirementDescription: "1e132 total E",
  done() {return player[this.layer].total.gte('1e132')}, 
  effectDescription: "unlock 2 new chal.",
   },
   15: {requirementDescription: "1e166 total E",
  done() {return player[this.layer].total.gte('1e166')},
  effectDescription: "10x E passive,Bb1-2 sc start 100 later,unlock Ek.",
   },
   16: {requirementDescription: "1e209 total E",
  done() {return player[this.layer].total.gte('1e209')}, 
  effectDescription: "unlock final 2 chal.",
   },
   17: {requirementDescription: "1e233 total E",
  done() {return player[this.layer].total.gte('1e233')}, 
  effectDescription: "autobuy Eb8-9.",
  toggles: [ ["E","auto5"] ]
   },
   18: {requirementDescription: "1e570 total E",
  done() {return player[this.layer].total.gte('1e570')}, 
  effectDescription: "unlock the final buyable.",
   },
   19: {requirementDescription: "1e666 total E",
  done() {return player[this.layer].total.gte('1e666')}, 
  effectDescription: "autobuy Eb10,E47 ^1.6.",
  toggles: [ ["E","auto6"] ]
   },
   20: {requirementDescription: "1e981 total E",
  done() {return player[this.layer].total.gte('1e981')}, 
  effectDescription: "x2024 E,unlock the next layer (coming soon).",
   },
  },
  microtabs: {
   stuff: {  
  "Upgrades": {
   unlocked() {return hasMilestone("E", 0)},
   content: [ "upgrades"]}, 
  "Buyables": {
   unlocked() {return hasMilestone("E",1)},
   content: [["raw-html", () => `<h4 style="opacity:.5">E buyables cost nothing.<br>The purchase limit of E buyables is ` + format(player.E.Eblim)],
   ["buyables",[1,2]]]},
  "Milestones": {
   unlocked() {return true},
   content: [["display-text",function() {return "You have "+format(player.E.total)+" E in total"}],"milestones"]},
  "Challenges": {
   unlocked() {return (hasMilestone("E",2))},
   content: ["challenges"]},
  "Em": {
   unlocked() {return (hasMilestone("E", 11))},
   content: [["display-text", () => "You have <h2 style='color: #789A89; text-shadow: 0 0 10px #c2b280'>" + format(player.E.Em) + "</h2> Em, mult E by <h2 style='color: #789A89; text-shadow: 0 0 10px #c2b280'> " + format(tmp.E.emf) + "x</h2>.<br>" + "<h3>" + format(tmp.E.Emeffect) + " Em/s<h3> <br>"],
   ["raw-html", () => `<h4 style="opacity:.5">welcome to first sub-currency.Em^0.25 mults E. </h4>`],
   ["buyables",[3]]]},
  "Ek": {
   unlocked() {return (hasMilestone("E", 15))},
   content: [["display-text", () => "You have <h2 style='color: #177261; text-shadow: 0 0 10px #c2b280'>" + format(player.E.Ek) + "</h2> Ek, Bb scaling start <h2 style='color: #177261; text-shadow: 0 0 10px #c2b280'> " + format(tmp.E.ekf) + " </h2>later.<br>" + "<h3>" + format(tmp.E.Ekeffect) + " Ek/s<h3> <br>"],
   ["raw-html", () => `<h4 style="opacity:.5">Ek delays Bb1-2 scaling. </h4>`],
   ["buyables",[4]]]},
   }
  },
  tabFormat: [
   "main-display","resource-display",
   ["row",["prestige-button","clickables"]],"blank",
   ["microtabs", "stuff"],
   ["blank", "25px"],
  ],
  upgrades: {
   11: {
  title:'E1',
  description: function() {return '1e20000x points <br>'+'layer E total: <br>'+ format(this.effect()) +'x'},
  effect()  { 
   let ef = n("1e20000")
   if(hasUpgrade('E',55)) ef=ef.mul("1e80001")
   if(hasUpgrade('E',56)) ef=ef.mul("1e800000")
   if(ef.gte("1e100000")) ef=ef.div("1e100000").pow(0.5).mul("1e100000")//sc136
   if(ef.gte("1e500000")) ef=ef.div("1e500000").pow(0.5).mul("1e500000")//sc136
   return ef;  
  },
  cost:new Decimal(1500),
   },
   12: {
  title:'E2',
  description: "E boost itself.",
  effect()  { 
   let base = n(0.1)
   if(hasUpgrade('E',15)) base=base.mul(upgradeEffect('E',15))
   if(hasUpgrade('E',44)) base=base.mul(1.5)
   let ef = player.E.points.max(1).pow(base)
   if(ef.gte(10)) ef=ef.div(10).pow(0.5).mul(10)//sc102
   if(ef.gte(1000)) ef=ef.div(1000).pow(0.5).mul(1000)//sc127
   return ef
  },
  cost:new Decimal(2500),
  effectDisplay() { return format(this.effect())+"x" }, 
  unlocked() { return (hasUpgrade(this.layer, 11))},
   },
   13: {
  title:'E3',
  description: "boost to E based on D.",
  effect()  { 
   let ef = player.D.points.add(10).log(2).div(300)
   if (hasUpgrade('C',33)) ef = ef.mul(upgradeEffect('C',33)[0])
   if (hasUpgrade('E',24)) ef = Decimal.pow(ef,1.5)
   if (hasUpgrade('C',35)) ef = Decimal.pow(ef,1.5)
   if(ef.gte(2)) ef=ef.div(2).pow(0.5).mul(2)//sc106
   if(ef.gte(5)) ef=ef.div(5).pow(0.5).mul(5)//sc122
   return ef;
  },
  cost:new Decimal(4000),
  unlocked() { return (hasUpgrade(this.layer, 12))},
  effectDisplay() { return format(this.effect(),3)+"x" }, 
   },
   14: {
  title:'E4',
  description: "boost to E base on C.",
  effect()  { 
   let ef = player.C.points.add(10).log(2).div(500)
   if (hasUpgrade('C',33)) ef = ef.mul(upgradeEffect('C',33)[1])
   if (hasUpgrade('E',24)) ef = Decimal.pow(ef,1.7)
   if (hasUpgrade('C',35)) ef = Decimal.pow(ef,1.5)
   if(ef.gte(2)) ef=ef.div(2).pow(0.5).mul(2)//sc105
   if(ef.gte(4)) ef=ef.div(4).pow(0.5).mul(4)//sc117
   return ef;  
  },
  cost:new Decimal(6000),
  effectDisplay() { return format(this.effect(),3)+"x" }, 
  unlocked() { return (hasUpgrade(this.layer, 13))},
   },
   15: {
  title:'E5',
  description: "E2 ^(total E upgrades^0.3).",
  cost:new Decimal('10000'),
  effect()  { 
   let ef = n(player.E.upgrades.length).pow(0.3)
   if(ef.gte(2)) ef=ef.div(2).pow(0.5).mul(2)//sc103
   return ef;  
  },
  effectDisplay() { return "^"+format(this.effect(),3) }, 
  unlocked() { return (hasUpgrade(this.layer, 14))},
   },
   16: {
  title:'E5.5',
  description: "lg(Bb1) boost A directly, same as Bb2.",
  cost:new Decimal('30000'),
  effect()  { 
   let ef1 = buyableEffect('B',11).max(10).log10()
   let ef2 = buyableEffect('B',12).max(10).log10()
   if(hasUpgrade('C',31)) {ef1=ef1.pow(2);ef2=ef2.pow(2)}
   if(hasUpgrade('C',36)) {ef1=ef1.pow(1.5);ef2=ef2.pow(1.5)}
   if(ef1.gte(1e4)) ef1=ef1.div(1e4).pow(0.5).mul(1e4)//sc107
   if(ef2.gte(1e4)) ef2=ef2.div(1e4).pow(0.5).mul(1e4)//sc108
   return [ef1,ef2]
  },
  effectDisplay() { return format(this.effect()[0])+"x A and "+format(this.effect()[1])+"x B." }, 
  unlocked() { return (hasUpgrade(this.layer, 15))},
   },
   21: {
  title:'E6',
  description: "Eb1-2 base +1,x2 E.<br>Unlock Eb3.",
  cost:new Decimal('40000'),
  unlocked() { return (hasUpgrade(this.layer, 16))},
   },
   22: {
  title:'E7',
  description: "lg(Bb3) boost C directly, same as Bb4.",
  cost:new Decimal('1e5'),
  effect()  { 
   let ef1 = buyableEffect('B',21).max(10).log10()
   let ef2 = buyableEffect('B',22).max(10).log10()
   if(hasUpgrade('C',31)) {ef1=ef1.pow(2);ef2=ef2.pow(2)}
   if(hasUpgrade('C',36)) {ef1=ef1.pow(1.5);ef2=ef2.pow(1.5)}
   if(ef1.gte(1e4)) ef1=ef1.div(1e4).pow(0.5).mul(1e4)//sc109
   if(ef2.gte(1e4)) ef2=ef2.div(1e4).pow(0.5).mul(1e4)//sc110
   return [ef1,ef2]
  },
  unlocked() { return (hasUpgrade(this.layer, 21))},
  effectDisplay() { return format(this.effect()[0])+"x C and "+format(this.effect()[1])+"x D." }, 
   },
   23: {
  title:'E8',
  description: "log2(log2(Bb2.5)) boost E.",
  cost:new Decimal('1.2e5'),
  effect()  { 
   let ef = buyableEffect('B',13).max(4).log(2).log(2)
   if(hasUpgrade('E',25)) ef = Decimal.pow(ef,1.5)
   if(ef.gte(10)) ef=ef.div(10).pow(0.5).mul(10)//sc104
   return ef;  
  },
  unlocked() { return (hasUpgrade(this.layer, 22))},
  effectDisplay() { return format(this.effect(),3)+"x" }, 
   },
   24: {
  title:'E9',
  description: "E3 ^1.6 and E4 ^1.7.",
  cost:new Decimal('2e6'),
  unlocked() { return (hasChallenge('E',11))},
   },
   25: {
  title:'E10',
  description: "E8 ^1.5.",
  cost:new Decimal('3.2e6'),
  unlocked() { return (hasUpgrade(this.layer, 24))},
   },
   26: {
  title:'E10.5',
  description: "You can complete Ac7 for decimal times more than 10.<br>Boost E based on Ac7 completions.",
  cost:new Decimal('1e7'),
  effect()  { 
   let ef = n(challengeCompletions('A',41)).sub(9).max(1).pow(n(challengeCompletions('A',41)).max(1).sqrt())
   if(ef.gte(5)) ef=ef.div(5).pow(0.5).mul(5)//sc118
   if(ef.gte(10)) ef=ef.div(10).pow(0.75).mul(10)//sc132
   return ef;  
  },
  effectDisplay() { return format(this.effect(),3)+"x"},
  unlocked() { return (hasUpgrade(this.layer, 25))},
   },
   31: {
  title:'E11',
  description: "E boost C directly and unlock more C upgrades.",
  cost:new Decimal('5e7'),
  effect() {
   let ef = player.E.points.max(1)
   if(hasUpgrade('C',36)) ef=ef.pow(1.5)
   if(ef.gte(1e9)) ef=ef.div(1e9).pow(0.5).mul(1e9)//sc114
   return ef
  },
  effectDisplay() { return format(this.effect())+"x" }, 
  unlocked() { return  (challengeCompletions("E", 11) >= 2)},
   },
   32: {
  title:'E12',
  description: "boost to E based on points.",
  cost:new Decimal('1.5e8'),
  effect()  { 
   let ef = player.points.add(10).log(10).sqrt().div(10).max(1)
   if (hasMilestone('E',3)) ef = Decimal.pow(ef,1.5)
   if (hasUpgrade('D',45)) ef = Decimal.pow(ef,1.2)
   if(ef.gte(2)) ef=ef.div(2).pow(0.5).mul(2)//sc111
   return ef;  
  },
  effectDisplay() { return format(this.effect(),3)+"x"},
  unlocked() { return (hasUpgrade(this.layer, 31))},
   },
   33: {
  title:'E13',
  description: "Reduce Ac7 requirement beyond 10.",
  cost:new Decimal('1e9'),
  unlocked() { return (hasUpgrade(this.layer, 32))},
   },
   34: {
  title:'E14',
  description: "Ac7 boost Ab1 effect.<br>(ignore any softcaps)",
  cost:new Decimal('1.2e9'),
  effect()  { 
   let ef = n(challengeCompletions('A',41)).sub(8).max(1).log(2).sqrt().max(1)
   return ef;
  },
  effectDisplay() { return "^"+format(this.effect(),3)}, 
  unlocked() { return (hasUpgrade(this.layer, 33))},
   },
   35: {
  title:'E15',
  description: "boost to E base on A.",
  cost:new Decimal('4e9'),
  effect()  { 
   let ef = player.A.points.add(10).log(10).cbrt().div(5).max(1)
   if (hasMilestone('E',3)) ef = Decimal.pow(ef,1.5)
   if (hasUpgrade('E',41)) ef = Decimal.pow(ef,2)
   if (hasUpgrade('D',45)) ef = Decimal.pow(ef,1.2)
   if(ef.gte(2)) ef=ef.div(2).pow(0.5).mul(2)//sc119
   return ef;  
  },
  effectDisplay() { return format(this.effect(),3)+"x"},
  unlocked() { return (hasUpgrade(this.layer, 34))},
   },
   36: {
  title:'E15.5',
  description: "boost to E based on E upgrades amount.",
  cost:new Decimal('1e10'),
  effect()  { 
   let ef = n(player.E.upgrades.length).pow(0.5).max(1)
   if(ef.gte(4)) ef=ef.div(4).pow(0.5).mul(4)//sc121
   return ef;  
  },
  effectDisplay() { return format(this.effect(),3)+"x"},
  unlocked() { return (hasUpgrade(this.layer, 35))},
   },
   41: {
  title:'E16',
  description: "E15 ^2, D10 ^1.1.",
  cost:new Decimal('1e14'),
  unlocked() { return  (challengeCompletions("E", 12) >= 3)},
   },
   42: {
  title:'E17',
  description: "Eb1-2 base +1, Eb3 base +1.5, Eb4 base +0.5.",
  cost:new Decimal('1.5e15'),
  unlocked() { return (hasUpgrade(this.layer, 41))},
   },
   43: {
  title:'E18',
  description: "Unlock more Softcap Point upgrades.",
  cost:new Decimal('1e19'),
  unlocked() { return (hasUpgrade(this.layer, 42))},
   },
   44: {
  title:'E19',
  description: "E2 ^1.5",
  cost:new Decimal('1e20'),
  unlocked() { return (hasUpgrade(this.layer, 43))},
   },
   45: {
  title:'E20',
  description: "Unlock Eb10.",
  tooltip:"Eb5-9 will be unlocked later.",
  cost:new Decimal('1e23'),
  unlocked() { return (hasUpgrade(this.layer, 44))},
   },
   46: {
  title:'E20.5',
  description: "Eb10 affects Eb4.<br>Unlock Eb11.",
  cost:new Decimal('1e24'),
  unlocked() { return (hasUpgrade(this.layer, 45))},
   },
   51: {
  title:'E21',
  description: "Boost to E based on Bb5.",
  cost:new Decimal('1e31'),
  effect()  { 
   let ef = buyableEffect('B',23).div("1e1000").max(1).pow(0.015)
   if(hasUpgrade('B',86)) ef=ef.pow(1.5)
   if(ef.gte(100)) ef=ef.div(100).pow(0.5).mul(100)//sc130
   if(ef.gte(1e4)) ef=ef.div(1e4).pow(0.5).mul(1e4)//sc150
   return ef;  
  },
  effectDisplay() { return format(this.effect())+"x" }, 
  unlocked() { return (hasUpgrade(this.layer, 45))},
   },
   52: {
  title:'E22',
  description: "Reduce Ac7 requirement based on E.",
  cost:new Decimal('2e32'),
  effect()  { 
   let ef = n(1).div(player.E.points.max(10).log(10).log(10))
   return ef;  
  },
  effectDisplay() { return '^'+format(this.effect(),4)},
  unlocked() { return (hasUpgrade(this.layer, 51))},
   },
   53: {
  title:'E23',
  description: "Boost to Eb10 and Eb11's bases based on E.",
  cost:new Decimal('4e32'),
  effect()  { 
   let ef = player.E.points.div(1e30).max(10).log(10).pow(0.5)
   return ef;  
  },
  effectDisplay() { return format(this.effect())+"x"},
  unlocked() { return (hasUpgrade(this.layer, 52))},
   },
   54: {
  title:'E24',
  description: "Reduce Ebs' costs based on Eb12.",
  cost:new Decimal('1e39'),
  effect()  { 
   let ef = buyableEffect('E',24).pow(0.01).div(10).pow(2).mul(10).max(1)
   if(hasUpgrade('E',56)) ef=ef.pow(upgradeEffect('E',56))
   if(ef.gte(1e10)) ef=ef.div(1e10).pow(0.5).mul(1e10)//sc140
   return ef;  
  },
  effectDisplay() { return "÷"+format(this.effect())},
  unlocked() { return (hasUpgrade(this.layer, 53))},
   },
   55: {
  title:'E25',
  description: "x1e80001 pts, add to Eb1-4 base based on E.",
  cost:new Decimal('2e42'),
  effect()  { 
   let ef = Decimal.add(player.E.points,10).log(10).pow(0.25).sub(1)
   return ef.max(0)
  },
  effectDisplay() { return '+'+format(this.effect()) }, 
  unlocked() { return (hasUpgrade(this.layer, 54))},
   },
   56: {
  title:'E25.5',
  description: "x1e800000 pts, boost to E24 based on E.",
  cost:new Decimal('4.3e43'),
  effect()  { 
   let ef = player.E.points.div(1e33).max(10).log(10).sub(9)
   if(ef.gte(2)) ef=ef.div(2).pow(0.5).mul(2)//sc139
   return ef.max(1)
  },
  effectDisplay() { return '^'+format(this.effect(),3) }, 
  unlocked() { return (hasUpgrade(this.layer, 54))},
   },
   61: {
  title:'E26',
  description: "Boost to E directly based on Ac7 completions beyond 12.",
  cost:new Decimal('1e50'),
  effect()  { 
   let ef = n(challengeCompletions('A',41)).sub(11).max(1).pow(n(challengeCompletions('A',41)).max(1).pow(0.8))
   if(hasUpgrade('B',86)) ef=ef.pow(1.5)
   if(ef.gte(5)) ef=ef.div(5).pow(0.5).mul(5)//sc141
   if(ef.gte(15)) ef=ef.div(15).pow(0.8).mul(15)//sc147
   return ef.max(1)
  },
  effectDisplay() { return format(this.effect(),3)+"x"},
  unlocked() { return (hasMilestone(this.layer, 8))},
   },
   62: {
  title:'E27',
  description: "Eb12 is more effective. (effect ^1.2)",
  cost:new Decimal('3e56'),
  unlocked() { return (hasUpgrade(this.layer, 61))},
   },
   63: {
  title:'E28',
  description: "boost E directly based on E3/4/12/15 ^0.2.",
  cost:new Decimal('2e57'),
  effect()  { 
   let ef = n(upgradeEffect('E',13).mul(upgradeEffect('E',14)).mul(upgradeEffect('E',32)).mul(upgradeEffect('E',35))).pow(0.2)
   if(hasUpgrade('B',86)) ef=ef.pow(1.5)
   if(ef.gte(7.5)) ef=ef.div(7.5).pow(0.8).mul(7.5)//sc148
   return ef.max(1)
  },
  effectDisplay() { return format(this.effect(),3)+"x"},
  unlocked() { return (hasUpgrade(this.layer, 62))},
   },
   64: {
  title:'E29',
  description: "Unlock new B upgrades.",
  cost:new Decimal('6e60'),
  unlocked() { return (hasUpgrade(this.layer, 63))},
   },
   65: {
  title:'E30',
  description: "Boost to B directly based on B beyond 1e700.",
  cost:new Decimal('1e63'),
  effect()  { 
   let ef = player.B.points.max(10).log(10).sub(699).pow(2)
   if(hasUpgrade('B',86)) ef=ef.pow(1.5)
   if(ef.gte(100)) ef=ef.div(100).pow(0.8).mul(100)//sc149
   return ef.max(1)
  },
  effectDisplay() { return format(this.effect())+"x"},
  unlocked() { return hasUpgrade('E',64)},
   },
   66: {
  title:'E30.5',
  description: "Reduce Ab2's cost based on A.",
  cost:new Decimal('2e63'),
  effect()  { 
   let ef = player.A.points.max(10).div("1e800")
   return ef.max(1)
  },
  effectDisplay() { return "÷"+format(this.effect())},
  unlocked() { return hasUpgrade('E',65)},
   },
   71: {
  title:'E31',
  description: "logEm mults E.",
  cost:new Decimal('1e77'),
  unlocked() { return (hasMilestone(this.layer, 11))},
  effect()  { 
   let ef = player.E.Em.add(10).log(10)
   if (hasUpgrade('E',81)) ef = Decimal.pow(ef,1.5)
   return ef;  
  },
  effectDisplay() { return format(this.effect())+"x" },
   },
   72: {
  title:'E32',
  description: "E26 +10%.",
  cost:new Decimal('1e81'),
  unlocked() { return (hasUpgrade(this.layer, 71))},
   },
   73: {
  title:'E33',
  description: "Bb1-2 are cheaper.<br>(^0.99,after scaling)",
  cost:new Decimal('1e83'),
  unlocked() { return (hasUpgrade(this.layer, 72))},
   },
   74: {
  title:'E34',
  description: "E22 x1.1.",
  cost:new Decimal('1e87'),
  unlocked() { return (hasUpgrade(this.layer, 73))},
   },
   75: {
  title:'E35',
  description: "C12/D17 base +0.1.",
  cost:new Decimal('1e91'),
  unlocked() { return (hasUpgrade(this.layer, 74))},
   },
   81: {
  title:'E36',
  description: "E31 ^1.5.",
  cost:new Decimal('1e97'),
  unlocked() { return (hasUpgrade(this.layer, 75))},
   },
   82: {
  title:'E37',
  description: "Em mults B.",
  effect()  { 
   let ef = 1
   return player.E.Em.add(1).pow(ef);  
  },
  cost:new Decimal('1e101'),
  effectDisplay() { return format(this.effect())+"x" }, 
  unlocked() { return (hasUpgrade(this.layer, 81))},
   },
   83: {
  title:'E38',
  description: "E8 base +0.15.",
  cost:new Decimal('1e107'),
  unlocked() { return (hasUpgrade(this.layer, 82))},
   },
   84: {
  title:'E39',
  description: "E7 ^1.5.",
  cost:new Decimal('1e117'),
  unlocked() { return (hasUpgrade(this.layer, 83))},
   },
   85: {
  title:'E40',
  cost:new Decimal('1e121'),  
  description: "Eb5-7 amt boost pts.<br>(1.7^x).",
  unlocked() { return (hasUpgrade(this.layer, 84))},
  effect()  { 
   let b=1.7
   let a=getBuyableAmount('E', 31).add(getBuyableAmount('E', 32)).add(getBuyableAmount('E', 33))
   let ef = Decimal.pow(b,a)
   return ef;  
  },
  effectDisplay() { return format(this.effect())+"x" }, 
   },
   91: {
  title:'E41',
  description: "E8 base +0.15.",
  cost:new Decimal('1e123'),
  unlocked() { return (hasUpgrade(this.layer, 85))},
   },
   92: {
  title:'E42',
  cost:new Decimal('5e130'),  
  description: "Eb5-7 amt boost B.<br>(1.3^x).",
  unlocked() { return (hasUpgrade(this.layer, 91))},
  effect()  { 
   let b=1.3
   let a=getBuyableAmount('E', 31).add(getBuyableAmount('E', 32)).add(getBuyableAmount('E', 33))
   if (hasUpgrade('E',93)) b=b+0.1
   let ef = Decimal.pow(b,a)
   return ef;  
  },
  effectDisplay() { return format(this.effect())+"x" }, 
   },
   93: {
  title:'E43',
  description: "Eb7 is cheaper,<br>E42 base +0.1.",
  cost:new Decimal('3e136'),
  unlocked() { return (hasUpgrade(this.layer, 92))},
   },
   94: {
  title:'E44',
  description: "Eb4 is cheaper,<br>E8 base +0.1.",
  cost:new Decimal('1e145'),
  unlocked() { return (hasUpgrade(this.layer, 93))},
   },
   95: {
  title:'E45',
  cost:new Decimal('1e157'),  
  description: "Eb5-7 amt boost C.(1.15^x)<br> Eb5 cost base -1.",
  unlocked() { return (hasUpgrade(this.layer, 94))},
  effect()  { 
   let b=1.15
   let a=getBuyableAmount('E', 31).add(getBuyableAmount('E', 32)).add(getBuyableAmount('E', 33))
   let ef = Decimal.pow(b,a)
   return ef;  
  },
  effectDisplay() { return format(this.effect())+"x" }, 
   },
   101: {
  title:'E46',
  description: "Ek eff mult +2.",
  cost:new Decimal('3e186'),
  unlocked() { return (challengeCompletions('E',31)>=3)},
   },
   102: {
  title:'E47',
  description: "Ek mults E.",
  effect()  { 
   let ef = player.E.Ek.add(10).log(10).pow(2)
   if (hasMilestone('E',19)) ef=Decimal.pow(ef,1.6)
   return ef;  
  },
  cost:new Decimal('1e197'),
  effectDisplay() { return format(this.effect())+"x" }, 
  unlocked() { return (hasUpgrade(this.layer, 101))},
   },
   103: {
  title:'E48',
  description: "Em eff exp +0.03,nerf Bb scaling and Eb1-3 cost.",
  cost:new Decimal('2e222'),
  unlocked() { return (hasUpgrade(this.layer, 102))},
   },
   104: {
  title:'E49',
  description: "Ek^1.5 mult pts,Eb6/9 base +0.25,Eb7 base +1,Eb1-4 scaling are 10 later.",
  effect()  { 
   let ef = player.E.Ek.max(1).pow(1.5)
   return ef;  
  },
  cost:new Decimal('1e328'),
  effectDisplay() { return format(this.effect())+"x" }, 
  unlocked() { return (hasUpgrade(this.layer, 103))},
   },
   105: {
  title:'E50',
  description: "Em^1.01,Eb7 base +1,B26 ^1.05.",
  cost:new Decimal('1e483'),
  unlocked() { return (hasUpgrade(this.layer, 104))},
   },
  },
  automate(){
   if (player.E.auto) { buyBuyable("E",11),buyBuyable("E",12),buyBuyable("E",13) }
  if (player.E.auto2) { buyBuyable("E",14),buyBuyable("E",21) }
  if (player.E.auto3) { buyBuyable("E",22),buyBuyable("E",23),buyBuyable("E",24) }
  if (player.E.auto4) { buyBuyable("E",31),buyBuyable("E",32),buyBuyable("E",33) }
  if (player.E.auto5) { buyBuyable("E",41),buyBuyable("E",42) }
  if (player.E.auto6) { buyBuyable("E",22) }
  },
  buyables:{
   11: {
  title: "Eb1", 
  baseCost() {
   let base = n(1)
   if(hasUpgrade('E',54)) base=base.div(upgradeEffect('E',54))
   return base
  },
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   let cost = Decimal.pow(2, x.pow(1.2)).mul(this.baseCost())
   return cost},
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
  base(){   let bas = n(2)
   if (hasUpgrade('E',21)) bas = Decimal.add(bas,1)
   if (hasUpgrade('E',42)) bas = Decimal.add(bas,1)
   if (hasUpgrade('E',55)) bas = Decimal.add(bas,upgradeEffect('E',55))
   if (hasUpgrade('E',45)) bas = Decimal.add(bas,buyableEffect('E',22))
   return bas},
  effect(x) { // Effects of owning x of the items, x is a decimal
   let ef = Decimal.pow(this.base(),x)
   if(ef.gte(1e40)) ef=ef.div(1e40).pow(0.5).mul(1e40)//sc134
   if (inChallenge('E',21)) ef = n(1e-100)
   return ef},
  display() { // Everything else displayed in the buyable button after the title
   return "give A a x"+ format(this.base()) + " direct mult \n\
   Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: x" + format(this.effect()) + " A" },
   purchaseLimit() {return player.E.Eblim.floor()},
  unlocked() { return hasMilestone('E',1) }
   },
   12: {
  title: "Eb2", 
  baseCost() {
   let base = n(1)
   if(hasUpgrade('E',54)) base=base.div(upgradeEffect('E',54))
   return base
  },
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   let cost = Decimal.pow(3, x.pow(1.25)).mul(this.baseCost())
   return cost},
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
  base(){   let bas = n(2)
   if (hasUpgrade('E',21)) bas = Decimal.add(bas,1)
   if (hasUpgrade('E',42)) bas = Decimal.add(bas,1)
   if (hasUpgrade('E',55)) bas = Decimal.add(bas,upgradeEffect('E',55))
   if (hasUpgrade('E',45)) bas = Decimal.add(bas,buyableEffect('E',22))
   return bas},
  effect(x) { // Effects of owning x of the items, x is a decimal
   let ef = Decimal.pow(this.base(),x)
   if(ef.gte(1e40)) ef=ef.div(1e40).pow(0.5).mul(1e40)//sc135
   if (inChallenge('E',21)) ef = n(1e-100)
   return ef},
  display() { // Everything else displayed in the buyable button after the title
   return "give B a x"+ format(this.base()) + " direct mult \n\
   Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: x" + format(this.effect()) + " B" },
   purchaseLimit() {return player.E.Eblim.floor()},
  unlocked() { return hasMilestone('E',1) }
   },
   13: {
  title: "Eb3", 
  baseCost() {
   let base = n(50000)
   if(hasUpgrade('E',54)) base=base.div(upgradeEffect('E',54))
   return base
  },
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   let cost = Decimal.pow(6, x.pow(1.14)).mul(this.baseCost())
   return cost},
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
  base(){   let bas = n(2)
   if(hasUpgrade('C',35)) bas=bas.add(0.5)
   if (hasUpgrade('E',42)) bas = Decimal.add(bas,1.5)
   if (hasMilestone('E',5)) bas = Decimal.add(bas,1)
   if (hasUpgrade('E',55)) bas = Decimal.add(bas,upgradeEffect('E',55))
   if (hasUpgrade('E',45)) bas = Decimal.add(bas,buyableEffect('E',22))
   return bas},
  effect(x) { // Effects of owning x of the items, x is a decimal
   let ef = Decimal.pow(this.base(),x)
   if(ef.gte(1e40)) ef=ef.div(1e40).pow(0.5).mul(1e40)//sc13
   return ef},
  display() { // Everything else displayed in the buyable button after the title
   return "give C/D a x"+ format(this.base()) + " direct mult \n\
   Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: x" + format(this.effect()) + " C/D" },
   purchaseLimit() {return player.E.Eblim.floor()},
  unlocked() { return hasUpgrade('E',21) }
   },
   14: {
  title: "Eb3.5", 
  baseCost() {
   let base = n(1e15)
   if(hasUpgrade('E',54)) base=base.div(upgradeEffect('E',54))
   return base
  },
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   let cost = Decimal.pow(2, x.pow(1.2)).mul(this.baseCost())
   return cost},
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
  base(){   let base = n(0.001)
  if (hasUpgrade('E',46)) base = Decimal.add(base,buyableEffect('E',23))
   return base},
  effect(x) { // Effects of owning x of the items, x is a decimal
   let ef = Decimal.mul(this.base(),x)
   if(ef.gte(0.03)) ef=ef.sub(0.03).div(10).add(0.03)
   return ef},
  display() { // Everything else displayed in the buyable button after the title
   return "give a +"+ format(this.base()) + " E exponent \n\
   Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: +" + format(this.effect()) + " E exponent" },
   purchaseLimit() {return player.E.Eblim.floor()},
  unlocked() { return hasMilestone('E',4) }
   },
   21: {
  title: "Eb4", 
  baseCost() {
   let base = n(1e10)
   if(hasUpgrade('E',54)) base=base.div(upgradeEffect('E',54))
   return base
  },
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   let cost = Decimal.pow(3, x.pow(1.1)).mul(this.baseCost())
   return cost},
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
  base() {
   let base =n(2)
   if(hasUpgrade('C',35)) base=base.add(0.5)
   if (hasUpgrade('E',42)) base = Decimal.add(base,0.5)
   if (hasUpgrade('E',55)) base = Decimal.add(base,upgradeEffect('E',55))
   if (hasUpgrade('E',46)) base = Decimal.add(base,buyableEffect('E',22))
   return base
  },
  effect() {
   let eff=this.base().pow(gba('E',21))
   if(eff.gte(1e15)) eff=eff.div(1e15).pow(0.2).mul(1e15)//sc128
   return eff.max(1)
  },
  display() { // Everything else displayed in the buyable button after the title
   return "give E a x" +format(this.base())+" direct mult<br>Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: x" + format(this.effect()) +" E"},
   purchaseLimit() {return player.E.Eblim.floor()},
  unlocked() { return hasUpgrade('C',34) }
   },
   22: {
  title: "Eb10", 
  baseCost() {
   let base = n(1e23)
   if(hasUpgrade('E',54)) base=base.div(upgradeEffect('E',54))
   return base
  },
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   let cost = Decimal.pow(3, x.pow(1.25)).mul(this.baseCost())
   return cost
  },
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() {
   if (hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(0)
   else player[this.layer].points = player[this.layer].points.sub(this.cost())
   setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
   base() {
    let base=n(0.1)
    if(hasUpgrade('E',53)) base=base.mul(upgradeEffect('E',53))
    return base
   },
  effect(x) { // Effects of owning x of the items, x is a decimal
   let ef = this.base().mul(gba('E',22))
   return ef},
  display() { // Everything else displayed in the buyable button after the title
  let a="3"
  if(hasUpgrade('E',46)) a="4"
   return "Eb1-"+a+" base +" +format(this.base())+"<br>Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: +" + format(this.effect())},
   purchaseLimit() {return player.E.Eblim.floor()},
  unlocked() { return hasUpgrade('E',45) }
   },
   23: {
  title: "Eb11", 
  baseCost() {
   let base = n(1e25)
   if(hasUpgrade('E',54)) base=base.div(upgradeEffect('E',54))
   return base
  },
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   let cost = Decimal.pow(3, x.pow(1.25)).mul(this.baseCost())
   return cost
  },
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() {
   if (hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(0)
   else player[this.layer].points = player[this.layer].points.sub(this.cost())
   setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
   base() {
    let base=n(0.0001)
    if(hasUpgrade('E',53)) base=base.mul(upgradeEffect('E',53))
    return base
   },
  effect(x) { // Effects of owning x of the items, x is a decimal
   let ef = this.base().mul(gba('E',23))
   return ef},
  display() { // Everything else displayed in the buyable button after the title
   return "Eb3.5 base +" +format(this.base(),5)+"<br>Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: +" + format(this.effect(),5)},
   purchaseLimit() {return player.E.Eblim.floor()},
  unlocked() { return hasUpgrade('E',46) }
   },
   24: {
  title: "Eb12", 
  baseCost() {
   let base = n(1e31)
   if(hasUpgrade('E',54)) base=base.div(upgradeEffect('E',54))
   return base
  },
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   let cost = Decimal.pow(2.5, x.pow(1.35)).mul(this.baseCost())
   return cost
  },
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() {
   if (hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(0)
   else player[this.layer].points = player[this.layer].points.sub(this.cost())
   setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
   base() {
    let base=n(1e10)
    if(hasUpgrade('E',62)) base=base.pow(1.2)
    return base
   },
  effect(x) { // Effects of owning x of the items, x is a decimal
   let ef = this.base().pow(gba('E',24))
   return ef},
  display() { // Everything else displayed in the buyable button after the title
  let a=""
  if(hasUpgrade('B',83)) a="Ab and "
   return "All "+a+"Bbs' cost ÷" +format(this.base())+"<br>Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: ÷" + format(this.effect())},
   purchaseLimit() {return player.E.Eblim.floor()},
  unlocked() { return hasMilestone('E',5) }
   },
   31: {
  title: "Eb5", 
  //别忘了basecost
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   let cost = Decimal.pow(10, x).times('1e71')
   if (hasUpgrade('E',95)) cost =Decimal.pow(9, x).times('1e71')
   return cost
  },
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
  base(){   let base = 2  
   return base},
  effect(x) { // Effects of owning x of the items, x is a decimal
   let ef = Decimal.pow(this.base(),x)
   return ef},
  display() { // Everything else displayed in the buyable button after the title
   return "give Em a x"+ format(this.base()) + " mult \n\
   Eb5's factor/cost multiplier are fixed. \n\
   Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: x" + format(this.effect())},
  unlocked() { return hasMilestone('E',11) }
   },
   32: {
  title: "Eb6", 
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   let cost = Decimal.pow(5, x.pow(1.03)).times('1e72')
   return cost
  },
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
  base(){   let base = 2   
   if (hasChallenge("E", 32))  base = Decimal.add(base,challengeEffect('E',32)) 
   if (hasUpgrade("E", 104))  base = Decimal.add(base,0.25)  
   return base},
  effect(x) { // Effects of owning x of the items, x is a decimal
   let ef = Decimal.pow(this.base(),x.pow(1.008))
   return ef},
  display() { // Everything else displayed in the buyable button after the title
   return "give Em a x"+ format(this.base()) + " mult \n\
   Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: x" + format(this.effect())},
  unlocked() { return hasMilestone('E',11) }
   },
   33: {
  title: "Eb7", 
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   let cost = Decimal.pow(1000, x.pow(1.08)).times('1e74')
   if (hasUpgrade('E',93)) cost = Decimal.pow(1000, x.pow(1.07)).times('1e71')
   return cost
  },
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
  base(){   let base = 10   
   if (hasChallenge("E", 32))  base = Decimal.add(base,challengeEffect('E',32))  
   if (hasUpgrade("E", 104))  base = Decimal.add(base,1)
   if (hasUpgrade("E", 105))  base = Decimal.add(base,1)   
   return base},
  effect(x) { // Effects of owning x of the items, x is a decimal
   let ef = Decimal.pow(this.base(),x.pow(1.012))
   return ef},
  display() { // Everything else displayed in the buyable button after the title
   return "give Em a x"+ format(this.base()) + " mult \n\
   Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: x" + format(this.effect())},
  unlocked() { return player[this.layer].total.gte('1e73') }
   },
   41: {
  title: "Eb8", 
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   let cost = Decimal.pow(10, x).times('1e170')
   return cost
  },
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
  base(){   let base = 2  
   return base},
  effect(x) { // Effects of owning x of the items, x is a decimal
   let ef = Decimal.pow(this.base(),x)
   return ef},
  display() { // Everything else displayed in the buyable button after the title
   return "give Ek a x"+ format(this.base()) + " mult \n\
   Eb8's factor/cost multiplier are fixed. \n\
   Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: x" + format(this.effect())},
  unlocked() { return hasMilestone('E',11) }
   },
   42: {
  title: "Eb9", 
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   let cost = Decimal.pow(6, x.pow(1.03)).times('1e180')
   return cost
  },
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
  base(){   let base = 2   
   if (hasUpgrade("E", 104))  base = Decimal.add(base,0.25)  
   return base},
  effect(x) { // Effects of owning x of the items, x is a decimal
   let ef = Decimal.pow(this.base(),x.pow(1.008))
   return ef},
  display() { // Everything else displayed in the buyable button after the title
   return "give Ek a x"+ format(this.base()) + " mult \n\
   Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: x" + format(this.effect())},
  unlocked() { return hasMilestone('E',15) }
   },
  },
  challenges: {
   11: {
   name: "Ec1",
   completionLimit: 3,
   challengeDescription: function() {
  return "Reset A and B points and buyables and they are dilated.<br> Completion: " +challengeCompletions("E", 11) + "/3"},
   unlocked() { return (hasMilestone("E", 2))},
   goal(){
  if (challengeCompletions('E',11) == 0) return Decimal.pow(10,145);
  if (challengeCompletions('E',11) == 1) return Decimal.pow(10,155);
  if (challengeCompletions('E',11) == 2) return Decimal.pow(10,166);
   },  
   onEnter() {
    player.A.points=n(0);player.B.points=n(0);
    player.A.buyables={11:n(0),12:n(0)};player.B.buyables={11:n(0),12:n(0),13:n(0),21:n(0),22:n(0),23:n(0)}
   },
   goalDescription:  function() {return format(this.goal())+' B'},
   canComplete(){return player.B.points.gte(this.goal())},
   rewardDescription: "boost to E based on B.",
   rewardEffect() {
    let base = n(challengeCompletions('E',11)).pow(n(challengeCompletions).sqrt().max(1)).div(10)
    let ef = player.B.points.max(10).log(10).tetrate(base).max(1)
    if(hasUpgrade('B',85)) ef=ef.pow(1.2)
    if(ef.gte(10)) ef=ef.div(10).pow(0.5).mul(10)//sc147
  return ef
   },
   rewardDisplay() {return format(this.rewardEffect())+"x"},
   },
   12: {//21 after E15,22 E17,23 E19
  name: "Ec2",
  completionLimit: 3,
  challengeDescription: function() {
   return "Reset A and B points and buyables. Bb1-2's base are stuck at 1. <br> Completion: " +challengeCompletions("E", 12) + "/3"},
  unlocked() { return (hasMilestone("E", 3))},
  goal(){
   if (challengeCompletions('E',12) == 0) return Decimal.pow(10,315);
   if (challengeCompletions('E',12) == 1) return Decimal.pow(10,333);
   if (challengeCompletions('E',12) == 2) return Decimal.pow(10,355);
  },  
  goalDescription:  function() {return format(this.goal())+' B'},
  onEnter() {
    player.A.points=n(0);player.B.points=n(0);
    player.A.buyables={11:n(0),12:n(0)};player.B.buyables={11:n(0),12:n(0),13:n(0),21:n(0),22:n(0),23:n(0)}
   },
   canComplete() {return player.B.points.gte(this.goal())},
   rewardDescription: "boost to E based on Softcap Points (start at 20000).",
   rewardEffect() {
   let bas = Decimal.pow(challengeCompletions("E", 12),1.35)
   let ef = player.s.points.max(20000).sub(19990).log(10).pow(bas)
   if(hasUpgrade('B',85)) ef=ef.pow(1.2)
   if(ef.gte(2)) ef=ef.div(2).pow(0.5).mul(2)//sc120
   if(ef.gte(10)) ef=ef.div(10).pow(0.5).mul(10)//sc123
   if (challengeCompletions("E", 12) >= 1)  return ef
   else return new Decimal(1)
  },
  rewardDisplay() {return format(this.rewardEffect(),3)+"x"},
   },
   21: {//31 after 1e45
  name: "Ec3",
  completionLimit: 3,
  challengeDescription: function() {
   return "Reset points, and A and B points and buyables. Eb1-2's effect are stuck at 1e-100. <br> Completion: " +challengeCompletions("E", 21) + "/3"},
  unlocked() { return (hasMilestone("E", 7))},
  goal(){
   if (challengeCompletions('E',21) == 0) return n("4.35e435")
   if (challengeCompletions('E',21) == 1) return n("4.53e453")
   if (challengeCompletions('E',21) == 2) return n("4.71e471")
  },  
  goalDescription:  function() {return format(this.goal())+' B'},
  onEnter() {
    player.A.points=n(0);player.B.points=n(0);player.points=n(0)
    player.A.buyables={11:n(0),12:n(0)};player.B.buyables={11:n(0),12:n(0),13:n(0),21:n(0),22:n(0),23:n(0)}
   },
  canComplete(){return player.B.points.gte(this.goal())},
  rewardDescription: "boost to A and B directly based on themselves.",
  rewardEffect() {
   let ef0 = player.A.points.pow(challengeCompletions('E',21)).pow(0.01).max(1)
   let ef1 = player.B.points.pow(challengeCompletions('E',21)).pow(0.01).max(1)
   if(hasMilestone('E',8)) {ef0=ef0.pow(1.25);ef1=ef1.pow(1.25)}
   if(hasUpgrade('B',85)) {ef0=ef0.pow(1.2);ef1=ef1.pow(1.2)}
   if(ef0.gte(1e25)) ef0=ef0.div(1e25).pow(0.5).mul(1e25)//sc142
   if(ef1.gte(1e25)) ef1=ef1.div(1e25).pow(0.5).mul(1e25)//sc143
   if(challengeCompletions("E", 21)>=1) return [ef0,ef1]
   else return [n(1),n(1)]
  },
  rewardDisplay() {return format(this.rewardEffect()[0])+"x A and "+format(this.rewardEffect()[1])+"x B"},
   },
   22: {//41 after 1e47
  name: "Ec4",
  completionLimit: 3,
  challengeDescription: function() {
   return "Reset points, and A and B points and buyables.<br>Nerf B based on B. <br> Completion: " +challengeCompletions("E", 22) + "/3 <br> currently: ^"+format(this.nerf(),6)},
  unlocked() { return (hasMilestone("E", 7))},
  goal(){
   if (challengeCompletions('E',22) == 0) return n("3.65e365")
   if (challengeCompletions('E',22) == 1) return n("3.75e375")
   if (challengeCompletions('E',22) == 2) return n("3.91e391")
  },
  nerf() { return player.B.points.add(10).log(10).pow(-0.1)},  
  goalDescription:  function() {return format(this.goal())+' B'},
  onEnter() {
    player.A.points=n(0);player.B.points=n(0);player.points=n(10)
    player.A.buyables={11:n(0),12:n(0)};player.B.buyables={11:n(0),12:n(0),13:n(0),21:n(0),22:n(0),23:n(0)}
   },
  canComplete(){return player.B.points.gte(this.goal())},
  rewardDescription: "boost to C and D directly based on themselves.",
  rewardEffect() {
   let ef0 = player.C.points.pow(challengeCompletions('E',22)).pow(0.01).max(1)
   let ef1 = player.D.points.pow(challengeCompletions('E',22)).pow(0.01).max(1)
   if(hasMilestone('E',9)) {ef0=ef0.pow(1.25);ef1=ef1.pow(1.25)}
   if(hasUpgrade('B',85)) {ef0=ef0.pow(1.2);ef1=ef1.pow(1.2)}
   if(ef0.gte(1e15)) ef0=ef0.div(1e15).pow(0.5).mul(1e15)//sc144
   if(ef1.gte(1e10)) ef1=ef1.div(1e10).pow(0.5).mul(1e10)//sc145
   if(challengeCompletions("E", 22)>=1) return [ef0,ef1]
   else return [n(1),n(1)]
  },
  rewardDisplay() {return format(this.rewardEffect()[0])+"x C and "+format(this.rewardEffect()[1])+"x D"},
   },
   31: {//51
  name: "Ec5",
  completionLimit: 5,
  challengeDescription: function() {
   return "Bb1-2's base are stuck at 1.2,Bb3-4,Eb4 is disabled. <br> Completion: " +challengeCompletions("E", 31) + "/5"},
  unlocked() { return (hasMilestone("E", 14))},
  goal(){
   if (challengeCompletions('E',31) == 0) return Decimal.pow(10,22500);
   if (challengeCompletions('E',31) == 1) return Decimal.pow(10,24000);
   if (challengeCompletions('E',31) == 2) return Decimal.pow(10,27300);
   if (challengeCompletions('E',31) == 3) return Decimal.pow(10,48800);
   if (challengeCompletions('E',31) == 4) return Decimal.pow(10,50600);
  },  
  goalDescription:  function() {return format(this.goal())+' points'},
  canComplete(){return player.points.gte(this.goal())},
  rewardDescription: "Bb1-5 are cheaper(-0.0025 exp per comp).",
  rewardEffect() {
   //let t=Decimal.mul(challengeCompletions("E", 31),0.0025)
   let t=(challengeCompletions("E", 31))/400
   //t=t.toNumber().toFixed(3)
   let ef=new Decimal(1).sub(t)
   if (challengeCompletions("E", 31) >= 1)  return ef
   else return new Decimal(1)
  },
  rewardDisplay() {return "^"+format(this.rewardEffect(),4)+', after scaling. \n\
   unlock new upg at 3 comp'},
   },
   32: {//61
  name: "Ec6",
  completionLimit: 5,
  challengeDescription: function() {
   return "nerf pts based on Em. <br> Completion: " +challengeCompletions("E", 32) + "/5 <br> currently: ^"+format(this.nerf(),6)},
  unlocked() { return (hasMilestone("E", 14))},
  goal(){
   if (challengeCompletions('E',32) == 0) return Decimal.pow(10,13200);
   if (challengeCompletions('E',32) == 1) return Decimal.pow(10,13700);
   if (challengeCompletions('E',32) == 2) return Decimal.pow(10,14850);
   if (challengeCompletions('E',32) == 3) return Decimal.pow(10,20000);
   if (challengeCompletions('E',32) == 4) return Decimal.pow(10,25930);
  },   
  nerf() { return player.E.Em.add(10).log(10).pow(-0.2)},  
  goalDescription:  function() {return format(this.goal())+' points'},
  canComplete(){return player.points.gte(this.goal())},
  rewardDescription: "Ec6 comp add to Eb6-7 base.",
  rewardEffect() {
   //let t=Decimal.mul(challengeCompletions("E", 31),0.0025)
   let ef=(challengeCompletions("E", 32))*0.2
   if (challengeCompletions("E", 32) >= 1)  return ef
   else return new Decimal(0)
  },
  rewardDisplay() {return '+'+format(this.rewardEffect())},
   },
   41: {//71
  name: "Ec7",
  completionLimit: 5,
  challengeDescription: function() {
   return "Bb scaling starts 300 earlier, Bb5/Eb4 x0.4. <br> Completion: " +challengeCompletions("E", 41) + "/5"},
  unlocked() { return (hasMilestone("E", 16))},
  goal(){
   if (challengeCompletions('E',41) == 0) return Decimal.pow(10,36300);
   if (challengeCompletions('E',41) == 1) return Decimal.pow(10,60400);
   if (challengeCompletions('E',41) == 2) return Decimal.pow(10,66600);
   if (challengeCompletions('E',41) == 3) return Decimal.pow(10,84800);
   if (challengeCompletions('E',41) == 4) return Decimal.pow(10,106100);
  },  
  goalDescription:  function() {return format(this.goal())+' points'},
  canComplete(){return player.points.gte(this.goal())},
  rewardDescription: "Eb1-4 are cheaper(-0.006 exp per comp).",
  rewardEffect() {
   //let t=Decimal.mul(challengeCompletions("E", 31),0.0025)
   let t=(challengeCompletions("E", 41))*0.006
   //t=t.toNumber().toFixed(3)
   let ef=new Decimal(1).sub(t)
   if (challengeCompletions("E", 41) >= 1)  return ef
   else return new Decimal(1)
  },
  rewardDisplay() {return "^"+format(this.rewardEffect(),3)+', after scaling.'},
   },
   42: {//7,8 aft 53,63.then 71 81 64 54 72 55 82 73 65 83 74 84 75 85
  name: "Ec8",
  completionLimit: 5,
  challengeDescription: function() {
   return "nerf pts based on pts(stronger),Bb3-5/Eb4/Em/Ek are disabled. <br> Completion: " +challengeCompletions("E", 42) + "/5 <br> currently: ^"+format(this.nerf(),6)},
  unlocked() { return (hasMilestone("E", 16))},
  goal(){
   if (challengeCompletions('E',42) == 0) return Decimal.pow(10,29800);
   if (challengeCompletions('E',42) == 1) return Decimal.pow(10,50500);
   if (challengeCompletions('E',42) == 2) return Decimal.pow(10,60100);
   if (challengeCompletions('E',42) == 3) return Decimal.pow(10,69870);
   if (challengeCompletions('E',42) == 4) return Decimal.pow(10,88000);
  },
  nerf() { return player.points.add(10).log(10).pow(-0.12)},  
  goalDescription:  function() {return format(this.goal())+' points'},
  canComplete(){return player.points.gte(this.goal())},
  rewardDescription: "boost to Em/Ek eff.",
  rewardEffect() {
   let ef=challengeCompletions("E", 42)
   if (hasUpgrade('E',104)) ef=Decimal.mul(ef,1.2)
   if (challengeCompletions("E", 42) >= 1)  return ef
   else return new Decimal(0)
  },
  rewardDisplay() {return 'Em:+'+format(this.rewardEffect()/100)+' exp,\n\
   Ek:+'+format(this.rewardEffect()/2)+' mul'},
   },
  },
  Emeffect() {
   ef = new Decimal(1)
   if (hasMilestone("E", 11)) ef=Decimal.mul(ef,(buyableEffect("E", 31)))
  ef=Decimal.mul(ef,(buyableEffect("E", 32)))
  ef=Decimal.mul(ef,(buyableEffect("E", 33)))
   if (hasUpgrade('E',105)) ef=Decimal.pow(ef,1.01)
   return ef;
  },
  emf() {
   let exp=0.25
   if (hasMilestone('E',12))  exp=Decimal.add(exp,0.02)
   if (hasUpgrade('E',103))  exp=Decimal.add(exp,0.03)  
   if (hasChallenge('E', 42))  exp = Decimal.add(exp,challengeEffect('E',42)/100)   
   if (inChallenge('E',42)) exp=0   
   let ef=player.E.Em.max(1).pow(exp)
   return ef
  },
  Ekeffect() {
   ef = new Decimal(1)
   if (hasMilestone("E", 15)) ef=Decimal.mul(ef,(buyableEffect("E", 41)))
  ef=Decimal.mul(ef,(buyableEffect("E", 42)))
   return ef;
  },
  ekf() {
   let m=3
   if (hasUpgrade('E',101))  m=Decimal.add(m,2)  
   if (hasChallenge('E', 42))  m=Decimal.add(m,challengeEffect('E',42)*0.5)  
   if (inChallenge('E',42)) m=0  
   let ef=player.E.Ek.add(1).log(10).pow(0.85).mul(m)
   return ef
  },
  update(diff) {
   if (hasMilestone("E", 11))  player.E.Em = player.E.Em.add(tmp.E.Emeffect.mul(diff))
   if (hasMilestone("E", 15))  player.E.Ek = player.E.Ek.add(tmp.E.Ekeffect.mul(diff))
   if (player.E.points.gte(6.66e66)) player.E.points=n(6.66e66)
  },
})