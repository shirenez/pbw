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
loadComponent('/import/navbar.html', document.getElementById('navbar'), initializeSearch);
loadComponent('/import/footer.html', document.getElementById('footer'));
loadComponent('/import/sidebar.html', document.getElementById('sidebar'));
loadComponent('/import/bg.html', document.getElementById('bg'));

// Load type-specific components for all elements of each type
const types = ['fire', 'water', 'ground', 'electric', 'dark', 'ghost', 'steel',
    'grass', 'fairy', 'dragon', 'bug', 'rock', 'poison', 'ice',
    'normal', 'flying', 'fighting'];

types.forEach(type => {
    // Select all elements with the corresponding class (e.g., .fire, .water)
    const elements = document.querySelectorAll(`.${type}`);

    elements.forEach(element => {
        // Load the corresponding component into each element
        loadComponent(`/typo/${type}.html`, element);
    });
});

// for item chain link
const items = [
    'acrobatics', 'aerial_ace', 'attract', 'blizzard', 'brick_break', 'bulk_up', 
    'bulldoze', 'calm_mind', 'charge_beam', 'confide', 'cut', 'dark_pulse', 
    'dazzling_gleam', 'dig', 'dive', 'double_team', 'dragon_claw', 'dragon_tail', 
    'dream_eater', 'earthquake', 'echoed_voice', 'embargo', 'energy_ball', 'explosion', 
    'facade', 'false_swipe', 'fire_blast', 'flame_charge', 'flamethrower', 'flash', 
    'flash_cannon', 'fling', 'fly', 'focus_blast', 'frost_breath', 'frustration', 
    'giga_impact', 'grass_knot', 'gyro_ball', 'hail', 'hidden_power', 'hone_claws', 
    'hyper_beam', 'ice_beam', 'incinerate', 'infestation', 'light_screen', 'low_sweep', 
    'nature_power', 'overheat', 'payback', 'poison_jab', 'power_up_punch', 'protect', 
    'psych_up', 'psychic', 'psyshock', 'quash', 'rain_dance', 'reflect', 
    'rest', 'retaliate', 'return', 'roar', 'rock_polish', 'rock_slide', 
    'rock_smash', 'rock_tomb', 'roost', 'round', 'safeguard', 'sandstorm', 
    'scald', 'secret_power', 'shadow_ball', 'shadow_claw', 'sky_drop', 'sleep_talk', 
    'sludge_bomb', 'sludge_wave', 'smack_down', 'snarl', 'solar_beam', 'steel_wing', 
    'stone_edge', 'strength', 'struggle_bug', 'substitute', 'sunny_day', 'surf', 
    'swagger', 'swords_dance', 'taunt', 'thief', 'thunder', 'thunder_wave', 
    'thunderbolt', 'torment', 'toxic', 'trick_room', 'u_turn', 'venoshock', 
    'volt_switch', 'waterfall', 'wild_charge', 'will_o_wisp', 'x_scissor',
    'ability_capsule', 'ability_urge', 'abomasite', 'absolite', 'absorb_bulb', 'acro_bike',  
    'adamant_orb', 'adrenaline_orb', 'adventure_rules', 'aerodactylite', 'aggronite', 'aguav_berry',  
    'air_balloon', 'air_mail', 'alakazite', 'aloraichium_z__bag', 'aloraichium_z__held', 'altarianite',  
    'amaze_mulch', 'ampharosite', 'amulet_coin', 'antidote', 'apicot_berry', 'apricorn_box',  
    'aqua_suit', 'armor_fossil', 'aspear_berry', 'assault_vest', 'audinite', 'auroraticket',  
    'awakening', 'azure_flute', 'babiri_berry', 'balm_mushroom', 'banettite', 'basement_key',  
    'basement_key__2', 'bead_mail', 'beast_ball', 'beedrillite', 'belue_berry', 'berry_juice',  
    'berry_pots', 'berry_pouch', 'bicycle', 'big_malasada', 'big_mushroom', 'big_nugget',  
    'big_pearl', 'big_root', 'bike', 'bike_voucher', 'binding_band', 'black_apricorn',  
    'black_belt', 'black_flute', 'black_glasses', 'black_sludge', 'blastoisinite', 'blazikenite',  
    'bloom_mail', 'blue_apricorn', 'blue_card', 'blue_flute', 'blue_orb', 'blue_petal',  
    'blue_scarf', 'blue_shard', 'bluk_berry', 'boost_mulch', 'bottle_cap', 'brick_mail',  
    'bridge_mail_d', 'bridge_mail_m', 'bridge_mail_s', 'bridge_mail_t', 'bridge_mail_v', 'bright_powder',  
    'bubble_mail', 'bug_gem', 'bug_memory', 'buginium_z__bag', 'buginium_z__held', 'burn_drive',  
    'burn_heal', 'calcium', 'cameruptite', 'carbos', 'card_key', 'casteliacone',  
    'cell_battery', 'charcoal', 'charizardite_x', 'charizardite_y', 'charti_berry', 'cheri_berry',  
    'cherish_ball', 'chesto_berry', 'chilan_berry', 'chill_drive', 'choice_band', 'choice_scarf',  
    'choice_specs', 'chople_berry', 'claw_fossil', 'cleanse_tag', 'clear_bell', 'clever_wing',  
    'coba_berry', 'coin_case', 'colbur_berry', 'colress_machine', 'comet_shard', 'common_stone',  
    'contest_costume__d', 'contest_costume__j', 'contest_pass', 'cornn_berry', 'coupon_1', 'coupon_2',  
    'coupon_3', 'cover_fossil', 'custap_berry', 'damp_mulch', 'damp_rock', 'dark_gem',  
    'dark_memory', 'dark_stone', 'darkinium_z__bag', 'darkinium_z__held', 'data_card', 'dawn_stone',  
    'decidium_z__bag', 'decidium_z__held', 'deep_sea_scale', 'deep_sea_tooth', 'destiny_knot', 'devon_goods',  
    'devon_parts', 'devon_scope', 'devon_scuba_gear', 'diancite', 'dire_hit', 'dire_hit_2',  
    'dire_hit_3', 'discount_coupon', 'dive_ball', 'dna_splicers', 'dome_fossil', 'douse_drive',  
    'dowsing_machine', 'draco_plate', 'dragon_fang', 'dragon_gem', 'dragon_memory', 'dragon_scale',  
    'dragon_skull', 'dragonium_z__bag', 'dragonium_z__held', 'dread_plate', 'dream_ball', 'dream_mail',  
    'dropped_item', 'dropped_item__yellow', 'dubious_disc', 'durin_berry', 'dusk_ball', 'dusk_stone',  
    'earth_plate', 'eevium_z__bag', 'eevium_z__held', 'eject_button', 'electirizer', 'electric_gem',  
    'electric_memory', 'electric_seed', 'electrium_z__bag', 'electrium_z__held', 'elevator_key', 'elixir',  
    'energy_powder', 'energy_root', 'enigma_berry', 'enigma_stone', 'enigmatic_card', 'eon_flute',  
    'eon_ticket', 'escape_rope', 'ether', 'everstone', 'eviolite', 'exp_share',  
    'expert_belt', 'explorer_kit', 'fab_mail', 'fairium_z__bag', 'fairium_z__held', 'fairy_gem',  
    'fairy_memory', 'fame_checker', 'fashion_case', 'fast_ball', 'favored_mail', 'festival_ticket',  
    'fighting_gem', 'fighting_memory', 'fightinium_z__bag', 'fightinium_z__held', 'figy_berry', 'fire_gem',  
    'fire_memory', 'fire_stone', 'firium_z__bag', 'firium_z__held', 'fishing_rod', 'fist_plate',  
    'flame_mail', 'flame_orb', 'flame_plate', 'float_stone', 'fluffy_tail', 'flying_gem',  
    'flying_memory', 'flyinium_z__bag', 'flyinium_z__held', 'focus_band', 'focus_sash', 'forage_bag', 
    'fresh_water', 'friend_ball', 'full_heal', 'full_incense', 'full_restore', 'galactic_key', 
    'galladite', 'ganlon_berry', 'garchompite', 'gardevoirite', 'gb_sounds', 'gengarite', 
    'genius_wing', 'ghost_gem', 'ghost_memory', 'ghostium_z__bag', 'ghostium_z__held', 'glalitite',  
    'glitter_mail', 'go_goggles', 'god_stone', 'gold_bottle_cap', 'gold_itemball', 'gold_teeth',  
    'good_rod', 'gooey_mulch', 'gracidea', 'gram_1', 'gram_2', 'gram_3',  
    'grass_gem', 'grass_mail', 'grass_memory', 'grassium_z__bag', 'grassium_z__held', 'grassy_seed',  
    'great_ball', 'green_apricorn', 'green_petal', 'green_scarf', 'green_shard', 'greet_mail',  
    'grepa_berry', 'grip_claw', 'griseous_orb', 'ground_gem', 'ground_memory', 'groundium_z__bag',  
    'groundium_z__held', 'growth_mulch', 'grubby_hanky', 'guard_spec', 'gyaradosite', 'haban_berry',  
    'harbor_mail', 'hard_stone', 'heal_ball', 'heal_powder', 'health_wing', 'heart_mail',  
    'heart_scale', 'heat_rock', 'heavy_ball', 'helix_fossil', 'heracronite', 'hm__fighting',  
    'hm__flying', 'hm__normal', 'hm__water', 'holo_caster', 'holo_caster__red', 'hondew_berry',  
    'honey', 'honor_of_kalos', 'houndoominite', 'hp_up', 'hyper_potion', 'iapapa_berry',  
    'ice_gem', 'ice_heal', 'ice_memory', 'ice_stone', 'icicle_plate', 'icium_z__bag',  
    'icium_z__held', 'icy_rock', 'ilimas_normalium_z', 'incinium_z__bag', 'incinium_z__held', 'inquiry_mail',  
    'insect_plate', 'intriguing_stone', 'iron', 'iron_ball', 'iron_plate', 'item_drop',  
    'item_urge', 'itemball', 'jaboca_berry', 'jade_orb', 'jaw_fossil', 'journal',  
    'kangaskhanite', 'kasib_berry', 'kebia_berry', 'kee_berry', 'kelpsy_berry', 'key_stone',  
    'key_to_room_1', 'key_to_room_2', 'key_to_room_4', 'key_to_room_6', 'kings_rock', 'kommonium_z__bag',  
    'kommonium_z__held', 'lagging_tail', 'lansat_berry', 'latiasite', 'latiosite', 'lava_cookie',  
    'lax_incense', 'leaf_stone', 'left_poke_ball', 'leftovers', 'lemonade', 'lens_case',  
    'leppa_berry', 'letter', 'level_ball', 'liberty_pass', 'liechi_berry', 'life_orb',  
    'lift_key', 'light_ball', 'light_clay', 'light_stone', 'like_mail', 'lock_capsule',  
    'looker_ticket', 'loot_sack', 'lopunnite', 'lost_item', 'love_ball', 'lucarionite',  
    'luck_incense', 'lucky_egg', 'lucky_punch', 'lum_berry', 'luminous_moss', 'lumiose_galette',  
    'lunalium_z__bag', 'lunalium_z__held', 'lunar_wing', 'lure_ball', 'lustrous_orb', 'luxury_ball',  
    'lycanium_z__bag', 'lycanium_z__held', 'mach_bike', 'machine_part', 'macho_brace', 'magma_emblem',  
    'magma_stone', 'magma_suit', 'magmarizer', 'magnet', 'mago_berry', 'magost_berry',  
    'makeup_bag', 'manectite', 'maranga_berry', 'marshadium_z__bag', 'marshadium_z__held', 'master_ball',  
    'mawilite', 'max_elixir', 'max_ether', 'max_potion', 'max_repel', 'max_revive',  
    'meadow_plate', 'mech_mail', 'medal_box', 'medichamite', 'mega_anchor', 'mega_anklet',  
    'mega_bracelet', 'mega_charm', 'mega_cuff', 'mega_glasses', 'mega_glove', 'mega_pendant',  
    'mega_ring', 'mega_stickpin', 'mega_tiara', 'member_card', 'mental_herb', 'metagrossite',  
    'metal_coat', 'metal_powder', 'meteorite', 'meteorite__2', 'meteorite__3', 'meteorite__4',  
    'meteorite_shard', 'metronome', 'mewnium_z__bag', 'mewnium_z__held', 'mewtwonite_x', 'mewtwonite_y',  
    'micle_berry', 'mimikium_z__bag', 'mimikium_z__held', 'mind_plate', 'miracle_seed', 'misty_seed',  
    'moomoo_milk', 'moon_ball', 'moon_flute', 'moon_stone', 'mosaic_mail', 'muscle_band',  
    'muscle_wing', 'mystery_egg', 'mystic_water', 'mysticticket', 'n_lunarizer', 'n_solarizer', 
    'nanab_berry', 'nest_ball', 'net_ball', 'never_melt_ice',  
    'nomel_berry', 'normal_gem', 'normalium_z__bag', 'normalium_z__held', 'nugget', 'oaks_letter',  
    'oaks_parcel', 'occa_berry', 'odd_incense', 'odd_keystone', 'old_amber', 'old_charm',  
    'old_gateau', 'old_rod', 'old_sea_map', 'oran_berry', 'orange_mail', 'orange_petal',  
    'oval_charm', 'oval_stone', 'pair_of_tickets', 'pal_pad', 'pamtre_berry', 'paralyze_heal',  
    'parcel', 'park_ball', 'pass', 'pass_orb', 'passho_berry', 'payapa_berry',  
    'pearl', 'pearl_string', 'pecha_berry', 'permit', 'persim_berry', 'petaya_berry',  
    'photo_album', 'pidgeotite', 'pikanium_z__bag', 'pikanium_z__held', 'pikashunium_z__bag', 'pikashunium_z__held',  
    'pinap_berry', 'pink_apricorn', 'pink_nectar', 'pink_petal', 'pink_scarf', 'pinsirite',  
    'pixie_plate', 'plasma_card', 'plume_fossil', 'poffin_case', 'point_card', 'poison_barb',  
    'poison_gem', 'poison_memory', 'poisonium_z__bag', 'poisonium_z__held', 'poke_ball', 'poke_doll',  
    'poke_flute', 'poke_radar', 'poke_toy', 'pokeblock_case', 'pokeblock_kit', 'pomeg_berry',  
    'potion', 'powder_jar', 'power_anklet', 'power_band', 'power_belt', 'power_bracer',  
    'power_herb', 'power_lens', 'power_plant_pass', 'power_weight', 'pp_max', 'pp_up',  
    'premier_ball', 'pretty_wing', 'primarium_z__bag', 'primarium_z__held', 'prism_scale', 'prison_bottle',  
    'professors_mask', 'profs_letter', 'prop_case', 'protective_pads', 'protector', 'protein',  
    'psychic_gem', 'psychic_memory', 'psychic_seed', 'psychium_z__bag', 'psychium_z__held', 'pure_incense',  
    'purple_nectar', 'purple_petal', 'qualot_berry', 'quick_ball', 'quick_claw', 'quick_powder',  
    'rabuta_berry', 'rage_candy_bar', 'rainbow_flower', 'rainbow_pass', 'rainbow_wing', 'rare_bone',  
    'rare_candy', 'rawst_berry', 'razor_claw', 'razor_fang', 'razz_berry', 'reaper_cloth',  
    'red_apricorn', 'red_card', 'red_chain', 'red_flute', 'red_nectar', 'red_orb',  
    'red_petal', 'red_scale', 'red_scarf', 'red_shard', 'relic_band', 'relic_copper',  
    'relic_crown', 'relic_gold', 'relic_silver', 'relic_statue', 'relic_vase', 'renamer_71.exe',  
    'repeat_ball', 'repel', 'reply_mail', 'reset_urge', 'resist_wing', 'retro_mail',  
    'reveal_glass', 'revival_herb', 'revive', 'rich_mulch', 'ride_pager', 'rindo_berry',  
    'ring_target', 'rm_1_key', 'rm_2_key', 'rm_4_key', 'rm_6_key', 'rock_gem',  
    'rock_incense', 'rock_memory', 'rockium_z__bag', 'rockium_z__held', 'rocky_helmet', 'roller_skates',  
    'root_fossil', 'rose_incense', 'roseli_berry', 'roto_bargain', 'roto_boost', 'roto_catch',  
    'roto_encounter', 'roto_exp_points', 'roto_friendship', 'roto_hatch', 'roto_hp_restore', 'roto_pp_restore',  
    'roto_prize_money', 'roto_stealth', 'rowap_berry', 'rsvp_mail', 'ruby', 'rule_book',  
    'sablenite', 'sachet', 'sacred_ash', 'safari_ball', 'safety_goggles', 'sail_fossil',  
    'salac_berry', 'salamencite', 'sapphire', 'scanner', 'sceptilite', 'scizorite',  
    'scope_lens', 'sea_incense', 'seal_bag', 'seal_case', 'secret_key', 'secret_potion',  
    'shadow_mail', 'shalour_sable', 'sharp_beak', 'sharpedonite', 'shed_shell', 'shell_bell',  
    'shiny_charm', 'shiny_stone', 'shoal_salt', 'shoal_shell', 'shock_drive', 'shuca_berry',  
    'silk_scarf', 'silph_scope', 'silver_powder', 'silver_wing', 'sitrus_berry', 'skull_fossil',  
    'sky_plate', 'slowbronite', 'slowpoke_tail', 'smoke_ball', 'smooth_rock', 'snorlium_z__bag',  
    'snorlium_z__held', 'snow_mail', 'snowball', 'soda_pop', 'soft_sand', 'solganium_z__bag',  
    'solganium_z__held', 'soot_sack', 'soothe_bell', 'soul_dew', 'space_mail', 'sparkling_stone',  
    'spell_tag', 'spelon_berry', 'splash_plate', 'spooky_plate', 'sport_ball', 'sprayduck',  
    'sprinklotad', 'squirt_bottle', 'ss_ticket', 'stable_mulch', 'star_piece', 'stardust',  
    'starf_berry', 'steel_gem', 'steel_mail', 'steel_memory', 'steelium_z__bag', 'steelium_z__held',  
    'steelixite', 'stick', 'sticky_barb', 'stone_plate', 'storage_key', 'storage_key__2',  
    'strange_souvenir', 'suite_key', 'sun_flute', 'sun_stone', 'super_potion', 'super_repel',  
    'super_rod', 'surge_badge', 'surprise_mulch', 'swampertite', 'sweet_heart', 'swift_wing',  
    'tamato_berry', 'tanga_berry', 'tapunium_z__bag', 'tapunium_z__held', 'tea', 'teachy_tv',  
    'terrain_extender', 'thanks_mail', 'thick_club', 'thunder_stone', 'tidal_bell', 'timer_ball',  
    'tiny_mushroom', 'tm__bug', 'tm__dark', 'tm__dragon', 'tm__electric', 'tm__fairy',  
    'tm__fighting', 'tm__fire', 'tm__flying', 'tm__ghost', 'tm__grass', 'tm__ground',  
    'tm__ice', 'tm__normal', 'tm__poison', 'tm__psychic', 'tm__rock', 'tm__steel',  
    'tm__water', 'tm_case', 'tmv_pass', 'town_map', 'toxic_orb', 'toxic_plate',  
    'travel_trunk', 'travel_trunk__silver', 'tri_pass', 'tropic_mail', 'tunnel_mail', 'twisted_spoon',  
    'tyranitarite', 'ultra_ball', 'ultranecrozium_z__bag', 'ultranecrozium_z__hld', 'unknown', 'unown_report',  
    'up_grade', 'venusaurite', 'vs_recorder', 'vs_seeker', 'wacan_berry', 'wailmer_pail',  
    'water_gem', 'water_memory', 'water_stone', 'waterium_z__bag', 'waterium_z__held', 'watmel_berry',  
    'wave_incense', 'wave_mail', 'weakness_policy', 'wepear_berry', 'whipped_dream', 'white_apricorn',  
    'white_flute', 'white_herb', 'wide_lens', 'wiki_berry', 'wise_glasses', 'wood_mail',  
    'works_key', 'x_accuracy', 'x_accuracy_2', 'x_accuracy_3', 'x_accuracy_6', 'x_attack',  
    'x_attack_2', 'x_attack_3', 'x_attack_6', 'x_defense', 'x_defense_2', 'x_defense_3',  
    'x_defense_6', 'x_sp_atk', 'x_sp_atk_2', 'x_sp_atk_3', 'x_sp_atk_6', 'x_sp_def',  
    'x_sp_def_2', 'x_sp_def_3', 'x_sp_def_6', 'x_speed', 'x_speed_2', 'x_speed_3',  
    'x_speed_6', 'xtransceiver', 'xtransceiver__yellow', 'yache_berry', 'yellow_apricorn', 'yellow_flute',  
    'yellow_nectar', 'yellow_petal', 'yellow_scarf', 'yellow_shard', 'z_power_ring', 'z_ring',  
    'zap_plate', 'zinc', 'zoom_lens', 'zygarde_cube' 
    ];

items.forEach(item => {
    const elements = document.querySelectorAll(`.${item}`);

    elements.forEach(element => {
        loadComponent(`/pokemon/items/${item}.html`, element);
    });
});


// for pokemon web chain link
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
        loadComponent(`/pokemon/pkm/${pokemon}.html`, element);
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

// Get the modal
var modal = document.getElementById("myModal");

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// const menu = document.querySelector('.menu');
// const navLeft = document.querySelector('.nav-left');

// menu.addEventListener('click', () => {
//     menu.classList.toggle('active');
//     navLeft.classList.toggle('active');
// });
