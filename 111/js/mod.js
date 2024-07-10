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
	num: "0.1",
	name: "C finish",
}

let changelog = `<h1>Changelog:</h1><br>
<h2>v0.1 2024/7/9-2024/7/10</h2><br>
<h3>- Rebalanced A, B and C.
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
	gain = gain.mul(hasUpgrade("s",11)?upgradeEffect("s",11):1)
	gain = gain.mul(hasMilestone("C",3)?1000:1)

	gain = gain.mul(hasUpgrade("C",11)?upgradeEffect("C",11):1)
	gain = gain.mul(hasUpgrade("C",13)?upgradeEffect("C",13):1)
	gain = gain.mul(hasUpgrade("D",11)?upgradeEffect("D",11):1)
	gain = gain.mul(hasUpgrade("D",15)?upgradeEffect("D",15):1)
	gain = gain.mul(hasUpgrade("D",21)?upgradeEffect("D",21):1)
	gain = gain.mul(hasUpgrade("D",24)?upgradeEffect("D",24):1)
	gain = gain.mul(hasUpgrade("D",32)?upgradeEffect("D",32):1)
	gain = gain.mul(hasUpgrade("E",11)?upgradeEffect("E",11):1)
	gain = gain.mul(hasUpgrade("E",12)?upgradeEffect("E",12):1)
	gain = gain.mul(hasUpgrade("E",22)?upgradeEffect("E",22):1)
	gain = gain.mul(hasUpgrade("C",33)?upgradeEffect("C",33):1)
	gain = gain.mul(hasUpgrade("D",43)?upgradeEffect("D",43):1)
	gain = gain.mul(hasUpgrade("E",85)?upgradeEffect("E",85):1)
	gain = gain.mul(hasUpgrade("E",104)?upgradeEffect("E",104):1)

	if (inChallenge("A", 11))  gain = gain.pow(0.75)
	if (inChallenge("A", 21))  gain = gain.pow(0.5)
	if (inChallenge("A", 31))  gain = gain.pow(0.15)
	if (inChallenge("C", 11))  gain = gain.pow(0.45)
	if (inChallenge("E", 22))  gain = gain.pow(player.points.add(10).log(10).pow(-0.06))
	if (inChallenge("E", 32))  gain = gain.pow(player.E.Em.add(10).log(10).pow(-0.2))
	if (inChallenge("E", 42))  gain = gain.pow(player.points.add(10).log(10).pow(-0.12))

	if (hasChallenge("A", 21))  gain = gain.mul(50)
	if (hasChallenge("A", 22))  gain = gain.mul(100)
	if (hasChallenge("A", 31))  gain = gain.mul(2e5)
	if (hasChallenge("C", 11))  gain = gain.mul(2000)
	if (hasChallenge("C", 12))  gain = gain.mul(8000)
	if (hasChallenge("A", 41))  gain = gain.mul(challengeEffect('A',41))

	if (hasChallenge("A", 32))  gain = gain.pow(1.01)
	if (hasChallenge("C", 11))  gain = gain.pow(1.01)
	if (hasChallenge("E", 21))  gain = gain.mul(challengeEffect('E',21))
	if (hasChallenge("E", 22))  gain = gain.mul(challengeEffect('E',22))

if(gain.gte(1e4)) gain=gain.div(1e4).pow(0.5).mul(1e4)//sc9
if(gain.gte(1e6)) gain=gain.div(1e6).pow(0.6).mul(1e6)//sc14
if(gain.gte(1e8)) gain=gain.div(1e8).pow(0.7).mul(1e8)//sc20
if(gain.gte(1e10)) gain=gain.div(1e10).pow(0.8).mul(1e10)//sc20
if(gain.gte(1e35)) gain=gain.div(1e35).pow(0.9).mul(1e35)//sc20

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
	 let a="Current endgame: 1e12 C<br> next layer requires 1e12 C."
	 if(gcs('t',21)) a=a+"<br>There are "+format(player.softcap)+" softcaps in all now."
	 if(gcs('t',22)) a=a+"<br>A's GainMult: "+format(tmp.A.gainMult)
	 if(gcs('t',23)) a=a+"<br>B's GainMult: "+format(tmp.B.gainMult)
	 if(gcs('t',24)) a=a+"<br>C's GainMult: "+format(tmp.C.gainMult)
	 return a
	},
]
// Determines when the game "ends"
function isEndgame() {
	return player.C.points.gte(1e12)
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
if(n(upgradeEffect('C',11)).gte(1e5)&&hasUpgrade('C',11)) s=s.add(1)
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
if(upgradeEffect('s',16).gte(0)&&hasUpgrade('s',16)) s=s.add(1)
if(upgradeEffect('C',11).gte(1e10)&&hasUpgrade('C',11)) s=s.add(1)
if(tmp.C.gainMult.gte(1e5)) s=s.add(1)
if(player.s.points.gte(1000)) s=s.add(1)
if(getPointGen().gte(1e35)) s=s.add(1)
if(upgradeEffect('B',16).gte(1e6)&&hasUpgrade('B',16)) s=s.add(1)
if(a) s=s.add(1)
return s
}