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
    21: {
    title(){return "Softcaps"},
    display() {
     let a=" aren't "
     if(gcs('t',21)==1) a=" are "
     return "Softcaps "+a+"displayed！"
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
   },
})//Test