//------------------------------------------------------------------------------------------------------------------------------------------------
// Codes to Remove Recipes -
//------------------------------------------------------------------------------------------------------------------------------------------------
// Removes recipes based on different factors, it also fixes problems with automatic recipe generation from Create by changing the IDs of some
// recipes and suffixing them with '_manual_only'
//------------------------------------------------------------------------------------------------------------------------------------------------

// Remove by Output
// - Add the item id of the output item of the recipe and all recipes with that output will be removed
const byOutput = [
    'ars_creo:starbuncle_wheel',
]
//---[CODE]---------------------------------------------------------------------------------------------------------------------------------------

// The remove event
ServerEvents.recipes(event => {
	// Run the normal removes
    byOutput.forEach(item => event.remove({ output: item }));
});