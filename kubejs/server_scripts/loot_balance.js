// Gatilho oficial da versão moderna do LootJS para carregar os modificadores
LootJS.modifiers((event) => {

    // Seleciona todas as loot tables do mod create_structures
    event.addTableModifier(/create_structures:.*/)
    
        // Substituição simples de itens
        .replaceLoot('create:brass_casing', 'create:andesite_casing')
        .replaceLoot('create:precision_mechanism', 'create:electron_tube')
        .replaceLoot('create:brass_ingot', 'create:zinc_ingot')
        
        // Modificação de quantidade com a sintaxe moderna (stack.count)
        .modifyLoot('minecraft:iron_ingot', (stack) => {
            let newCount = Math.max(1, Math.floor(stack.count / 2));
            return stack.withCount(newCount);
        })
        .modifyLoot('minecraft:gold_ingot', (stack) => {
            let newCount = Math.max(1, Math.floor(stack.count / 2));
            return stack.withCount(newCount);
        });

});