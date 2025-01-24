addLayer("t", {
  infoboxes: {
 introBox: {
  title: "Test",
  body(){return "A layer for tests"},
   },
},
 name: "test",
 symbol: "T",
 position: 0,
 startData() { return {
   unlocked() { return true},
 }},
  color: "#ffffff",
 type: "none", 
 exponent: 1, 
 row: 3, 
 layerShown(){ return true},
 devSpeedCal() {
  let dev=n(1)
  if(gcs('t',11)) dev=n(0)
  if(isEndgame()) dev=n(0)
  return dev
 },
 update(diff) {
  player.devSpeed=tmp.t.devSpeedCal
  player.softcap=softcapCal()
 },
 clickables:{  
 11: {
 title(){return "Pause"},
 display: "Pause the game. Click it again to resume.",
 onClick() {
 if(gcs('t',11)==1) setClickableState('t',11,0)
 else setClickableState('t',11,1)
 },
 canClick() {return true},
 unlocked() {return true},
   },
 12: {
 title(){return "Play Time"},
 display() {
  let a=" isn't "
  if(gcs('t',12)==1) a=" is"
  return "Play time "+a+" displayed！"
 },
 onClick() {
 if(gcs('t',12)==1) setClickableState('t',12,0)
 else setClickableState('t',12,1)
 },
 canClick() {return true},
 unlocked() {return true},
   },
 21: {
 title(){return "Softcap Amount"},
 display() {
  let a=" isn't "
  if(gcs('t',21)==1) a=" is"
  return "Softcap Amount "+a+" displayed！"
 },
 onClick() {
 if(gcs('t',21)==1) setClickableState('t',21,0)
 else setClickableState('t',21,1)
 },
 canClick() {return true},
 unlocked() {return true},
   },
 22: {
 title(){return "A GainMult"},
 display() {
  let a=" isn't "
  if(gcs('t',22)==1) a=" is "
  return "A's GainMult"+a+"displayed！"
 },
 onClick() {
 if(gcs('t',22)==1) setClickableState('t',22,0)
 else setClickableState('t',22,1)
 },
 canClick() {return true},
 unlocked() {return true},
   },
 23: {
 title(){return "B GainMult"},
 display() {
  let a=" isn't "
  if(gcs('t',23)==1) a=" is "
  return "B's GainMult"+a+"displayed！"
 },
 onClick() {
 if(gcs('t',23)==1) setClickableState('t',23,0)
 else setClickableState('t',23,1)
 },
 canClick() {return true},
 unlocked() {return tmp.B.layerShown},
   },
 24: {
 title(){return "C GainMult"},
 display() {
  let a=" isn't "
  if(gcs('t',24)==1) a=" is "
  return "C's GainMult"+a+"displayed！"
 },
 onClick() {
 if(gcs('t',24)==1) setClickableState('t',24,0)
 else setClickableState('t',24,1)
 },
 canClick() {return true},
 unlocked() {return tmp.C.layerShown},
   },
 25: {
 title(){return "D GainMult"},
 display() {
  let a=" isn't "
  if(gcs('t',25)==1) a=" is "
  return "D's GainMult"+a+"displayed！"
 },
 onClick() {
 if(gcs('t',25)==1) setClickableState('t',25,0)
 else setClickableState('t',25,1)
 },
 canClick() {return true},
 unlocked() {return tmp.D.layerShown},
   },
 26: {
 title(){return "E GainMult"},
 display() {
  let a=" isn't "
  if(gcs('t',26)==1) a=" is "
  return "E's GainMult"+a+"displayed！"
 },
 onClick() {
 if(gcs('t',26)==1) setClickableState('t',26,0)
 else setClickableState('t',26,1)
 },
 canClick() {return true},
 unlocked() {return tmp.E.layerShown},
   },
 31: {
 title(){return "Softcap Point"},
 display() {
  let a=" isn't "
  if(gcs('t',31)==1) a=" is"
  return "Softcap Point "+a+" displayed！"
 },
 onClick() {
 if(gcs('t',31)==1) setClickableState('t',31,0)
 else setClickableState('t',31,1)
 },
 canClick() {return true},
 unlocked() {return true},
   },
 32: {
 title(){return "A DirectMult"},
 display() {
  let a=" isn't "
  if(gcs('t',32)==1) a=" is "
  return "A's DirectMult"+a+"displayed！"
 },
 onClick() {
 if(gcs('t',32)==1) setClickableState('t',32,0)
 else setClickableState('t',32,1)
 },
 canClick() {return true},
 unlocked() {return true},
   },
 33: {
 title(){return "B DirectMult"},
 display() {
  let a=" isn't "
  if(gcs('t',33)==1) a=" is "
  return "B's DirectMult"+a+"displayed！"
 },
 onClick() {
 if(gcs('t',33)==1) setClickableState('t',33,0)
 else setClickableState('t',33,1)
 },
 canClick() {return true},
 unlocked() {return tmp.B.layerShown},
   },
 34: {
 title(){return "C DirectMult"},
 display() {
  let a=" isn't "
  if(gcs('t',34)==1) a=" is "
  return "C's DirectMult"+a+"displayed！"
 },
 onClick() {
 if(gcs('t',34)==1) setClickableState('t',34,0)
 else setClickableState('t',34,1)
 },
 canClick() {return true},
 unlocked() {return tmp.C.layerShown},
   },
 35: {
 title(){return "D DirectMult"},
 display() {
  let a=" isn't "
  if(gcs('t',35)==1) a=" is "
  return "D's DirectMult"+a+"displayed！"
 },
 onClick() {
 if(gcs('t',35)==1) setClickableState('t',35,0)
 else setClickableState('t',35,1)
 },
 canClick() {return true},
 unlocked() {return tmp.D.layerShown},
   },
 36: {
 title(){return "E DirectMult"},
 display() {
  let a=" isn't "
  if(gcs('t',36)==1) a=" is "
  return "E's DirectMult"+a+"displayed！"
 },
 onClick() {
 if(gcs('t',36)==1) setClickableState('t',36,0)
 else setClickableState('t',36,1)
 },
 canClick() {return true},
 unlocked() {return tmp.E.layerShown},
   },
   },
})//Test