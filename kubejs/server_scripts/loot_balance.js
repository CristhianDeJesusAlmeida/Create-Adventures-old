<<<<<<< HEAD
// CORREÇÃO: "lootjs" em minúsculo conforme a API oficial estável da 1.21.1
lootjs.modifiers((event) => {
=======
// Gatilho oficial global para carregar os modificadores do LootJS de forma estável
LootJS.modifiers((event) => {
>>>>>>> 0ee5cb383828c1693d0b92b14bb770dba7890b38

    // Alvo: Todas as tabelas de loot do mod de estruturas do Create
    event.addLootTableModifier(/create_structures:.*/)
        .replaceStack('create:brass_casing', 'create:andesite_casing')
        .replaceStack('create:precision_mechanism', 'create:electron_tube')
        .replaceStack('create:brass_ingot', 'create:zinc_ingot')
        
        .modifyLoot('minecraft:iron_ingot', (stack) => stack.withCount(Math.max(1, Math.floor(stack.getCount() / 2))))
        .modifyLoot('minecraft:gold_ingot', (stack) => stack.withCount(Math.max(1, Math.floor(stack.getCount() / 2))));

});
