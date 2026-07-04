// ============================================================================
// 🎲 LOOT TABLE MODIFIERS - LootJS 3.x (Minecraft 1.21.1 / NeoForge)
// ============================================================================
// Modifica os baús de estruturas do Create para se adequar à progressão
// do modpack, substituindo itens avançados por versões mais simples e
// reduzindo a quantidade de recursos preciosos encontrados.
// ============================================================================

LootJS.modifiers((event) => {

    // =========================================================================
    // 🏗️ ESTRUTURAS DO CREATE (create_structures)
    // =========================================================================
    // Seleciona TODAS as loot tables do mod Create Structures via Regex
    event.addTableModifier(/^create_structures:.*/)

        // -----------------------------------------------------------------
        // 🔄 SUBSTITUIÇÃO DE ITENS
        // Itens avançados são substituídos por versões mais básicas,
        // forçando o jogador a fabricá-los manualmente via progressão.
        // -----------------------------------------------------------------
        .replaceLoot('create:brass_casing',         'create:andesite_casing')
        .replaceLoot('create:precision_mechanism',  'create:electron_tube')
        .replaceLoot('create:brass_ingot',          'create:zinc_ingot')

        // -----------------------------------------------------------------
        // ⚖️ REDUÇÃO DE QUANTIDADE
        // Reduz recursos preciosos à metade (mínimo de 1 unidade).
        // Isso torna as estruturas menos lucrativas e valoriza a mineração.
        // -----------------------------------------------------------------
        .modifyLoot('minecraft:iron_ingot', (stack) => {
            let newCount = Math.max(1, Math.floor(stack.count / 2));
            return stack.withCount(newCount);
        })

        .modifyLoot('minecraft:gold_ingot', (stack) => {
            let newCount = Math.max(1, Math.floor(stack.count / 2));
            return stack.withCount(newCount);
        });

});