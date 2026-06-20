ServerEvents.recipes(event => {

    // =========================================================================
    // ⚙️ 1. TECNOLOGIA AUTOMATIZADA (ORITECH PROGRESSION)
    // =========================================================================
    // EVOLUÇÃO: O jogador pega o Core Primitivo (1) e usa seu Núcleo do Dragão para transformá-lo no Core Básico (2)
    event.shaped('oritech:machine_core_2', [
        'AAA',
        'CBC',
        'AAA'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'oritech:machine_core_1',         // Primitive Machine Core como base!
        C: 'kubejs:dragon_infused_core'     // O seu item customizado místico!
    });


    // =========================================================================
    // 🔮 2. PROGRESSÃO E MAGIA (TENSURA)
    // =========================================================================
    // Cria o seu Núcleo do Dragão usando a Garrafa Mágica corrigida
    event.shaped('kubejs:dragon_infused_core', [
        'CDC',
        'DMD',
        'CDC'
    ], {
        C: 'create:brass_ingot',
        D: 'minecraft:diamond',
        M: 'tensura:magic_bottle' 
    });


    // =========================================================================
    // ⚔️ 3. ESTEIRAS INDUSTRIAIS (CREATE NATAL 1.21.1)
    // =========================================================================
    // Pressiona o Mecanismo de Precisão com a Chapa de Ferro correta do Create
    event.recipes.create.pressing('kubejs:cataclysmic_mechanism', 'create:iron_sheet');


    // =========================================================================
    // 💾 4. ENGENHARIA DIGITAL (APPLIED ENERGISTICS 2)
    // =========================================================================
    // CORREÇÃO: Sintaxe oficial da API do AE2 para alinhar Moldes (Top/Bottom) e o Item do meio (Middle)
    event.recipes.ae2.inscriber(
        'kubejs:kinetic_flux_matrix',             // ITEM DE SAÍDA (O seu item customizado!)
        'ae2:printed_engineering_processor',       // ITEM CENTRAL (Slot do meio)
        'ae2:engineering_processor_press',         // MOLDE SUPERIOR (Slot de cima)
        'ae2:silicon_press'                        // MOLDE INFERIOR (Slot de baixo - mude se quiser colocar outra prensa)
    );
    
});