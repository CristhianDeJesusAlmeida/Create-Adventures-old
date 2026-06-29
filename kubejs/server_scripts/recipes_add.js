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

    // Transforma tudo em string de forma segura para não dar erro de .trim() com objetos
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
    /* 
    Exemplo de uso:
    {
        output: 'minecraft:furnace',
        input: [
            '#minecraft:stone_crafting_materials', '#minecraft:stone_crafting_materials', '#minecraft:stone_crafting_materials',
            '#minecraft:stone_crafting_materials', '',                                     '#minecraft:stone_crafting_materials',
            '#minecraft:stone_crafting_materials', '#minecraft:stone_crafting_materials', '#minecraft:stone_crafting_materials'
        ]
    }
    */
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

});