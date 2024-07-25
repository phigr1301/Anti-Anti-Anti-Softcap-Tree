addLayer("s", {
 infoboxes: {
 introBox: {
 title: "Softcaps",
 body(){return "This layer displays all the Softcaps in all now"},
  },
},
 name: "Softcaps",
 startData() { return {
  unlocked: true,
  points: n(0),
 }},
 symbol: "S",
  color: "#ffffff",
 row: "side",
 tooltip() { // Optional, tooltip displays when the layer is locked
  return ("Softcaps")
 },
 resource: "Softcap Points",
 update(diff) {
  player.s.points=tmp.s.spCal
 },
 tabFormat: {
 "Softcaps": {
  content: [ ["infobox","introBox"],
 ["display-text",function() {if(upgradeEffect('A',11).gte(2)) return "Sc1: Reduce A1's Effect"},],
 ["display-text",function() {if(upgradeEffect('A',15).gte(2)&&hasUpgrade('A',15)) return "Sc2: Reduce A5's Effect"},],
 ["display-text",function() {if(tmp.A.gainMult.gte(2)) return "Sc3: Reduce A's Gainmult"},],
 ["display-text",function() {if(upgradeEffect('A',11).gte(10)) return "Sc4: Reduce A1's Effect"},],
 ["display-text",function() {if(upgradeEffect('A',24).gte(2)&&hasUpgrade('A',24)) return "Sc5: Reduce A9's Effect"},],
 ["display-text",function() {if(upgradeEffect('A',24).gte(5)&&hasUpgrade('A',24)) return "Sc6: Reduce A9's Effect"},],
 ["display-text",function() {if(upgradeEffect('A',24).gte(10)&&hasUpgrade('A',24)) return "Sc7: Reduce A9's Effect"},],
 ["display-text",function() {if(upgradeEffect('A',35).gte(5)&&hasUpgrade('A',35)) return "Sc8: Reduce A15's Effect"},],
 ["display-text",function() {if(getPointGen().gte(1e4)) return "Sc9: Reduce Points Gain"},],
 ["display-text",function() {if(upgradeEffect('B',11).gte(5)&&hasUpgrade('B',11)) return "Sc10: Reduce B1's Effect"},],
 ["display-text",function() {if(upgradeEffect('s',11).gte(10)&&hasUpgrade('s',11)) return "Sc11: Reduce ScU1's Effect"},],
 ["display-text",function() {if(upgradeEffect('B',16).gte(2.5)&&hasUpgrade('B',16)) return "Sc12: Reduce B5.5's Effect"},],
 ["display-text",function() {if(upgradeEffect('B',21).gte(4)&&hasUpgrade('B',21)) return "Sc13: Reduce B6's Effect"},],
 ["display-text",function() {if(getPointGen().gte(1e6)) return "Sc14: Reduce Points Gain"},],
 ["display-text",function() {if(tmp.B.gainMult.gte(10)) return "Sc15: Reduce B's Gainmult"},],
 ["display-text",function() {if(upgradeEffect('B',11).gte(100)&&hasUpgrade('B',11)) return "Sc16: Reduce B1's Effect"},],
 ["display-text",function() {if(upgradeEffect('s',12).gte(4)&&hasUpgrade('s',12)) return "Sc17: Reduce ScU2's Effect"},],
 ["display-text",function() {if(upgradeEffect('B',26).gte(5)&&hasUpgrade('B',26)) return "Sc18: Reduce B10.5's Effect"},],
 ["display-text",function() {if(upgradeEffect('A',15).gte(100)&&hasUpgrade('A',15)) return "Sc19: Reduce A5's Effect"},],
 ["display-text",function() {if(upgradeEffect('B',21).gte(25)&&hasUpgrade('B',21)) return "Sc20: Reduce B6's Effect"},],
 ["display-text",function() {if(getPointGen().gte(1e8)) return "Sc21: Reduce Points Gain"},],
 ["display-text",function() {if(upgradeEffect('A',24).gte(100)&&hasUpgrade('A',24)) return "Sc22: Reduce A9's Effect"},],
 ["display-text",function() {if(upgradeEffect('A',15).gte(1e6)&&hasUpgrade('A',15)) return "Sc23: Reduce A5's Effect"},],
 ["display-text",function() {if(getPointGen().gte(1e10)) return "Sc24: Reduce Points Gain"},],
 ["display-text",function() {if(upgradeEffect('B',11).gte(1000)&&hasUpgrade('B',11)) return "Sc25: Reduce B1's Effect"},],
 ["display-text",function() {if(upgradeEffect('C',13).gte(1e5)&&hasUpgrade('C',13)) return "Sc26: Reduce C3's Effect"},],
 ["display-text",function() {if(upgradeEffect('B',21).gte(1e6)&&hasUpgrade('B',21)) return "Sc27: Reduce B6's Effect"},],
 ["display-text",function() {if(n(upgradeEffect('C',11)).gte(1e5)&&hasUpgrade('C',11)) return "Sc28: Reduce C1's Effect"},],
 ["display-text",function() {if(player.s.points.gte(100)) return "Sc29: Reduce Softcap Points Gain"},],
 ["display-text",function() {if(upgradeEffect('A',35).gte(1e10)&&hasUpgrade('A',35)) return "Sc30: Reduce A15's Effect"},],
 ["display-text",function() {if(upgradeEffect('C',13).gte(1e10)&&hasUpgrade('C',13)) return "Sc31: Reduce C3's Effect"},],
 ["display-text",function() {if(upgradeEffect('A',11).gte(1e10)&&hasUpgrade('A',11)) return "Sc32: Reduce A1's Effect"},],
 ["display-text",function() {if(tmp.C.gainMult.gte(10)) return "Sc33: Reduce C's Gainmult"},],
 ["display-text",function() {if(upgradeEffect('B',16).gte(1e4)&&hasUpgrade('B',16)) return "Sc34: Reduce B5.5's Effect"},],
 ["display-text",function() {if(upgradeEffect('A',11).gte(1e12)&&hasUpgrade('A',11)) return "Sc35: Reduce A1's Effect"},],
 ["display-text",function() {if(upgradeEffect('A',11).gte(1e25)&&hasUpgrade('A',11)) return "Sc36: Reduce A1's Effect"},],
 ["display-text",function() {if(upgradeEffect('A',11).gte(1e30)&&hasUpgrade('A',11)) return "Sc37: Decrease A1's Effect"},],
 ["display-text",function() {if(upgradeEffect('C',13).gte(1e20)&&hasUpgrade('C',13)) return "Sc38: Reduce C3's Effect"},],
 ["display-text",function() {if(upgradeEffect('s',16).gte(10)&&hasUpgrade('s',16)) return "Sc39: Reduce ScU6's Effect"},],
 ["display-text",function() {if(n(upgradeEffect('C',11)).gte(1e10)&&hasUpgrade('C',11)) return "Sc40: Reduce C1's Effect"},],
 ["display-text",function() {if(tmp.C.gainMult.gte(1e5)) return "Sc41: Reduce C's Gainmult"},],
 ["display-text",function() {if(player.s.points.gte(1e3)) return "Sc42: Reduce Softcap Points Gain"},],
 ["display-text",function() {if(getPointGen().gte(1e35)) return "Sc43: Reduce Points Gain"},],
 ["display-text",function() {if(upgradeEffect('B',16).gte(1e6)&&hasUpgrade('B',16)) return "Sc44: Reduce B5.5's Effect"},],
 ["display-text",function() {if(upgradeEffect('D',11).gte(1e6)&&hasUpgrade('D',11)) return "Sc45: Reduce D1's Effect"},],
 ["display-text",function() {if(upgradeEffect('D',15).gte(1e3)&&hasUpgrade('D',15)) return "Sc46: Reduce D5's Effect"},],
 ["display-text",function() {if(upgradeEffect('s',21).gte(10)&&hasUpgrade('s',21)) return "Sc47: Reduce ScU7's Effect"},],
 ["display-text",function() {if(tmp.A.gainMult.gte(1e7)) return "Sc48: Reduce A's Gainmult"},],
 ["display-text",function() {if(upgradeEffect('A',24).gte(1e20)&&hasUpgrade('A', 24)) return "Sc49: Reduce A9's Effect"},],
 ["display-text",function() {if(upgradeEffect('A',35).gte(1e20)&&hasUpgrade('A', 35)) return "Sc50: Reduce A15's Effect"},],
 ["display-text",function() {if(upgradeEffect('D',15).gte(1e5)&&hasUpgrade('D',15)) return "Sc51: Reduce D5's Effect"},],
 ["display-text",function() {if(upgradeEffect('D',11).gte(1e20)&&hasUpgrade('D',11)) return "Sc52: Reduce D1's Effect"},],
 ["display-text",function() {if(upgradeEffect('D',26).gte(1e8)&&hasUpgrade('D',26)) return "Sc53: Reduce D10.5's Effect"},],
 ["display-text",function() {if(tmp.B.gainMult.gte(1e10)) return "Sc54: Reduce B's Gainmult"},],
 ["display-text",function() {if(upgradeEffect('D',32).gte(10)&&hasUpgrade('D',32)) return "Sc55: Reduce D12's Effect"},],
 ["display-text",function() {if(tmp.D.gainMult.gte(1e4)) return "Sc56: Reduce D's Gainmult"},],
 ["display-text",function() {if(tmp.C.gainMult.gte(1e9)) return "Sc57: Reduce C's Gainmult"},],
 ["display-text",function() {if(upgradeEffect('D',11).gte(1e100)&&hasUpgrade('D',11)) return "Sc58: Decrease D1's Effect"},],
 ["display-text",function() {if(tmp.A.gainMult.gte(1e9)) return "Sc59: Reduce A's Gainmult"},],
 ["display-text",function() {if(upgradeEffect('D',25).gte(1e4)&&hasUpgrade('D',25)) return "Sc60: Reduce D10's Effect"},],
 ["display-text",function() {if(upgradeEffect('D',32).gte(1e4)&&hasUpgrade('D',32)) return "Sc61: Reduce D12's Effect"},],
 ["display-text",function() {if(upgradeEffect('D',21).gte(1e10)&&hasUpgrade('D',21)) return "Sc62: Reduce D6's Effect"},],
 ["display-text",function() {if(tmp.B.gainMult.gte(1e25)) return "Sc63: Reduce B's Gainmult"},],
 ["display-text",function() {if(upgradeEffect('D',21).gte(1e20)&&hasUpgrade('D',21)) return "Sc64: Reduce D6's Effect"},],
 ["display-text",function() {if(upgradeEffect('B',44).gte(1e10)&&hasUpgrade('B',44)) return "Sc65: Reduce B19's Effect"},],
 ["display-text",function() {if(tmp.D.gainMult.gte(1e10)) return "Sc66: Reduce D's Gainmult"},],
 ["display-text",function() {if(tmp.C.gainMult.gte(1e20)) return "Sc67: Reduce C's Gainmult"},],
 ["display-text",function() {if(tmp.D.gainMult.gte(1e20)) return "Sc68: Reduce D's Gainmult"},],
 ["display-text",function() {if(tmp.B.gainMult.gte(1e40)) return "Sc69: Reduce B's Gainmult"},],
 ["display-text",function() {if(upgradeEffect('B',44).gte(1e30)&&hasUpgrade('B',44)) return "Sc70: Reduce B19's Effect"},],
 ["display-text",function() {if(upgradeEffect('B',52).gte(1e50)&&hasUpgrade('B',52)) return "Sc71: Reduce B22's Effect"},],
 ["display-text",function() {if(getPointGen().gte(1e100)) return "Sc72: Decrease Points Gain"},],
 ["display-text",function() {if(upgradeEffect('B',61).gte(1e10)&&hasUpgrade('B',61)) return "Sc73: Reduce B26's Effect"},],
 ["display-text",function() {if(upgradeEffect('B',61).gte(1e20)&&hasUpgrade('B',61)) return "Sc74: Reduce B26's Effect"},],
 ["display-text",function() {if(layers.B.buyables[11].base().gte(1e5)) return "Sc75: Reduce Bb1's Base"},],
 ["display-text",function() {if(layers.B.buyables[12].base().gte(1e5)) return "Sc76: Reduce Bb2's Base"},],
 ["display-text",function() {if(tmp.B.gainMult.gte(1e100)) return "Sc77: Reduce B's Gainmult"},],
 ["display-text",function() {if(upgradeEffect('B',61).gte(1e50)&&hasUpgrade('B',61)) return "Sc78: Reduce B26's Effect"},],
 ["display-text",function() {if(tmp.D.gainMult.gte(1e30)) return "Sc79: Reduce D's Gainmult"},],
 ["display-text",function() {if(layers.B.buyables[23].base().gte(100)) return "Sc80: Reduce Bb5's Base"},],
 ["display-text",function() {if(upgradeEffect('B',61).gte(1e80)&&hasUpgrade('B',61)) return "Sc81: Reduce B26's Effect"},],
 ["display-text",function() {if(upgradeEffect('B',61).gte(1e100)&&hasUpgrade('B',61)) return "Sc82: Reduce B26's Effect"},],
 ["display-text",function() {if(layers.B.buyables[21].base().gte(1e5)) return "Sc83: Reduce Bb3's Base"},],
 ["display-text",function() {if(layers.B.buyables[22].base().gte(1e5)) return "Sc84: Reduce Bb4's Base"},],
 ["display-text",function() {if(buyableEffect('A',11).gte(1e200)) return "Sc85: Reduce Ab1's Effect"},],
 ["display-text",function() {if(upgradeEffect('B',11).gte(1e30)&&hasUpgrade('B',11)) return "Sc86: Reduce B1's Effect"},],
 ["display-text",function() {if(tmp.C.gainMult.gte(1e60)) return "Sc87: Reduce C's Gainmult"},],
 ["display-text",function() {if(buyableEffect('A',12).gte(10)) return "Sc88: Reduce Ab2's Effect"},],
 ["display-text",function() {if(tmp.A.gainMult.gte(1e100)) return "Sc89: Reduce A's Gainmult"},],
 ["display-text",function() {if(buyableEffect('A',11).gte("1e500")) return "Sc90: Decrease Ab1's Effect"},],
 ["display-text",function() {if(getPointGen().gte(1e300)) return "Sc91: Decrease Points Gain"},],
 ["display-text",function() {if(tmp.B.gainMult.gte(1e250)) return "Sc92: Reduce B's Gainmult"},],
 ["display-text",function() {if(buyableEffect('A',12).gte(100)) return "Sc93: Reduce Ab2's Effect"},],
 ["display-text",function() {if(tmp.C.gainMult.gte(1e100)) return "Sc94: Reduce C's Gainmult"},],
 ["display-text",function() {if(upgradeEffect('A',61).gte(1e50)&&hasUpgrade('A',61)) return "Sc95: Reduce A26's Effect"},],
 ["display-text",function() {if(buyableEffect('B',23).gte("1e1024")) return "Sc96: Reduce Bb5's Effect"},],
 ["display-text",function() {if(tmp.B.gainMult.gte("1e400")) return "Sc97: Decrease B's Gainmult"},],
 ["display-text",function() {if(getPointGen().gte("1e500")) return "Sc98: Decrease Points Gain"},],
 ["display-text",function() {if(tmp.A.gainMult.gte(1e250)) return "Sc99: Reduce A's Gainmult"},],
 ["display-text",function() {if(upgradeEffect('B',11).gte(1e100)&&hasUpgrade('B',11)) return "Sc100: Reduce B1's Effect"},],
 ["display-text",function() {if(tmp.A.gainMult.gte(1e300)) return "Sc101: Reduce A's Gainmult"},],
 ["display-text",function() {if(upgradeEffect('E',12).gte(10)&&hasUpgrade('E',12)) return "Sc102: Reduce E2's Effect"},],
 ["display-text",function() {if(upgradeEffect('E',15).gte(2)&&hasUpgrade('E',15)) return "Sc103: Reduce E5's Effect"},],
 ["display-text",function() {if(upgradeEffect('E',23).gte(10)&&hasUpgrade('E',23)) return "Sc104: Reduce E8's Effect"},],
 ["display-text",function() {if(upgradeEffect('E',14).gte(2)&&hasUpgrade('E',14)) return "Sc105: Reduce E4's Effect"},],
 ["display-text",function() {if(upgradeEffect('E',13).gte(2)&&hasUpgrade('E',13)) return "Sc106: Reduce E3's Effect"},],
 ["display-text",function() {if(upgradeEffect('E',16)[0].gte(1e4)&&hasUpgrade('E',16)) return "Sc107: Reduce E5.5's first Effect"},],
 ["display-text",function() {if(upgradeEffect('E',16)[1].gte(1e4)&&hasUpgrade('E',16)) return "Sc108: Reduce E5.5's second Effect"},],
 ["display-text",function() {if(upgradeEffect('E',22)[0].gte(1e4)&&hasUpgrade('E',22)) return "Sc109: Reduce E7's first Effect"},],
 ["display-text",function() {if(upgradeEffect('E',22)[1].gte(1e4)&&hasUpgrade('E',22)) return "Sc110: Reduce E7's second Effect"},],
 ["display-text",function() {if(upgradeEffect('E',32).gte(2)&&hasUpgrade('E',32)) return "Sc111: Reduce E12's Effect"},],
 ["display-text",function() {if(upgradeEffect('C',32).gte(2)&&hasUpgrade('C',32)) return "Sc112: Reduce C12's Effect"},],
 ["display-text",function() {if(tmp.E.gainMult.gte(1e5)) return "Sc113: Reduce E's Gainmult"},],
 ["display-text",function() {if(upgradeEffect('E',31).gte(1e9)&&hasUpgrade('E',31)) return "Sc114: Reduce E11's Effect"},],
 ["display-text",function() {if(upgradeEffect('C',33)[0].gte(2)&&hasUpgrade('C',33)) return "Sc115: Reduce C13's first Effect"},],
 ["display-text",function() {if(upgradeEffect('C',33)[1].gte(2)&&hasUpgrade('C',33)) return "Sc116: Reduce C13's second Effect"},],
 ["display-text",function() {if(upgradeEffect('E',14).gte(4)&&hasUpgrade('E',14)) return "Sc117: Reduce E4's Effect"},],
 ["display-text",function() {if(upgradeEffect('E',26).gte(5)&&hasUpgrade('E',26)) return "Sc118: Reduce E10.5's Effect"},],
 ["display-text",function() {if(upgradeEffect('E',35).gte(2)&&hasUpgrade('E',35)) return "Sc119: Reduce E15's Effect"},],
 ["display-text",function() {if(challengeEffect('E',12).gte(2)&&hasChallenge('E',12)) return "Sc120: Reduce Ec2's Effect"},],
 ["display-text",function() {if(upgradeEffect('E',36).gte(4)&&hasUpgrade('E',36)) return "Sc121: Reduce E15.5's Effect"},],
 ["display-text",function() {if(upgradeEffect('E',13).gte(5)&&hasUpgrade('E',13)) return "Sc122: Reduce E3's Effect"},],
 ["display-text",function() {if(challengeEffect('E',12).gte(10)&&hasChallenge('E',12)) return "Sc123: Reduce Ec2's Effect"},],
 ["display-text",function() {if(upgradeEffect('D',11).gte("ee7")&&hasUpgrade('D',11)) return "Sc124: Decrease D1's Effect"},],
 ["display-text",function() {if(player.s.points.gte(2.5e4)) return "Sc125: Reduce Softcap Points Gain"},],
 ["display-text",function() {if(upgradeEffect('s',31).gte("2")&&hasUpgrade('s',31)) return "Sc126: Decrease Sc13's Effect"},],
 ["display-text",function() {if(upgradeEffect('E',12).gte(1000)&&hasUpgrade('E',12)) return "Sc127: Reduce E2's Effect"},],
 ["display-text",function() {if(buyableEffect('E',21).gte(1e15)) return "Sc128: Reduce Eb4's Effect"},],
 ["display-text",function() {if(buyableEffect('E',14).gte(0.03)) return "Sc129: Reduce Eb3.5's Effect"},],
 ["display-text",function() {if(upgradeEffect('E',51).gte(100)&&hasUpgrade('E',51)) return "Sc130: Reduce E21's Effect"},],
 ["display-text",function() {if(tmp.E.gainMult.gte(1e10)) return "Sc131: Reduce E's Gainmult"},],
 ["display-text",function() {if(upgradeEffect('E',26).gte(10)&&hasUpgrade('E',26)) return "Sc132: Reduce E10.5's Effect"},],
 ["display-text",function() {if(upgradeEffect('s',31).gte(5)&&hasUpgrade('s',31)) return "Sc133: Reduce ScU13's Effect"},],
 ["display-text",function() {if(buyableEffect('E',11).gte(1e40)) return "Sc134: Reduce Eb1's Effect"},],
 ["display-text",function() {if(buyableEffect('E',12).gte(1e40)) return "Sc135: Reduce Eb2's Effect"},],
 ["display-text",function() {if(upgradeEffect('E',11).gte("ee5")&&hasUpgrade('E',11)) return "Sc136: Reduce E1's Effect"},],
 ["display-text",function() {if(tmp.A.gainMult.gte("1e400")) return "Sc137: Reduce A's Gainmult"},],
 ["display-text",function() {if(upgradeEffect('E',11).gte("e5e5")&&hasUpgrade('E',11)) return "Sc138: Reduce E1's Effect"},],
 ["display-text",function() {if(upgradeEffect('E',56).gte(2)&&hasUpgrade('E',56)) return "Sc139: Reduce E25.5's Effect"},],
 ["display-text",function() {if(upgradeEffect('E',54).gte(1e10)&&hasUpgrade('E',54)) return "Sc140: Reduce E24's Effect"},],
 ["display-text",function() {if(upgradeEffect('E',61).gte(5)&&hasUpgrade('E',61)) return "Sc141: Reduce E26's Effect"},],
 ["display-text",function() {if(challengeEffect('E',21)[0].gte(1e25)&&hasChallenge('E',21)) return "Sc142: Reduce Ec3's first Effect"},],
 ["display-text",function() {if(challengeEffect('E',21)[1].gte(1e25)&&hasChallenge('E',21)) return "Sc143: Reduce Ec3's second Effect"},],
 ["display-text",function() {if(challengeEffect('E',22)[0].gte(1e15)&&hasChallenge('E',22)) return "Sc144: Reduce Ec4's first Effect"},],
 ["display-text",function() {if(challengeEffect('E',22)[0].gte(1e10)&&hasChallenge('E',22)) return "Sc145: Reduce Ec4's second Effect"},],
 ["display-text",function() {if(upgradeEffect('B',84).gte(10)&&hasUpgrade('B',84)) return "Sc146: Reduce B39's Effect"},],
 ["display-text",function() {if(upgradeEffect('E',61).gte(15)&&hasUpgrade('E',61)) return "Sc147: Reduce E26's Effect"},],
 ["display-text",function() {if(upgradeEffect('E',63).gte(7.5)&&hasUpgrade('E',63)) return "Sc148: Reduce E28's Effect"},],
 ["display-text",function() {if(upgradeEffect('E',65).gte(7.5)&&hasUpgrade('E',65)) return "Sc149: Reduce E30's Effect"},],
 ["display-text",function() {if(upgradeEffect('E',51).gte(1e4)&&hasUpgrade('E',51)) return "Sc150: Reduce E21's Effect"},],
  ]
  },
 "Upgrades": {
        content: [// ["infobox","upgBox"],
        ["display-text",function() { return "You have "+format(player.softcap)+" softcaps."},],
        ["display-text",function() { return "You have "+format(player.s.points)+" softcaps points"},],
        ["display-text",function() { return "You have "+player.s.points+" softcaps points exactly"},],
    "upgrades",
],
unlocked(){return hasUpgrade('A',35)}
    },
 },
 spCal() {
  let sp=player.softcap
  if(hasUpgrade('D',16)) sp=sp.mul(upgradeEffect('D',16))
  if(hasUpgrade('D',24)) sp=sp.mul(upgradeEffect('D',24))
  if(hasUpgrade('C',16)) sp=sp.pow(2)
  if(hasUpgrade('C',26)) sp=sp.pow(3)
  if(hasChallenge('C',11)) sp=sp.pow(1.1)
  if(sp.gte(100)) sp=sp.div(1e2).pow(0.2).mul(1e2)//sc29
  if(sp.gte(1000)) sp=sp.div(1e3).pow(0.04).mul(1e3)//sc42
  if(sp.gte(2.5e4)) sp=sp.div(2.5e4).pow(0.1).mul(2.5e4)//sc42
  return sp
 },
 upgrades: {
  11: {
  title:'ScU1',
  description: function() {return 'Softcap points boost points.<br>Effect: ' + format(this.effect()) +'x'},
  effect(){
 let ef=player.s.points.max(1)
 if(ef.gte(10)) ef=ef.div(10).pow(0.6).mul(10)//sc11
 return ef
  },
  cost:new Decimal(10),
 },
  12: {
  title:'ScU2',
  description: function() {return 'Softcap points boost A and B.<br>Effect: ' + format(this.effect()) +'x'},
  effect(){
 let ef=player.s.points.max(1).pow(0.5)
 if(ef.gte(4)) ef=ef.div(4).pow(0.7).mul(4)//sc17
 return ef
  },
  cost:new Decimal(16),
  unlocked() {return hasUpgrade('s',11)},
 },
  13: {
  title:'ScU3',
  description: function() {return 'Softcap points boost A9<br>Effect: ^' + format(this.effect()) },
  effect(){
 let ef=player.s.points.max(1).pow(0.3).log(2).max(1)
 return ef
  },
  cost:new Decimal(21),
  unlocked() {return hasUpgrade('s',12)},
 },
  14: {
  title:'ScU4',
  description: function() {return 'Softcap points boost A5<br>Effect: ^' + format(this.effect()) },
  effect(){
 let ef=player.s.points.max(1).pow(0.5).log(4).max(1)
 return ef
  },
  cost:new Decimal(25),
  unlocked() {return hasUpgrade('s',13)},
 },
  15: {
  title:'ScU5',
  description: function() {return 'Softcap points boost C3<br>Effect: ^' + format(this.effect()) },
  effect(){
 let ef=player.s.points.max(1).pow(0.8).log(8).max(1)
 return ef
  },
  cost:new Decimal(155),
  unlocked() {return hasUpgrade('s',14)},
 },
  16: {
  title:'ScU6',
  description: function() {return 'Softcap points boost C.<br>Effect: ' + format(this.effect()) +'x'},
  effect(){
 let ef=player.s.points.max(1).pow(0.5)
 if(ef.gte(10)) ef=ef.div(10).pow(0.5).mul(10)//sc39
 return ef
  },
  cost:new Decimal(170),
  unlocked() {return hasUpgrade('s',15)},
 },
  21: {
  title:'ScU7',
  description: function() {return 'Softcap points boost D.<br>Effect: ' + format(this.effect()) +'x'},
  effect(){
 let ef=player.s.points.max(1).pow(0.33)
 if(ef.gte(10)) ef=ef.div(10).pow(0.5).mul(10)//sc47
 return ef
  },
  cost:new Decimal(1125),
  unlocked() {return hasUpgrade('D',16)},
 },
  22: {
  title:'ScU8',
  description: function() {return 'Softcap points boost D1<br>Effect: ^' + format(this.effect()) },
  effect(){
 let ef=player.s.points.max(1).pow(0.7).log(7).max(1)
 return ef
  },
  cost:new Decimal(1160),
  unlocked() {return hasUpgrade('s',21)},
 },
  23: {
  title:'ScU9',
  description: function() {return 'Softcap points boost D10<br>Effect: ^' + format(this.effect()) },
  effect(){
 let ef=player.s.points.max(1).pow(0.6).log(6).max(1)
 return ef
  },
  tooltip:"Don't worry, it's not too powerful",
  cost:new Decimal(1818),
  unlocked() {return hasUpgrade('s',22)},
 },
  24: {
  title:'ScU10',
  description: function() {return 'Softcap points boost D15.5<br>Effect: ^' + format(this.effect()) },
  effect(){
 let ef=player.s.points.max(1).pow(0.4).log(10).max(1)
 return ef
  },
  cost:new Decimal(3000),
  unlocked() {return hasUpgrade('s',23)},
 },
  25: {
  title:'ScU11',
  description: function() {return 'Softcap points boost Ab1 base<br>Effect: ^' + format(this.effect()) },
  effect(){
 let ef=player.s.points.max(1).pow(0.1).log(2).max(1)
 return ef
  },
  cost:new Decimal(4747),
  unlocked() {return hasUpgrade('s',24)},
 },
  26: {
  title:'ScU12',
  description: function() {return 'Softcap points boost Ab2 base<br>Effect: +' + format(this.effect()) },
  effect(){
 let ef=player.s.points.max(1).pow(0.3).log(9).sub(1).max(0)
 return ef
  },
  cost:new Decimal(6000),
  unlocked() {return hasUpgrade('s',25)},
 },
  31: {
  title:'ScU13',
  description: function() {return 'Softcap points boost E.<br>Effect: ' + format(this.effect()) +'x'},
  effect(){
 let ef=player.s.points.max(10).log(10).pow(0.75)
 if(hasMilestone('E',6)) ef=ef.pow(2.5)
 if(ef.gte(2)) ef=ef.div(2).pow(0.5).mul(2)//sc126
 if(ef.gte(5)) ef=ef.div(5).pow(0.5).mul(5)//sc133
 return ef
  },
  cost:new Decimal(25050),
  unlocked() {return hasUpgrade('E',43)},
 },
  32: {
  title:'ScU14',
  description: function() {return 'Softcap points boost D1 (ignore softcaps).<br>Effect: ^' + format(this.effect(),3) },
  effect(){
 let ef=player.s.points.max(25000).log(10).sub(4.4).pow(0.3).add(1).max(1)
 return ef
  },
  tooltip:"effect starts at ~25118.8",
  cost:new Decimal(25100),
  unlocked() {return hasUpgrade('s',24)},
 },
 },
})//Softcaps