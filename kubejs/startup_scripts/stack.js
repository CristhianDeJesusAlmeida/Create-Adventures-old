ItemEvents.modification(event => {
    // List all items you want to stack to 64 here
    const itemsToStack = [
        'minecraft:ender_pearl',
        'minecraft:egg',
        'minecraft:snowball',
        'minecraft:honey_bottle',
        'minecraft:bucket'
    ]

    itemsToStack.forEach(itemID => {
        event.modify(itemID, item => {
            item.maxStackSize = 64
        })
    })
})