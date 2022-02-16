onEvent('recipes', (event) => {
    const id = [
    'modern_industrialization:materials/electrolyzer/water',
	'modern_industrialization:materials/centrifuge/heavy_water',
	'modern_industrialization:materials/electrolyzer/salt_electrolysis',
    ];
    id.forEach((id) => {
        event.remove({ id: id });
    });
 event.custom({
  "id":"water_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 16,
  "duration": 600,
  "item_inputs": {
      "item": "modern_industrialization:analog_circuit",
      "amount": 1,
	  "probability" : 0.0
  },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 2000
  },
  "fluid_outputs": [
  {
      "fluid": "modern_industrialization:hydrogen",
      "amount": 2000
  },
  {
      "fluid": "modern_industrialization:oxygen",
      "amount": 1000
  },
]
})
 event.custom({
  "id":"heavy_water_separation",
  "type": "modern_industrialization:centrifuge",
  "eu": 32,
  "duration": 1200,
  "item_inputs": {
      "item": "modern_industrialization:analog_circuit",
      "amount": 1,
	  "probability" : 0.0
  },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 1000
  },
  "fluid_outputs": [
  {
      "fluid": "modern_industrialization:heavy_water",
      "amount": 20
  }
]
})
 event.custom({
  "id":"salt_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 12,
  "duration": 1200,
  "item_inputs": {
      "item": "modern_industrialization:salt_dust",
      "amount": 1
  },
  "item_outputs": {
      "item": "modern_industrialization:sodium_dust",
      "amount": 1
  },
  "fluid_outputs": {
      "fluid": "modern_industrialization:chlorine",
      "amount": 500
  }
})
 event.custom({
  "id":"inert_cell_production",
  "type": "modern_industrialization:assembler",
  "eu": 8,
  "duration": 300,
  "item_inputs": [
  {
      "item": "modern_industrialization:gold_plate",
      "amount": 4
  },
  {
      "tag": "c:glass_panes",
      "amount": 1
  }
],
  "fluid_inputs": {
      "fluid": "modern_industrialization:soldering_alloy",
      "amount": 250
  },
  "item_outputs": {
      "item": "kubejs:inert_cell",
      "amount": 1
  }
})
 event.custom({
  "id":"nitric_acid_production",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 32,
  "duration": 3000,
  "item_inputs": {
      "item": "kubejs:inert_cell",
      "amount": 6
    },
  "fluid_inputs": [
    {
      "fluid": "modern_industrialization:nitrogen",
      "amount": 3000
    },
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 7500
    },
    {
      "fluid": "minecraft:water",
      "amount": 3000
    }
  ],
  "item_outputs": {
      "item": "kubejs:nitric_acid_cell",
      "amount": 6
  }
})
})