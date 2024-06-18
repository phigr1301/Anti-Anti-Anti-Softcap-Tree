addLayer("E", {
    name: "E", 
    symbol: "E", 
    position: 2, 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    //passiveGeneration(){    let d_pg=100
    //    return (hasMilestone("B", 5))?d_pg:0},
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

        return mult
    },
    branches: ['A','B','D'],
    milestones: {
        0: {requirementDescription: "1500 total E",
            done() {return player[this.layer].total.gte('1500')}, 
            effectDescription: "unlock E buyable.",
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
                unlocked() {return true},
                content: ["milestones"]    },
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
            description: "1e5x points.",
            effect()  { 
                let efe1 = 1e5
                if (hasUpgrade('E',15)) efe1 = efe1*1e5
                return efe1;          
            },
            cost:new Decimal(1),
        },
        12: {
            title:'E2',
            description: "E boost points.",
            effect()  { 
                let efe2 = 1
                if (hasUpgrade('E',15)) efe2 = efe2+0.5
                return player[this.layer].points.pow(efe2);          
            },
            cost:new Decimal(10),
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 11))},
        },
        13: {
            title:'E3',
            description: "boost to E base on D.",
            effect()  { 
                let efe3 = player.D.points.add(10).log(10).div(100)
                return efe3;
            },
            cost:new Decimal(30),
            unlocked() { return (hasUpgrade(this.layer, 12))},
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        14: {
            title:'E4',
            description: "boost to E base on C.",
            effect()  { 
                let efe4 = player.C.points.add(10).log(10).div(200)
                return efe4;          
            },
            cost:new Decimal(120),
            effectDisplay() { return format(this.effect())+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 13))},
        },
        15: {
            title:'E5',
            description: "E2 ^1.5,1e5x points.",
            cost:new Decimal('750'),
            unlocked() { return (hasUpgrade(this.layer, 14))},
        },
    },
    buyables:{
        11: {
            title: "Eb1", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let coste1 = Decimal.pow(2, x.pow(1.02)).times('1500')
                return coste1
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base1 = 5
                return base1},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let efeb1 = Decimal.pow(this.base(),x.pow(1.004))
                return efeb1},
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "give A a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect()) + " A" },
            unlocked() { return hasMilestone('E',0) }
        },
        12: {
            title: "Eb2", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let coste2 = Decimal.pow(3, x.pow(1.02)).times('7500')
                return coste2
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let base2 = 5
                return base2},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let efeb2 = Decimal.pow(this.base(),x.pow(1.004))
                return efeb2},
            display() { // Everything else displayed in the buyable button after the title
                let data = tmp[this.layer].buyables[this.id]
                return "give A a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " E \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect()) + " A" },
            unlocked() { return player[this.layer].total.gte('4000') }
        },
    }
})