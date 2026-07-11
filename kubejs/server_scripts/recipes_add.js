// Shaped Recipes Handler

/**
 * @param {Internal.RecipeEventJS} event
 * @param {string|Item} output
 * @param {Array<string|null|undefined|Item>} ingredientsArray
 */
const robustShaped = (event, output, ingredientsArray) => {
    const totalIngredients = ingredientsArray.length;
    
    if (totalIngredients !== 4 && totalIngredients !== 9) {
        console.error(`[RobustShaped] Recipe for ${output} failed: Input array must be 4 or 9 elements. Found ${totalIngredients}.`);
        return;
    }

    const width = (totalIngredients === 9) ? 3 : 2;
    const allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    
    const letterToItem = {};
    const itemToLetter = {};
    let nextLetterIndex = 0;

    const safeIngredients = ingredientsArray.map(item => {
        if (!item) return '';
        return (typeof item === 'string') ? item.trim() : item.toString().trim();
    });

    safeIngredients.forEach(cleanedIngredient => {
        if (cleanedIngredient.length > 0 && !(cleanedIngredient in itemToLetter)) {
            const letter = allLetters[nextLetterIndex++];
            itemToLetter[cleanedIngredient] = letter;
            letterToItem[letter] = cleanedIngredient;
        }
    });

    const pattern = [];
    let currentPatternRow = '';
    
    for (let i = 0; i < totalIngredients; i++) {
        let itemString = safeIngredients[i]; 
        let char = (itemString.length === 0) ? ' ' : itemToLetter[itemString];

        currentPatternRow += char;
        
        if ((i + 1) % width === 0) {
            pattern.push(currentPatternRow);
            currentPatternRow = '';
        }
    }

    event.shaped(output, pattern, letterToItem);
    console.log(`[RobustShaped] Created SHAPED (${width}x${width}) recipe for ${output}`);
};

// Array de Receitas Com Forma (Grid 2x2 ou 3x3 em formato linear)
const shapedRecipes = [
    // TIER 2: Basic Machine Core
    {
        output: 'oritech:machine_core_2',
        input: [
            'minecraft:iron_ingot', 'minecraft:iron_ingot',             'minecraft:iron_ingot',
            'kubejs:cataclysmic_mechanism', 'oritech:machine_core_1',   'kubejs:cataclysmic_mechanism',
            'minecraft:iron_ingot', 'minecraft:iron_ingot',             'minecraft:iron_ingot'
        ]
    },
    // TIER 3: Improved Machine Core
    {
        output: 'oritech:machine_core_3',
        input: [
            'create:brass_ingot',   'create:brass_sheet',       'create:brass_ingot',
            'create:brass_sheet',   'oritech:machine_core_2',   'create:brass_sheet',
            'create:brass_ingot',   'create:brass_sheet',       'create:brass_ingot'
        ]
    },
    // TIER 4: Advanced Machine Core
    {
        output: 'oritech:machine_core_4',
        input: [
            'create:electron_tube',         'kubejs:kinetic_flux_matrix',   'create:electron_tube',
            'kubejs:kinetic_flux_matrix',   'oritech:machine_core_3',       'kubejs:kinetic_flux_matrix',
            'create:electron_tube',         'kubejs:kinetic_flux_matrix',   'create:electron_tube'
        ]
    },
    // TIER 5: Elite Machine Core
    {
        output: 'oritech:machine_core_5',
        input: [
            'oritech:basic_battery',    'oritech:nickel_ingot',     'oritech:basic_battery',
            'oritech:nickel_ingot',     'oritech:machine_core_4',   'oritech:nickel_ingot',
            'oritech:basic_battery',    'oritech:nickel_ingot',     'oritech:basic_battery'
        ]
    },
    // TIER 6: Ultra Machine Core
    {
        output: 'oritech:machine_core_6',
        input: [
            'oritech:biosteel_ingot',       'kubejs:dragon_infused_core',   'oritech:biosteel_ingot',
            'kubejs:dragon_infused_core',   'oritech:machine_core_5',       'kubejs:dragon_infused_core',
            'oritech:biosteel_ingot',       'kubejs:dragon_infused_core',   'oritech:biosteel_ingot'
        ]
    },
    // TIER 7: Ultimate Machine Core
    {
        output: 'oritech:machine_core_7',
        input: [
            'minecraft:netherite_ingot',    'kubejs:dragon_infused_core',   'minecraft:netherite_ingot',
            'kubejs:dragon_infused_core',   'oritech:machine_core_6',       'kubejs:dragon_infused_core',
            'minecraft:netherite_ingot',    'kubejs:dragon_infused_core',   'minecraft:netherite_ingot'
        ]
    },
    // 🔮 Dragon Infused Core
    {
        output: 'kubejs:dragon_infused_core',
        input: [
            'create:brass_ingot',   'minecraft:diamond',        'create:brass_ingot',
            'minecraft:diamond',    'ars_nouveau:source_gem',   'minecraft:diamond',
            'create:brass_ingot',   'minecraft:diamond',        'create:brass_ingot'
        ]
    }
];

// Array de Receitas Sem Forma (Shapeless)
const shapelessRecipes = [
    {
        output: 'ars_creo:starbuncle_wheel',
        input: [
            'create:water_wheel', 
            'ars_nouveau:starbuncle_shards'
        ]
    }
];

// MAIN RECIPE EVENT
ServerEvents.recipes(event => {

    // Registra todas as receitas robustas (Grid 2x2 e 3x3)
    shapedRecipes.forEach(recipe => {
        robustShaped(event, recipe.output, recipe.input);
    });

    // Registra todas as receitas sem forma
    shapelessRecipes.forEach(recipe => {
        event.shapeless(recipe.output, recipe.input);
    });

    // =========================================================================
    // ⚙️ EVENTOS DE MÁQUINAS ESPECÍFICAS (CREATE & AE2)
    // =========================================================================
    
    // Create Pressing (Mantido fora da array por usar sintaxe de máquina do Create)
    event.recipes.create.pressing('kubejs:cataclysmic_mechanism', 'create:iron_sheet');

    // AE2 Inscriber (Mantido fora por usar o event.custom nativo que você validou)
    event.custom({
        type: "ae2:inscriber",
        mode: "inscribe",
        ingredients: {
            top: { item: "ae2:engineering_processor_press" },       
            middle: { item: "ae2:printed_engineering_processor" }
        },
        result: { 
            id: "kubejs:kinetic_flux_matrix_raw",
            count: 1 
        }                 
    });

    event.custom({
        type: "ae2:inscriber",
        mode: "inscribe",
        ingredients: {
            top: { item: "ae2:silicon_press" },       
            middle: { item: "kubejs:kinetic_flux_matrix_raw" }
        },
        result: {
            id: "kubejs:kinetic_flux_matrix",
            count: 1 
        }
    });

});