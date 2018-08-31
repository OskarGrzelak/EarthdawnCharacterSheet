const attValues = document.querySelectorAll('.att-value');
const raceInput = document.getElementById('char-race');

const talentName = document.getElementById('talent-name');
const talentKarma = document.getElementById('talent-karma');
const talentAction = document.getElementById('talent-action');
const talentStrain = document.getElementById('talent-strain');
const talentAttribute = document.getElementById('talent-attribute');
const talentRank = document.getElementById('talent-rank');
const addTalentButton = document.getElementById('add-talent');

const abilityName = document.getElementById('ability-name');
const abilityAction = document.getElementById('ability-action');
const abilityStrain = document.getElementById('ability-strain');
const abilityAttribute = document.getElementById('ability-attribute');
const abilityRank = document.getElementById('ability-rank');
const addAbilityButton = document.getElementById('add-ability');

const rolls = document.querySelectorAll('.roll');
const display = document.querySelector('.display');

const characteristicsTable = {
    1: { defense: 2, movementRate: '25/13', carryingCapacity: '5/10', health: [3, 10, 19, 0.5], mentalArmour: 0 },
    2: { defense: 3, movementRate: '28/14', carryingCapacity: '8/15', health: [4, 11, 20, 0.5], mentalArmour: 0 },
    3: { defense: 3, movementRate: '30/15', carryingCapacity: '10/20', health: [4, 13, 22, 1], mentalArmour: 0 },
    4: { defense: 4, movementRate: '32/16', carryingCapacity: '12/25', health: [5, 14, 23, 1], mentalArmour: 0 },
    5: { defense: 4, movementRate: '35/18', carryingCapacity: '15/30', health: [5, 15, 24, 1], mentalArmour: 0 },
    6: { defense: 4, movementRate: '38/19', carryingCapacity: '18/36', health: [6, 17, 26, 1], mentalArmour: 0 },
    7: { defense: 5, movementRate: '40/20', carryingCapacity: '20/40', health: [6, 18, 27, 1], mentalArmour: 0 },
    8: { defense: 5, movementRate: '43/22', carryingCapacity: '25/50', health: [7, 19, 28, 2], mentalArmour: 0 },
    9: { defense: 6, movementRate: '48/24', carryingCapacity: '30/60', health: [7, 21, 30, 2], mentalArmour: 0 },
    10: { defense: 6, movementRate: '50/25', carryingCapacity: '35/70', health: [8, 22, 31, 2], mentalArmour: 0 },
    11: { defense: 7, movementRate: '54/27', carryingCapacity: '40/80', health: [8, 24, 32, 2], mentalArmour: 1 },
    12: { defense: 7, movementRate: '57/29', carryingCapacity: '45/90', health: [9, 26, 34, 2], mentalArmour: 1 },
    13: { defense: 7, movementRate: '60/30', carryingCapacity: '50/100', health: [9, 27, 35, 2], mentalArmour: 1 },
    14: { defense: 8, movementRate: '65/33', carryingCapacity: '60/120', health: [10, 28, 36, 3], mentalArmour: 2 },
    15: { defense: 8, movementRate: '70/35', carryingCapacity: '70/140', health: [10, 29, 38, 3], mentalArmour: 2 },
    16: { defense: 9, movementRate: '75/38', carryingCapacity: '80/160', health: [11, 31, 39, 3], mentalArmour: 2 },
    17: { defense: 9, movementRate: '80/40', carryingCapacity: '100/200', health: [11, 32, 40, 3], mentalArmour: 3 },
    18: { defense: 10, movementRate: '85/42', carryingCapacity: '115/230', health: [12, 34, 42, 3], mentalArmour: 3 },
    19: { defense: 10, movementRate: '90/45', carryingCapacity: '135/270', health: [12, 35, 43, 3], mentalArmour: 3 },
    20: { defense: 10, movementRate: '100/50', carryingCapacity: '155/310', health: [13, 36, 44, 4], mentalArmour: 4 },
    21: { defense: 11, movementRate: '110/55', carryingCapacity: '180/360', health: [13, 39, 46, 4], mentalArmour: 4 },
    22: { defense: 11, movementRate: '120/60', carryingCapacity: '215/430', health: [13, 40, 47, 4], mentalArmour: 4 },
    23: { defense: 12, movementRate: '130/65', carryingCapacity: '250/500', health: [14, 41, 48, 4], mentalArmour: 5 },
    24: { defense: 12, movementRate: '140/70', carryingCapacity: '290/580', health: [14, 43, 50, 4], mentalArmour: 5 },
    25: { defense: 13, movementRate: '150/75', carryingCapacity: '335/670', health: [15, 44, 51, 4], mentalArmour: 5 },
    26: { defense: 13, movementRate: '160/80', carryingCapacity: '390/780', health: [15, 45, 52, 5], mentalArmour: 6 },
    27: { defense: 13, movementRate: '170/85', carryingCapacity: '460/920', health: [15, 47, 54, 5], mentalArmour: 6 },
    28: { defense: 14, movementRate: '180/90', carryingCapacity: '535/1070', health: [16, 48, 55, 5], mentalArmour: 6 },
    29: { defense: 14, movementRate: '200/100', carryingCapacity: '600/1200', health: [16, 49, 56, 5], mentalArmour: 7 },
    30: { defense: 15, movementRate: '220/110', carryingCapacity: '725/1450', health: [17, 51, 58, 5], mentalArmour: 7 }
};

const raceTable = {
    dwarf: { karma: [6, 25, 10, 'd6'], speed: -2 },
    elf: { karma: [5, 25, 10, 'd6'], speed: 1 },
    human: { karma: [10, 40, 6, 'd8'], speed: 0 },
    obsidiman: { karma: [5, 20, 10, 'd4'], speed: -3 },
    ork: { karma: [10, 40, 7, 'd8'], speed: 2 },
    troll: { karma: [6, 20, 10, 'd4'], speed: 0 },
    tskrang: { karma: [5, 25, 8, 'd6'], speed: 0 },
    windling: { karma: [15, 60, 5, 'd10'], speed: 2 }
};

const diceTable = {
    1: 'd4-2',
    2: 'd4-1',
    3: 'd4',
    4: 'd6',
    5: 'd8',
    6: 'd10',
    7: 'd12',
    8: '2d6',
    9: 'd8+d6',
    10: 'd10+d6',
    11: 'd10+d8',
    12: '2d10',
    13: 'd12+d10',
    14: 'd20+d4',
    15: 'd20+d6',
    16: 'd20+d8',
    17: 'd20+d10',
    18: 'd20+d12',
    19: 'd20+2d6',
    20: 'd20+d8+d6',
    21: 'd20+d10+d6',
    22: 'd20+d10+d8',
    23: 'd20+2d10',
    24: 'd20+d12+d10',
    25: 'd20+d10+d8+d4',
    26: 'd20+d10+d8+d6',
    27: 'd20+d10+2d8',
    28: 'd20+2d10+d8',
    29: 'd20+d12+d10+d8',
    30: 'd20+d10+d8+2d6'
};

// changes regarding to chosen race

raceInput.addEventListener('change', () => {

    // setting karma's values
    console.log(raceInput.value.toLowerCase());
    [document.getElementById('kar-cur').innerHTML, 
    document.getElementById('kar-max').innerHTML, 
    document.getElementById('kar-cost').innerHTML, 
    document.getElementById('kar-dice').innerHTML] = raceTable[raceInput.value.toLowerCase()].karma;
});

// changes regarding to attributes values

Array.from(attValues).forEach(el => el.addEventListener('change', e => {

    // Setting attributes' steps

    e.target.parentNode.children[1].innerHTML = Math.ceil(el.value / 3) + 1;

    // Setting characteristics

    const value = el.value;
    switch (e.target.id) {
        case 'dexterity':
            document.getElementById('phys-def').innerHTML = characteristicsTable[value].defense;
            document.getElementById('mov-rate').innerHTML = characteristicsTable[parseInt(value) + raceTable[raceInput.value.toLowerCase()].speed].movementRate;
            document.getElementById('init').innerHTML = e.target.parentNode.children[1].innerHTML;
            break;
        case 'strength':
            document.getElementById('car-cup').innerHTML = characteristicsTable[value].carryingCapacity;
            break;
        case 'toughness':
            [document.getElementById('wound-thres').innerHTML, 
            document.getElementById('uncon').innerHTML, 
            document.getElementById('death').innerHTML, 
            document.getElementById('rec-tests').innerHTML] = characteristicsTable[value].health;
            break;
        case 'perception':
            document.getElementById('ment-def').innerHTML = characteristicsTable[value].defense;
            break;
        case 'willpower':
            document.getElementById('ment-armour').innerHTML = characteristicsTable[value].mentalArmour;
            break;
        case 'charisma':
            document.getElementById('soc-def').innerHTML = characteristicsTable[value].defense;
    };

}));

// Adding new talents

addTalentButton.addEventListener('click', () => {
    let step;
    if (talentAttribute.value !== 'nd') {
        const index = Array.from(attValues).map(el => el.id).indexOf(talentAttribute.value);
        step = parseInt(Array.from(attValues)[index].parentNode.children[1].innerHTML) + parseInt(talentRank.value);
    }
    const markup = `
        <tr>
            <td>${talentName.value}</td>
            <td>${talentKarma.value}</td>
            <td>${talentAction.value}</td>
            <td>${talentStrain.value}</td>
            <td>${talentAttribute.value}</td>
            <td>${talentRank.value}</td>
            <td>${talentAttribute.value !== 'nd' ? step : talentRank.value}</td>
        </tr>`;
    document.getElementById('add-talent-form').insertAdjacentHTML('beforebegin', markup);
});

// Adding new abilities

addAbilityButton.addEventListener('click', () => {
    let step;
    if (abilityAttribute.value !== 'nd') {
        const index = Array.from(attValues).map(el => el.id).indexOf(abilityAttribute.value);
        step = parseInt(Array.from(attValues)[index].parentNode.children[1].innerHTML) + parseInt(abilityRank.value);
    }
    const markup = `
        <tr>
            <td>${abilityName.value}</td>
            <td>${abilityAction.value}</td>
            <td>${abilityStrain.value}</td>
            <td>${abilityAttribute.value}</td>
            <td>${abilityRank.value}</td>
            <td>${abilityAttribute.value !== 'nd' ? step : abilityRank.value}</td>
        </tr>`;
    document.getElementById('add-ability-form').insertAdjacentHTML('beforebegin', markup);
});

// Rolling dices

const rollDice = dice => {
    const results = [];
    let sum = 0;
    const dices = diceTable[dice].split('+');
    dices.forEach(el => {
        let result;
        if(el[0]==='d') {
            do {
                result = Math.floor((Math.random()*parseInt(el.slice(1, el.length)) + 1));
                sum += result;
                results.push(result);
            } while (result === parseInt(el.slice(1, el.length)));
        } else {
            const x = parseInt(el[0]);
            for (let i = 0; i < x; i ++) {
                do {
                    result = Math.floor((Math.random()*parseInt(el.slice(2, el.length)) + 1));
                    sum += result;
                    results.push(result);
                } while (result === parseInt(el.slice(2, el.length)));
            };
        };
    });
    results.push(sum);
    return results;
};

const displayRoll = (dice, results) => {
    const markup = `
        <div>Roll ${diceTable[dice]}: ${results[results.length-1]}</div>
        <div>Rolls: ${results.slice(0,results.length-1)}</div>
    `;
    display.insertAdjacentHTML('beforeend', markup);
};

Array.from(rolls).forEach(el => el.addEventListener('click', () => {
    results = rollDice(el.innerHTML);
    displayRoll(el.innerHTML, results);
}));