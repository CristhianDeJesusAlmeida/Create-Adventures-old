ServerEvents.recipes(event => {

    // ==========================================
    // ⚙️ 1. MÁQUINAS E ESTRUTURAS (ORITECH)
    // ==========================================
    // ID: oritech:basic_machine_frame
    event.shaped('oritech:basic_machine_frame', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'kubejs:dragon_infused_core'
    });


    // ==========================================
    // 🔮 2. PROGRESSÃO E MAGIA (TENSURA)
    // ==========================================
    // ID: tensura:magic_bottle
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
    // ⚔️ 3. ESTEIRAS INDUSTRIAIS (CREATE 1.21.1)
    // ==========================================
    // CORRIGIDO: Chapa de aço substituída pelo ID correto do Create nativo: 'create:iron_sheet'
    event.recipes.create.pressing('kubejs:cataclysmic_mechanism', 'create:iron_sheet');


    // ==========================================
    // 💾 4. ENGENHARIA DIGITAL (APPLIED ENERGISTICS 2)
    // ==========================================
    // Sintaxe nativa estável do Inscriber sem erros de JSON
    event.recipes.ae2.inscriber('kubejs:kinetic_flux_matrix', 'ae2:printed_engineering_processor', 'ae2:engineering_processor_press');

});
