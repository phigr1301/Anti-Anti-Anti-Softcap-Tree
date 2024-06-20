addLayer("B", {
    name: "B", 
    symbol: "B", 
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    passiveGeneration(){    let b_pg=1
        if (hasMilestone("C", 3))  b_pg=b_pg*100
        if (hasMilestone("D", 1))  b_pg=b_pg*100
        if (hasMilestone("D", 2))  b_pg=b_pg*100
        return (hasMilestone("C", 2))?b_pg:0},
    color: "#7AAA2C",
    requires: new Decimal(3e4), 
    resource: "B", 
    baseResource: "A", 
    baseAmount() {return player.A.points}, 
    type: "normal", 
    exponent: 0.2, 
    gainExp() {
        return new Decimal(1)
    },
    row: 0, 
    hotkeys: [
        {key: "b", description: "B: Reset for B points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){  if (player.B.unlocked) return true
        else return (hasUpgrade("A", 35))},
    gainMult() { 
        mult = new Decimal(1)
        mult = mult.mul(hasUpgrade(this.layer,14)?2:1)
        mult = mult.mul(hasUpgrade(this.layer,15)?1.5:1)
        mult = mult.mul(hasUpgrade(this.layer,22)?2:1)
        mult = mult.mul(hasUpgrade(this.layer,24)?2:1)
        mult = mult.mul(hasUpgrade(this.layer,25)?2:1)
        mult = mult.mul(hasUpgrade('C',25)?50:1)
        mult = mult.pow(hasChallenge("A", 11)?1.1:1)
        mult = mult.mul(hasChallenge("A", 12)?10:1)
        mult = mult.mul(hasChallenge("A", 22)?10:1)
        mult = mult.mul(buyableEffect("B",12))
        mult = mult.mul(hasUpgrade("B", 41)?15:1)
        mult = mult.mul(hasUpgrade("B", 51)?20:1)
        mult = mult.mul(hasUpgrade("B", 53)?30:1)
        mult = mult.mul(hasUpgrade("B", 61)?upgradeEffect('B',61):1)
        mult = mult.mul(hasMilestone("B", 6)?100:1)
        mult = mult.mul(hasMilestone("B", 7)?1e5:1)
        mult = mult.mul(buyableEffect("E",12))

        return mult
    },
    microtabs: {
        stuff: {       
            "Upgrades": {
                unlocked() {return true},
                content: [ "upgrades"]}, 
            "Buyables": {
                unlocked() {return (hasMilestone("D", 2))},
                content: ["buyables"]},  
            "Milestones": {
                unlocked() {return (hasUpgrade("B", 53))},
                content: ["milestones"]  },
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "25px"],
    ],
    branches: ["A"],
    doReset(layer){
        if (layer=="D"){
            if (hasMilestone("D", 0)) keep.push("upgrades")
        }
    },
    milestones: {
        0: {requirementDescription: "1e65 total B",
            done() {return player[this.layer].total.gte('1e65')}, 
            effectDescription: "buyables cost nothing.",
        },
        1: {requirementDescription: "1e74 total B",
            done() {return player[this.layer].total.gte('1e74')}, 
            effectDescription: "B26 effect divide Bb cost.",
        },
        2: {requirementDescription: "1e111 total B",
            done() {return player[this.layer].total.gte('1e111')}, 
            effectDescription: "autobuy B buyables.",
            toggles: [ ["B","auto"] ]
        },
        3: {requirementDescription: "1e140 total B",
            done() {return player[this.layer].total.gte('1e140')}, 
            effectDescription: "unlock 5th buyable.",
        },
        4: {requirementDescription: "1e200 total B",
            done() {return player[this.layer].total.gte('1e200')}, 
            effectDescription: "unlock a chal.",
        },
        5: {requirementDescription: "1.79e308 total B",
            done() {return player[this.layer].total.gte('1.79e308')}, 
            effectDescription: "100x C/D passive.",
        },
        6: {requirementDescription: "1e658 total B",
            done() {return player[this.layer].total.gte('1e658')}, 
            effectDescription: "x100 B,unlock a upg.",
        },
        7: {requirementDescription: "1e1700 total B",
            done() {return player[this.layer].total.gte('1e1700')}, 
            effectDescription: "x1e5 B,unlock a layer.",
        },
        8: {requirementDescription: "1e2345 total B",
            done() {return player[this.layer].total.gte('1e2345')}, 
            effectDescription: "bulk buy x10 B buyables(currently does nothing).",
        },
    },
    upgrades: {
        11: {
            title:'B1',
            description: "5x points.",
            effect()  { 
                let efb1 = 5
                if (hasUpgrade('B',12)) efb1 = efb1*5
                if (hasUpgrade('B',13)) efb1 = efb1*5
                if (hasUpgrade('B',15)) efb1 = efb1*5
                if (hasUpgrade('B',24)) efb1 = efb1*10
                if (hasUpgrade('B',25)) efb1 = efb1*10
                if (hasUpgrade('B',31)) efb1 = efb1*20
                if (hasUpgrade('B',42)) efb1 = efb1*2e4
                if (hasUpgrade('B',64)) efb1 = efb1*5e4
                if (hasUpgrade('B',72)) efb1 = efb1*5e4
                if (hasUpgrade('B',81)) efb1 = efb1*1e5

                efb1=Decimal.pow(efb1,buyableEffect("B",21))

                return efb1;          
            },
            cost:new Decimal(1),
        },
        12: {
            title:'B2',
            description: "5x points.",
            cost:new Decimal(6),
            unlocked() { return (hasUpgrade(this.layer, 11))},
        },
        13: {
            title:'B3',
            description: "5x points.",
            cost:new Decimal(12),
            unlocked() { return (hasUpgrade(this.layer, 12))},
        },
        14: {
            title:'B4',
            description: "2x B.",
            cost:new Decimal(25),
            unlocked() { return (hasUpgrade(this.layer, 13))},
        },
        15: {
            title:'B5',
            description: "1.5x B,5x points.",
            cost:new Decimal(60),
            unlocked() { return (hasUpgrade(this.layer, 14))},
        },
        21: {
            title:'B6',
            description: "B^0.3 boost points.",
            cost: new Decimal(140),
            unlocked() { return (hasUpgrade(this.layer, 15))},
            effect()  { 
                let efb6 = 0.3
                if (hasUpgrade('B', 32))  efb6 = efb6*1.5
                if (hasUpgrade('C', 22))  efb6 = efb6*1.3

                return player[this.layer].points.pow(efb6);          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        22: {
            title:'B7',
            description: "2x B.",
            cost:new Decimal(200),
            unlocked() { return (hasUpgrade(this.layer, 21))},
        },
        23: {
            title:'B8',
            description: "get A passively.",
            cost:new Decimal(450),
            unlocked() { return (hasUpgrade(this.layer, 22))},
        },
        24: {
            title:'B9',
            description: "2x B,10x points.",
            cost:new Decimal(600),
            unlocked() { return (hasUpgrade(this.layer, 23))},
        },
        25: {
            title:'B10',
            description: "2x B,10x points.<br>unlock A chal.",
            cost:new Decimal(1.5e3),
            unlocked() { return (hasUpgrade(this.layer, 24))},
        },
        31: {
            title:'B11',
            description: "20x points.",
            cost:new Decimal(7e4),
            unlocked() { return (hasUpgrade(this.layer, 25))},
        },
        32: {
            title:'B12',
            description: "A5 exp+0.05.",
            cost:new Decimal(1e5),
            unlocked() { return (hasUpgrade(this.layer, 31))},
        },
        33: {
            title:'B13',
            description: "A9^1.5.",
            cost:new Decimal(3e5),
            unlocked() { return (hasUpgrade(this.layer, 32))},
        },
        34: {
            title:'B14',
            description: "A9^1.5.",
            cost:new Decimal(7e5),
            unlocked() { return (hasUpgrade(this.layer, 33))},
        },
        35: {
            title:'B15',
            description: "A5 exp+0.05.",
            cost:new Decimal(1.5e6),
            unlocked() { return (hasUpgrade(this.layer, 34))},
        },
        41: {
            title:'B16',
            description: "x15 B,unlock 2nd bab.",
            cost:new Decimal('3e39'),
            unlocked() { return player.B.total.gte('1e39')},
        },
        42: {
            title:'B17',
            description: "x2e4 points<br>,unlock 3rd bab.",
            cost:new Decimal('1e41'),
            unlocked() { return (hasUpgrade(this.layer, 41))},
        },
        43: {
            title:'B18',
            description: "Bb1-2 are cheaper.",
            cost:new Decimal('2e45'),
            unlocked() { return (hasUpgrade(this.layer, 42))},
        },
        44: {
            title:'B19',
            description: "mult to pts based on Bb1 eff.",
            cost:new Decimal('3e46'),
            effect()  { 
                let efb19 = buyableEffect('B',11).pow(0.2).times(buyableEffect('B',11).add(1).log(10).pow(2))
                if (hasUpgrade('B',55)) efb19=Decimal.pow(efb19,1.25)
                return efb19;          
            },
            unlocked() { return (hasUpgrade(this.layer, 43))},
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        45: {
            title:'B20',
            description: "2e4x pts,unlock 4th bab.",
            cost:new Decimal('4e48'),
            unlocked() { return (hasUpgrade(this.layer, 44))},
        },
        51: {
            title:'B21',
            description: "x20 B.<br>Bb3 is stronger.",
            cost:new Decimal('3e50'),
            unlocked() { return (hasUpgrade(this.layer, 45))},
        },
        52: {
            title:'B22',
            description: "mult to pts based on Bb2 eff.",
            cost:new Decimal('5e55'),
            effect()  { 
                let efb22 = buyableEffect('B',12).pow(0.25).times(buyableEffect('B',11).add(1).log(10).pow(2))
                if (hasUpgrade('B',55)) efb22=Decimal.pow(efb22,1.25)
                return efb22;          
            },
            unlocked() { return (hasUpgrade(this.layer, 51))},
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        53: {
            title:'B23',
            description: "30x B,Bb1 100x cheaper.",
            cost:new Decimal('2e58'),
            unlocked() { return (hasUpgrade(this.layer, 52))},
        },
        54: {
            title:'B24',
            description: "Bb1 base +0.05.",
            cost:new Decimal('5e65'),
            unlocked() { return (hasUpgrade(this.layer, 53))},
        },
        55: {
            title:'B25',
            description: "B19/B22 ^1.3.",
            cost:new Decimal('2e68'),
            unlocked() { return (hasUpgrade(this.layer, 54))},
        },
        61: {
            title:'B26',
            description: "lg pts mult B.",
            cost:new Decimal('1e70'),
            effect()  { 
                let efb26 = player.points.add(10).log(10)
                if (hasUpgrade('A',53)) efb26=Decimal.mul(efb26,10)
                if (hasUpgrade('A',54)) efb26=Decimal.mul(efb26,10)
                if (hasUpgrade('B',63)) efb26=Decimal.pow(efb26,1.15)
                if (hasUpgrade('B',64)) efb26=Decimal.pow(efb26,1.15)
                if (hasUpgrade('B',74)) efb26=Decimal.pow(efb26,1.3)
                if (hasUpgrade('A',62)) efb26=Decimal.mul(efb26,upgradeEffect('A',62))
                if (hasUpgrade('E',31)) efb26=Decimal.pow(efb26,1.1)

                return efb26;          
            },
            unlocked() { return (hasUpgrade(this.layer, 55))},
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        62: {
            title:'B27',
            description: "unlock new A upg.",
            cost:new Decimal('1e81'),
            unlocked() { return (hasUpgrade(this.layer, 61))},
        },
        63: {
            title:'B28',
            description: "B26 ^1.15.",
            cost:new Decimal('1e113'),
            unlocked() { return (hasMilestone(this.layer, 2))},
        },
        64: {
            title:'B29',
            description: "B26 ^1.15,5e4x pts.",
            cost:new Decimal('1e116'),
            unlocked() { return (hasUpgrade(this.layer, 63))},
        },
        65: {
            title:'B30',
            description: "Bb1-4 are cheaper.",
            cost:new Decimal('1e133'),
            unlocked() { return (hasUpgrade(this.layer, 64))},
        },
        71: {
            title:'B31',
            description: "Bb1-2 base +0.05.",
            cost:new Decimal('1e150'),
            unlocked() { return (hasMilestone(this.layer, 3))},
        },
        72: {
            title:'B32',
            description: "5e4x pts.",
            cost:new Decimal('1e170'),
            unlocked() { return (hasUpgrade(this.layer, 71))},
        },
        73: {
            title:'B33',
            description: "Bb1 base x1.025.",
            cost:new Decimal('1e492'),
            unlocked() { return (hasUpgrade(this.layer, 72))},
        },
        74: {
            title:'B34',
            description: "B26 ^1.3.",
            cost:new Decimal('1e540'),
            unlocked() { return (hasUpgrade(this.layer, 73))},
        },
        75: {
            title:'B35',
            description: "Bb5 is cheaper.",
            cost:new Decimal('1e585'),
            unlocked() { return (hasUpgrade(this.layer, 74))},
        },
        81: {
            title:'B36',
            description: "x1e5 pts.",
            cost:new Decimal('1e1058'),
            unlocked() { return (hasUpgrade('A', 65))},
        },
        82: {
            title:'B37',
            description: "Bb1-2 is cheaper.",
            cost:new Decimal('1e1190'),
            unlocked() { return (hasUpgrade(this.layer, 81))},
        },
    },
    automate(){
        if (player.B.auto) {if (hasMilestone("B",2))  buyBuyable("B",11),buyBuyable("B",12),buyBuyable("B",21)
            ,buyBuyable("B",22),buyBuyable("B",23) }
    },
    buyables:{
        11: {
            title: "Bb1", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(4, x.pow(1.035)).times('1e38')
                if (hasUpgrade('B',43)) cost = Decimal.pow(3.8, x.pow(1.03)).times('1e37')
                if (hasUpgrade('B',53)) cost = Decimal.pow(3.8, x.pow(1.03)).times('1e35')
                if (hasUpgrade('B',65)) cost = Decimal.pow(3.7, x.pow(1.028)).times('1e34')
                if (hasUpgrade('B',82)) cost = Decimal.pow(3.6, x.pow(1.027)).times('1e27')
                if (hasMilestone('B',1)) cost = cost.div(upgradeEffect('B',61))
                if (x>=400) 
                    if (hasUpgrade('A',65)) cost =Decimal.pow(cost,x.sub(400).div(950).add(1).pow(0.44))
                    else cost =Decimal.pow(cost,x.sub(400).div(800).add(1).pow(0.45))
                if (hasUpgrade('E',43)) cost = Decimal.pow(cost, 0.992)
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            //bulk(x) {
            //    let target = this.cost(getBuyableAmount(this.layer, this.id).add(x))
            //    if (player[this.layer].points.gte(target)) {
            //        if (dvdhasMilestone("B", 8))  player.B.buyables[11] = player.B.buyables[11].add(x)}
            //    },
            buy() {
                //if (hasMilestone('B',8)) this.bulk(10)
                if (hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(0)
                else player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let bas = 3
                if (hasUpgrade('B',54)) bas = bas + 0.05
                if (hasUpgrade('B',71)) bas = bas + 0.05
                if (hasUpgrade('B',73)) bas = bas * 1.02
                if (hasMilestone('B',3)) bas = Decimal.add(bas,buyableEffect('B',23))
                if (inChallenge('E',12)) bas = 2
                return bas},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let efbb1 = Decimal.pow(this.base(),x.pow(1.01))
                if (inChallenge('A',32)) efbb1=Decimal.pow(efbb1,0.5)
                return efbb1},
            display() { // Everything else displayed in the buyable button after the title
                return "give A a x"+ format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " B \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect()) + " A" },
            unlocked() { return hasMilestone('D',2) }
        },
        12: {
            title: "Bb2", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(10, x.pow(1.045)).times('1e40')
                if (hasUpgrade('B',43)) cost = Decimal.pow(9, x.pow(1.041)).times('1e39')
                if (hasUpgrade('B',65)) cost = Decimal.pow(9, x.pow(1.04)).times('1e38')
                if (hasUpgrade('B',82)) cost = Decimal.pow(8, x.pow(1.04)).times('1e30')
                if (hasMilestone('B',1)) cost = cost.div(upgradeEffect('B',61))
                if (x>=400) 
                    if (hasUpgrade('A',65)) cost =Decimal.pow(cost,x.sub(400).div(950).add(1).pow(0.44))
                    else cost =Decimal.pow(cost,x.sub(400).div(800).add(1).pow(0.45))
                if (hasUpgrade('E',43)) cost = Decimal.pow(cost, 0.992)
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if (hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(0)
                else player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            base(){   let basb2 = 2
                if (hasUpgrade('B',71)) basb2 = basb2 + 0.05
                if (hasMilestone('B',3)) basb2 = Decimal.add(basb2,buyableEffect('B',23))
                if (inChallenge('E',12)) bas = 2
                return basb2},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let efbb2 = Decimal.pow(this.base(), x.pow(1.006))
                if (inChallenge('A',32)) efbb2=Decimal.pow(efbb2,0.5)
                return efbb2},
            display() { // Everything else displayed in the buyable button after the title
                return "give B a x" + format(this.base()) + " mult \n\
                Cost: " + format(this.cost()) + " B \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: x" + format(this.effect()) + " B" },
            unlocked() { return hasUpgrade('B',41) }
        },
        21: {
            title: "Bb3", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let costb3 = Decimal.pow(10, x.pow(1.07)).times('1e41')
                if (hasUpgrade('B',65))  costb3 = Decimal.pow(10, x.pow(1.065)).times('1e40')
                if (hasMilestone('B',1)) costb3 = costb3.div(upgradeEffect('B',61))
                if (x>=400) 
                    if (hasUpgrade('A',65)) costb3 =Decimal.pow(costb3,x.sub(400).div(950).add(1).pow(0.44))
                    else costb3 =Decimal.pow(costb3,x.sub(400).div(800).add(1).pow(0.45))
                return costb3
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if (hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(0)
                else player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let efbb3 = Decimal.pow(x/1.3+1,0.6).div(6).add(0.8333)
                if (hasUpgrade('B',51)) efbb3 = Decimal.pow(x/1.25+1,0.6).div(4.5).add(0.777)
                if (hasUpgrade('A',55)) efbb3 = Decimal.pow(x/1.23+1,0.6).div(4).add(0.75)
                if (inChallenge('A',41)) efbb3= 1
                return efbb3},
            display() { // Everything else displayed in the buyable button after the title
                return "boost to B's pts mult(exp) \n\
                Cost: " + format(this.cost()) + " B \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: ^" + format(this.effect())},
            unlocked() { return hasUpgrade('B',42) }
        },
        22: {
            title: "Bb4", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let costb4 = Decimal.pow(16, x.pow(1.07)).times('1e49')
                if (hasUpgrade('B',65))  costb4 = Decimal.pow(16, x.pow(1.065)).times('1e48')
                if (hasMilestone('B',1)) costb4 = costb4.div(upgradeEffect('B',61))
                if (x>=400) 
                    if (hasUpgrade('A',65)) costb4 =Decimal.pow(costb4,x.sub(400).div(950).add(1).pow(0.44))
                    else costb4 =Decimal.pow(costb4,x.sub(400).div(800).add(1).pow(0.45))
                return costb4
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if (hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(0)
                else player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let efbb4 = Decimal.pow(x/1.3+1,0.7).div(6).add(0.8333)
                if (hasUpgrade('A',55)) efbb4 = Decimal.pow(x/1.26+1,0.7).div(5).add(0.8)
                if(inChallenge('A',41)) efbb4 = 1
                return efbb4},
            display() { // Everything else displayed in the buyable button after the title
                return "boost to A's pts mult(exp) \n\
                Cost: " + format(this.cost()) + " B \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: ^" + format(this.effect())},
            unlocked() { return hasUpgrade('B',45) }
        },
        23: {
            title: "Bb5", 
            cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
                let cost = Decimal.pow(1234, x.pow(1.2)).times('1e140')
                if (hasUpgrade('B',75)) cost = Decimal.pow(1200, x.pow(1.2)).times('1e135')
                if (x>=400) 
                    if (hasUpgrade('A',65)) cost =Decimal.pow(cost,x.sub(400).div(950).add(1).pow(0.44))
                    else cost =Decimal.pow(cost,x.sub(400).div(800).add(1).pow(0.45))
                return cost
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if (hasMilestone('B',0)) player[this.layer].points = player[this.layer].points.sub(0)
                else player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))},
            effect(x) { // Effects of owning x of the items, x is a decimal
                let ef = Decimal.pow(x/40+1,0.7).sub(1)
                if (inChallenge('A',41)) ef = 0
                if (hasUpgrade('A',63)) ef = Decimal.mul(ef,1.02)
                if (hasUpgrade('E',34)) ef = Decimal.mul(ef,1.02)
                if (hasUpgrade('E',45)) ef = Decimal.mul(ef,1.02)
                return ef},
            display() { // Everything else displayed in the buyable button after the title
                return "boost Bb1-2 base \n\
                Cost: " + format(this.cost()) + " B \n\
                Amount: " + player[this.layer].buyables[this.id]  +" \n\
                Effect: +" + format(this.effect())},
            unlocked() { return hasMilestone('B',3) }
        }
    }
})
