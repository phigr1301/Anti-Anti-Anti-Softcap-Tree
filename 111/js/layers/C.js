addLayer("C", {
    name: "C", 
    symbol: "C", 
    position: 0, 
    startData() { return {
  unlocked: false,
		points: new Decimal(0),
    }},
    passiveGeneration(){    let c_pg=1
  if(hasMilestone("D", 1)) c_pg=c_pg+1
  if (hasMilestone("D", 2))  c_pg=c_pg*100
  if (hasMilestone("B", 5))  c_pg=c_pg*100
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
  mult = mult.mul(hasUpgrade('D',31)?5:1)
  mult = mult.mul(hasUpgrade('A',61)?upgradeEffect('A',61):1)
  mult = mult.mul(buyableEffect("E",13))
  mult = mult.mul(hasUpgrade("s",16)?upgradeEffect('s',16):1)
  mult = mult.mul(hasUpgrade("E",95)?upgradeEffect("E",95):1)
  mult = mult.pow(hasUpgrade('A',45)?1.5:1)
  mult = mult.pow(hasUpgrade('A',46)?1.5:1)
  mult = mult.pow(hasUpgrade('C',24)?1.5:1)
  
  if(mult.gte(10)) mult=mult.div(10).pow(0.5).mul(10)//sc33
  if(mult.gte(1e5)) mult=mult.div(1e5).pow(0.2).mul(1e5)//sc41

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
  3: {requirementDescription: "5e11 total C",
      done() {return player[this.layer].total.gte('5e11')}, 
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
    content: ["milestones"]    },
      "Challenges": {
    unlocked() {return (hasUpgrade("D",15))},
    content: ["challenges"]    },
  }
    },
    tabFormat: [
  "main-display",
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
    if (hasUpgrade('C',31)) ef = ef*1e7
    if (inChallenge('C',11))  ef = 1
    if (hasUpgrade('E',64)) exp=exp+0.1
    if (hasUpgrade('E',72)) exp=exp+0.1
    if (hasUpgrade('E',61)) ef=Decimal.pow(ef,1+(buyableEffect("E",21)-1)*exp)
    if(n(ef).gte(1e5)) ef=n(ef).div(1e5).pow(0.4).mul(1e5)//sc28
    if(n(ef).gte(1e10)) ef=n(ef).div(1e10).pow(0.4).mul(1e10)//sc40
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
    if (inChallenge('E',11))  ef = 0
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
      description: "1e7x pts.",
      cost:new Decimal('1e2560'),
      unlocked() { return (challengeCompletions("E", 21) >= 2)},
  },
  32: {
      title:'C12',
      description: "C upg boost E.<br>(1.3^x).",
      cost:new Decimal('1e2760'),
      effect()  { 
    let bas=1.3
    let a=player.C.upgrades.length
    if (hasUpgrade('E',75)) bas =bas+0.1
    let ef = Decimal.pow(bas,a)
    return ef;    
      },
      unlocked() { return (hasUpgrade('E', 64))},
      effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
  },
  33: {
      title:'C13',
      description: "Eb1 amt boost pts.<br>(1.5^x).",
      cost:new Decimal('1e2835'),
      effect()  { 
    let a=getBuyableAmount('E', 11)
    let ef = Decimal.pow(1.5,a)
    return ef;    
      },
      unlocked() { return (hasUpgrade(this.layer, 32))},
      effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
  },
  34: {
      title:'C14',
      description: "Eb4 is cheaper.<br>(^0.98,after scaling)",
      cost:new Decimal('1e2906'),
      unlocked() { return (hasUpgrade(this.layer, 33))},
  },
  35: {
      title:'C15',
      description: "E3/E4 ^1.2",
      cost:new Decimal('1e2996'),
      unlocked() { return (hasUpgrade(this.layer, 34))},
  },
    },
    challenges: {
  11: {
      name: "Cc1",
      completionLimit: 1,
      challengeDescription() {return "points ^0.45,C1-C10 are disabled."},
      unlocked() { return (hasUpgrade("D",15))},
      goalDescription: '1e38 points',
      canComplete() {return player.points.gte('1e38')},
      rewardDescription: "x2000 points and ^1.01.",
  },
  12: {
      name: "Cc2",
      completionLimit: 1,
      challengeDescription() {return "D1-D5 are disabled."},
      unlocked() { return (hasUpgrade("A",52))},
      goalDescription: '1e136 points',
      canComplete() {return player.points.gte('1e136')},
      rewardDescription: "x8000 points,A ^1.025.",
  },
    }
})
