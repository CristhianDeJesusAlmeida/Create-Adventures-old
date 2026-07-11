StartupEvents.registry('item', event => {
    
    // 🔮 Núcleo Oritech (Final de jogo / Magia Avançada)
    event.create('dragon_infused_core')
         .rarity('EPIC'); // Roxo (Muito Raro/Épico)

    // ⚔️ Componente de Bosses (Desafio de Combate)
    event.create('cataclysmic_mechanism')
         .rarity('RARE'); // Azul Escuro (Raro)

    // 💾 Item intermediário da AE2
    event.create('kinetic_flux_matrix_raw')
         .texture('kubejs:item/kinetic_flux_matrix_raw')
         .rarity('UNCOMMON'); // Amarelo/Verde (Incomum)

    // 💾 Item final da AE2
    event.create('kinetic_flux_matrix')
         .texture('kubejs:item/kinetic_flux_matrix')
         .rarity('RARE') // Azul Escuro (Raro)
         .glow(true); // Brilho de encantamento ativo

});