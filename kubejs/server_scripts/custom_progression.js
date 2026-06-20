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
    // ⚙️ PROGRESSÃO INDUSTRIAL: ESCADA DE MACHINE CORES (ORITECH)
    // =========================================================================

    // TIER 3: Improved Machine Core
    // Base: Machine Core 2 + Latão do Create
    event.shaped('oritech:machine_core_3', [
        'CBC',
        'BMB',
        'CBC'
    ], {
        C: 'create:brass_ingot',
        B: 'create:brass_sheet',
        M: 'oritech:machine_core_2' // Exige o Core 2!
    });

    // TIER 4: Advanced Machine Core
    // Base: Machine Core 3 + Matriz de Fluxo Cinético do AE2 que você criou
    event.shaped('oritech:machine_core_4', [
        'ECE',
        'CMC',
        'ECE'
    ], {
        E: 'create:electron_tube',
        C: 'kubejs:kinetic_flux_matrix', // Seu item místico da prensa!
        M: 'oritech:machine_core_3'      // Exige o Core 3!
    });

    // TIER 5: Elite Machine Core
    // Base: Machine Core 4 + Itens Avançados do Oritech
    event.shaped('oritech:machine_core_5', [
        'RCR',
        'CMC',
        'RCR'
    ], {
        R: 'oritech:small_battery',     // Exemplo de item técnico do Oritech
        C: 'oritech:nickel_ingot',
        M: 'oritech:machine_core_4'     // Exige o Core 4!
    });

    // TIER 6: Ultra Machine Core
    // Base: Machine Core 5 + Mecanismo Cataclísmico das esteiras
    event.shaped('oritech:machine_core_6', [
        'ECE',
        'CMC',
        'ECE'
    ], {
        E: 'oritech:biosteel_ingot',
        C: 'kubejs:cataclysmic_mechanism', // Seu item industrial pesado!
        M: 'oritech:machine_core_5'         // Exige o Core 5!
    });

    // TIER 7: Ultimate Machine Core (O FIM DA JORNADA)
    // Base: Machine Core 6 + O ápice do poder do Tensura e da Engenharia
    event.shaped('oritech:machine_core_7', [
        'DND',
        'NMN',
        'DND'
    ], {
        D: 'minecraft:netherite_ingot',
        N: 'kubejs:dragon_infused_core',  // Seu item lendário de Magícula!
        M: 'oritech:machine_core_6'       // Exige o Core 6!
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