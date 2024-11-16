function loadComponent(file, element, callback = null) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            element.innerHTML = data;
            if (callback) callback(); // Call the callback function after loading
        })
        .catch(error => console.error('Error loading the component:', error));
}

// Load common components
loadComponent('navbar.html', document.getElementById('navbar'), initializeSearch);
loadComponent('footer.html', document.getElementById('footer'));
loadComponent('sidebar.html', document.getElementById('sidebar'));
loadComponent('bg.html', document.getElementById('bg'));

// Load type-specific components for all elements of each type
const types = ['fire', 'water', 'ground', 'electric', 'dark', 'ghost', 'steel',
    'grass', 'fairy', 'dragon', 'bug', 'rock', 'poison', 'ice',
    'normal', 'flying', 'fighting'];

types.forEach(type => {
    // Select all elements with the corresponding class (e.g., .fire, .water)
    const elements = document.querySelectorAll(`.${type}`);

    elements.forEach(element => {
        // Load the corresponding component into each element
        loadComponent(`typo/${type}.html`, element);
    });
});


// for pokemon web link
const pkm = [
    'alakazam', 'alcremie', 'alomomola', 'altaria', 'amaura', 'ambipom', 'amoonguss', 'ampharos',
    'annihilape', 'anorith', 'appletun', 'applin', 'araquanid', 'arbok', 'arboliva', 'arcanine',
    'arceus', 'archen', 'archeops', 'arctibax', 'arctovish', 'arctozolt', 'ariados', 'armaldo',
    'aromatisse', 'aron', 'arrokuda', 'articuno', 'audino', 'aurorus', 'avalugg', 'axew',
    'azelf', 'azumarill', 'azurill', 'bagon', 'baltoy', 'banette', 'barbaracle', 'barboach',
    'barraskewda', 'basculin', 'bastiodon', 'baxcalibur', 'bayleef', 'beartic', 'beautifly', 'beedrill',
    'beheeyem', 'beldum', 'bellossom', 'bellsprout', 'bergmite', 'bewear', 'bibarel', 'bidoof',
    'binacle', 'bisharp', 'blacephalon', 'blastoise', 'blaziken', 'blipbug', 'blissey', 'blitzle',
    'boldore', 'boltund', 'bonsly', 'bouffalant', 'bounsweet', 'braixen', 'braviary', 'breloom',
    'brionne', 'bronzong', 'bronzor', 'bruxish', 'budew', 'buizel', 'bulbasaur', 'buneary',
    'bunnelby', 'burmy', 'butterfree', 'buzzwole', 'cacnea', 'cacturne', 'calyrex', 'camerupt',
    'capsakid', 'carbink', 'carkol', 'carnivine', 'carracosta', 'carvanha', 'cascoon', 'castform',
    'caterpie', 'celebi', 'celesteela', 'centiskorch', 'cetitan', 'cetoddle', 'chandelure', 'chansey',
    'charizard', 'charjabug', 'charmander', 'charmeleon', 'chatot', 'cherrim', 'cherubi', 'chesnaught',
    'chespin', 'chewtle', 'chien-pao', 'chikorita', 'chimchar', 'chimecho', 'chinchou', 'chingling',
    'chi-yu', 'cinccino', 'cinderace', 'clamperl', 'clauncher', 'clawitzer', 'claydol', 'clefable',
    'clefairy', 'cleffa', 'clobbopus', 'clodsire', 'cloyster', 'coalossal', 'cobalion', 'cofagrigus',
    'combee', 'combusken', 'comfey', 'conkeldurr', 'copperajah', 'corphish', 'corsola', 'corviknight',
    'corvisquire', 'cosmoem', 'cosmog', 'cottonee', 'crabominable', 'crabrawler', 'cradily', 'cramorant',
    'cranidos', 'crawdaunt', 'cresselia', 'croagunk', 'crobat', 'crocalor', 'croconaw', 'crustle',
    'cryogonal', 'cubchoo', 'cubone', 'cufant', 'cursola', 'cutiefly', 'cyclizar', 'cyndaquil',
    'dachsbun', 'darkrai', 'darmanitan', 'dartrix', 'darumaka', 'decidueye', 'dedenne', 'deerling',
    'deino', 'delcatty', 'delibird', 'delphox', 'deoxys', 'dewgong', 'dewott', 'dewpider',
    'dhelmise', 'dialga', 'diancie', 'diggersby', 'diglett', 'ditto', 'dodrio', 'doduo',
    'dolliv', 'dondozo', 'donphan', 'dottler', 'doublade', 'dracovish', 'dracozolt', 'dragalge',
    'dragapult', 'dragonair', 'dragonite', 'drakloak', 'drampa', 'drapion', 'dratini', 'drednaw',
    'dreepy', 'drifblim', 'drifloon', 'drilbur', 'drizzile', 'drowzee', 'druddigon', 'dubwool',
    'ducklett', 'dugtrio', 'dunsparce', 'duosion', 'duraludon', 'durant', 'dusclops', 'dusknoir',
    'duskull', 'dustox', 'dwebble', 'eelektrik', 'eelektross', 'eevee', 'eiscue', 'ekans',
    'eldegoss', 'electabuzz', 'electivire', 'electrike', 'electrode', 'elekid', 'elgyem', 'emboar',
    'emolga', 'empoleon', 'entei', 'escavalier', 'espathra', 'espeon', 'espurr', 'eternatus',
    'excadrill', 'exeggcute', 'exeggutor', 'exploud', 'falinks', 'farfetch', 'fearow', 'feebas',
    'fennekin', 'feraligatr', 'ferroseed', 'ferrothorn', 'fidough', 'finneon', 'flaaffy', 'flabébé',
    'flapple', 'flareon', 'fletchinder', 'fletchling', 'floatzel', 'floette', 'floragato', 'florges',
    'flygon', 'fomantis', 'foongus', 'forretress', 'fraxure', 'frigibax', 'frillish', 'froakie',
    'frogadier', 'froslass', 'frosmoth', 'fuecoco', 'furfrou', 'furret', 'gabite', 'gallade',
    'galvantula', 'garbodor', 'garchomp', 'gardevoir', 'gastly', 'gastrodon', 'genesect', 'gengar',
    'geodude', 'gholdengo', 'gible', 'gigalith', 'girafarig', 'giratina', 'glaceon', 'glalie',
    'glameow', 'glastrier', 'gligar', 'gliscor', 'gloom', 'gogoat', 'golbat', 'goldeen',
    'golduck', 'golem', 'golett', 'golisopod', 'golurk', 'goodra', 'goomy', 'gorebyss',
    'gossifleur', 'gothita', 'gothitelle', 'gothorita', 'gourgeist', 'grafaiai', 'granbull', 'grapploct',
    'graveler', 'greedent', 'greninja', 'grimer', 'grimmsnarl', 'grookey', 'grotle', 'groudon',
    'grovyle', 'growlithe', 'grubbin', 'grumpig', 'gulpin', 'gumshoos', 'gurdurr', 'guzzlord',
    'gyarados', 'hakamo-o', 'happiny', 'hariyama', 'hatenna', 'hatterene', 'hattrem', 'haunter',
    'hawlucha', 'haxorus', 'heatmor', 'heatran', 'heliolisk', 'helioptile', 'heracross', 'herdier',
    'hippopotas', 'hippowdon', 'hitmonchan', 'hitmonlee', 'hitmontop', 'honchkrow', 'honedge', 'ho-oh',
    'hoopa', 'hoothoot', 'hoppip', 'horsea', 'houndoom', 'houndour', 'huntail', 'hydreigon',
    'hypno', 'igglybuff', 'illumise', 'impidimp', 'incineroar', 'indeedee', 'infernape', 'inkay',
    'inteleon', 'iron leaves', 'ivysaur', 'jangmo-o', 'jellicent', 'jigglypuff', 'jirachi', 'jolteon',
    'joltik', 'jumpluff', 'jynx', 'kabuto', 'kabutops', 'kadabra', 'kakuna', 'kangaskhan',
    'karrablast', 'kartana', 'kecleon', 'keldeo', 'kingambit', 'kingdra', 'kingler', 'kirlia',
    'klang', 'klefki', 'klink', 'klinklang', 'koffing', 'komala', 'kommo-o', 'krabby',
    'kricketot', 'kricketune', 'krokorok', 'krookodile', 'kubfu', 'kyogre', 'kyurem', 'lairon',
    'lampent', 'landorus', 'lanturn', 'lapras', 'larvesta', 'larvitar', 'latias', 'latios',
    'leafeon', 'leavanny', 'lechonk', 'ledian', 'ledyba', 'lickilicky', 'lickitung', 'liepard',
    'lilligant', 'lillipup', 'linoone', 'litleo', 'litten', 'litwick', 'lopunny', 'lotad',
    'loudred', 'lucario', 'ludicolo', 'lumineon', 'lunala', 'lunatone', 'lurantis', 'luvdisc',
    'luxio', 'luxray', 'lycanroc', 'machamp', 'machoke', 'machop', 'magby', 'magcargo',
    'magearna', 'magikarp', 'magmar', 'magmortar', 'magnemite', 'magneton', 'magnezone', 'makuhita',
    'malamar', 'mamoswine', 'mandibuzz', 'manectric', 'manaphy', 'mankey', 'mantine', 'mantyke',
    'maractus', 'mareanie', 'mareep', 'marill', 'marowak', 'marshadow', 'marshtomp', 'maschiff',
    'masquerain', 'maushold', 'mawile', 'medicham', 'meditite', 'meganium', 'melmetal', 'meloetta',
    'meowstic', 'meowth', 'mesprit', 'metagross', 'metang', 'metapod', 'mew', 'mewtwo',
    'mienfoo', 'mienshao', 'mightyena', 'milcery', 'milotic', 'miltank', 'mime jr', 'mimikyu',
    'minccino', 'minior', 'minun', 'miraidon', 'misdreavus', 'mismagius', 'moltres', 'monferno',
    'morelull', 'morgrem', 'morpeko', 'mothim', 'mr mime', 'mr rime', 'mudbray', 'mudkip',
    'mudsdale', 'muk', 'munchlax', 'murkrow', 'musharna', 'naganadel', 'natu', 'necrozma',
    'nickit', 'nidoking', 'nidoqueen', 'nidoran f', 'nidoran m', 'nidorina', 'nidorino', 'nihilego',
    'nincada', 'ninetales', 'ninjask', 'noctowl', 'noibat', 'noivern', 'nosepass', 'numel',
    'nuzleaf', 'octillery', 'oddish', 'omanyte', 'omastar', 'onix', 'oranguru', 'orbeetle',
    'oricorio', 'oshawott', 'overqwil', 'pachirisu', 'palkia', 'palossand', 'palpitoad', 'pancham',
    'pangoro', 'panpour', 'pansage', 'pansear', 'paras', 'parasect', 'passimian', 'patrat',
    'pawmi', 'pawmo', 'pawmot', 'pelipper', 'perrserker', 'persian', 'petilil', 'phanpy',
    'phantump', 'pheromosa', 'phione', 'pichu', 'pickypeck', 'pidgeot', 'pidgeotto', 'pidgey',
    'pidove', 'pignite', 'pikachu', 'pikipek', 'piloswine', 'pincurchin', 'pineco', 'pinsir',
    'piplup', 'plusle', 'poipole', 'politoed', 'poliwag', 'poliwhirl', 'poliwrath', 'polteageist',
    'ponyta', 'poochyena', 'popplio', 'porygon', 'porygon z', 'porygon2', 'primarina', 'primeape',
    'prinplup', 'probopass', 'psyduck', 'pumpkaboo', 'pupitar', 'purrloin', 'purugly', 'pyroar',
    'pyukumuku', 'quagsire', 'quilava', 'quilladin', 'qwilfish', 'raboot', 'raichu', 'raikou',
    'ralts', 'rampardos', 'rapidash', 'raticate', 'rattata', 'rayquaza', 'regice', 'regidrago',
    'regieleki', 'regigigas', 'regirock', 'registeel', 'relicanth', 'remoraid', 'renerigus', 'reshiram',
    'reuniclus', 'rhydon', 'rhyhorn', 'rhyperior', 'ribombee', 'rillaboom', 'riolu', 'roaring moon',
    'rockruff', 'roggenrola', 'rolycoly', 'rookidee', 'roselia', 'roserade', 'rotom', 'rowlet',
    'rufflet', 'runerigus', 'sableye', 'salamence', 'salandit', 'salazzle', 'samurott', 'sandaconda',
    'sandile', 'sandshrew', 'sandslash', 'sawk', 'sawsbuck', 'scatterbug', 'sceptile', 'scizor',
    'scolipede', 'scorbunny', 'scovillain', 'scrafty', 'scraggy', 'scralp', 'scyther', 'seadra',
    'seaking', 'sealeo', 'seedot', 'seel', 'seismitoad', 'sentret', 'serperior', 'servine',
    'seviper', 'sewaddle', 'sharpedo', 'shaymin', 'shedinja', 'shelgon', 'shellder', 'shellos',
    'shelmet', 'shieldon', 'shiftry', 'shiinotic', 'shinx', 'shroomish', 'shuckle', 'shuppet',
    'sigilyph', 'silicobra', 'silvally', 'simipour', 'simisage', 'simisear', 'sinistea', 'sirfetch',
    'sizzlipede', 'skarmory', 'skiddo', 'skiploom', 'skitty', 'skorupi', 'skrelp', 'skuntank',
    'slaking', 'slakoth', 'sliggoo', 'slowbro', 'slowking', 'slowpoke', 'slugma', 'slurpuff',
    'smeargle', 'smoochum', 'sneasel', 'sneasler', 'snivy', 'snom', 'snorlax', 'snorunt',
    'snover', 'snubbull', 'sobble', 'solgaleo', 'solosis', 'solrock', 'spearow', 'spectrier',
    'spewpa', 'spheal', 'spinarak', 'spinda', 'spiritomb', 'spoink', 'sprigatito', 'spritzee',
    'squawkabilly', 'squirtle', 'stakataka', 'stantler', 'staraptor', 'staravia', 'starly', 'starmie',
    'staryu', 'steelix', 'steenee', 'stonjourner', 'stoutland', 'stufful', 'stunfisk', 'stunky',
    'sudowoodo', 'suicune', 'sunflora', 'sunkern', 'surskit', 'swablu', 'swadloon', 'swalot',
    'swampert', 'swanna', 'swellow', 'swinub', 'swirlix', 'swoobat', 'sylveon', 'taillow',
    'talonflame', 'tangela', 'tangrowth', 'tapig', 'tapu bulu', 'tapu fini', 'tapu koko', 'tapu lele',
    'tatsugiri', 'tauros', 'teddiursa', 'tentacool', 'tentacruel', 'tepig', 'terrakion', 'thievul',
    'throh', 'thundurus', 'thwackey', 'timburr', 'tinkaton', 'tinkatuff', 'tinkatink', 'tintricity',
    'tirtouga', 'togedemaru', 'togekiss', 'togepi', 'togetic', 'torchic', 'torkoal', 'tornadus',
    'torracat', 'torterra', 'totodile', 'toucannon', 'toxapex', 'toxel', 'toxicroak', 'toxtricity',
    'tranquill', 'trapinch', 'treecko', 'trevenant', 'tropius', 'trubbish', 'trumbeak', 'tsareena',
    'turtonator', 'turtwig', 'tympole', 'tynamo', 'typenull', 'typhlosion', 'tyranitar', 'tyrantrum',
    'tyrogue', 'tyrunt', 'umbreon', 'unfezant', 'unown', 'ursaring', 'urshifu', 'uxie',
    'vanillish', 'vanillite', 'vanilluxe', 'vaporeon', 'varoom', 'vaporeon', 'vespiquen', 'vibrava',
    'victini', 'victreebel', 'vigoroth', 'vikavolt', 'vileplume', 'virizion', 'vivillon', 'volbeat',
    'volcarona', 'voltorb', 'vullaby', 'vulpix', 'wailmer', 'wailord', 'walrein', 'wartortle',
    'watchog', 'weavile', 'weedle', 'weepinbell', 'weezing', 'whimsicott', 'whirlipede', 'whiscash',
    'wigglytuff', 'wimpod', 'wingull', 'wishiwashi', 'wobbuffet', 'woobat', 'wooloo', 'wooper',
    'wormadam', 'wurmple', 'wynaut', 'xatu', 'xerneas', 'yamask', 'yamper', 'yanma',
    'yanmega', 'yungoos', 'yveltal', 'zacian', 'zamazenta', 'zarude', 'zebstrika', 'zekrom',
    'zeraora', 'zigzagoon', 'zoroark', 'zorua', 'zubat', 'zweilous', 'zygarde'
];

pkm.forEach(pokemon => {
    const elements = document.querySelectorAll(`.${pokemon}`);

    elements.forEach(element => {
        loadComponent(`pokemon/${pokemon}.html`, element);
    });
});


// for pokemon sprites link
// define a custom sprite element
class SpriteElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const pokemonName = this.classList[0]; // get the first class name (e.g., 'bulbasaur')
        if (pokemonName) {
            this.innerHTML = `<img src="pokemon/sprites/${pokemonName}.png" alt="${pokemonName} sprite">`;
        }
    }
}

// register the custom element
customElements.define('sprite-element', SpriteElement);

// example usage in your code
const pspr = [
    'alakazam', 'alcremie', 'alomomola', 'altaria', // and so on...
];

pspr.forEach(pokemon => {
    const elements = document.querySelectorAll(`sprite-element.${pokemon}`);

    elements.forEach(element => {
        element.connectedCallback(); // load the sprite when the element is in the DOM
    });
});


// Initialize search dropdown functionality after loading the navbar
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResult = document.getElementById('searchResult');

    const adminGroups = [
        { name: 'Groudon', type: 'Pokedex' },
        { name: 'Ground', type: 'Type' },
        { name: 'Ground Gem', type: 'Item' },
        { name: 'Ground Memory', type: 'Item' },
        { name: 'Ground Tera Shard', type: 'Item' },
        { name: 'Groundium Z', type: 'Item' },
        { name: 'Underground Path 5-6, Kanto', type: 'Location' },
        { name: 'Underground Path 7-8, Kanto', type: 'Location' },
        { name: 'Goldenrod Underground, Johto', type: 'Location' },
        { name: 'Grand Underground, Sinnoh', type: 'Location' },
        { name: 'Underground Ruins, Unova', type: 'Location' }
    ];

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        searchResult.innerHTML = ''; // Clear previous results

        const filteredResults = adminGroups.filter(group =>
            group.name.toLowerCase().includes(query)
        );

        if (filteredResults.length > 0) {
            searchResult.style.display = 'block'; // Show the dropdown
            filteredResults.forEach(result => {
                const resultDiv = document.createElement('div');
                resultDiv.classList.add('search-item'); // Add class to each item

                resultDiv.innerHTML = `
                    <span class="item-name">${result.name}</span>
                    <span class="item-type">${result.type}</span>
                `;
                searchResult.appendChild(resultDiv);
            });
        } else {
            searchResult.style.display = 'none'; // Hide dropdown if no results
        }
    });

    document.addEventListener('click', function (e) {
        if (!searchResult.contains(e.target) && e.target !== searchInput) {
            searchResult.style.display = 'none';
        }
    });
}


// const menu = document.querySelector('.menu');
// const navLeft = document.querySelector('.nav-left');

// menu.addEventListener('click', () => {
//     menu.classList.toggle('active');
//     navLeft.classList.toggle('active');
// });
