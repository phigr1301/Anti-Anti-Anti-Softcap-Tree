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
    spCal() {
     let sp=player.softcap
     if(hasUpgrade('C',16)) sp=sp.pow(2)
     if(hasUpgrade('C',26)) sp=sp.pow(3)
     if(sp.gte(100)) sp=sp.div(1e2).pow(0.2).mul(1e2)//sc29
     if(sp.gte(1000)) sp=sp.div(1e3).pow(0.2).mul(1e3)//sc29
     if(sp.gte(1000)) sp=sp.div(1e3).pow(0.2).mul(1e3)//sc29
     return sp
    },
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
  ["display-text",function() {if(upgradeEffect('s',11).gte(10)&&hasUpgrade('s',11)) return "Sc11: Reduce Sc1's Effect"},],
  ["display-text",function() {if(upgradeEffect('B',16).gte(2.5)&&hasUpgrade('B',16)) return "Sc12: Reduce B5.5's Effect"},],
  ["display-text",function() {if(upgradeEffect('B',21).gte(4)&&hasUpgrade('B',21)) return "Sc13: Reduce B6's Effect"},],
  ["display-text",function() {if(getPointGen().gte(1e6)) return "Sc14: Reduce Points Gain"},],
  ["display-text",function() {if(tmp.B.gainMult.gte(10)) return "Sc15: Reduce B's Gainmult"},],
  ["display-text",function() {if(upgradeEffect('B',11).gte(100)&&hasUpgrade('B',11)) return "Sc16: Reduce B1's Effect"},],
  ["display-text",function() {if(upgradeEffect('s',12).gte(4)&&hasUpgrade('s',12)) return "Sc17: Reduce Sc2's Effect"},],
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
  ["display-text",function() {if(upgradeEffect('s',16).gte(10)&&hasUpgrade('s',16)) return "Sc39: Reduce Sc6's Effect"},],
  ["display-text",function() {if(n(upgradeEffect('C',11)).gte(1e10)&&hasUpgrade('C',11)) return "Sc40: Reduce C1's Effect"},],
  ["display-text",function() {if(tmp.C.gainMult.gte(1e5)) return "Sc41: Reduce C's Gainmult"},],
  ["display-text",function() {if(player.s.points.gte(1e3)) return "Sc42: Reduce Softcap Points Gain"},],
  ["display-text",function() {if(getPointGen().gte(1e35)) return "Sc43: Reduce Points Gain"},],
  ["display-text",function() {if(upgradeEffect('B',16).gte(1e6)&&hasUpgrade('B',16)) return "Sc44: Reduce B5.5's Effect"},],
       ]
        },
   "Upgrades": {
        content: [// ["infobox","upgBox"],
          ["display-text",function() { return "You have "+format(player.softcap)+" softcaps."},],
          ["display-text",function() { return "You have "+format(player.s.points)+" softcaps points"},],
    "upgrades",
],
unlocked(){return hasUpgrade('A',35)}
    },
    },
    upgrades: {
     11: {
     title:'Sc1',
     description: function() {return 'Softcap points boost points.<br>Effect: ' + format(this.effect()) +'x'},
     effect(){
  let ef=player.s.points.max(1)
  if(ef.gte(10)) ef=ef.div(10).pow(0.6).mul(10)//sc11
  return ef
     },
     cost:new Decimal(10),
 },
     12: {
     title:'Sc2',
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
     title:'Sc3',
     description: function() {return 'Softcap points boost A9<br>Effect: ^' + format(this.effect()) },
     effect(){
  let ef=player.s.points.max(1).pow(0.3).log(2).max(1)
  return ef
     },
     cost:new Decimal(21),
     unlocked() {return hasUpgrade('s',12)},
 },
     14: {
     title:'Sc4',
     description: function() {return 'Softcap points boost A5<br>Effect: ^' + format(this.effect()) },
     effect(){
  let ef=player.s.points.max(1).pow(0.5).log(4).max(1)
  return ef
     },
     cost:new Decimal(25),
     unlocked() {return hasUpgrade('s',13)},
 },
     15: {
     title:'Sc5',
     description: function() {return 'Softcap points boost C3<br>Effect: ^' + format(this.effect()) },
     effect(){
  let ef=player.s.points.max(1).pow(0.8).log(8).max(1)
  return ef
     },
     cost:new Decimal(155),
     unlocked() {return hasUpgrade('s',14)},
 },
     16: {
     title:'Sc6',
     description: function() {return 'Softcap points boost C.<br>Effect: ' + format(this.effect()) +'x'},
     effect(){
  let ef=player.s.points.max(1).pow(0.5)
  if(ef.gte(10)) ef=ef.div(10).pow(0.5).mul(10)//sc39
  return ef
     },
     cost:new Decimal(170),
     unlocked() {return hasUpgrade('s',15)},
 },
    },
})//Softcaps