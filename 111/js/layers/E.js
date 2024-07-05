addLayer("E", {
    name: "E", 
    symbol: "E", 
    position: 2, 
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        Em: new Decimal(0),
        Ek: new Decimal(0),
    }},
    passiveGeneration(){    let pg=1
        if (hasMilestone('E',10)) pg=pg*10
        if (hasMilestone('E',11)) pg=pg*10
        if (hasMilestone('E',15)) pg=pg*10
        return (hasMilestone("E", 9))?pg:0},
    color: "#789A89",
    requires: new Decimal('1e1760'), 
    resource: "E", 
    baseResource: "B", 
    baseAmount() {return player.B.points}, 
    type: "normal", 
    exponent: 0.008, 
    gainExp() {
        return new Decimal(1)
    },
    row: 1, 
    hotkeys: [
        {key: "e", description: "E: Reset for E points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){  if (player.E.unlocked) return true
    else return (hasMilestone("B", 7))},
    gainMult() {
        //let emxp=0.25
        //if (hasMilestone('E',12))  emxp=emxp+0.02
        mult = new Decimal(1)
        mult = mult.mul(hasUpgrade("E",13)?upgradeEffect("E",13):1)
        mult = mult.mul(hasUpgrade("E",14)?upgradeEffect("E",14):1)
        mult = mult.mul(hasUpgrade("E",15)?4:1)
        mult = mult.mul(hasUpgrade("E",21)?2:1)
        mult = mult.mul(hasUpgrade("E",41)?5:1)
        mult = mult.mul(hasUpgrade("E",42)?2:1)
        //mult = mult.mul(hasUpgrade("E",51)?2500:1)
        //mult = mult.mul(hasUpgrade("E",54)?100:1)
        mult = mult.mul(hasUpgrade("E",23)?upgradeEffect("E",23):1)
        mult = mult.mul(hasUpgrade("E",32)?upgradeEffect("E",32):1)
        mult = mult.mul(hasUpgrade("C",32)?upgradeEffect("C",32):1)
        mult = mult.mul(hasUpgrade("D",42)?upgradeEffect("D",42):1)
        //mult = mult.mul(hasMilestone("E",11)?player.E.Em.max(1).pow(emxp):1)
        mult = mult.mul(hasMilestone("E",11)?tmp.E.emf:1)
        mult = mult.mul(hasMilestone("E",20)?2024:1)
        mult = mult.mul(hasUpgrade("E",71)?upgradeEffect("E",71):1)
        mult = mult.mul(hasUpgrade("E",102)?upgradeEffect("E",102):1)
        if (hasChallenge("E", 11))  mult = mult.mul(challengeEffect('E',11))
        if (hasChallenge("E", 12))  mult = mult.mul(challengeEffect('E',12))
        return mult
    },
    branches: ['A','B','D'],
    milestones: {
        0: {requirementDescription: "1500 total E",
            done() {return player[this.layer].total.gte('1500')}, 
            effectDescription: "unlock E buyable.",
        },
        1: {requirementDescription: "40000 total E",
            done() {return player[this.layer].total.gte('40000')}, 
            effectDescription: "unlock Eb3,E2 exp+0.5.",
        },
        2: {requirementDescription: "1e6 total E",
            done() {return player[this.layer].total.gte('1e6')}, 
            effectDescription: "unlock E chal.",
        },
        3: {requirementDescription: "1e16 total E",
            done() {return player[this.layer].total.gte('1e16')}, 
            effectDescription: "E12 ^1.5,unlock another chal.",
        },
        4: {requirementDescription: "1e25 total E",
            done() {return player[this.layer].total.gte('1e25')}, 
            effectDescription: "autobuy Eb1-3.",
            toggles: [ ["E","auto"] ]
        },
        5: {requirementDescription: "1e31 total E",
            done() {return player[this.layer].total.gte('1e31')}, 
            effectDescription: "Eb3 base +1,unlock another buyable.",
        },
        6: {requirementDescription: "1e40 total E",
            done() {return player[this.layer].total.gte('1e40')}, 
            effectDescription: "autobuy Eb4.",
            toggles: [ ["E","auto"] ]
        },
        7: {requirementDescription: "1e45 total E",
            done() {return player[this.layer].total.gte('1e45')}, 
            effectDescription: "unlock 2 new chal.",
        },
        8: {requirementDescription: "1e49 total E",
            done() {return player[this.layer].total.gte('1e49')}, 
            effectDescription: "unlock new upg,B26 ^1.05.",
        },
        9: {requirementDescription: "1e53 total E",
            done() {return player[this.layer].total.gte('1e53')}, 
            effectDescription: "1x E passive. Finally!",
        },
        10: {requirementDescription: "2e68 total E",
            done() {return player[this.layer].total.gte('2e68')},
            effectDescription: "10x E passive,B26 ^1.05.",
        },
        11: {requirementDescription: "1e71 total E",
            done() {return player[this.layer].total.gte('1e71')},
            effectDescription: "10x E passive again,unlock Em.",
        },
        //12: {requirementDescription: "1e9 total Em",
        //    done() {return player.E.Em.total.gte('1e9')},
        //    effectDescription: "10x E passive again.",
        //},
        12: {requirementDescription: "1e90 total E",
            done() {return player[this.layer].total.gte('1e90')},
            effectDescription: "Em eff exp +0.02.",
        },
        13: {requirementDescription: "1e111 total E",
            done() {return player[this.layer].total.gte('1e111')}, 
            effectDescription: "autobuy Eb5-7.",
            toggles: [ ["E","auto"] ]
        },
        14: {requirementDescription: "1e132 total E",
            done() {return player[this.layer].total.gte('1e132')}, 
            effectDescription: "unlock 2 new chal.",
        },
        15: {requirementDescription: "1e166 total E",
            done() {return player[this.layer].total.gte('1e166')},
            effectDescription: "10x E passive,Bb1-2 sc start 100 later,unlock Ek.",
        },
        16: {requirementDescription: "1e209 total E",
            done() {return player[this.layer].total.gte('1e209')}, 
            effectDescription: "unlock final 2 chal.",
        },
        17: {requirementDescription: "1e233 total E",
            done() {return player[this.layer].total.gte('1e233')}, 
            effectDescription: "autobuy Eb8-9.",
            toggles: [ ["E","auto"] ]
        },
        18: {requirementDescription: "1e570 total E",
            done() {return player[this.layer].total.gte('1e570')}, 
            effectDescription: "unlock the final buyable.",
        },
        19: {requirementDescription: "1e666 total E",
            done() {return player[this.layer].total.gte('1e666')}, 
            effectDescription: "autobuy Eb10,E47 ^1.6.",
            toggles: [ ["E","auto"] ]
        },
        20: {requirementDescription: "1e981 total E",
            done() {return player[this.layer].total.gte('1e981')}, 
            effectDescription: "x2024 E,unlock the next layer (coming soon).",
        },
    },
    microtabs: {
        stuff: {       
            "Upgrades": {
                unlocked() {return true},
                content: [ "upgrades"]}, 
            "Buyables": {
                unlocked() {return (hasMilestone("E", 0))},
                content: [["raw-html", () => `<h4 style="opacity:.5">Ebs' cost increase faster above 40 purchases</h4>`],
                ["buyables",[1,2]]]},
            "Milestones": {
                unlocked() {return (hasUpgrade("E", 14))},
                content: ["milestones"]},
            "Challenges": {
                unlocked() {return (hasMilestone("E",2))},
                content: ["challenges"]},
            "Em": {
                unlocked() {return (hasMilestone("E", 11))},
                content: [["display-text", () => "You have <h2 style='color: #789A89; text-shadow: 0 0 10px #c2b280'>" + format(player.E.Em) + "</h2> Em, mult E by <h2 style='color: #789A89; text-shadow: 0 0 10px #c2b280'> " + format(tmp.E.emf) + "x</h2>.<br>" + "<h3>" + format(tmp.E.Emeffect) + " Em/s<h3> <br>"],
                ["raw-html", () => `<h4 style="opacity:.5">welcome to first sub-currency.Em^0.25 mults E. </h4>`],
                ["buyables",[3]]]},
            "Ek": {
                unlocked() {return (hasMilestone("E", 15))},
                content: [["display-text", () => "You have <h2 style='color: #177261; text-shadow: 0 0 10px #c2b280'>" + format(player.E.Ek) + "</h2> Ek, Bb scaling start <h2 style='color: #177261; text-shadow: 0 0 10px #c2b280'> " + format(tmp.E.ekf) + " </h2>later.<br>" + "<h3>" + format(tmp.E.Ekeffect) + " Ek/s<h3> <br>"],
                ["raw-html", () => `<h4 style="opacity:.5">Ek delays Bb1-2 scaling. </h4>`],
                ["buyables",[4]]]},
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
            title:'E1',
            description: function() {return '1e5x points \n\
                '+'layer E total: \n\
                '+ format(this.effect()) +'x'},
            effect()  { 
                let ef = 1e5
                if (hasUpgrade('E',15)) ef = ef*1e5
                if (hasUpgrade('E',33)) ef = ef*3e5
                if (hasUpgrade('E',51)) ef = ef*1e6
                if (hasUpgrade('E',53)) ef = ef*1e6
                if (hasUpgrade('E',55)) ef = ef*1e7
                if (hasUpgrade('E',65)) ef = ef*1e8
                ef=Decimal.pow(ef,buyableEffect("E",21))
                return ef;          
            },
            cost:new Decimal(1),
        },
        12: {
            title:'E2',
            description: "E boost points.",
            effect()  { 
                let ef = 1
                if (hasUpgrade('E',15)) ef = ef+0.5
                if (hasMilestone('E',1)) ef = ef+0.5
                if (hasUpgrade('E',44)) ef = ef*1.5
                if (inChallenge('E',11))  ef = 0
                return player[this.layer].points.add(1).pow(ef);          
            },
            cost:new Decimal(10),
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 11))},
        },
        13: {
            title:'E3',
            description: "boost to E base on D.",
            effect()  { 
                let ef = player.D.points.add(10).log(10).div(100)
                if (hasUpgrade('E',24)) ef = Decimal.pow(ef,1.5)
                if (hasUpgrade('E',63)) ef = Decimal.pow(ef,1.2)
                if (hasUpgrade('C',35)) ef = Decimal.pow(ef,1.2)
                return ef;
            },
            cost:new Decimal(30),
            unlocked() { return (hasUpgrade(this.layer, 12))},
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        14: {
            title:'E4',
            description: "boost to E base on C.",
            effect()  { 
                let ef = player.C.points.add(10).log(10).div(200)
                if (hasUpgrade('E',25)) ef = Decimal.pow(ef,1.5)
                if (hasUpgrade('E',63)) ef = Decimal.pow(ef,1.2)
                if (hasUpgrade('C',35)) ef = Decimal.pow(ef,1.2)
                return ef;          
            },
            cost:new Decimal(80),
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 13))},
        },
        15: {
            title:'E5',
            description: "E2 ^1.5,1e5x points,x4 E.",
            cost:new Decimal('500'),
            unlocked() { return (hasUpgrade(this.layer, 14))},
        },
        21: {
            title:'E6',
            description: "Eb1-2 base +1,x2 E.",
            cost:new Decimal('7500'),
            unlocked() { return (hasUpgrade(this.layer, 15))},
        },
        22: {
            title:'E7',
            description: "E upg boost pts.<br>(e^3x).",
            cost:new Decimal('2e4'),
            effect()  { 
                let a=player.E.upgrades.length
                let ef = Decimal.pow(20.09,a)
                if (hasUpgrade('E',25)) ef = Decimal.pow(54.6,a)
                if (hasUpgrade('E',33)) ef = Decimal.pow(ef,1.5)
                if (hasUpgrade('E',84)) ef = Decimal.pow(ef,1.5)
                return ef;          
            },
            unlocked() { return (hasUpgrade(this.layer, 21))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        23: {
            title:'E8',
            description: "E upg boost E.<br>(1.2^x).",
            cost:new Decimal('4e4'),
            effect()  { 
                let bas=1.2
                let a=player.E.upgrades.length
                if (hasUpgrade('E',83)) bas = bas+0.15
                if (hasUpgrade('E',91)) bas = bas+0.15
                if (hasUpgrade('E',94)) bas = bas+0.1
                let efe8 = Decimal.pow(bas,a)
                return efe8;          
            },
            unlocked() { return (hasUpgrade(this.layer, 22))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        24: {
            title:'E9',
            description: "E3 ^1.5.",
            cost:new Decimal('1e5'),
            unlocked() { return (hasUpgrade(this.layer, 23))},
        },
        25: {
            title:'E10',
            description: "E4 ^1.5,E7 becomes e^4x.",
            cost:new Decimal('2e5'),
            unlocked() { return (hasUpgrade(this.layer, 24))},
        },
        31: {
            title:'E11',
            description: "B26 ^1.1.",
            cost:new Decimal('5e7'),
            unlocked() { return  (challengeCompletions("E", 11) >= 1)},
        },
        32: {
            title:'E12',
            description: "boost to E base on B.",
            cost:new Decimal('1.6e8'),
            effect()  { 
                let ef = player.B.points.add(10).log(10).div(300)
                if (hasMilestone('E',3)) ef = Decimal.pow(ef,1.5)
                if (hasUpgrade('E',63)) ef = Decimal.pow(ef,1.2)
                if (hasUpgrade('D',45)) ef = Decimal.pow(ef,1.2)
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 31))},
        },
        33: {
            title:'E13',
            description: "x3e5 pts,<br>E7 becomes e^6x.",
            cost:new Decimal('4e9'),
            unlocked() { return (hasUpgrade(this.layer, 32))},
        },
        34: {
            title:'E14',
            description: "Bb5 is stronger.<br> (+2%)",
            cost:new Decimal('1e11'),
            unlocked() { return (hasUpgrade(this.layer, 33))},
        },
        35: {
            title:'E15',
            description: "boost to E base on A.",
            cost:new Decimal('1e13'),
            effect()  { 
                let ef = player.A.points.add(10).log(10).div(500)
                if (hasUpgrade('E',41)) ef = Decimal.pow(ef,1.5)
                if (hasUpgrade('E',63)) ef = Decimal.pow(ef,1.2)
                if (hasUpgrade('D',45)) ef = Decimal.pow(ef,1.2)
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 34))},
        },
        41: {
            title:'E16',
            description: "E15 ^1.5,x5 E.",
            cost:new Decimal('1e18'),
            unlocked() { return  (challengeCompletions("E", 11) >= 1)},
        },
        42: {
            title:'E17',
            description: "Eb1-2 base +1,x2 E.",
            cost:new Decimal('5e19'),
            unlocked() { return (hasUpgrade(this.layer, 41))},
        },
        43: {
            title:'E18',
            description: "Bb1-2 are cheaper.<br>(^0.992,after scaling)",
            cost:new Decimal('3e23'),
            unlocked() { return (hasUpgrade(this.layer, 42))},
        },
        44: {
            title:'E19',
            description: "E2 ^1.5",
            cost:new Decimal('1e26'),
            unlocked() { return (hasUpgrade(this.layer, 43))},
        },
        45: {
            title:'E20',
            description: "Bb5 is stronger.<br> (+2%)",
            cost:new Decimal('1e29'),
            unlocked() { return (hasUpgrade(this.layer, 44))},
        },
        51: {
            title:'E21',
            description: "x1e6 pts.",
            cost:new Decimal('1e31'),
            unlocked() { return (hasUpgrade(this.layer, 45))},
        },
        52: {
            title:'E22',
            description: "Ac7 is stronger based on E.",
            cost:new Decimal('4e32'),
            effect()  { 
                let ef = Decimal.add(player.E.points,10).log(10).pow(0.75).div(150).add(1)
                if (hasUpgrade('E',74)) ef = 1+(ef-1)*1.1
                return ef;          
            },
            unlocked() { return (hasUpgrade(this.layer, 51))},
            effectDisplay() { return '^'+format(this.effect()) }, 
        },
        53: {
            title:'E23',
            description: "Bb5 is stronger (+3%)<br>and x1e6 pts.",
            cost:new Decimal('2e32'),
            unlocked() { return (hasUpgrade(this.layer, 52))},
        },
        54: {
            title:'E24',
            description: "Eb1-3 are cheaper.<br>(^0.985,after scaling)",
            cost:new Decimal('1e42'),
            unlocked() { return (hasUpgrade(this.layer, 53))},
        },
        55: {
            title:'E25',
            description: "x1e7 pts,add Eb1-2 base.",
            cost:new Decimal('2e44'),
            effect()  { 
                //let ef = Decimal.add(player[this.layer].total.points,10).log(10).pow(0.8).div(50)
                let ef = Decimal.add(player.E.points,10).log(10).pow(0.8).div(50)
                return ef;          
            },
            effectDisplay() { return '+'+format(this.effect()) }, 
            unlocked() { return (hasUpgrade(this.layer, 54))},
        },
        61: {
            title:'E26',
            description: "Eb4 applies to C/D(nerfed,40%).",
            cost:new Decimal('6e49'),
            unlocked() { return (hasMilestone(this.layer, 8))},
        },
        62: {
            title:'E27',
            description: "Bb5 is cheaper.",
            cost:new Decimal('3e50'),
            unlocked() { return (hasUpgrade(this.layer, 61))},
        },
        63: {
            title:'E28',
            description: "E3/4/12/15 ^1.2.",
            cost:new Decimal('4e51'),
            unlocked() { return (hasUpgrade(this.layer, 62))},
        },
        64: {
            title:'E29',
            description: "E26 +10%.<br>unlock new C/D upg.",
            cost:new Decimal('6e54'),
            unlocked() { return (hasUpgrade(this.layer, 63))},
        },
        65: {
            title:'E30',
            description: "^1.004 B,1e8x pts.",
            cost:new Decimal('1e70'),
            unlocked() { return (hasMilestone(this.layer, 10))},
        },
        71: {
            title:'E31',
            description: "logEm mults E.",
            cost:new Decimal('1e77'),
            unlocked() { return (hasMilestone(this.layer, 11))},
            effect()  { 
                let ef = player.E.Em.add(10).log(10)
                if (hasUpgrade('E',81)) ef = Decimal.pow(ef,1.5)
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"x" },
        },
        72: {
            title:'E32',
            description: "E26 +10%.",
            cost:new Decimal('1e81'),
            unlocked() { return (hasUpgrade(this.layer, 71))},
        },
        73: {
            title:'E33',
            description: "Bb1-2 are cheaper.<br>(^0.99,after scaling)",
            cost:new Decimal('1e83'),
            unlocked() { return (hasUpgrade(this.layer, 72))},
        },
        74: {
            title:'E34',
            description: "E22 x1.1.",
            cost:new Decimal('1e87'),
            unlocked() { return (hasUpgrade(this.layer, 73))},
        },
        75: {
            title:'E35',
            description: "C12/D17 base +0.1.",
            cost:new Decimal('1e91'),
            unlocked() { return (hasUpgrade(this.layer, 74))},
        },
        81: {
            title:'E36',
            description: "E31 ^1.5.",
            cost:new Decimal('1e97'),
            unlocked() { return (hasUpgrade(this.layer, 75))},
        },
        82: {
            title:'E37',
            description: "Em mults B.",
            effect()  { 
                let ef = 1
                return player.E.Em.add(1).pow(ef);          
            },
            cost:new Decimal('1e101'),
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 81))},
        },
        83: {
            title:'E38',
            description: "E8 base +0.15.",
            cost:new Decimal('1e107'),
            unlocked() { return (hasUpgrade(this.layer, 82))},
        },
        84: {
            title:'E39',
            description: "E7 ^1.5.",
            cost:new Decimal('1e117'),
            unlocked() { return (hasUpgrade(this.layer, 83))},
        },
        85: {
            title:'E40',
            cost:new Decimal('1e121'),            
            description: "Eb5-7 amt boost pts.<br>(1.7^x).",
            unlocked() { return (hasUpgrade(this.layer, 84))},
            effect()  { 
                let b=1.7
                let a=getBuyableAmount('E', 31).add(getBuyableAmount('E', 32)).add(getBuyableAmount('E', 33))
                let ef = Decimal.pow(b,a)
                return ef;          
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        91: {
            title:'E41',
            description: "E8 base +0.15.",
            cost:new Decimal('1e123'),
            unlocked() { return (hasUpgrade(this.layer, 85))},
        },
        92: {
            title:'E42',
            cost:new Decimal('5e130'),            
            description: "Eb5-7 amt boost B.<br>(1.3^x).",
            unlocked() { return (hasUpgrade(this.layer, 91))},
            effect()  { 
                let b=1.3
                let a=getBuyableAmount('E', 31).add(getBuyableAmount('E', 32)).add(getBuyableAmount('E', 33))
                if (hasUpgrade('E',93)) b=b+0.1
                let ef = Decimal.pow(b,a)
                return ef;          
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        93: {
            title:'E43',
            description: "Eb7 is cheaper,<br>E42 base +0.1.",
            cost:new Decimal('3e136'),
            unlocked() { return (hasUpgrade(this.layer, 92))},
        },
        94: {
            title:'E44',
            description: "Eb4 is cheaper,<br>E8 base +0.1.",
            cost:new Decimal('1e145'),
            unlocked() { return (hasUpgrade(this.layer, 93))},
        },
        95: {
            title:'E45',
            cost:new Decimal('1e157'),            
            description: "Eb5-7 amt boost C.(1.15^x)<br> Eb5 cost base -1.",
            unlocked() { return (hasUpgrade(this.layer, 94))},
            effect()  { 
                let b=1.15
                let a=getBuyableAmount('E', 31).add(getBuyableAmount('E', 32)).add(getBuyableAmount('E', 33))
                let ef = Decimal.pow(b,a)
                return ef;          
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        101: {
            title:'E46',
            description: "Ek eff mult +2.",
            cost:new Decimal('3e186'),
            unlocked() { return (challengeCompletions('E',31)>=3)},
        },
        102: {
            title:'E47',
            description: "Ek mults E.",
            effect()  { 
                let ef = player.E.Ek.add(10).log(10).pow(2)
                if (hasMilestone('E',19)) ef=Decimal.pow(ef,1.6)
                return ef;          
            },
            cost:new Decimal('1e197'),
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 101))},
        },
        103: {
            title:'E48',
            description: "Em eff exp +0.03,nerf Bb scaling and Eb1-3 cost.",
            cost:new Decimal('2e222'),
            unlocked() { return (hasUpgrade(this.layer, 102))},
        },
        104: {
            title:'E49',
            description: "Ek^1.5 mult pts,Eb6/9 base +0.25,Eb7 base +1,Eb1-4 scaling are 10 later.",
            effect()  { 
                let ef = player.E.Ek.max(1).pow(1.5)
                return ef;          
            },
            cost:new Decimal('1e328'),
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 103))},
        },
        105: {
            title:'E50',
            description: "Em^1.01,Eb7 base +1,B26 ^1.05.",
            cost:new Decimal('1e483'),
            unlocked() { return (hasUpgrade(this.layer, 104))},
        },
    },
    automate(){
        if (player.E.auto) {if (hasMilestone("E",4))  buyBuyable("E",11),buyBuyable("E",12),buyBuyable("E",13)
            if (hasMilestone("E",6))  buyBuyable("E",21)
            if (hasMilestone("E",13))  buyBuyable("E",31),buyBuyable("E",32),buyBuyable("E",33)
            if (hasMilestone("E",17))  buyBuyable("E",41),buyBuyable("E",42)
            if (hasMilestone("E",19))  buyBuyable("E",22)
        }
    },
    buyables:{
        11: {
            title: "Eb1", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(2, x.pow(1.02)).times('1500')
                let sc=40
                if (hasUpgrade('E',104)) sc=Decimal.add(sc,10)
                if (x.gte(sc))  cost =Decimal.pow(cost,x.sub(sc).div(80).add(1).pow(0.3))
                if (hasUpgrade('E',54)) cost = Decimal.pow(cost, 0.985)
                if (hasUpgrade('E',103)) cost = Decimal.pow(cost, 0.99)
                if (hasChallenge('E',41)) cost = Decimal.pow(cost, challengeEffect('E',41))
                return cost},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let bas = 5
                if (hasUpgrade('E',21)) bas = Decimal.add(bas,1)
                if (hasUpgrade('E',42)) bas = Decimal.add(bas,1)
                if (hasUpgrade('E',55)) bas = Decimal.add(bas,upgradeEffect('E',55))
                if (hasMilestone('E',18)) bas = Decimal.add(bas,buyableEffect('E',22))
                if (inChallenge('E',21)) bas = 2
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x.pow(1.005))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give A a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect()) + " A" },
            unlocked() { return hasMilestone('E',0) }
        },
        12: {
            title: "Eb2", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(3, x.pow(1.02)).times('7500')                
                let sc=40
                if (hasUpgrade('E',104)) sc=Decimal.add(sc,10)
                if (hasUpgrade('E',104)) sc=Decimal.add(sc,10)
                if (x.gte(sc))  cost =Decimal.pow(cost,x.sub(sc).div(80).add(1).pow(0.3))                
                if (hasUpgrade('E',54)) cost = Decimal.pow(cost, 0.985)
                if (hasUpgrade('E',103)) cost = Decimal.pow(cost, 0.99)
                if (hasChallenge('E',41)) cost = Decimal.pow(cost, challengeEffect('E',41))
                return cost},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let bas = 5
                if (hasUpgrade('E',21)) bas = Decimal.add(bas,1)
                if (hasUpgrade('E',42)) bas = Decimal.add(bas,1)
                if (hasUpgrade('E',55)) bas = Decimal.add(bas,upgradeEffect('E',55))
                if (hasMilestone('E',18)) bas = Decimal.add(bas,buyableEffect('E',22))
                if (inChallenge('E',21)) bas = 2
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let efeb2 = Decimal.pow(this.base(),x.pow(1.005))
                return efeb2},
            display() { // Everything else displayed in the buyable button after the title
                return "give B a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect()) + " B" },
            unlocked() { return player[this.layer].total.gte('4000') }
        },
        13: {
            title: "Eb3", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(6, x.pow(1.04)).times('50000')
                let sc=40
                if (hasUpgrade('E',104)) sc=Decimal.add(sc,10)
                if (hasUpgrade('E',104)) sc=Decimal.add(sc,10)
                if (x.gte(sc))  cost =Decimal.pow(cost,x.sub(sc).div(80).add(1).pow(0.3))   
                if (hasUpgrade('E',54)) cost = Decimal.pow(cost, 0.985)
                if (hasUpgrade('E',103)) cost = Decimal.pow(cost, 0.99)
                if (hasChallenge('E',41)) cost = Decimal.pow(cost, challengeEffect('E',41))
                return cost},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let bas = 5               
                if (hasMilestone('E',5)) bas = Decimal.add(bas,1)
                if (hasMilestone('E',18)) bas = Decimal.add(bas,buyableEffect('E',22))
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x.pow(1.005))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give C/D a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect()) + " C/D" },
            unlocked() { return hasMilestone('E',1) }
        },
        21: {
            title: "Eb4", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(25, x.pow(1.1)).times('4e31')
                if (hasUpgrade('E',94)) cost =Decimal.pow(25, x.pow(1.09)).times('1e29')
                let sc=40
                if (hasUpgrade('E',104)) sc=Decimal.add(sc,10)
                if (x.gte(sc))  cost =Decimal.pow(cost,x.sub(sc).div(80).add(1).pow(0.3))                
                if (hasUpgrade('C',34)) cost =Decimal.pow(cost,0.98)
                if (hasChallenge('E',41)) cost = Decimal.pow(cost, challengeEffect('E',41))
                return cost},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(x/1.6+1,0.6).div(5).add(0.8)
                if (inChallenge('E',31)) ef = 1
                if (inChallenge('E',41)) ef = Decimal.mul(ef-1,0.4).add(1)
                if (inChallenge('E',42)) ef = 1
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "boost to E's pts mult(exp) \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: ^" + format(this.effect())},
            unlocked() { return hasMilestone('E',5) }
        },
        31: {
            title: "Eb5", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(10, x).times('1e71')
                if (hasUpgrade('E',95)) cost =Decimal.pow(9, x).times('1e71')
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = 2               
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give Em a x"+ format(this.base()) + " mult \n\
                Eb5's factor/cost multiplier are fixed. \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return hasMilestone('E',11) }
        },
        32: {
            title: "Eb6", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(5, x.pow(1.03)).times('1e72')
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = 2      
                if (hasChallenge("E", 32))  base = Decimal.add(base,challengeEffect('E',32)) 
                if (hasUpgrade("E", 104))  base = Decimal.add(base,0.25)                 
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x.pow(1.008))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give Em a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return hasMilestone('E',11) }
        },
        33: {
            title: "Eb7", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(1000, x.pow(1.08)).times('1e74')
                if (hasUpgrade('E',93)) cost = Decimal.pow(1000, x.pow(1.07)).times('1e71')
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = 10             
                if (hasChallenge("E", 32))  base = Decimal.add(base,challengeEffect('E',32))  
                if (hasUpgrade("E", 104))  base = Decimal.add(base,1)
                if (hasUpgrade("E", 105))  base = Decimal.add(base,1)                                                
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x.pow(1.012))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give Em a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return player[this.layer].total.gte('1e73') }
        },
        41: {
            title: "Eb8", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(10, x).times('1e170')
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = 2               
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give Ek a x"+ format(this.base()) + " mult \n\
                Eb8's factor/cost multiplier are fixed. \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return hasMilestone('E',11) }
        },
        42: {
            title: "Eb9", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(6, x.pow(1.03)).times('1e180')
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = 2      
                if (hasUpgrade("E", 104))  base = Decimal.add(base,0.25)                 
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(this.base(),x.pow(1.008))
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "give Ek a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect())},
            unlocked() { return hasMilestone('E',15) }
        },
        22: {
            title: "Eb10", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(1e6, x.pow(1.4)).times('1e570')
                let sc=40
                let scpow=0.3
                let t=80
                if (x.gte(sc)) cost =Decimal.pow(cost,x.sub(sc).div(t).add(1).pow(scpow))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if (hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(0)
                else player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(x/6+1,0.7).sub(1)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "boost Eb1-3 base \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return hasMilestone('E',18) }
        },
    },
    challenges: {
        11: {//11 after E10,12 E13,13 E15
        name: "Ec1",
        completionLimit: 3,
        challengeDescription: function() {
            return "C3/D5/E2 do nothing. <br> Completion: " +challengeCompletions("E", 11) + "/3"},
        unlocked() { return (hasMilestone("E", 2))},
        goal(){
            if (challengeCompletions('E',11) == 0) return Decimal.pow(10,6020);
            if (challengeCompletions('E',11) == 1) return Decimal.pow(10,6480);
            if (challengeCompletions('E',11) == 2) return Decimal.pow(10,7100);
        },            
        goalDescription:  function() {return format(this.goal())+' points'},
        canComplete(){return player.points.gte(this.goal())},
        rewardDescription: "boost to E base on Eb1-2.",
        rewardEffect() {
            let bas = Decimal.pow(challengeCompletions("E", 11),1.3)
            let ef1 = Decimal.pow(buyableEffect('E',11),0.04+bas/100)
            let ef2 = Decimal.pow(buyableEffect('E',12),0.04+bas/75)
            let ef = Decimal.mul(ef1,ef2)
            //if (challengeCompletions("E", 11) >= 3)  ef=Decimal.mul(ef,100)
            if (challengeCompletions("E", 11) >= 1)  return ef
            else return new Decimal(1)
        },
        rewardDisplay() {return format(this.rewardEffect())+"x"},
        },
        12: {//21 after E15,22 E17,23 E19
            name: "Ec2",
            completionLimit: 3,
            challengeDescription: function() {
                return "Bb1-2's base are stuck at 2. <br> Completion: " +challengeCompletions("E", 12) + "/3"},
            unlocked() { return (hasMilestone("E", 3))},
            goal(){
                if (challengeCompletions('E',12) == 0) return Decimal.pow(10,8330);
                if (challengeCompletions('E',12) == 1) return Decimal.pow(10,8850);
                if (challengeCompletions('E',12) == 2) return Decimal.pow(10,9860);
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "boost to E base on Eb3.",
            rewardEffect() {
                let bas = Decimal.pow(challengeCompletions("E", 12),1.35)
                let ef = Decimal.pow(buyableEffect('E',13),0.05+bas/100)
                //if (challengeCompletions("E", 12) >= 3)  ef=Decimal.mul(ef,100)
                if (challengeCompletions("E", 12) >= 1)  return ef
                else return new Decimal(1)
            },
            rewardDisplay() {return format(this.rewardEffect())+"x"},
        },
        21: {//31 after 1e45
            name: "Ec3",
            completionLimit: 3,
            challengeDescription: function() {
                return "Eb1-2's base are stuck at 2. <br> Completion: " +challengeCompletions("E", 21) + "/3"},
            unlocked() { return (hasMilestone("E", 7))},
            goal(){
                if (challengeCompletions('E',21) == 0) return Decimal.pow(10,15380);
                if (challengeCompletions('E',21) == 1) return Decimal.pow(10,16115);
                if (challengeCompletions('E',21) == 2) return Decimal.pow(10,16530);
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "boost to pts base on A-B pts upg.",
            rewardEffect() {
                let b = Decimal.pow(challengeCompletions("E", 21),1.35)
                let ef1 = Decimal.pow(upgradeEffect('A',11),0.06+b/60)
                let ef2 = Decimal.pow(upgradeEffect('B',11),0.06+b/60)
                let ef=Decimal.mul(ef1,ef2)
                if (challengeCompletions("E", 21) >= 1)  return ef
                else return new Decimal(1)
            },
            rewardDisplay() {return format(this.rewardEffect())+"x"},
        },
        22: {//41 after 1e47
            name: "Ec4",
            completionLimit: 3,
            challengeDescription: function() {
                return "nerf pts based on pts. <br> Completion: " +challengeCompletions("E", 22) + "/3 <br> currently: ^"+format(this.nerf(),6)},
            unlocked() { return (hasMilestone("E", 7))},
            goal(){
                if (challengeCompletions('E',22) == 0) return Decimal.pow(10,12550);
                if (challengeCompletions('E',22) == 1) return Decimal.pow(10,12900);
                if (challengeCompletions('E',22) == 2) return Decimal.pow(10,13200);
            },
            nerf() { return player.points.add(10).log(10).pow(-0.06)},            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "boost to pts base on C-D pts upg.",
            rewardEffect() {
                let b = Decimal.pow(challengeCompletions("E", 22),1.35)
                let ef1 = Decimal.pow(upgradeEffect('C',11),0.08+b/40)
                let ef2 = Decimal.pow(upgradeEffect('D',11),0.08+b/40)
                let ef3 = Decimal.pow(upgradeEffect('E',11),0.08+b/40)
                let ef=Decimal.mul(ef1,ef2,ef3)
                if (challengeCompletions("E", 22) >= 1)  return ef
                else return new Decimal(1)
            },
            rewardDisplay() {return format(this.rewardEffect())+"x"},
        },
        31: {//51
            name: "Ec5",
            completionLimit: 5,
            challengeDescription: function() {
                return "Bb1-2's base are stuck at 1.2,Bb3-4,Eb4 is disabled. <br> Completion: " +challengeCompletions("E", 31) + "/5"},
            unlocked() { return (hasMilestone("E", 14))},
            goal(){
                if (challengeCompletions('E',31) == 0) return Decimal.pow(10,22500);
                if (challengeCompletions('E',31) == 1) return Decimal.pow(10,24000);
                if (challengeCompletions('E',31) == 2) return Decimal.pow(10,27300);
                if (challengeCompletions('E',31) == 3) return Decimal.pow(10,48800);
                if (challengeCompletions('E',31) == 4) return Decimal.pow(10,50600);
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "Bb1-5 are cheaper(-0.0025 exp per comp).",
            rewardEffect() {
                //let t=Decimal.mul(challengeCompletions("E", 31),0.0025)
                let t=(challengeCompletions("E", 31))/400
                //t=t.toNumber().toFixed(3)
                let ef=new Decimal(1).sub(t)
                if (challengeCompletions("E", 31) >= 1)  return ef
                else return new Decimal(1)
            },
            rewardDisplay() {return "^"+format(this.rewardEffect(),4)+', after scaling. \n\
                unlock new upg at 3 comp'},
        },
        32: {//61
            name: "Ec6",
            completionLimit: 5,
            challengeDescription: function() {
                return "nerf pts based on Em. <br> Completion: " +challengeCompletions("E", 32) + "/5 <br> currently: ^"+format(this.nerf(),6)},
            unlocked() { return (hasMilestone("E", 14))},
            goal(){
                if (challengeCompletions('E',32) == 0) return Decimal.pow(10,13200);
                if (challengeCompletions('E',32) == 1) return Decimal.pow(10,13700);
                if (challengeCompletions('E',32) == 2) return Decimal.pow(10,14850);
                if (challengeCompletions('E',32) == 3) return Decimal.pow(10,20000);
                if (challengeCompletions('E',32) == 4) return Decimal.pow(10,25930);
            },      
            nerf() { return player.E.Em.add(10).log(10).pow(-0.2)},       
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "Ec6 comp add to Eb6-7 base.",
            rewardEffect() {
                //let t=Decimal.mul(challengeCompletions("E", 31),0.0025)
                let ef=(challengeCompletions("E", 32))*0.2
                if (challengeCompletions("E", 32) >= 1)  return ef
                else return new Decimal(0)
            },
            rewardDisplay() {return '+'+format(this.rewardEffect())},
        },
        41: {//71
            name: "Ec7",
            completionLimit: 5,
            challengeDescription: function() {
                return "Bb scaling starts 300 earlier, Bb5/Eb4 x0.4. <br> Completion: " +challengeCompletions("E", 41) + "/5"},
            unlocked() { return (hasMilestone("E", 16))},
            goal(){
                if (challengeCompletions('E',41) == 0) return Decimal.pow(10,36300);
                if (challengeCompletions('E',41) == 1) return Decimal.pow(10,60400);
                if (challengeCompletions('E',41) == 2) return Decimal.pow(10,66600);
                if (challengeCompletions('E',41) == 3) return Decimal.pow(10,84800);
                if (challengeCompletions('E',41) == 4) return Decimal.pow(10,106100);
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "Eb1-4 are cheaper(-0.006 exp per comp).",
            rewardEffect() {
                //let t=Decimal.mul(challengeCompletions("E", 31),0.0025)
                let t=(challengeCompletions("E", 41))*0.006
                //t=t.toNumber().toFixed(3)
                let ef=new Decimal(1).sub(t)
                if (challengeCompletions("E", 41) >= 1)  return ef
                else return new Decimal(1)
            },
            rewardDisplay() {return "^"+format(this.rewardEffect(),3)+', after scaling.'},
        },
        42: {//7,8 aft 53,63.then 71 81 64 54 72 55 82 73 65 83 74 84 75 85
            name: "Ec8",
            completionLimit: 5,
            challengeDescription: function() {
                return "nerf pts based on pts(stronger),Bb3-5/Eb4/Em/Ek are disabled. <br> Completion: " +challengeCompletions("E", 42) + "/5 <br> currently: ^"+format(this.nerf(),6)},
            unlocked() { return (hasMilestone("E", 16))},
            goal(){
                if (challengeCompletions('E',42) == 0) return Decimal.pow(10,29800);
                if (challengeCompletions('E',42) == 1) return Decimal.pow(10,50500);
                if (challengeCompletions('E',42) == 2) return Decimal.pow(10,60100);
                if (challengeCompletions('E',42) == 3) return Decimal.pow(10,69870);
                if (challengeCompletions('E',42) == 4) return Decimal.pow(10,88000);
            },
            nerf() { return player.points.add(10).log(10).pow(-0.12)},            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "boost to Em/Ek eff.",
            rewardEffect() {
                let ef=challengeCompletions("E", 42)
                if (hasUpgrade('E',104)) ef=Decimal.mul(ef,1.2)
                if (challengeCompletions("E", 42) >= 1)  return ef
                else return new Decimal(0)
            },
            rewardDisplay() {return 'Em:+'+format(this.rewardEffect()/100)+' exp,\n\
                Ek:+'+format(this.rewardEffect()/2)+' mul'},
        },
    },
    Emeffect() {
        ef = new Decimal(1)
        if (hasMilestone("E", 11)) ef=Decimal.mul(ef,(buyableEffect("E", 31)))
            ef=Decimal.mul(ef,(buyableEffect("E", 32)))
            ef=Decimal.mul(ef,(buyableEffect("E", 33)))
        if (hasUpgrade('E',105)) ef=Decimal.pow(ef,1.01)
        return ef;
    },
    emf() {
        let exp=0.25
        if (hasMilestone('E',12))  exp=Decimal.add(exp,0.02)
        if (hasUpgrade('E',103))  exp=Decimal.add(exp,0.03)  
        if (hasChallenge('E', 42))  exp = Decimal.add(exp,challengeEffect('E',42)/100)   
        if (inChallenge('E',42)) exp=0           
        let ef=player.E.Em.max(1).pow(exp)
        return ef
    },
    Ekeffect() {
        ef = new Decimal(1)
        if (hasMilestone("E", 15)) ef=Decimal.mul(ef,(buyableEffect("E", 41)))
            ef=Decimal.mul(ef,(buyableEffect("E", 42)))
        return ef;
    },
    ekf() {
        let m=3
        if (hasUpgrade('E',101))  m=Decimal.add(m,2)  
        if (hasChallenge('E', 42))  m=Decimal.add(m,challengeEffect('E',42)*0.5)    
        if (inChallenge('E',42)) m=0              
        let ef=player.E.Ek.add(1).log(10).pow(0.85).mul(m)
        return ef
    },
    update(diff) {
        if (hasMilestone("E", 11))  player.E.Em = player.E.Em.add(tmp.E.Emeffect.mul(diff))
        if (hasMilestone("E", 15))  player.E.Ek = player.E.Ek.add(tmp.E.Ekeffect.mul(diff))
    },
})