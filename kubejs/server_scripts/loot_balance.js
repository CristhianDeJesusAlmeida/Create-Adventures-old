// Gatilho oficial global para carregar os modificadores do LootJS de forma estável
LootJS.modifiers((event) => {

    // Alvo: Todas as tabelas de loot do mod de estruturas do Create
    event.addLootTableModifier(/create_structures:.*/)
        // Substitui itens avançados por equivalentes básicos de forma justa
        .replaceStack('create:brass_casing', 'create:andesite_casing')
        .replaceStack('create:precision_mechanism', 'create:electron_tube')
        .replaceStack('create:brass_ingot', 'create:zinc_ingot')
        
        // Reduz a quantidade de metais valiosos pela metade para balancear
        .modifyLoot('minecraft:iron_ingot', (stack) => stack.withCount(Math.max(1, Math.floor(stack.getCount() / 2))))
        .modifyLoot('minecraft:gold_ingot', (stack) => stack.withCount(Math.max(1, Math.floor(stack.getCount() / 2))));

});
