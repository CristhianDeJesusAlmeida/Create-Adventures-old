ServerEvents.recipes(event => {

    // ==========================================
    // ⚙️ 1. PROGRESSÃO DE MACHINE CORES (ORITECH)
    // ==========================================

    // TIER 2: Basic Machine Core
    event.shaped('oritech:machine_core_2', [
        'AAA',
        'CBC',
        'AAA'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'oritech:machine_core_1',
        C: 'kubejs:dragon_infused_core'     
    });

    // TIER 3: Improved Machine Core
    event.shaped('oritech:machine_core_3', [
        'CBC',
        'BMB',
        'CBC'
    ], {
        C: 'create:brass_ingot',
        B: 'create:brass_sheet',
        M: 'oritech:machine_core_2'
    });

    // TIER 4: Advanced Machine Core
    event.shaped('oritech:machine_core_4', [
        'ECE',
        'CMC',
        'ECE'
    ], {
        E: 'create:electron_tube',
        C: 'kubejs:kinetic_flux_matrix',
        M: 'oritech:machine_core_3'
    });

    // TIER 5: Elite Machine Core
    // CORRIGIDO: ID ajustado para 'oritech:basic_battery' conforme você identificou!
    event.shaped('oritech:machine_core_5', [
        'RCR',
        'CMC',
        'RCR'
    ], {
        R: 'oritech:basic_battery',
        C: 'oritech:nickel_ingot',
        M: 'oritech:machine_core_4'
    });

    // TIER 6: Ultra Machine Core
    event.shaped('oritech:machine_core_6', [
        'ECE',
        'CMC',
        'ECE'
    ], {
        E: 'oritech:biosteel_ingot',
        C: 'kubejs:cataclysmic_mechanism',
        M: 'oritech:machine_core_5'
    });

    // TIER 7: Ultimate Machine Core
    event.shaped('oritech:machine_core_7', [
        'DND',
        'NMN',
        'DND'
    ], {
        D: 'minecraft:netherite_ingot',
        N: 'kubejs:dragon_infused_core',
        M: 'oritech:machine_core_6'
    });


    // ==========================================
    // 🔮 2. PROGRESSÃO E MAGIA (TENSURA)
    // ==========================================
    event.shaped('kubejs:dragon_infused_core', [
        'CDC',
        'DMD',
        'CDC'
    ], {
        C: 'create:brass_ingot',
        D: 'minecraft:diamond',
        M: 'tensura:magic_bottle' 
    });


    // ==========================================
    // ⚔️ 3. ESTEIRAS INDUSTRIAIS (CREATE)
    // ==========================================
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
