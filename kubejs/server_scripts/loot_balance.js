// Gatilho oficial da versão 3.7.0 do LootJS para carregar os modificadores
LootJS.modifiers((event) => {

    // CORREÇÃO: Alvo unificado usando "create_structures" para interceptar baús normais e do Lootr juntos!
    event.addLootTableModifier(/create_structures:.*/)
        .replaceStack('create:brass_casing', 'create:andesite_casing')
        .replaceStack('create:precision_mechanism', 'create:electron_tube')
        .replaceStack('create:brass_ingot', 'create:zinc_ingot')
        
        .modifyLoot('minecraft:iron_ingot', (stack) => stack.withCount(Math.max(1, Math.floor(stack.getCount() / 2))))
        .modifyLoot('minecraft:gold_ingot', (stack) => stack.withCount(Math.max(1, Math.floor(stack.getCount() / 2))));

});
