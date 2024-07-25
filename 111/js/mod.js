let modInfo = {
	name: "Anti-Anti-Softcap tree",
	id: "AASC",
	author: "QqQe308",
	pointsName: "points",
	modFiles: ["layers/A.js", "layers/B.js","layers/C.js","layers/D.js","layers/E.js","layers/ach.js","layers/test.js","layers/softcaps.js","tree.js",],

	discordName: "BiliBili link",
	discordLink: "https://b23.tv/Hlg9D5u",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 168,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.25",
	name: "E half-finish",
}

let changelog = `<h1>Changelog:</h1><br>
<h2>v0.25 2024/7/17-2024/7/25</h2><br>
<h3>- Rebalanced early-E with more upgrades and contents.
<br>- Added many new features.<br>
<br>Endgame: 6.66e66 E (150 softcaps)</h3>
<h2>v0.2 2024/7/11-2024/7/16</h2><br>
<h3>- Rebalanced D with more upgrades and contents.
<br>- Added D challenges, A buyables and many new features.
<br>Endgame: 1e525 B (100 softcaps)</h3>
<h2>v0.1 2024/7/9-2024/7/10</h2><br>
<h3>- Rebalanced A, B and C with more upgrades and contents.
<br>- Added Softcap Layer.
<br>- Added Test and some Qol contents.
<br>- The first release of this mod.
<br>Endgame: 1e12 C</h3>
`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)
        
	let gain = new Decimal(1)
	gain = gain.mul(hasUpgrade("A",11)?upgradeEffect("A",11):1)
	gain = gain.mul(hasUpgrade("A",15)?upgradeEffect("A",15):1)
	gain = gain.mul(hasUpgrade("A",24)?upgradeEffect("A",24):1)
	gain = gain.mul(hasUpgrade("A",35)?upgradeEffect("A",35):1)
	gain = gain.mul(hasUpgrade("B",11)?upgradeEffect("B",11):1)
	gain = gain.mul(hasUpgrade("B",21)?upgradeEffect("B",21):1)
	gain = gain.mul(hasUpgrade("B",26)?upgradeEffect("B",26):1)
	gain = gain.mul(hasUpgrade("B",44)?upgradeEffect("B",44):1)
	gain = gain.mul(hasUpgrade("B",52)?upgradeEffect("B",52):1)
	gain = gain.mul(hasUpgrade("s",11)?upgradeEffect("s",11):1)
	gain = gain.mul(hasMilestone("C",3)?1000:1)

	gain = gain.mul(hasUpgrade("C",11)?upgradeEffect("C",11):1)
	gain = gain.mul(hasUpgrade("C",13)?upgradeEffect("C",13):1)
	gain = gain.mul(hasUpgrade("D",11)?upgradeEffect("D",11):1)
	gain = gain.mul(hasUpgrade("D",15)?upgradeEffect("D",15):1)
	gain = gain.mul(hasUpgrade("D",21)?upgradeEffect("D",21):1)
	gain = gain.mul(hasUpgrade("D",32)?upgradeEffect("D",32):1)
	gain = gain.mul(hasUpgrade("E",11)?upgradeEffect("E",11):1)
	gain = gain.mul(hasUpgrade("D",43)?upgradeEffect("D",43):1)
	gain = gain.mul(hasUpgrade("E",85)?upgradeEffect("E",85):1)
	gain = gain.mul(hasUpgrade("E",104)?upgradeEffect("E",104):1)
	gain = gain.mul(buyableEffect('B',23))

	if (inChallenge("A", 11))  gain = gain.pow(0.75)
	if (inChallenge("A", 21))  gain = gain.pow(0.5)
	if (inChallenge("A", 31))  gain = gain.pow(0.15)
	if (inChallenge("C", 11))  gain = gain.pow(0.45)
	if (hasChallenge("D", 21))  gain = gain.pow(1.1)
	if (inChallenge("E", 32))  gain = gain.pow(player.E.Em.add(10).log(10).pow(-0.2))
	if (inChallenge("E", 42))  gain = gain.pow(player.points.add(10).log(10).pow(-0.12))

	if (hasChallenge("A", 21))  gain = gain.mul(50)
	if (hasChallenge("A", 22))  gain = gain.mul(100)
	if (hasChallenge("A", 31))  gain = gain.mul(2e5)
	if (hasChallenge("C", 11))  gain = gain.mul(1000)
	if (hasChallenge("C", 12))  gain = gain.mul(8000)
	
if(inChallenge('A',32)) gain=gain.log10()
if(inChallenge('A',41)) gain=gain.tetrate(0.1)
if(inChallenge('D',21)) gain=gain.slog()
if(inChallenge('D',22)) gain=n(0)

if(gain.gte(1e4)) gain=gain.div(1e4).pow(0.5).mul(1e4)//sc9
if(gain.gte(1e6)) gain=gain.div(1e6).pow(0.6).mul(1e6)//sc14
if(gain.gte(1e8)) gain=gain.div(1e8).pow(0.7).mul(1e8)//sc21
if(gain.gte(1e10)) gain=gain.div(1e10).pow(0.8).mul(1e10)//sc24
if(gain.gte(1e35)) gain=gain.div(1e35).pow(0.9).mul(1e35)//sc43
if(gain.max(1).log10().gte(100)) gain=n(10).pow(gain.log10().sub(100).pow(0.8).add(100))//sc72
if(gain.max(1).log10().gte(300)) gain=n(10).pow(gain.log10().sub(299).pow(0.75).add(299))//sc91
if(gain.max(1).log10().gte(500)) gain=n(10).pow(gain.log10().sub(499).pow(0.5).add(499))//sc98
if(inChallenge('D',11)) gain=n(10).pow(gain.max(1).log10().pow(0.1))//sc72boosted

	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
 devSpeed:n(1),
 softcap:n(0),
}}
var shitDown=false


// Display extra things at the top of the page
var displayThings = [
	function() {
	 let a="Current endgame: 6.66e66 E"
	 if(isEndgame()) a=a+"<br>You are past endgame! E is capped at 6.66e66."
	 if(gcs('t',12)) a=a+"<br>You have played the game for "+formatTime(player.timePlayed)+"."
	 if(gcs('t',21)) a=a+"<br>There are "+format(player.softcap)+" softcaps in all now."
	 if(gcs('t',22)) a=a+"<br>A's GainMult: "+format(tmp.A.gainMult)
	 if(gcs('t',23)) a=a+"<br>B's GainMult: "+format(tmp.B.gainMult)
	 if(gcs('t',24)) a=a+"<br>C's GainMult: "+format(tmp.C.gainMult)
	 if(gcs('t',25)) a=a+"<br>D's GainMult: "+format(tmp.D.gainMult)
	 if(gcs('t',26)) a=a+"<br>E's GainMult: "+format(tmp.E.gainMult)
	 if(gcs('t',31)) a=a+"<br>Softcap Point: "+format(player.s.points)
	 if(gcs('t',32)) a=a+"<br>A's DirectMult: "+format(tmp.A.directMult)
	 if(gcs('t',33)) a=a+"<br>B's DirectMult: "+format(tmp.B.directMult)
	 if(gcs('t',34)) a=a+"<br>C's DirectMult: "+format(tmp.C.directMult)
	 if(gcs('t',35)) a=a+"<br>D's DirectMult: "+format(tmp.D.directMult)
	 if(gcs('t',36)) a=a+"<br>E's DirectMult: "+format(tmp.E.directMult)
	 return a
	},
]
// Determines when the game "ends"
function isEndgame() {
	return player.E.points.gte("6.66e66")
}

//<br> bilibili: @一只新手Up

// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}

function gba(a,b){return getBuyableAmount(a,b)}

function gcs(a,b){return getClickableState(a,b)}

function n(a) {
 return new Decimal(a)
}

function softcapCal() {//The most important function???
let s=n(0)
let a=false
if(upgradeEffect('A',11).gte(2)) s=s.add(1)
if(upgradeEffect('A',15).gte(2)&&hasUpgrade('A',15)) s=s.add(1)
if(tmp.A.gainMult.gte(2)) s=s.add(1)
if(upgradeEffect('A',11).gte(10)) s=s.add(1)
if(upgradeEffect('A',24).gte(2)&&hasUpgrade('A',24)) s=s.add(1)
if(upgradeEffect('A',24).gte(5)&&hasUpgrade('A',24)) s=s.add(1)
if(upgradeEffect('A',24).gte(10)&&hasUpgrade('A',24)) s=s.add(1)
if(upgradeEffect('A',35).gte(5)&&hasUpgrade('A',35)) s=s.add(1)
if(getPointGen().gte(1e4)) s=s.add(1)
if(upgradeEffect('B',11).gte(5)&&hasUpgrade('B',11)) s=s.add(1)
if(upgradeEffect('s',11).gte(10)&&hasUpgrade('s',11)) s=s.add(1)
if(upgradeEffect('B',16).gte(2.5)&&hasUpgrade('B',16)) s=s.add(1)
if(upgradeEffect('B',21).gte(4)&&hasUpgrade('B',21)) s=s.add(1)
if(getPointGen().gte(1e6)) s=s.add(1)
if(tmp.B.gainMult.gte(10)) s=s.add(1)
if(upgradeEffect('B',11).gte(100)&&hasUpgrade('B',11)) s=s.add(1)
if(upgradeEffect('s',12).gte(4)&&hasUpgrade('s',12)) s=s.add(1)
if(upgradeEffect('B',26).gte(5)&&hasUpgrade('B',26)) s=s.add(1)
if(upgradeEffect('A',15).gte(100)&&hasUpgrade('A',15)) s=s.add(1)
if(upgradeEffect('B',21).gte(25)&&hasUpgrade('B',21)) s=s.add(1)
if(getPointGen().gte(1e8)) s=s.add(1)
if(upgradeEffect('A',24).gte(100)&&hasUpgrade('A',24)) s=s.add(1)
if(upgradeEffect('A',15).gte(1e6)&&hasUpgrade('A',15)) s=s.add(1)
if(getPointGen().gte(1e10)) s=s.add(1)
if(upgradeEffect('B',11).gte(1000)&&hasUpgrade('B',11)) s=s.add(1)
if(upgradeEffect('C',13).gte(1e5)&&hasUpgrade('C',13)) s=s.add(1)
if(upgradeEffect('B',21).gte(1e6)&&hasUpgrade('B',21)) s=s.add(1)
if(upgradeEffect('C',11).gte(1e5)&&hasUpgrade('C',11)) s=s.add(1)
if(player.s.points.gte(100)) s=s.add(1)
if(upgradeEffect('A',35).gte(1e10)&&hasUpgrade('A',35)) s=s.add(1)
if(upgradeEffect('C',13).gte(1e10)&&hasUpgrade('C',13)) s=s.add(1)
if(upgradeEffect('A',11).gte(1e10)&&hasUpgrade('A',11)) s=s.add(1)
if(tmp.C.gainMult.gte(10)) s=s.add(1)
if(upgradeEffect('B',16).gte(1e4)&&hasUpgrade('B',16)) s=s.add(1)
if(upgradeEffect('A',11).gte(1e12)&&hasUpgrade('A',11)) s=s.add(1)
if(upgradeEffect('A',11).gte(1e25)&&hasUpgrade('A',11)) s=s.add(1)
if(upgradeEffect('A',11).gte(1e30)&&hasUpgrade('A',11)) s=s.add(1)
if(upgradeEffect('C',13).gte(1e20)&&hasUpgrade('C',13)) s=s.add(1)
if(upgradeEffect('s',16).gte(10)&&hasUpgrade('s',16)) s=s.add(1)
if(upgradeEffect('C',11).gte(1e10)&&hasUpgrade('C',11)) s=s.add(1)
if(tmp.C.gainMult.gte(1e5)) s=s.add(1)
if(player.s.points.gte(1000)) s=s.add(1)
if(getPointGen().gte(1e35)) s=s.add(1)
if(upgradeEffect('B',16).gte(1e6)&&hasUpgrade('B',16)) s=s.add(1)
if(upgradeEffect('D',11).gte(1e6)&&hasUpgrade('D',11)) s=s.add(1)
if(upgradeEffect('D',15).gte(1e3)&&hasUpgrade('D',15)) s=s.add(1)
if(upgradeEffect('s',21).gte(10)&&hasUpgrade('s',21)) s=s.add(1)
if(tmp.A.gainMult.gte(1e7)) s=s.add(1)
if(upgradeEffect('A',24).gte(1e20)&&hasUpgrade('A',24)) s=s.add(1)
if(upgradeEffect('A',35).gte(1e20)&&hasUpgrade('A',35)) s=s.add(1)
if(upgradeEffect('D',15).gte(1e5)&&hasUpgrade('D',15)) s=s.add(1)
if(upgradeEffect('D',11).gte(1e20)&&hasUpgrade('D',11)) s=s.add(1)
if(upgradeEffect('D',26).gte(1e8)&&hasUpgrade('D',26)) s=s.add(1)
if(tmp.B.gainMult.gte(1e10)) s=s.add(1)
if(upgradeEffect('D',32).gte(10)&&hasUpgrade('D',32)) s=s.add(1)
if(tmp.D.gainMult.gte(1e4)) s=s.add(1)
if(tmp.C.gainMult.gte(1e9)) s=s.add(1)
if(upgradeEffect('D',11).gte(1e100)&&hasUpgrade('D',11)) s=s.add(1)
if(tmp.A.gainMult.gte(1e9)) s=s.add(1)
if(upgradeEffect('D',25).gte(1e4)&&hasUpgrade('D',25)) s=s.add(1)
if(upgradeEffect('D',32).gte(1e4)&&hasUpgrade('D',32)) s=s.add(1)
if(upgradeEffect('D',21).gte(1e10)&&hasUpgrade('D',21)) s=s.add(1)
if(tmp.B.gainMult.gte(1e25)) s=s.add(1)
if(upgradeEffect('D',21).gte(1e20)&&hasUpgrade('D',21)) s=s.add(1)
if(upgradeEffect('B',44).gte(1e10)&&hasUpgrade('B',44)) s=s.add(1)
if(tmp.D.gainMult.gte(1e10)) s=s.add(1)
if(tmp.C.gainMult.gte(1e20)) s=s.add(1)
if(tmp.D.gainMult.gte(1e20)) s=s.add(1)
if(tmp.B.gainMult.gte(1e40)) s=s.add(1)
if(upgradeEffect('B',52).gte(1e50)&&hasUpgrade('B',52)) s=s.add(1)
if(upgradeEffect('B',44).gte(1e30)&&hasUpgrade('B',44)) s=s.add(1)
if(getPointGen().gte(1e100)) s=s.add(1)
if(upgradeEffect('B',61).gte(1e10)&&hasUpgrade('B',61)) s=s.add(1)
if(upgradeEffect('B',61).gte(1e20)&&hasUpgrade('B',61)) s=s.add(1)
if(layers.B.buyables[11].base().gte(1e5)) s=s.add(1)
if(layers.B.buyables[12].base().gte(1e5)) s=s.add(1)
if(tmp.B.gainMult.gte(1e100)) s=s.add(1)
if(upgradeEffect('B',61).gte(1e50)&&hasUpgrade('B',61)) s=s.add(1)
if(tmp.D.gainMult.gte(1e30)) s=s.add(1)
if(layers.B.buyables[23].base().gte(100)) s=s.add(1)
if(upgradeEffect('B',61).gte(1e80)&&hasUpgrade('B',61)) s=s.add(1)
if(upgradeEffect('B',61).gte(1e100)&&hasUpgrade('B',61)) s=s.add(1)
if(layers.B.buyables[21].base().gte(1e5)) s=s.add(1)
if(layers.B.buyables[22].base().gte(1e5)) s=s.add(1)
if(buyableEffect('A',11).gte(1e200)) s=s.add(1)
if(upgradeEffect('B',11).gte(1e30)&&hasUpgrade('B',11)) s=s.add(1)
if(tmp.C.gainMult.gte(1e60)) s=s.add(1)
if(buyableEffect('A',12).gte(10)) s=s.add(1)
if(tmp.A.gainMult.gte(1e100)) s=s.add(1)
if(buyableEffect('A',11).gte("1e500")) s=s.add(1)
if(getPointGen().gte(1e300)) s=s.add(1)
if(tmp.B.gainMult.gte(1e250)) s=s.add(1)
if(buyableEffect('A',12).gte(100)) s=s.add(1)
if(tmp.C.gainMult.gte(1e100)) s=s.add(1)
if(upgradeEffect('A',61).gte(1e50)&&hasUpgrade('A',61)) s=s.add(1)
if(buyableEffect('B',23).gte("1e1024")) s=s.add(1)
if(tmp.B.gainMult.gte("1e400")) s=s.add(1)
if(getPointGen().gte("1e500")) s=s.add(1)
if(tmp.A.gainMult.gte(1e250)) s=s.add(1)
if(upgradeEffect('B',11).gte(1e100)&&hasUpgrade('B',11)) s=s.add(1)
if(tmp.A.gainMult.gte(1e300)) s=s.add(1)
if(upgradeEffect('E',12).gte(10)&&hasUpgrade('E',12)) s=s.add(1)
if(upgradeEffect('E',15).gte(2)&&hasUpgrade('E',15)) s=s.add(1)
if(upgradeEffect('E',23).gte(10)&&hasUpgrade('E',23)) s=s.add(1)
if(upgradeEffect('E',14).gte(2)&&hasUpgrade('E',14)) s=s.add(1)
if(upgradeEffect('E',13).gte(2)&&hasUpgrade('E',13)) s=s.add(1)
if(upgradeEffect('E',16)[0].gte(1e4)&&hasUpgrade('E',16)) s=s.add(1)
if(upgradeEffect('E',16)[1].gte(1e4)&&hasUpgrade('E',16)) s=s.add(1)
if(upgradeEffect('E',22)[0].gte(1e4)&&hasUpgrade('E',22)) s=s.add(1)
if(upgradeEffect('E',22)[1].gte(1e4)&&hasUpgrade('E',22)) s=s.add(1)
if(upgradeEffect('E',32).gte(2)&&hasUpgrade('E',32)) s=s.add(1)
if(upgradeEffect('C',32).gte(2)&&hasUpgrade('C',32)) s=s.add(1)
if(tmp.E.gainMult.gte(1e5)) s=s.add(1)
if(upgradeEffect('E',31).gte(1e9)&&hasUpgrade('E',31)) s=s.add(1)
if(upgradeEffect('C',33)[0].gte(2)&&hasUpgrade('C',33)) s=s.add(1)
if(upgradeEffect('C',33)[1].gte(2)&&hasUpgrade('C',33)) s=s.add(1)
if(upgradeEffect('E',14).gte(4)&&hasUpgrade('E',14)) s=s.add(1)
if(upgradeEffect('E',26).gte(5)&&hasUpgrade('E',26)) s=s.add(1)
if(upgradeEffect('E',35).gte(2)&&hasUpgrade('E',26)) s=s.add(1)
if(challengeEffect('E',12).gte(2)&&hasChallenge('E',12)) s=s.add(1)
if(upgradeEffect('E',36).gte(4)&&hasUpgrade('E',36)) s=s.add(1)
if(upgradeEffect('E',13).gte(5)&&hasUpgrade('E',13)) s=s.add(1)
if(challengeEffect('E',12).gte(10)&&hasChallenge('E',12)) s=s.add(1)
if(upgradeEffect('D',11).gte("ee7")&&hasUpgrade('D',11)) s=s.add(1)
if(player.s.points.gte(2.5e4)) s=s.add(1)
if(upgradeEffect('s',31).gte("2")&&hasUpgrade('s',31)) s=s.add(1)
if(upgradeEffect('E',12).gte(1000)&&hasUpgrade('E',12)) s=s.add(1)
if(buyableEffect('E',21).gte(1e15)) s=s.add(1)
if(buyableEffect('E',14).gte(0.03)) s=s.add(1)
if(upgradeEffect('E',51).gte(100)&&hasUpgrade('E',51)) s=s.add(1)
if(tmp.E.gainMult.gte(1e10)) s=s.add(1)
if(upgradeEffect('E',26).gte(10)&&hasUpgrade('E',26)) s=s.add(1)
if(upgradeEffect('s',31).gte(5)&&hasUpgrade('s',31)) s=s.add(1)
if(buyableEffect('E',11).gte(1e40)) s=s.add(1)
if(buyableEffect('E',12).gte(1e40)) s=s.add(1)
if(upgradeEffect('E',11).gte("ee5")&&hasUpgrade('E',11)) s=s.add(1)
if(tmp.A.gainMult.gte("1e400")) s=s.add(1)
if(upgradeEffect('E',11).gte("e5e5")&&hasUpgrade('E',11)) s=s.add(1)
if(upgradeEffect('E',56).gte(2)&&hasUpgrade('E',56)) s=s.add(1)
if(upgradeEffect('E',54).gte(1e10)&&hasUpgrade('E',54)) s=s.add(1)
if(upgradeEffect('E',61).gte(5)&&hasUpgrade('E',61)) s=s.add(1)
if(challengeEffect('E',21)[0].gte(1e25)&&hasChallenge('E',21)) s=s.add(1)
if(challengeEffect('E',21)[1].gte(1e25)&&hasChallenge('E',21)) s=s.add(1)
if(challengeEffect('E',22)[0].gte(1e15)&&hasChallenge('E',22)) s=s.add(1)
if(challengeEffect('E',22)[1].gte(1e10)&&hasChallenge('E',22)) s=s.add(1)
if(upgradeEffect('B',84).gte(10)&&hasUpgrade('B',84)) s=s.add(1)
if(upgradeEffect('E',61).gte(15)&&hasUpgrade('E',61)) s=s.add(1)
if(upgradeEffect('E',63).gte(7.5)&&hasUpgrade('E',63)) s=s.add(1)
if(upgradeEffect('E',65).gte(100)&&hasUpgrade('E',65)) s=s.add(1)
if(upgradeEffect('E',51).gte(1e4)&&hasUpgrade('E',51)) s=s.add(1)
if(a) s=s.add(1)
return s
}