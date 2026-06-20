// Shaped Recipes Handler

/**
 * @param {Internal.RecipeEventJS} event
 * @param {string|Item} output
 * @param {Array<string|null|undefined>} ingredientsArray
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
    
    let cleanedIngredient;
    let itemString;
    let char;

    ingredientsArray.forEach(inputItem => {
        cleanedIngredient = (inputItem || '').trim();
        
        if (cleanedIngredient.length > 0 && !(cleanedIngredient in itemToLetter)) {
            const letter = allLetters[nextLetterIndex++];
            itemToLetter[cleanedIngredient] = letter;
            letterToItem[letter] = cleanedIngredient;
        }
    });

    const pattern = [];
    let currentPatternRow = '';
    
    for (let i = 0; i < totalIngredients; i++) {
        itemString = (ingredientsArray[i] || '').trim(); 
        
        if (itemString.length === 0) {
            char = ' '; 
        } else {
            char = itemToLetter[itemString]; 
        }

        currentPatternRow += char;
        
        if ((i + 1) % width === 0) {
            pattern.push(currentPatternRow);
            currentPatternRow = '';
        }
    }

    event.shaped(output, pattern, letterToItem);
    console.log(`[RobustShaped] Created SHAPED (${width}x${width}) recipe for ${output}`);
};

const shapelessRecipes = [
    // Shapeless Recipe
      {
        output: 'ars_creo:starbuncle_wheel',
        input: [
            'create:water_wheel', 
            'ars_nouveau:starbuncle_shards'
        ]
    }
]

// MAIN RECIPE EVENT
ServerEvents.recipes(event => {

    /*shapedRecipes.forEach(recipe => {
        robustShaped(event, recipe.output, recipe.input);
    });*/

    shapelessRecipes.forEach(recipe => {
        event.shapeless(recipe.output, recipe.input);
    });

});