addLayer("AS", {
 infoboxes: {
introBox: {
  title: "Anti-Softcap",
  body(){return "the Anti-Softcap layer in AAAST, like Armageddon in Pelle's Reality."},
        },
},
  name: "AS", 
  symbol: "AS", 
  position: 0, 
  startData() { return {
  unlocked: true,
		points: new Decimal(0),
  }},
  passiveGeneration(){  
  return 0},
  color: "#FF0000",
  requires: n(1), 
  resource: "Anti-Softcap", 
  baseResource: "Anti-Softcap progress", 
	baseAmount() { return n(2).pow(player.points.add(1).log(10).add(player.A.points.add(1).log(10)).add(player.B.points.add(1).log(10)).add(player.C.points.add(1).log(10)).add(player.D.points.add(1).log(10)).add(player.E.points.add(1).log(10))).div(2) }, 
  type: "static", 
  exponent: 1, 
  gainExp() {
  return new Decimal(1)
  },
  row: 4, 
  hotkeys: [
  {key: "p", description: "P: Full-Prestige for Anti-Softcap", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
  ],
  layerShown(){  return true
  },
  gainMult() { 
  mult = new Decimal(1)

  return mult
  },
  directMult() {
   let mult = n(1)
   return mult
  },
	resetsNothing() { return false },
	canBuyMax() {return true },
  microtabs: {
  stuff: {   
  "Upgrades": {
  unlocked() {return true},
  content: [ "upgrades"]}, 
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
  title:'AS1',
  description: "sc1 and sc3 are weaker.",
  cost:new Decimal(5),
  unlocked() { return true},

	  },
	  12: {
		  title: 'AS2',
		  description: "5x A, 3x points, sc2 and sc4 are weaker.",
		  cost: new Decimal(7),
		  unlocked() { return true },

	  },
	  13: {
		  title: 'AS3',
		  description: "2x C, 10x C pas, unlock some A upgrades.",
		  cost: new Decimal(100),
		  unlocked() { return true },

	  },
  },
  challenges: {
  },
})
