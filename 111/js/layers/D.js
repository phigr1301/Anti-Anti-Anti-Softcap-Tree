addLayer("D", {
  name: "D", 
  symbol: "D", 
  position: 1, 
  startData() { return {
  unlocked: false,
		points: new Decimal(0),
  }},
  passiveGeneration(){  let d_pg=20
  if(hasMilestone('B',5)) d_pg=100
  return (hasMilestone('D',0))?d_pg:0},
  color: "#720202",
  requires: new Decimal(1e12), 
  resource: "D", 
  baseResource: "C", 
  baseAmount() {return player.C.points}, 
  type: "normal", 
  exponent: 0.2, 
  gainExp() {
  return new Decimal(1)
  },
  row: 1, 
  hotkeys: [
  {key: "d", description: "D: Reset for D points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
  ],
  layerShown(){  if (player.D.unlocked) return true
  else return (hasMilestone("C", 3))},
  gainMult() { 
  mult = new Decimal(1)
  mult = mult.mul(hasUpgrade('s',21)?upgradeEffect('s',21):1)
  mult = mult.mul(hasUpgrade(this.layer,12)?2:1)
  mult = mult.mul(hasUpgrade(this.layer,13)?2:1)
  mult = mult.mul(hasUpgrade('A',61)?upgradeEffect('A',61):1)
  mult = mult.mul(hasUpgrade('D',32)?upgradeEffect('D',32):1)
  mult = mult.mul(buyableEffect("B",22))
  mult = mult.mul(buyableEffect("E",13))
  
  mult = mult.pow(hasUpgrade('A',52)?1.5:1)
  mult = mult.pow(hasChallenge('A',32)?1.5:1)
  
  if(mult.gte(1e4)) mult=mult.div(1e4).pow(0.4).mul(1e4)//sc56
  if(mult.gte(1e10)) mult=mult.div(1e10).pow(0.4).mul(1e10)//sc65
  if(mult.gte(1e20)) mult=mult.div(1e20).pow(0.1).mul(1e20)//sc68
  if(mult.gte(1e30)) mult=mult.div(1e30).pow(0.5).mul(1e30)//sc79
  return mult
  },
  branches: ['C'],
  canReset() {return !hasMilestone('D',0)},
  resetsNothing() {return true},
  milestones: {
  0: {requirementDescription: "100 total D",
    done() {return player[this.layer].total.gte(100)}, 
    effectDescription: "20x D passive but disable D prestige.",
  },
  1: {requirementDescription: "2500 total D",
    done() {return player[this.layer].total.gte(2500)}, 
    effectDescription: "100x A/B passive,1x C passive.",
  },
  2: {requirementDescription: "1e6 total D",
    done() {return player[this.layer].total.gte('1e6')}, 
    effectDescription: "1e4x A, 1000x B and 10x C passive,unlock B buyable.",
  },
  3: {requirementDescription: "1e10 total D",
    done() {return player[this.layer].total.gte('1e10')}, 
    effectDescription: "1e5x A,unlock a chal.",
  },
  4: {requirementDescription: "6e666 total D",
    done() {return player[this.layer].total.gte(6e666)}, 
    effectDescription: "D17 base +0.05.",
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
    unlocked() {return hasUpgrade('B',56)},
    content: ["challenges"]  },
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
    title:'D1',
    description: function() {return '1000x points.<br>layer D total:<br>'+ format(this.effect()) +'x'},
    effect()  { 
    let ef = 1000
    let exp = 0.4
    if (hasUpgrade('D',14)) ef = ef*10000
    if (hasUpgrade('D',25)) ef = ef*10000
    if (hasUpgrade('D',41)) ef = ef*1e7
    if (inChallenge('C',12)) ef = 1
    if (hasUpgrade('E',64)) exp=exp+0.1
    if (hasUpgrade('E',72)) exp=exp+0.1
    if (hasUpgrade('E',61)) ef=Decimal.pow(ef,1+(buyableEffect("E",21)-1)*exp)
    if (hasUpgrade('s',22)) ef=n(ef).pow(upgradeEffect('s',22))
    if (hasUpgrade('D',25)) ef=n(ef).pow(upgradeEffect('D',25))
    ef=n(ef)
    if(ef.gte(1e6)) ef=ef.div(1e6).pow(0.5).mul(1e6)//sc45
    if(ef.gte(1e20)) ef=ef.div(1e20).pow(0.25).mul(1e20)//sc52
    if(ef.log10().gte(100)) ef = n(10).pow(ef.log10().sub(100).pow(0.1).add(100))//sc58
    return ef;  
    },
    tooltip:"All the upgrades that multiples points with a static multiplier in this layer are counted in this upgrade.",
    cost:new Decimal(10),
  },
  12: {
    title:'D2',
    description: "2x D.",
    cost:new Decimal(20),
    unlocked() { return (hasUpgrade(this.layer, 11))},
  },
  13: {
    title:'D3',
    description: "2x D.",
    cost:new Decimal(50),
    unlocked() { return (hasUpgrade(this.layer, 12))},
  },
  14: {
    title:'D4',
    description: "10000x points.",
    cost:new Decimal(2000),
    unlocked() { return (hasUpgrade(this.layer, 13))},
  },
  15: {
    title:'D5',
    description: "D^0.8 boost points.<br>unlock a C chal.",
    cost: new Decimal(3000),
    unlocked() { return (hasUpgrade(this.layer, 14))},
    effect()  { 
    let ef = 0.8
    if (inChallenge('C',12))  ef = 0
    if (inChallenge('E',11))  ef = 0
    let eff=n(player[this.layer].points.pow(ef))
    if (hasUpgrade('D',23)) eff=eff.pow(2)
    if(eff.gte(1e3)) eff=eff.div(1e3).pow(0.5).mul(1e3)//sc46
    if(eff.gte(1e5)) eff=eff.div(1e5).pow(0.5).mul(1e5)//sc51
    return eff
    },
    effectDisplay() { return format(this.effect())+"x" },
  },
  16: {
    title:'D5.5',
    description: "D^0.1 boost softcap points. (before exp and softcaps).<br>unlock more softcap upgrades.",
    cost: new Decimal(4000),
    unlocked() { return (hasUpgrade(this.layer, 15))},
    effect()  { 
    let ef = 0.1
    let eff=n(player[this.layer].points.pow(ef))
    return eff
    },
    effectDisplay() { return format(this.effect())+"x" },
  },
  21: {
    title:'D6',
    description: "D upg boost pts.<br> (base is 2, can be boosted by Bbs).",
    cost:new Decimal(1e6),
    effect()  { 
    let a=player.D.upgrades.length
    let base = n(2).add(buyableEffect('B',13))
    let ef = Decimal.pow(base,a)
    if(ef.gte(1e10)) ef=ef.div(1e10).pow(0.5).mul(1e10)//sc62
    if(ef.gte(1e20)) ef=ef.div(1e20).pow(0.5).mul(1e20)//sc64
    return ef;  
    },
    unlocked() { return (hasUpgrade('A', 52))},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
  },
  22: {
    title:'D7',
    description: "B ^1.2.",
    cost:new Decimal(1.2e6),
    unlocked() { return (hasUpgrade(this.layer, 21))},
  },
  23: {
    title:'D8',
    description: "D5 ^2.",
    cost:new Decimal(1.5e6),
    unlocked() { return (hasUpgrade(this.layer, 22))},
  },
  24: {
    title:'D9',
    description: "Softcap Points boost Softcap Points",
    cost:new Decimal(1.8e6),
    effect()  { 
    let efd9 = player.s.points.add(1)
    if(hasUpgrade('D',34)) efd9=efd9.pow(2)
    return efd9;  
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
    unlocked() { return (hasUpgrade(this.layer, 23))},
  },
  25: {
    title:'D10',
    description: "D boost D1",
    tooltip:"From now on, the D upgrades will bring a lot of softcaps",
    effect()  { 
    let ef = player.D.points.add(1).pow(0.5).div(1e3).add(1)
    if(hasUpgrade('s',23)) ef=ef.pow(upgradeEffect('s',23))
    if(ef.gte(1e5)) ef=ef.div(1e5).pow(0.25).mul(1e5)//sc60
    return ef;  
    },
    effectDisplay() { return "^"+format(upgradeEffect(this.layer, this.id))}, 
    cost:new Decimal(2e6),
    unlocked() { return (hasUpgrade(this.layer, 24))},
  },
  26: {
    title:'D10.5',
    description: "D ^1.25 boost C",
    tooltip:"It will be… incredible",
    effect()  { 
    let ef = player.D.points.add(1).pow(1.25)
    if(ef.gte(1e8)) ef=ef.div(1e8).pow(0.5).mul(1e8)//sc53
    return ef;  
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x"}, 
    cost:new Decimal(2.25e6),
    unlocked() { return (hasUpgrade(this.layer, 25))},
  },
  31: {
    title:'D11',
    description: "D10.5's effect^0.5 boosts A and B",
    cost:new Decimal(6e6),
    effect()  { 
    let ef = upgradeEffect('D',26).pow(0.5)
    return ef;  
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x"}, 
    unlocked() { return (hasUpgrade(this.layer, 26))},
  },
  32: {
    title:'D12',
    description: "D^0.3 boost D.",
    cost:new Decimal(8e6),
    effect()  { 
    let ef = player.D.points.max(1).pow(0.3)
    if(hasUpgrade('D',35)) ef=ef.pow(2)
    if(ef.gte(10)) ef=ef.div(10).pow(0.5).mul(10)//sc55
    if(ef.gte(1e4)) ef=ef.div(1e4).pow(0.5).mul(1e4)//sc61
    return ef;  
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
    unlocked() { return (hasUpgrade(this.layer, 31))},
  },
  33: {
    title:'D13',
    description: "1e10x A.",
    cost:new Decimal('3e9'),
    unlocked() { return (hasUpgrade(this.layer, 32))},
  },
  34: {
    title:'D14',
    description: "D9 ^2.",
    cost:new Decimal('6e10'),
    unlocked() { return (hasUpgrade(this.layer, 33))},
  },
  35: {
    title:'D15',
    description: "D12 ^2 and unlock more B upgrades.",
    cost:new Decimal('7.5e10'),
    unlocked() { return (hasUpgrade(this.layer, 34))},
  },
  36: {
    title:'D15.5',
    description: "D boost Bb1-2's base.",
    cost:new Decimal('1e13'),
    effect()  { 
    let ef = player.D.points.max(1).log(5).pow(0.5)
    if(hasUpgrade('B',42)) ef=ef.pow(2)
    if(hasUpgrade('B',46)) ef=ef.pow(1.25)
    if(hasUpgrade('B',54)) ef=ef.pow(1.5)
    if(hasUpgrade('s',24)) ef=ef.pow(upgradeEffect('s',24))
    if(ef.gte(1e3)) ef=ef.div(1e3).pow(0.5).mul(1e3)//sc70
    return ef;  
    },
    effectDisplay() { return "+"+format(upgradeEffect(this.layer, this.id)) }, 
    unlocked() { return (hasUpgrade(this.layer, 35))},
  },
  41: {
    title:'D16',
    description: "1e7x pts.",
    cost:new Decimal('1e578'),
    unlocked() { return (hasUpgrade('C', 31))},
  },
  42: {
    title:'D17',
    description: "D upg boost E.<br>(1.25^x).",
    cost:new Decimal('1e628'),
    effect()  { 
    let a=player.D.upgrades.length
    let bas =1.25
    if (hasMilestone('D',4)) bas =bas+0.05
    if (hasUpgrade('E',75)) bas =bas+0.1
    let ef = Decimal.pow(bas,a)
    return ef;  
    },
    unlocked() { return (hasUpgrade('C', 32))},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
  },
  43: {
    title:'D18',
    description: "Eb2 amt boost pts.<br>(1.75^x).",
    cost:new Decimal('1e648'),
    effect()  { 
    let a=getBuyableAmount('E', 12)
    let ef = Decimal.pow(1.75,a)
    return ef;  
    },
    unlocked() { return (hasUpgrade('D', 42))},
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
  },
  44: {
    title:'D19',
    description: "Bb5 is cheaper.<br>(^0.98,after scaling)",
    cost:new Decimal('1e659'),
    unlocked() { return (hasUpgrade('D', 43))},
  },
  45: {
    title:'D20',
    description: "E12/E15 ^1.2。",
    cost:new Decimal('1e684'),
    unlocked() { return (hasUpgrade('D', 44))},
  },
  },
  challenges: {
  11: {
      name: "Dc1",
      completionLimit: 1,
      challengeDescription() {return "Sc72 starts at 1 point /sec and it's boosted."},
      unlocked() { return (hasUpgrade("B",56))},
      onEnter() {player.points=n(0)},
      tooltip:"Reset your points when entering.",
      goalDescription: '37.37 points /sec',
      canComplete() {return getPointGen().gte(37.37)},
      rewardDescription: "All Bbs' base x2",
  },
  12: {
      name: "Dc2",
      completionLimit: 1,
      challengeDescription() {return "All Bbs' effects are capped."},
      unlocked() { return (hasUpgrade("B",56))},
      goalDescription: '1e80 points. /sec',
      onEnter() {player.points=n(0)},
      tooltip:"Reset your points when entering.",
      canComplete() {return getPointGen().gte(1e80)},
      rewardDescription: "B Gainmult ^1.25.",
  },
  21: {
      name: "Dc3",
      completionLimit: 1,
      challengeDescription() {return "Points gain is slog(points)."},
      unlocked() { return (hasUpgrade("B",66))},
      goalDescription: '250 points.',
      onEnter() {player.points=n(0)},
      tooltip:"Reset your points when entering.",
      canComplete() {return player.points.gte(250)},
      rewardDescription: "Points ^1.1.",
  },
  22: {
      name: "Dc4",
      completionLimit: 1,
      challengeDescription() {return "Points gain is 0 /sec. You start with 10 points."},
      unlocked() { return (hasUpgrade("B",66))},
      goalDescription: 'get 1e65 A gainmult.',
      onEnter() {player.points=n(10)},
      tooltip:"Reset your points to 10 when entering.",
      canComplete() {return tmp.A.gainMult.gte(1e65)},
      rewardDescription: "A and B x1e15 and A ^1.25.",
  },
    },
})