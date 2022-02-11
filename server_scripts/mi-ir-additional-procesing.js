onEvent('recipes', (event) => {
 event.custom({
  "id":"toxic_waste_drying",
  "type": "modern_industrialization:blast_furnace",
  "eu": 32,
  "duration": 800,
  "fluid_inputs": {
      "fluid": "indrev:toxic_mud_still",
      "amount": 1000
    },
  "item_outputs": {
      "item": "kubejs:solid_waste_dust",
      "amount": 1
    },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:steam",
    "amount" : 15000
    }
})
 event.custom({
  "id":"toxic_waste_purification",
  "type": "modern_industrialization:centrifuge",
  "eu": 8,
  "duration": 500,
  "item_inputs": {
      "item": "kubejs:solid_waste_dust",
      "amount": 1
    },
  "item_outputs": [
  {
      "item": "minecraft:coarse_dirt",
      "amount": 1,
	  "probability" : 0.8
  },
  {
      "item": "kubejs:solid_heavy_sulfates_mix_dust",
      "amount": 1,
	  "probability" : 0.2
  }
]
})
})