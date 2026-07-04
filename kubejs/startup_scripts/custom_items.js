StartupEvents.registry('item', event => {
    // Item para a usar no oritech (Núcleo Oritech)
    event.create('dragon_infused_core')
         .displayName('Núcleo Mecânico Infundido com Dragão')
         .tooltip('§7Energia elemental estabilizada por engenharia mecânica.');

    // Item para a oara usar em maquinas avançadas do oritech (Componente de Bosses)
    event.create('cataclysmic_mechanism')
         .displayName('Mecanismo Cataclísmico')
         .tooltip('§cSuporta pressões extremas e energias colossais.');

    // Item para a usar no AE2 (Filtro/Matriz do AE2)
  
    // Item intermediário (bruto - saída do primeiro passo da Inscriber)
    event.create('kubejs:kinetic_flux_matrix_raw')
        .displayName('Raw Kinetic Flux Matrix')
        .texture('kubejs:item/kinetic_flux_matrix_raw')
        .rarity('UNCOMMON');

    // Item final (saída do segundo passo da Inscriber)
    event.create('kubejs:kinetic_flux_matrix')
        .displayName('Kinetic Flux Matrix')
        .texture('kubejs:item/kinetic_flux_matrix')
        .rarity('RARE')
        .glow(true); // Deixa o item com brilho encantado para parecer mais poderoso!

});
