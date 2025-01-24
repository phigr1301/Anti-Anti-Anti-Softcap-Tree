addLayer("C", {
 infoboxes: {
introBox: {
  title: "C, the next row",
  body(){return "Here comes the second row. C will give you resets."},
        },
},
  name: "C", 
  symbol: "C", 
  position: 0, 
  startData() { return {
  unlocked: false,
		points: new Decimal(0),
  }},
  passiveGeneration(){  let c_pg=1
  if(hasMilestone("D", 1)) c_pg=c_pg+1
  if (hasMilestone("D", 2))  c_pg=c_pg*10
	  if (hasMilestone("B", 5)) c_pg = c_pg * 100
	  if (hasUpgrade("AS", 13)) c_pg = c_pg * 10
  return (hasUpgrade("C", 21))?c_pg:0},
  color: "#A73E16",
  requires: new Decimal(1e12), 
  resource: "C", 
  baseResource: "points", 
  baseAmount() {return player.points}, 
  type: "normal", 
  exponent: 0.15, 
  gainExp() {
  return new Decimal(1)
  },
  row: 1, 
  hotkeys: [
  {key: "c", description: "C: Reset for C points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
  ],
  layerShown(){  if (player.C.unlocked) return true
  else return (hasChallenge("A", 22))},
  gainMult() { 
  mult = new Decimal(1)
  mult = mult.mul(hasChallenge("A", 31)?2:1)
  mult = mult.mul(hasUpgrade('C',21)?10:1)
  mult = mult.mul(hasUpgrade('C',25)?50:1)
  mult = mult.mul(hasUpgrade('C',26)?10:1)
  mult = mult.mul(hasUpgrade('A',61)?upgradeEffect('A',61):1)
  mult = mult.mul(hasUpgrade("s",16)?upgradeEffect('s',16):1)
  mult = mult.mul(hasUpgrade("D",26)?upgradeEffect('D',26):1)
  mult = mult.mul(hasUpgrade("E",95)?upgradeEffect("E",95):1)
	  mult = mult.mul(buyableEffect("B", 21))
	  mult = mult.mul(hasUpgrade('AS', 13) ? 2 : 1)
  mult = mult.pow(hasUpgrade('A',45)?1.5:1)
  mult = mult.pow(hasUpgrade('A',46)?1.5:1)
	  mult = mult.pow(hasUpgrade('C', 24) ? 1.5 : 1)
  
  if(mult.gte(10)) mult=mult.div(10).pow(0.5).mul(10)//sc33
  if(mult.gte(1e5)) mult=mult.div(1e5).pow(0.2).mul(1e5)//sc41
  if(mult.gte(1e9)) mult=mult.div(1e9).pow(0.4).mul(1e9)//sc57
  if(mult.gte(1e20)) mult=mult.div(1e20).pow(0.3).mul(1e20)//sc67
  if(mult.gte(1e60)) mult=mult.div(1e60).pow(0.6).mul(1e60)//sc87
  if(mult.gte(1e100)) mult=mult.div(1e100).pow(0.8).mul(1e100)//sc94

  return mult
  },
  directMult() {
   let mult = n(1)
   mult = mult.mul(buyableEffect("E",13))
   if(hasUpgrade('E',22)) mult=mult.mul(upgradeEffect('E',22)[0])
   if(hasUpgrade('E',31)) mult=mult.mul(upgradeEffect('E',31))
   if(hasUpgrade('s',16)&&hasMilestone('E',6)) mult=mult.mul(upgradeEffect('s',16))
   if (hasChallenge("E", 22)) mult=mult.mul(challengeEffect('E',22)[0])
   return mult
  },
  branches: ['A','B'],
  resetsNothing() {return hasMilestone('C',0)},
  milestones: {
  0: {requirementDescription: "3 total C",
  done() {return player[this.layer].total.gte(3)}, 
  effectDescription: "C resets nothing",
  },
  1: {requirementDescription: "30 total C",
  done() {return player[this.layer].total.gte(30)}, 
  effectDescription: "10x A passive.",
  },
  2: {requirementDescription: "1e6 total C",
  done() {return player[this.layer].total.gte('1e6')}, 
  effectDescription: "10x A passive,2x B passive.",
  },
  3: {requirementDescription: "1e14 total C",
  done() {return player[this.layer].total.gte('1e14')}, 
  effectDescription: "1000x points, 1000x B passive,unlock D.",
  },
  },
  microtabs: {
  stuff: {   
  "Upgrades": {
  unlocked() {return true},
  content: [ "upgrades"]}, 
  "Milestones": {
  unlocked() {return true},
  content: ["milestones"]  },
  "Challenges": {
  unlocked() {return (hasUpgrade("D",15))},
  content: ["challenges"]  },
  }
  },
  tabFormat: [ ["infobox","introBox"],
  "main-display","resource-display",,
  "prestige-button",
  ["microtabs", "stuff"],
  ["blank", "25px"],
  ],
  upgrades: {
  11: {
  title:'C1',
  description: function() {return '100x points, 1x B passive generation.<br>layer C total: <br>' +format(this.effect()) +'x'},
  tooltip:"All the upgrades that multiples points with a static multiplier in this layer are counted in this upgrade.",
  effect()  { 
  let ef = 100
  let exp = 0.4
  if (hasUpgrade('C',12)) ef = ef*20
  if (hasUpgrade('C',15)) ef = ef*200
  if (hasUpgrade('C',24)) ef = ef*1e20
  if (hasUpgrade('C',25)) ef = ef*1e30
  if (hasMilestone('C',3)) ef = ef*1000
  if (inChallenge('C',11))  ef = 1
  if(n(ef).gte(1e5)) ef=n(ef).div(1e5).pow(0.4).mul(1e5)//sc28
  if(n(ef).gte(1e10)) ef=n(ef).div(1e10).pow(0.4).mul(1e10)//sc40
  ef=n(ef)
  return ef;  
  },
  cost:new Decimal(1),
  },
  12: {
  title:'C2',
  description: "20x points, 10x A and B",
  cost:new Decimal(1),
  unlocked() { return (hasUpgrade(this.layer, 11))},

  },
  13: {
  title:'C3',
  description: "C^5 boost points.",
  cost: new Decimal(10),
  unlocked() { return (hasUpgrade(this.layer, 12))},
  effect()  { 
  let ef = 5
  if (hasUpgrade('C',23))  ef = ef*5
  if (inChallenge('C',11))  ef = 0
  eff=player[this.layer].points.max(1).pow(ef);
  if (hasUpgrade('s',15)) eff = eff.pow(upgradeEffect('s',15))
  if(eff.gte(1e5)) eff=eff.div(1e5).pow(0.25).mul(1e5)//sc26
  if(eff.gte(1e10)) eff=eff.div(1e10).pow(0.25).mul(1e10)//sc31
  if(eff.gte(1e20)) eff=eff.div(1e20).pow(0.25).mul(1e20)//sc38
  return eff
  },
  effectDisplay() { return format(this.effect())+"x" }, 
  },
  14: {
  title:'C4',
  description: "B6^15.",
  cost:new Decimal(25),
  unlocked() { return (hasUpgrade(this.layer, 13))},
  },
  15: {
  title:'C5',
  description: "200x points.<br>unlock a new chal.",
  cost:new Decimal(50),
  unlocked() { return (hasUpgrade(this.layer, 14))},
  },
  16: {
  title:'C5.5',
  description: "Softcap Points ^2",
  cost:new Decimal(250),
  unlocked() { return (hasUpgrade(this.layer, 15))},
  },
  21: {
  title:'C6',
  description: "10x C and 1x C passive generation.",
  cost:new Decimal(5e3),
  unlocked() { return (hasUpgrade(this.layer, 15))},
  },
  22: {
  title:'C7',
  description: "B6 ^10.",
  cost:new Decimal(2e6),
  unlocked() { return (hasUpgrade(this.layer, 21))},
  },
  23: {
  title:'C8',
  description: "C3 ^5.",
  cost:new Decimal(3e6),
  unlocked() { return (hasUpgrade(this.layer, 22))},
  },
  24: {
  title:'C9',
  description: "1e20x points and C^1.5.",
  cost:new Decimal(1e8),
  unlocked() { return (hasUpgrade(this.layer, 23))},
  },
  25: {
  title:'C10',
  description: "1e30x points,50x B and C.",
  cost:new Decimal(3e9),
  unlocked() { return (hasUpgrade(this.layer, 24))},
  },
  26: {
  title:'C10.5',
  description: "10x C and Softcap Points ^3",
  cost:new Decimal(5e10),
  unlocked() { return (hasUpgrade(this.layer, 25))},
  },
  31: {
  title:'C11',
  description: "E5.5 and E7 ^2.",
  cost:new Decimal('1e235'),
  unlocked() { return hasUpgrade('E',31)},
  },
  32: {
  title:'C12',
  description: "Boost E based on C upgrade amount..",
  cost:new Decimal('1e240'),
  effect()  { 
  let bas=1.5
  let a=n(player.C.upgrades.length).sqrt(0.5)
  if (hasUpgrade('E',75)) bas =bas+0.1
  let ef = Decimal.pow(bas,a)
  if(ef.gte(2)) ef=ef.div(2).pow(0.5).mul(2)//sc112
  return ef;  
  },
  unlocked() { return (hasUpgrade('C', 31))},
  effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
  },
  33: {
  title:'C13',
  description: "E3 and E4 boost each other.<br>(before exponents)",
  cost:new Decimal('1e245'),
  effect()  { 
  let ef0=upgradeEffect('E',14).pow(0.6)
  let ef1=upgradeEffect('E',13).pow(0.6)
  if(ef0.gte(2)) ef0=ef0.div(2).pow(0.5).mul(2)//sc111
  if(ef1.gte(2)) ef1=ef1.div(2).pow(0.5).mul(2)//sc111
  return [ef0,ef1]
  },
  unlocked() { return (hasUpgrade(this.layer, 32))},
  effectDisplay() { return format(upgradeEffect('C',33)[0],3)+"x E3 and "+format(upgradeEffect('C',33)[1],3)+"x E4" }, 
  },
  34: {
  title:'C14',
  description: "Unlock Eb4. B gainmult^1.1",
  cost:new Decimal('1e248'),
  unlocked() { return (hasChallenge('E', 12))},
  },
  35: {
  title:'C15',
  description: "E3 and E4 ^1.2. Eb3 and Eb4 base +0.5.",
  cost:new Decimal('1e250'),
  unlocked() { return (hasUpgrade(this.layer, 34))},
  },
  36: {
  title:'C15.5',
  description: "E5.5, E7 and E11 ^1.5",
  cost:new Decimal('5.25e252'),
  unlocked() { return (hasUpgrade(this.layer, 35))},
  },
  },
  challenges: {
  11: {
  name: "Cc1",
  completionLimit: 1,
  challengeDescription() {return "Reset your points and points ^0.45,C1-C10 are disabled."},
  unlocked() { return (hasUpgrade("D",15))},
  goalDescription: '5e23 points.',
  onEnter() {player.points=n(0)},
  canComplete() {return player.points.gte(5e23)},
  rewardDescription: "x1000 points and softcap points ^1.1, unlock more A upgrades.",
  },
  12: {
  name: "Cc2",
  completionLimit: 1,
  challengeDescription() {return "Reset your points and points ^0.05,D1-D5 are disabled."},
  unlocked() { return (hasUpgrade("A",52))},
  onEnter() {player.points=n(0)},
  goalDescription: '1e42 points.',
  canComplete() {return player.points.gte(1e12)},
  rewardDescription: "x8000 points,A ^1.025.",
  },
  }
})
