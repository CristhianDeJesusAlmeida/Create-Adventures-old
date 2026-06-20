// Gatilho oficial da versão moderna do LootJS para carregar os modificadores
LootJS.modifiers((event) => {

    // CORRIGIDO: Mudado de addLootTableModifier para addLootModifier conforme a API da 1.21.1
    event.addLootModifier(/create_structures:.*/)
        .replaceStack('create:brass_casing', 'create:andesite_casing')
        .replaceStack('create:precision_mechanism', 'create:electron_tube')
        .replaceStack('create:brass_ingot', 'create:zinc_ingot')
        
        .modifyLoot('minecraft:iron_ingot', (stack) => stack.withCount(Math.max(1, Math.floor(stack.getCount() / 2))))
        .modifyLoot('minecraft:gold_ingot', (stack) => stack.withCount(Math.max(1, Math.floor(stack.getCount() / 2))));

});
