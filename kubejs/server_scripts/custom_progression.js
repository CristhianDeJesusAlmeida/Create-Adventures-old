ServerEvents.recipes(event => {

    // =========================================================================
    // ⚙️ 1. PROGRESSÃO DE MACHINE CORES (ORITECH)
    // =========================================================================

    // TIER 2: Basic Machine Core
    event.shaped('oritech:machine_core_2', [
        'AAA',
        'CBC',
        'AAA'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'oritech:machine_core_1',
        C: 'kubejs:cataclysmic_mechanism'
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
        C: 'kubejs:dragon_infused_core',
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


    // =========================================================================
    // 🔮 2. PROGRESSÃO E MAGIA (TENSURA)
    // =========================================================================
    event.shaped('kubejs:dragon_infused_core', [
        'CDC',
        'DMD',
        'CDC'
    ], {
        C: 'create:brass_ingot',
        D: 'minecraft:diamond',
        M: 'ars_nouveau:source_gem'
    });


    // =========================================================================
    // ⚔️ 3. ESTEIRAS INDUSTRIAIS (CREATE)
    // =========================================================================
    event.recipes.create.pressing('kubejs:cataclysmic_mechanism', 'create:iron_sheet');

    // =========================================================================
    // 💾 4. ENGENHARIA DIGITAL (APPLIED ENERGISTICS 2)
    // =========================================================================
    // Correção: Adicionado 'count: 1' para evitar o erro EncoderException
    // Primeiro passo: usa o Engineering Press
    event.custom({
        type: "ae2:inscriber",
        mode: "inscribe",
        ingredients: {
            top: { item: "ae2:engineering_processor_press" },       
            middle: { item: "ae2:printed_engineering_processor" }
        },
        result: { 
            id: "kubejs:kinetic_flux_matrix_raw", // item intermediário
            count: 1 
        }                 
    });

        // Segundo passo: usa o Silicon Press no resultado anterior
    event.custom({
        type: "ae2:inscriber",
        mode: "inscribe",
        ingredients: {
            top: { item: "ae2:silicon_press" },       
            middle: { item: "kubejs:kinetic_flux_matrix_raw" }
        },
        result: {
            id: "kubejs:kinetic_flux_matrix",
            count: 1 
        }
    });

});