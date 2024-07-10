
// A side layer with achievements, with no prestige
addLayer("ac", {
    startData() { return {
        unlocked: true,
        //points: new Decimal(0),
    }},
    color: "yellow",
    row: "side",
    tooltip() { // Optional, tooltip displays when the layer is locked
        return ("Achievements")
    },
    achievementPopups: true,
    achievements: {
        11: {
            name: "1.you gotta start softcaps somewhere",
            done() {return player.A.total.gte('1')}, 
            tooltip: "get 1 A", 
        },
        12: {
            name: "2.unconstant",
            done() {return (hasUpgrade("A", 14))},
            tooltip: "get A1-A4", 
        },
        13: {
            name: "3.dis-self boost",
            done() {return (hasUpgrade("A", 15))},
            tooltip: "get A5",
        },
        14: {
            name: "4.100 wells",
            done() {return player.A.total.gte('100')},
            tooltip: "get 100 A",
        },
        15: {
            name: "5.logged",
            done() {return (hasUpgrade("A", 24))},
            tooltip: "get A9",
        },
        16: {
            name: "6.why not prestige",
            done() {return player.B.total.gte('1')},
            tooltip: "get 1 B",
        },
        17: {
            name: "6.5.why not softcaps",
            done() {return player.softcap.gte('5')},
            tooltip: "get 5 softcaps",
        },
        21: {
            name: "7.constant^√2",
            done() {return (hasUpgrade("B", 15))},
            tooltip: "get B1-B5",
        },
        22: {
            name: "8.primary automation^2",
            done() {return (hasUpgrade("B", 23))},
            tooltip: "get B8", 
        },
        23: {
            name: "9.not so challenging",
            done() {return (hasUpgrade("B", 25))},
            tooltip: "unlock A chal", 
        },
        24: {
            name: "10.challenged",
            done() {return (hasChallenge("A", 11))},
            tooltip: "complete Ac1", 
        },
        25: {
            name: "11.challenged*3",
            done() {return (hasChallenge("A", 21))},
            tooltip: "complete Ac3", 
        },
        26: {
            name: "12.Row 1 full",
            done() {return (hasUpgrade("B", 36))},
            tooltip: "get B15.5", 
        },
        27: {
            name: "12.5.Struggling for points",
            done() {return (player.points.gte(1e12))},
            tooltip: "get 1e12 points.", 
        },
        31: {
            name: "13.Row 2 why does prestige",
            done() {return player.C.total.gte('1')},
            tooltip: "unlock C",
        },
        32: {
            name: "14.hidden upg",
            done() {return (hasUpgrade("A", 41))},
            tooltip: "get A16", 
        },
        33: {
            name: "15.a set of timewall",
            done() {return (hasUpgrade("A", 46))},
            tooltip: "get A20.5", 
        },
        34: {
            name: "16.not clickable",
            done() {return (hasUpgrade("C", 26))},
            tooltip: "get C10.5", 
        },
        35: {
            name: "17.why not prestige^3",
            done() {return player.D.total.gte('1')},
            tooltip: "unlock D",
        },
        36: {
            name: "18.constant^3",
            done() {return (hasUpgrade("D", 14))},
            tooltip: "get D1-D4", 
        },
        37: {
            name: "18.5.Hyper Reduce",
            done() {return upgradeEffect('A',11).gte(1e30)},
            tooltip: "get the first exponential softcap (Sc37)", 
        },
        41: {
            name: "19.hidden upg^2",
            done() {return (hasUpgrade("A", 52))},
            tooltip: "get A22", 
        },
        42: {
            name: "20.perfect exponential",
            done() {return (hasUpgrade("D", 21))},
            tooltip: "get D6", 
        },
        43: {
            name: "21.first buyable",
            done() { return hasMilestone('D',2)},
            tooltip: "unlock B buyable",
        },
        44: {
            name: "22.Row 1 boost",
            done() { return hasUpgrade('B',41)},
            tooltip: "unlock Bb2",
        },
        45: {
            name: "23.discount",
            done() { return hasUpgrade('B',43)},
            tooltip: "get B18",
        },
        46: {
            name: "24.multieffect",
            done() { return hasUpgrade('B',52)},
            tooltip: "get B22",
        },
        51: {
            name: "25.remarkable",
            done() { return hasMilestone('B',0)},
            tooltip: "get a B milestone",
        },
        52: {
            name: "26.hidden upg^3",
            done() {return (hasChallenge("A", 32))},
            tooltip: "complete Ac6", 
        },
        53: {
            name: "27.infinity?",
            done() {return player.A.total.gte('1e308')},
            tooltip: "get 1e308 A", 
        },
        54: {
            name: "28.feel free",
            done() { return hasMilestone('B',2)},
            tooltip: "autobuy B buyable",
        },
        55: {
            name: "29.constant^4",
            done() {return (hasUpgrade("B", 72))},
            tooltip: "get B32", 
        },
        56: {
            name: "30.4x auto",
            done() { return hasMilestone('B',4)},
            tooltip: "D passive gain",
        },
        61: {
            name: "31.year in A",
            done() { return (challengeCompletions("A", 41) >= 4)},
            tooltip: "get 1e2024 pts in Ac7",
        },
        62: {
            name: "32.year in A^2",
            done() { return player.A.total.gte('1e2024')},
            tooltip: "get 1e2024 A",
        },
        63: {
            name: "33.a set of timewall^2",
            done() {return (hasUpgrade("A", 65))},
            tooltip: "get A30", 
        },
        64: {
            name: "34.inflation here",
            done() {return (hasUpgrade("B", 82))},
            tooltip: "get B37", 
        },
        65: {
            name: "35.'E'xponential",
            done() {return player.E.total.gte('1')}, 
            tooltip: "get 1 E", 
        },
        66: {
            name: "36.click it!",
            done() {return player.E.total.gte('1000')}, 
            tooltip: "get 1000 E", 
        },
        71: {
            name: "37.4 ingredients",
            done() {return (hasMilestone("E", 2))},
            tooltip: "unlock E chal", 
        },
        72: {
            name: "38.click billionaire",
            done() {return player.E.total.gte('1e9')}, 
            tooltip: "get 1e9 E", 
        },
        73: {
            name: "39.just for E",
            done() { return (challengeCompletions("E", 11) >= 3)},
            tooltip: "complete Ec1x3",
        },
        74: {
            name: "40.a bigger timewall",
            done() {return (challengeCompletions("E", 12) >= 2)},
            tooltip: "complete Ec2x2", 
        },
        75: {
            name: "41.10000 nice",
            done() {return player.points.gte('1e10000')},
            tooltip: "get 1e10000 pts",
        },
        76: {
            name: "42.3 'antimatter galaxies'",
            done() {return (hasUpgrade("E", 45))},
            tooltip: "get E20", 
        },
        81: {
            name: "43.'985'",
            done() {return (hasUpgrade("E", 54))},
            tooltip: "get E24", 
        },
        82: {
            name: "44.challenging^2",
            done() {return (challengeCompletions("E", 22) >= 1)},
            tooltip: "complete Ec4x1", 
        },
        83: {
            name: "45.hidden upg^4",
            done() {return (hasUpgrade("E", 64))},
            tooltip: "get E29", 
        },
        84: {
            name: "46.powerful 666",
            done() { return (hasMilestone('D',3))},
            tooltip: "get 1e666 D",
        },
        85: {
            name: "47.no more clicks?",
            done() {return (hasMilestone('E',10))},
            tooltip: "get 10x E pas", 
        },
        86: {
            name: "48.Emmm...",
            done() {return (hasMilestone('E',11))},
            tooltip: "unlock Em", 
        },
        91: {
            name: "49.Em boosted",
            done() {return player.E.Em.gte('1e10')},
            tooltip: "get 1e10 Em",
        },
        92: {
            name: "50.googol E",
            done() {return player.E.points.gte('1e100')},
            tooltip: "get 1e100 E",
        },
        93: {
            name: "51.back",
            done() {return (hasUpgrade("E", 92))},
            tooltip: "get E42", 
        },
        94: {
            name: "52.linear",
            done() {return (challengeCompletions("E", 32) >= 1)},
            tooltip: "complete Ec6x1", 
        },
        95: {
            name: "53.Ek ruby",
            done() {return (hasMilestone('E',15))},
            tooltip: "unlock Ek", 
        },
        96: {
            name: "54.hidden upg^5",
            done() {return (hasUpgrade("E", 101))},
            tooltip: "get E46", 
        },
        101: {
            name: "55.GOODRAGE",
            done() {return player.E.points.gte('2e222')},
            tooltip: "get 2e222 E",
        },
        102: {
            name: "56.inflation again",
            done() {return (hasUpgrade("E", 104))},
            tooltip: "get E49", 
        },
        103: {
            name: "57.raising exp",
            done() {return (challengeCompletions("E", 42) >= 2)},
            tooltip: "complete Ec8x2", 
        },
        104: {
            name: "58.50 upgs",
            done() {return (hasUpgrade("E", 105))},
            tooltip: "get E50", 
        },
        105: {
            name: "59.10 babs",
            done() {return (hasMilestone("E", 18))},
            tooltip: "unlock Eb10", 
        },
        106: {
            name: "60.inflation to ee5",
            done() {return player.points.gte('e100000')},
            tooltip: "get e100000 pts",
        },
        111: {
            name: "61.complicated",
            done() {return (challengeCompletions("E", 42) >= 5)},
            tooltip: "complete Ec8x5", 
        },
        112: {
            name: "62.1000S E",
            done() {return player.E.points.gte('1e1000')},
            tooltip: "get 1e1000 E",
        },
        113: {
            name: "63.isnt softcapped",
            done() {return player.E.Ek.gte('1e590')},
            tooltip: "get 1e590 Ek",
        },
    },
    tabFormat: ["blank", ["display-text", function() {
        return "<h3 style='color: yellow;'>Achievements: " + player.ac.achievements.length + "/63 </h4>"
    }
    ], "blank", "blank", "achievements", ],
},
)