addLayer("E", {
    name: "E", 
    symbol: "E", 
    position: 2, 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    passiveGeneration(){    let pg=1
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
        mult = new Decimal(1)
        mult = mult.mul(hasUpgrade("E",13)?upgradeEffect("E",13):1)
        mult = mult.mul(hasUpgrade("E",14)?upgradeEffect("E",14):1)
        mult = mult.mul(hasUpgrade("E",15)?4:1)
        mult = mult.mul(hasUpgrade("E",21)?2:1)
        mult = mult.mul(hasUpgrade("E",23)?upgradeEffect("E",23):1)
        mult = mult.mul(hasUpgrade("E",32)?upgradeEffect("E",32):1)
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
        3: {requirementDescription: "3e16 total E",
            done() {return player[this.layer].total.gte('3e16')}, 
            effectDescription: "E12 ^1.5,unlock another chal.",
        },
        4: {requirementDescription: "1e27 total E",
            done() {return player[this.layer].total.gte('1e27')}, 
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
    },
    microtabs: {
        stuff: {       
            "Upgrades": {
                unlocked() {return true},
                content: [ "upgrades"]}, 
            "Buyables": {
                unlocked() {return (hasMilestone("E", 0))},
                content: ["buyables"]},
            "Milestones": {
                unlocked() {return (hasUpgrade("E", 14))},
                content: ["milestones"]},
            "Challenges": {
                unlocked() {return (hasMilestone("E",2))},
                content: ["challenges"]}
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
            cost:new Decimal('8000'),
            unlocked() { return (hasUpgrade(this.layer, 15))},
        },
        22: {
            title:'E7',
            description: "E upg boost pts.<br>(e^3x).",
            cost:new Decimal('2.5e4'),
            effect()  { 
                let a=player.E.upgrades.length
                let ef = Decimal.pow(20.09,a)
                if (hasUpgrade('E',25)) ef = Decimal.pow(54.6,a)
                if (hasUpgrade('E',25)) ef = Decimal.pow(ef,1.5)
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
                let a=player.E.upgrades.length
                let efe8 = Decimal.pow(1.2,a)
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
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 31))},
        },
        33: {
            title:'E13',
            description: "x3e5 pts,<br>E7 becomes e^6x.",
            cost:new Decimal('4e10'),
            unlocked() { return (hasUpgrade(this.layer, 32))},
        },
        34: {
            title:'E14',
            description: "Bb5 is stronger.<br> (+2%)",
            cost:new Decimal('3e11'),
            unlocked() { return (hasUpgrade(this.layer, 33))},
        },
        35: {
            title:'E15',
            description: "boost to E base on A.",
            cost:new Decimal('3e13'),
            effect()  { 
                let ef = player.A.points.add(10).log(10).div(500)
                if (hasUpgrade('E',41)) ef = Decimal.pow(ef,1.5)
                if (hasUpgrade('E',63)) ef = Decimal.pow(ef,1.2)
                return ef;          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 34))},
        },
        41: {
            title:'E16',
            description: "E15 ^1.5.",
            cost:new Decimal('1e19'),
            unlocked() { return  (challengeCompletions("E", 11) >= 1)},
        },
        42: {
            title:'E17',
            description: "Eb1-2 base +1.",
            cost:new Decimal('6e19'),
            unlocked() { return (hasUpgrade(this.layer, 41))},
        },
        43: {
            title:'E18',
            description: "Bb1-2 are cheaper.<br>(^0.992,after scaling)",
            cost:new Decimal('5e22'),
            unlocked() { return (hasUpgrade(this.layer, 42))},
        },
        44: {
            title:'E19',
            description: "E2 ^1.5",
            cost:new Decimal('1e25'),
            unlocked() { return (hasUpgrade(this.layer, 43))},
        },
        45: {
            title:'E20',
            description: "Bb5 is stronger.<br> (+2%)",
            cost:new Decimal('1e27'),
            unlocked() { return (hasUpgrade(this.layer, 44))},
        },
        51: {
            title:'E21',
            description: "x1e6 pts.",
            cost:new Decimal('5e28'),
            unlocked() { return (hasUpgrade(this.layer, 45))},
        },
        52: {
            title:'E22',
            description: "Ac7 is stronger based on E.",
            cost:new Decimal('2e30'),
            effect()  { 
                let ef = Decimal.add(player.E.points,10).log(10).pow(0.75).div(150).add(1)
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
            cost:new Decimal('2e36'),
            unlocked() { return (hasUpgrade(this.layer, 53))},
        },
        55: {
            title:'E25',
            description: "x1e7 pts,add Eb1-2 base.",
            cost:new Decimal('5e37'),
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
            cost:new Decimal('1e50'),
            unlocked() { return (hasMilestone(this.layer, 8))},
        },
        62: {
            title:'E27',
            description: "Bb5 is cheaper.",
            cost:new Decimal('2e50'),
            unlocked() { return (hasUpgrade(this.layer, 61))},
        },
        63: {
            title:'E28',
            description: "E3/4/12/15 ^1.2.",
            cost:new Decimal('2e51'),
            unlocked() { return (hasUpgrade(this.layer, 62))},
        },
    },
    automate(){
        if (player.E.auto) {if (hasMilestone("E",4))  buyBuyable("E",11),buyBuyable("E",12),buyBuyable("E",13)
            if (hasMilestone("E",6))  buyBuyable("E",21)
        }
    },
    buyables:{
        11: {
            title: "Eb1", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(2, x.pow(1.02)).times('1500')
                if (x>=40)  cost =Decimal.pow(cost,x.sub(40).div(80).add(1).pow(0.3))
                if (hasUpgrade('E',54)) cost = Decimal.pow(cost, 0.985)
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = 5
                if (hasUpgrade('E',21)) base = base+1
                if (hasUpgrade('E',42)) base = base+1
                if (hasUpgrade('E',55)) base = Decimal.add(base,upgradeEffect('E',55))
                if (inChallenge('E',21)) base = 2
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let efeb1 = Decimal.pow(this.base(),x.pow(1.005))
                return efeb1},
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
                if (x>=40)  cost =Decimal.pow(cost,x.sub(40).div(80).add(1).pow(0.3))
                if (hasUpgrade('E',54)) cost = Decimal.pow(cost, 0.985)
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = 5
                if (hasUpgrade('E',21)) base = base+1
                if (hasUpgrade('E',42)) base = base+1
                if (hasUpgrade('E',55)) base = Decimal.add(base,upgradeEffect('E',55))
                if (inChallenge('E',21)) base = 2
                return base},
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
                if (x>=40)  cost =Decimal.pow(cost,x.sub(40).div(80).add(1).pow(0.3))
                if (hasUpgrade('E',54)) cost = Decimal.pow(cost, 0.985)
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base = 5               
                if (hasMilestone('E',5)) base = base+1
                return base},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let efeb3 = Decimal.pow(this.base(),x.pow(1.005))
                return efeb3},
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
                if (x>=40)  cost =Decimal.pow(cost,x.sub(40).div(80).add(1).pow(0.3))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() { setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(x/1.6+1,0.6).div(5).add(0.8)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "boost to E's pts mult(exp) \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: ^" + format(this.effect())},
            unlocked() { return hasMilestone('E',5) }
        },
    },
    challenges: {
        11: {//11 after E10,12 E12,13 E15
        name: "Ec1",
        completionLimit: 3,
        challengeDescription: function() {
            return "C3/D5/E2 do nothing. <br> Completion: " +challengeCompletions("E", 11) + "/3"},
        unlocked() { return (hasMilestone("E", 2))},
        goal(){
            if (challengeCompletions('E',11) == 0) return Decimal.pow(10,6020);
            if (challengeCompletions('E',11) == 1) return Decimal.pow(10,6380);
            if (challengeCompletions('E',11) == 2) return Decimal.pow(10,7240);
        },            
        goalDescription:  function() {return format(this.goal())+' points'},
        canComplete(){return player.points.gte(this.goal())},
        rewardDescription: "boost to E base on Eb1-2.",
        rewardEffect() {
            let bas = Decimal.pow(challengeCompletions("E", 11),1.3)
            let ef1 = Decimal.pow(buyableEffect('E',11),0.04+bas/100)
            let ef2 = Decimal.pow(buyableEffect('E',12),0.04+bas/75)
            if (challengeCompletions("E", 11) >= 1)  return Decimal.mul(ef1,ef2)
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
                if (challengeCompletions('E',12) == 0) return Decimal.pow(10,8400);
                if (challengeCompletions('E',12) == 1) return Decimal.pow(10,8875);
                if (challengeCompletions('E',12) == 2) return Decimal.pow(10,9750);
            },            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "boost to E base on Eb3.",
            rewardEffect() {
                let bas = Decimal.pow(challengeCompletions("E", 12),1.35)
                let ef = Decimal.pow(buyableEffect('E',13),0.05+bas/100)
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
                if (challengeCompletions('E',21) == 0) return Decimal.pow(10,15430);
                if (challengeCompletions('E',21) == 1) return Decimal.pow(10,16120);
                if (challengeCompletions('E',21) == 2) return Decimal.pow(10,16560);
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
                return "nerf pts based on pts. <br> Completion: " +challengeCompletions("E", 22) + "/3 <br> currently: ^"+this.nerf()},
            unlocked() { return (hasMilestone("E", 7))},
            goal(){
                if (challengeCompletions('E',22) == 0) return Decimal.pow(10,12550);
                if (challengeCompletions('E',22) == 1) return Decimal.pow(10,12900);
                if (challengeCompletions('E',22) == 2) return Decimal.pow(10,13200);
            },
            nerf() { return player.points.add(10).log(10).pow(-0.06)},            
            goalDescription:  function() {return format(this.goal())+' points'},
            canComplete(){return player.points.gte(this.goal())},
            rewardDescription: "boost to pts base on A-B pts upg.",
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
    },
})