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
    event.create('kinetic_flux_matrix')
         .displayName('Matriz de Fluxo Cinético')
         .tooltip('§bConverte torque mecânico em dados flutuantes digitais.');
});
