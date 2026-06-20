ServerEvents.recipes(event => {
    
    // ==========================================
    // Montagem Sequencial do Núcleo Oritech
    // ==========================================
    // Passos: Mecanismo de Precisão -> Sangue de Dragão -> Pó de Ars Nouveau -> Prensa
    event.recipes.create.sequenced_assembly([
        'kubejs:dragon_infused_core' // Item de saída customizado
    ], 'create:precision_mechanism', [ // Item base de entrada
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'iceandfire:dragonblood_fire']), // Sangue de Dragão
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'ars_nouveau:source_gem']),   // Gem/Pó de Ars Nouveau
        event.recipes.createPressing('create:incomplete_precision_mechanism', 'create:incomplete_precision_mechanism')                               // Prensa Mecânica
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(1);

    // [Receita da Máquina do Oritech]
    // Aqui substituímos a receita padrão do bloco básico do Oritech pelo nosso núcleo
    event.remove({ output: 'oritech:basic_machine_frame' });
    event.shaped('oritech:basic_machine_frame', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:iron_ingot', // Mude para as placas de metal do Oritech se preferir
        B: 'kubejs:dragon_infused_core'
    });


    // ==========================================
    // OMecanismo Cataclísmico (Para Armas Finais)
    // ==========================================
    // Passos: Placa de Aço -> Fragmentos/Drops de Bosses -> Prensa
    event.recipes.create.sequenced_assembly([
        'kubejs:cataclysmic_mechanism'
    ], 'epic_knights:steel_plate', [ 
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'cataclysm:witherite_ingot']), // Drop de Boss Cataclysm
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'tensura:magicule_bottle']),   // Item do Tensura
        event.recipes.createPressing('create:incomplete_precision_mechanism', 'create:incomplete_precision_mechanism')
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(2); // Passa 2 vezes na esteira


    // ==========================================
    // OPÇÃO 3: Amarrando o AE2 sem inutilizar os Processadores
    // ==========================================
    // Criamos a "Matriz Cinética" na prensa/esteira do Create
    event.recipes.create.sequenced_assembly([
        'kubejs:kinetic_flux_matrix'
    ], 'ae2:certus_quartz_crystal', [
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:electron_tube']),
        event.recipes.createPressing('create:incomplete_precision_mechanism', 'create:incomplete_precision_mechanism')
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(1);

    // Agora, usamos essa Matriz para criar os Circuitos Impressos do AE2 nas próprias máquinas dele!
    // Exemplo: Mudar a receita do Silício Impresso ou Processador de Engenharia no Inscriber do AE2
    event.remove({ output: 'ae2:printed_engineering_processor' });
    
    // Adiciona a receita de volta no Inscriber exigindo a nossa matriz criada no Create
    // Nota: A sintaxe exata do Inscriber pode variar de acordo com o addon "Applied KubeJS" que você possui.
    event.recipes.ae2.inscriber('ae2:printed_engineering_processor', 'ae2:engineering_processor_press', 'kubejs:kinetic_flux_matrix');
});
