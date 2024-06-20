addLayer("D", {
    name: "D", 
    symbol: "D", 
    position: 1, 
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    passiveGeneration(){    let d_pg=100
        return (hasMilestone("B", 5))?d_pg:0},
    color: "#720202",
    requires: new Decimal('1e13'), 
    resource: "D", 
    baseResource: "C", 
    baseAmount() {return player.C.points}, 
    type: "normal", 
    exponent: 0.2, 
    gainExp() {
        return new Decimal(1)
    },
    row: 1, 
    hotkeys: [
        {key: "d", description: "D: Reset for D points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){  if (player.D.unlocked) return true
    else return (hasMilestone("C", 3))},
    gainMult() { 
        mult = new Decimal(1)
        mult = mult.mul(hasUpgrade(this.layer,12)?2:1)
        mult = mult.mul(hasUpgrade(this.layer,13)?2:1)
        mult = mult.pow(hasUpgrade(this.layer,22)?1.2:1)
        mult = mult.mul(hasUpgrade('A',52)?2:1)
        mult = mult.mul(hasUpgrade('A',64)?upgradeEffect('A',64):1)
        mult = mult.mul(buyableEffect("E",13))

        return mult
    },
    branches: ['C'],
    milestones: {
        0: {requirementDescription: "100 total D",
            done() {return player[this.layer].total.gte(100)}, 
            effectDescription: "keep B.",
        },
        1: {requirementDescription: "2500 total D",
            done() {return player[this.layer].total.gte(2500)}, 
            effectDescription: "100x A/B passive,1x C passive.",
        },
        2: {requirementDescription: "1.5e6 total D",
            done() {return player[this.layer].total.gte('1.5e6')}, 
            effectDescription: "1e4x A and 100x B/C passive,unlock B buyable.",
        },
        3: {requirementDescription: "1e9 total D",
            done() {return player[this.layer].total.gte('1e9')}, 
            effectDescription: "1e5x A,unlock a chal.",
        },
    },
    microtabs: {
        stuff: {       
            "Upgrades": {
                unlocked() {return true},
                content: [ "upgrades"]}, 
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
            title:'D1',
            description: "1000x points.",
            effect()  { 
                let efd1 = 1000
                if (hasUpgrade('D',14)) efd1 = efd1*1000
                if (inChallenge('C',12)) efd1 = 1
                if (hasUpgrade('D',22)) efd1 = efd1^1.2
                if (hasUpgrade('D',25)) efd1 = efd1*10000
                if (hasUpgrade('D',33)) efd1 = efd1*10000

                return efd1;          
            },
            cost:new Decimal(1),
        },
        12: {
            title:'D2',
            description: "2x D.",
            cost:new Decimal(10),
            unlocked() { return (hasUpgrade(this.layer, 11))},
        },
        13: {
            title:'D3',
            description: "2x D.",
            cost:new Decimal(30),
            unlocked() { return (hasUpgrade(this.layer, 12))},
        },
        14: {
            title:'D4',
            description: "1000x points.",
            cost:new Decimal(100),
            unlocked() { return (hasUpgrade(this.layer, 13))},
        },
        15: {
            title:'D5',
            description: "D^0.8 boost points.<br>unlock a chal.",
            cost: new Decimal(150),
            unlocked() { return (hasUpgrade(this.layer, 14))},
            effect()  { 
                let ef = 0.8
                if (inChallenge('E',11))  ef = 0
                return player[this.layer].points.pow(ef);          
            },
            effectDisplay() { return format(this.effect())+"x" }, 
        },
        21: {
            title:'D6',
            description: "D upg boost pts.<br>(e^x).",
            cost:new Decimal(4000),
            effect()  { 
                let a=player.D.upgrades.length
                let efd4 = Decimal.pow(2.718,a)
                if (hasUpgrade('D',23)) efd4 = Decimal.pow(efd4,2)
                return efd4;          
            },
            unlocked() { return (hasUpgrade('A', 52))},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
        },
        22: {
            title:'D7',
            description: "D1-D5 ^1.2.",
            cost:new Decimal(6000),
            unlocked() { return (hasUpgrade(this.layer, 21))},
        },
        23: {
            title:'D8',
            description: "D6 ^2.",
            cost:new Decimal(8000),
            unlocked() { return (hasUpgrade(this.layer, 22))},
        },
        24: {
            title:'D9',
            description: "logC boost pts.",
            cost:new Decimal(10000),
            effect()  { 
                let efd9 = player.C.points.add(1).log(10)
                if (hasUpgrade('D',34)) efd9 = Decimal.pow(efd9,2)
                return 1+efd9;          
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 23))},
        },
        25: {
            title:'D10',
            description: "10000x points.",
            cost:new Decimal(15000),
            unlocked() { return (hasUpgrade(this.layer, 24))},
        },
        31: {
            title:'D11',
            description: "5x C.",
            cost:new Decimal(25000),
            unlocked() { return (hasUpgrade(this.layer, 25))},
        },
        32: {
            title:'D12',
            description: "logB boost pts.",
            cost:new Decimal(40000),
            effect()  { 
                let efd12 = player.B.points.add(1).log(10)
                if (hasUpgrade('D',35)) efd12 = Decimal.pow(efd12,2)
                return 1+efd12;          
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, 
            unlocked() { return (hasUpgrade(this.layer, 31))},
        },
        33: {
            title:'D13',
            description: "10000x points.",
            cost:new Decimal('2e5'),
            unlocked() { return (hasUpgrade(this.layer, 32))},
        },
        34: {
            title:'D14',
            description: "D9 ^2.",
            cost:new Decimal('3e5'),
            unlocked() { return (hasUpgrade(this.layer, 33))},
        },
        35: {
            title:'D15',
            description: "D12 ^2.",
            cost:new Decimal('6e5'),
            unlocked() { return (hasUpgrade(this.layer, 34))},
        },
    }
})