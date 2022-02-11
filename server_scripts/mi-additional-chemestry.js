onEvent('recipes', (event) => {
 event.custom({
  "id":"acetylene_trimirization",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 400,
  "item_inputs": {
      "item": "modern_industrialization:carbon_dust",
      "amount": 16,
	  "probability" : 0.0
    },
  "fluid_inputs": {
      "fluid": "modern_industrialization:acetylene",
      "amount": 3000
    },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:benzene",
    "amount" : 1000
    }
})
 event.custom({
  "id":"benzene_methelation",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 16,
  "duration": 400,
  "fluid_inputs": [
    {
      "fluid": "modern_industrialization:benzene",
      "amount": 1000
    },
    {
      "fluid": "modern_industrialization:methane",
      "amount": 1000
    },
    {
      "fluid": "modern_industrialization:chlorine",
      "amount": 1000
    }
],
  "fluid_outputs" : [
    {
    "fluid" : "modern_industrialization:toluene",
    "amount" : 1000
    },
    {
    "fluid" : "modern_industrialization:hydrochloric_acid",
    "amount" : 2000
    }
]
})
 event.custom({
  "id":"trinitro_toluene_production",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 32,
  "duration": 1000,
  "item_inputs": {
      "item": "kubejs:nitric_acid_cell",
      "amount": 3
    },
  "fluid_inputs": {
      "fluid": "modern_industrialization:toluene",
      "amount": 1000
  },
  "item_outputs": [
  {
      "item": "kubejs:inert_cell",
      "amount": 3
  },
  {
      "item": "modern_industrialization:industrial_tnt",
      "amount": 20
  }
],
  "fluid_outputs" : {
    "fluid" : "minecraft:water",
    "amount" : 3000
  }
})
 event.custom({
  "id":"iron_stainning",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration":200 ,
  "item_inputs": [
    {
      "item": "minecraft:iron_ingot",
      "amount": 2
    },
    {
      "item": "modern_industrialization:salt_dust",
      "amount": 1,
	  "probability" : 0.1
    }
],
  "fluid_inputs": [
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 3000
    },
    {
      "fluid": "modern_industrialization:sulfuric_acid",
      "amount": 300
    },
    {
      "fluid": "modern_industrialization:hydrochloric_acid",
      "amount": 100
    }
],
  "item_outputs": {
      "item": "kubejs:stained_steel_ingot",
      "amount": 1
    }
})
 event.custom({
  "id":"stained_steel_cleaning",
  "type": "modern_industrialization:mixer",
  "eu": 8,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:stained_steel_ingot",
      "amount": 1,
    },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 6000
    },
  "item_outputs": [
    {
      "item": "modern_industrialization:stainless_steel_ingot",
      "amount": 2,
	  "probability" : 0.99
    },
    {
      "item": "minecraft:dirt",
      "amount": 1
    },
    {
      "item": "kubejs:mesage",
      "amount": 1
    },
]
})
})