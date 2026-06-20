ServerEvents.recipes(event => {

    // =========================================================================
    // ⚙️ CATEGORIA: MÁQUINAS E ESTRUTURAS (ORITECH)
    // =========================================================================
    event.shaped('oritech:machine_frame_basic', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'kubejs:dragon_infused_core'
    })


    // =========================================================================
    // 🔮 CATEGORIA: PROGRESSÃO E MAGIA (TENSURA)
    // =========================================================================
    event.shaped('kubejs:dragon_infused_core', [
        'CDC',
        'DMD',
        'CDC'
    ], {
        C: 'create:brass_ingot',
        D: 'minecraft:diamond',
        M: 'tensura:magicule_fluid_bottle' 
    })


    // =========================================================================
    // ⚔️ CATEGORIA: SERRALHERIA E COMBATE (EPIC KNIGHTS / CREATE)
    // =========================================================================
    event.recipes.create.sequenced_assembly([
        'kubejs:cataclysmic_mechanism'
    ], 'create:precision_mechanism', [
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:steel_sheet']),
        event.recipes.createPressing('create:incomplete_precision_mechanism', 'create:incomplete_precision_mechanism')
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(3)


    // =========================================================================
    // 💾 CATEGORIA: ENGENHARIA DIGITAL (APPLIED ENERGISTICS 2)
    // =========================================================================
    event.custom({
        type: "ae2:inscriber",
        mode: "inscribe",
        ingredients: {
            top: { item: "ae2:printed_engineering_processor" },
            middle: { item: "kubejs:kinetic_flux_matrix" },
            bottom: { item: "ae2:engineering_processor_press" }
        },
        result: { item: "ae2:logic_processor" }
    })

})
