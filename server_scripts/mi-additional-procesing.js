onEvent('recipes', (event) => {
 event.custom({
  "id":"sulfuric_uranium_disolition",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 600,
  "item_inputs": {
      "item": "modern_industrialization:raw_uranium",
      "amount": 1
    },
  "fluid_inputs": [
    {
      "fluid": "modern_industrialization:sulfuric_acid",
      "amount": 4000
    },
    {
      "fluid": "modern_industrialization:oxygen",
      "amount": 7000
    }
  ],
  "item_outputs": {
      "item": "kubejs:impure_uranium_sulfate",
      "amount": 3
  },
  "fluid_outputs" : {
    "fluid" : "minecraft:water",
    "amount" : 4000
  }
})
 event.custom({
  "id":"uranium_sulfate_purification",
  "type": "modern_industrialization:centrifuge",
  "eu": 8,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:impure_uranium_sulfate",
      "amount": 1
    },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 500
    },
  "item_outputs": [
  {
      "item": "kubejs:pure_uranium_sulfate",
      "amount": 1
  },
  {
      "item": "kubejs:lead_sulfate",
      "amount": 1,
	  "probability" : 0.3
  }
]
})
 event.custom({
  "id":"uranium_sulfate_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 32,
  "duration": 750,
  "item_inputs": {
      "item": "kubejs:pure_uranium_sulfate",
      "amount": 1
  },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 1000
  },
  "item_outputs": {
      "item": "kubejs:uranium_oxide",
      "amount": 1
  },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:sulfuric_acid",
    "amount" : 1000
  }
})
 event.custom({
  "id":"uranium_oxide_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 32,
  "duration": 1450,
  "item_inputs": {
      "item": "kubejs:uranium_oxide",
      "amount": 1
  },
  "item_outputs": {
      "item": "modern_industrialization:uranium_dust",
      "amount": 1
  },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:oxygen",
    "amount" : 1500
  }
})
 event.custom({
  "id":"lead_sulfate_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 32,
  "duration": 800,
  "item_inputs": {
      "item": "kubejs:lead_sulfate",
      "amount": 1
  },
  "item_outputs": {
      "item": "kubejs:lead_sulfide",
      "amount": 1
  },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:oxygen",
    "amount" : 2000
  }
})
 event.custom({
  "id":"lead_sulfide_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 16,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:lead_sulfide",
      "amount": 1
  },
  "item_outputs": [
  {
      "item": "modern_industrialization:lead_dust",
      "amount": 1
  },
  {
      "item": "modern_industrialization:sulfur_dust",
      "amount": 1
  }
]
})
 event.custom({
  "id":"nitric_copper_disolition",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 12,
  "duration": 400,
  "item_inputs": [
    {
      "item": "minecraft:raw_copper",
      "amount": 1
    },
    {
      "item": "modern_industrialization:analog_circuit",
      "amount": 1,
	  "probability" : 0.0
    },
    {
      "item": "kubejs:nitric_acid_cell",
      "amount": 6
    }
],
  "item_outputs": [
  {
      "item": "kubejs:impure_copper_nitrate",
      "amount": 2
  },
  {
      "item": "kubejs:inert_cell",
      "amount": 6
  }
],
  "fluid_outputs" : [
  {
    "fluid" : "minecraft:water",
    "amount" : 3000
  },
  {
    "fluid" : "modern_industrialization:nitrogen",
    "amount" : 500
  }
]
})
 event.custom({
  "id":"copper_nirate_exhange",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 400,
  "item_inputs": [
    {
      "item": "kubejs:impure_copper_nitrate",
      "amount": 2
    },
    {
      "item": "kubejs:inert_cell",
      "amount": 5
    }
],
  "fluid_inputs": {
      "fluid": "modern_industrialization:hydrochloric_acid",
      "amount": 5000
  },
  "item_outputs": [
  {
      "item": "kubejs:impure_copper_chloride",
      "amount": 2
  },
  {
      "item": "kubejs:nitric_acid_cell",
      "amount": 5
  }
]
})
 event.custom({
  "id":"copper_chloride_purification",
  "type": "modern_industrialization:centrifuge",
  "eu": 8,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:impure_copper_chloride",
      "amount": 1
    },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 400
    },
  "item_outputs": [
  {
      "item": "kubejs:pure_copper_chloride",
      "amount": 1
  },
  {
      "item": "kubejs:pure_copper_chloride",
      "amount": 1,
	  "probability" : 0.1
  },
  {
      "item": "kubejs:silver_chloride",
      "amount": 1,
	  "probability" : 0.3
  }
]
})
 event.custom({
  "id":"copper_chloride_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 16,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:pure_copper_chloride",
      "amount": 1
  },
  "item_outputs": {
      "item": "modern_industrialization:copper_dust",
      "amount": 1
  },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:chlorine",
    "amount" : 1000
  }
})
 event.custom({
  "id":"silver_chloride_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 8,
  "duration": 300,
  "item_inputs": {
      "item": "kubejs:silver_chloride",
      "amount": 1
  },
  "item_outputs": {
      "item": "modern_industrialization:silver_dust",
      "amount": 1
  },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:chlorine",
    "amount" : 500
  }
})
 event.custom({
  "id":"aqua_regia_gold_disolition",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 1600,
  "item_inputs": [
    {
      "item": "minecraft:raw_gold",
      "amount": 1
    },
    {
      "item": "kubejs:nitric_acid_cell",
      "amount": 3
    }
],
  "fluid_inputs": {
      "fluid": "modern_industrialization:hydrochloric_acid",
      "amount": 15000
  },
  "item_outputs": [
  {
      "item": "kubejs:impure_precious_metals_chloride",
      "amount": 3
  },
  {
      "item": "kubejs:inert_cell",
      "amount": 3
  }
],
  "fluid_outputs" : [
  {
    "fluid" : "minecraft:water",
    "amount" : 16000
  },
  {
    "fluid" : "modern_industrialization:nitrogen",
    "amount" : 1500
  }
]
})
 event.custom({
  "id":"silver_chloride_purification",
  "type": "modern_industrialization:centrifuge",
  "eu": 8,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:impure_precious_metals_chloride",
      "amount": 1
    },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 500
    },
  "item_outputs": [
  {
      "item": "kubejs:pure_precious_metals_chloride",
      "amount": 1
  },
  {
      "item": "kubejs:silver_chloride",
      "amount": 1,
	  "probability" : 0.6
  }
]
})
 event.custom({
  "id":"precious_metals_chloride_heating",
  "type": "modern_industrialization:blast_furnace",
  "eu": 16,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:pure_precious_metals_chloride",
      "amount": 1
    },
  "item_outputs": {
      "item": "kubejs:fired_precious_metals_chloride",
      "amount": 1
    },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:chlorine",
    "amount" : 1000
  }
})
 event.custom({
  "id":"gold_chloride_purification",
  "type": "modern_industrialization:centrifuge",
  "eu": 8,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:fired_precious_metals_chloride",
      "amount": 1
    },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 500
    },
  "item_outputs": [
  {
      "item": "kubejs:gold_chloride",
      "amount": 1
  },
  {
      "item": "kubejs:impure_iridium_chloride",
      "amount": 1,
	  "probability" : 0.3
  }
]
})
 event.custom({
  "id":"gold_chloride_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 4,
  "duration": 300,
  "item_inputs": {
      "item": "kubejs:gold_chloride",
      "amount": 1
  },
  "item_outputs": {
      "item": "modern_industrialization:gold_dust",
      "amount": 1
  },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:chlorine",
    "amount" : 500
  }
})
 event.custom({
  "id":"iridium_chloride_heating",
  "type": "modern_industrialization:blast_furnace",
  "eu": 32,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:impure_iridium_chloride",
      "amount": 1
    },
  "item_outputs": {
      "item": "kubejs:fired_iridium_chloride",
      "amount": 1
    },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:chlorine",
    "amount" : 500
  }
 })
 event.custom({
  "id":"iridium_chloride_purification",
  "type": "modern_industrialization:centrifuge",
  "eu": 8,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:fired_iridium_chloride",
      "amount": 2
    },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 1000
    },
  "item_outputs": [
  {
      "item": "kubejs:platinum_chloride",
      "amount": 1
  },
  {
      "item": "kubejs:pure_iridium_chloride",
      "amount": 1
  },
  {
      "item": "kubejs:pure_iridium_chloride",
      "amount": 1,
	  "probability" : 0.3
  }
]
})
 event.custom({
  "id":"platinum_chloride_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 8,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:platinum_chloride",
      "amount": 1
  },
  "item_outputs": {
      "item": "modern_industrialization:platinum_dust",
      "amount": 1
  },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:chlorine",
    "amount" : 1000
  }
})
 event.custom({
  "id":"iridium_chloride_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 16,
  "duration": 750,
  "item_inputs": {
      "item": "kubejs:pure_iridium_chloride",
      "amount": 1
  },
  "item_outputs": {
      "item": "modern_industrialization:iridium_dust",
      "amount": 1
  },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:chlorine",
    "amount" : 2000
  }
})
 event.custom({
  "id":"iron_oxidation",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 1000,
  "item_inputs": {
      "item": "minecraft:raw_iron",
      "amount": 1
    },
  "fluid_inputs": {
      "fluid": "modern_industrialization:oxygen",
      "amount": 2000
  },
  "item_outputs": {
      "item": "kubejs:impure_iron_like_metals_oxide",
      "amount": 1
  }
})
 event.custom({
  "id":"magnetic_iron_oxide_purification",
  "type": "modern_industrialization:mixer",
  "eu": 8,
  "duration": 400,
  "item_inputs": [
    {
      "item": "kubejs:impure_iron_like_metals_oxide",
      "amount": 1
    },
    {
      "item": "modern_industrialization:steel_rod_magnetic",
      "amount": 1,
	  "probability" : 0.0
    }
],
  "item_outputs": [
  {
      "item": "kubejs:iron_oxide",
      "amount": 1
  },
  {
      "item": "kubejs:impure_manganese_like_metals_oxide",
      "amount": 1,
	  "probability" : 0.1
  }
]
})
 event.custom({
  "id":"iron_oxide_redusing",
  "type": "modern_industrialization:blast_furnace",
  "eu": 16,
  "duration": 400,
  "item_inputs": [
    {
      "item": "kubejs:iron_oxide",
      "amount": 1
    },
    {
      "item": "minecraft:charcoal",
      "amount": 3
    }
],
  "item_outputs": {
      "item": "modern_industrialization:iron_dust",
      "amount": 2
    }
})
 event.custom({
  "id":"iron_oxide_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 32,
  "duration": 1250,
  "item_inputs": {
      "item": "kubejs:iron_oxide",
      "amount": 1
  },
  "item_outputs": {
      "item": "modern_industrialization:iron_dust",
      "amount": 2
  },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:oxygen",
    "amount" : 1500
  }
})
 event.custom({
  "id":"crucible_cutting",
  "type": "modern_industrialization:cutting_machine",
  "eu": 2,
  "duration": 4000,
  "item_inputs": {
      "item": "modern_industrialization:fire_clay_bricks",
      "amount": 1
  },
  "fluid_inputs": {
      "fluid": "modern_industrialization:lubricant",
      "amount": 100
  },
  "item_outputs": {
      "item": "kubejs:heatproof_crucible",
      "amount": 1
  }
})
 event.custom({
  "id":"manganese_like_exhange",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 600,
  "item_inputs": {
      "item": "kubejs:impure_manganese_like_metals_oxide",
      "amount": 1
    },
  "fluid_inputs": {
      "fluid": "modern_industrialization:hydrochloric_acid",
      "amount": 18000
  },
  "item_outputs": {
      "item": "kubejs:impure_manganese_like_metals_chloride",
      "amount": 1
  },
  "fluid_outputs" : {
    "fluid" : "minecraft:water",
    "amount" : 9000
  }
})
 event.custom({
  "id":"crucible_filling_manganese",
  "type": "modern_industrialization:packer",
  "eu": 2,
  "duration": 100,
  "item_inputs": [
    {
      "item": "kubejs:heatproof_crucible",
      "amount": 1
    },
	{
      "item": "kubejs:impure_manganese_like_metals_chloride",
      "amount": 1
    }
],
  "item_outputs": {
      "item": "kubejs:cold_manganese_like_crucible",
      "amount": 1
    }
})
 event.custom({
  "type": "minecraft:smelting",
  "ingredient": {
    "item": "kubejs:cold_manganese_like_crucible"
  },
  "result": "kubejs:hot_manganese_like_crucible",
  "cookingtime": 1000
})
 event.custom({
  "id":"hot_manganese_seperation",
  "type": "modern_industrialization:centrifuge",
  "eu": 8,
  "duration": 200,
  "item_inputs": 
    {
      "item": "kubejs:hot_manganese_like_crucible",
      "amount": 1
    },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 1000
    },
  "item_outputs": [
    {
      "item": "kubejs:cold_nickel_like_crucible",
      "amount": 1
    },
    {
      "item": "kubejs:manganese_chloride",
      "amount": 4
    }
]
})
 event.custom({
  "type": "minecraft:smelting",
  "ingredient": {
    "item": "kubejs:cold_nickel_like_crucible"
  },
  "result": "kubejs:hot_nickel_like_crucible",
  "cookingtime": 2000
})
 event.custom({
  "id":"hot_nickel_seperation",
  "type": "modern_industrialization:centrifuge",
  "eu": 8,
  "duration": 200,
  "item_inputs": 
    {
      "item": "kubejs:hot_nickel_like_crucible",
      "amount": 1
    },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 2000
    },
  "item_outputs": [
    {
      "item": "kubejs:heatproof_crucible",
      "amount": 1,
	  "probability" : 0.95
    },
    {
      "item": "kubejs:nickel_chloride",
      "amount": 2
    },
    {
      "item": "kubejs:chromium_chloride",
      "amount": 2
    }
]
})
 event.custom({
  "id":"manganese_chloride_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 16,
  "duration": 900,
  "item_inputs": {
      "item": "kubejs:manganese_chloride",
      "amount": 1
  },
  "item_outputs": {
      "item": "modern_industrialization:manganese_dust",
      "amount": 1
  },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:chlorine",
    "amount" : 1000
  }
})
 event.custom({
  "id":"chromium_chloride_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 32,
  "duration": 700,
  "item_inputs": {
      "item": "kubejs:chromium_chloride",
      "amount": 1
  },
  "item_outputs": {
      "item": "modern_industrialization:chromium_dust",
      "amount": 1
  },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:chlorine",
    "amount" : 1500
  }
})
 event.custom({
  "id":"nickel_chloride_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 16,
  "duration": 650,
  "item_inputs": {
      "item": "kubejs:nickel_chloride",
      "amount": 1
  },
  "item_outputs": {
      "item": "modern_industrialization:nickel_dust",
      "amount": 1
  },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:chlorine",
    "amount" : 1000
  }
})
 event.custom({
  "id":"titanium_disolution",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 16,
  "duration": 800,
  "item_inputs": [
    {
      "item": "modern_industrialization:raw_titanium",
      "amount": 1
    },
    {
      "item": "modern_industrialization:carbon_dust",
      "amount": 9
    },
    {
      "item": "kubejs:inert_cell",
      "amount": 12
    }
],
  "fluid_inputs": {
      "fluid": "modern_industrialization:chlorine",
      "amount": 9000
    },
  "item_outputs": [
  {
      "item": "kubejs:titanium_chloride_cell",
      "amount": 3
  },
  {
      "item": "kubejs:iron_chloride",
      "amount": 2
  },
  {
      "item": "kubejs:carbon_mono_oxide_cell",
      "amount": 9
  }
]
})
 event.custom({
  "type": "minecraft:smelting",
  "ingredient": {
    "item": "kubejs:carbon_mono_oxide_cell"
  },
  "result": "kubejs:inert_cell",
  "cookingtime": 100
})
 event.custom({
  "id":"titanium_chloride_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 32,
  "duration": 1100,
  "item_inputs": {
      "item": "kubejs:titanium_chloride_cell",
      "amount": 1
  },
  "item_outputs": [
  {
      "item": "modern_industrialization:titanium_dust",
      "amount": 1
  },
  {
      "item": "kubejs:inert_cell",
      "amount": 1
  }
],
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:chlorine",
    "amount" : 2000
  }
})
 event.custom({
  "id":"iron_chloride_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 32,
  "duration": 550,
  "item_inputs": {
      "item": "kubejs:iron_chloride",
      "amount": 1
  },
  "item_outputs": {
      "item": "modern_industrialization:iron_dust",
      "amount": 1
  },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:chlorine",
    "amount" : 1500
  }
})
 event.custom({
  "id":"carbon_mono_oxide_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 16,
  "duration": 500,
  "item_inputs": {
      "item": "kubejs:carbon_mono_oxide_cell",
      "amount": 1
  },
  "item_outputs": [
  {
      "item": "kubejs:inert_cell",
      "amount": 1
  },
  {
      "item": "modern_industrialization:carbon_dust",
      "amount": 1
  }
],
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:oxygen",
    "amount" : 500
  }
})
 event.custom({
  "id":"aqua_regia_copper_disolition",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 16,
  "duration": 600,
  "item_inputs": [
    {
      "item": "minecraft:raw_copper",
      "amount": 1
    },
    {
      "item": "kubejs:nitric_acid_cell",
      "amount": 2
    },
    {
      "item": "modern_industrialization:electronic_circuit",
      "amount": 1,
	  "probability" : 0.0
    }
],
  "fluid_inputs": {
      "fluid": "modern_industrialization:hydrochloric_acid",
      "amount": 10000
  },
  "item_outputs": [
  {
      "item": "kubejs:impure_copper_like_metals_chloride",
      "amount": 1
  },
  {
      "item": "kubejs:inert_cell",
      "amount": 2
  }
],
  "fluid_outputs" : [
  {
    "fluid" : "minecraft:water",
    "amount" : 6000
  },
  {
    "fluid" : "modern_industrialization:nitrogen",
    "amount" : 1000
  }
]
})
 event.custom({
  "id":"copper_like_metals_chloride_purification",
  "type": "modern_industrialization:centrifuge",
  "eu": 8,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:impure_copper_like_metals_chloride",
      "amount": 1
    },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 500
    },
  "item_outputs": [
  {
      "item": "kubejs:pure_cuprogold_chloride",
      "amount": 1
  },
  {
      "item": "kubejs:silver_chloride",
      "amount": 1,
  },
  {
      "item": "kubejs:silver_chloride",
      "amount": 1,
	  "probability" : 0.1
  }
]
})
 event.custom({
  "id":"cuprogold_chloride_heating",
  "type": "modern_industrialization:blast_furnace",
  "eu": 16,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:pure_cuprogold_chloride",
      "amount": 1
    },
  "item_outputs": {
      "item": "kubejs:fired_cuprogold_chloride",
      "amount": 1
    },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:chlorine",
    "amount" : 500
  }
})
 event.custom({
  "id":"cuprogold_chloride_purification",
  "type": "modern_industrialization:centrifuge",
  "eu": 8,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:fired_cuprogold_chloride",
      "amount": 1
    },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 500
    },
  "item_outputs": [
  {
      "item": "kubejs:pure_copper_chloride",
      "amount": 3
  },
  {
      "item": "kubejs:pure_copper_chloride",
      "amount": 1,
	  "probability" : 0.7
  },
  {
      "item": "kubejs:gold_chloride",
      "amount": 1,
	  "probability" : 0.5
  }
]
})
 event.custom({
  "id":"salt_water_disolition",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 400,
  "item_inputs": [
    {
      "item": "modern_industrialization:salt_crushed_dust",
      "amount": 1
    },
    {
      "item": "kubejs:heatproof_crucible",
      "amount": 1
    }
],
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 6000
    },
  "item_outputs": {
      "item": "kubejs:cold_brine_crucible",
      "amount": 1
  }
})
 event.custom({
  "id":"brine_crucible_heating",
  "type": "modern_industrialization:blast_furnace",
  "eu": 32,
  "duration": 800,
  "item_inputs": {
      "item": "kubejs:cold_brine_crucible",
      "amount": 1
    },
  "item_outputs": {
      "item": "kubejs:hot_salt_crucible",
      "amount": 1
    },
})
 event.custom({
  "id":"salt_purification",
  "type": "modern_industrialization:centrifuge",
  "eu": 8,
  "duration": 200,
  "item_inputs": {
      "item": "kubejs:hot_salt_crucible",
      "amount": 1
    },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 1000
    },
  "item_outputs": [
  {
      "item": "modern_industrialization:salt_dust",
      "amount": 3
  },
  {
      "item": "kubejs:heatproof_crucible",
      "amount": 1,
	  "probability" : 0.95
  }
]
})
 event.custom({
  "id":"alkaline_tungsten_disolition",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 600,
  "item_inputs": {
      "item": "modern_industrialization:raw_tungsten",
      "amount": 1
    },
  "fluid_inputs": {
      "fluid": "modern_industrialization:sodium_hydroxide",
      "amount": 6000
  },
  "item_outputs": {
      "item": "kubejs:impure_sodium_tungstate",
      "amount": 2
  },
  "fluid_outputs" : {
    "fluid" : "minecraft:water",
    "amount" : 3000
  }
})
 event.custom({
  "id":"sodium_tungstate_purification",
  "type": "modern_industrialization:centrifuge",
  "eu": 8,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:impure_sodium_tungstate",
      "amount": 1
    },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 500
    },
  "item_outputs": [
  {
      "item": "kubejs:pure_sodium_tungstate",
      "amount": 1
  },
  {
      "item": "kubejs:pure_sodium_tungstate",
      "amount": 1,
	  "probability" : 0.5
  },
  {
      "item": "kubejs:iron_oxide",
      "amount": 1,
	  "probability" : 0.5
  }
]
})
 event.custom({
  "id":"sodium_tungstate_exhange",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:pure_sodium_tungstate",
      "amount": 1
    },
  "fluid_inputs": {
      "fluid": "modern_industrialization:hydrochloric_acid",
      "amount": 2000
  },
  "item_outputs": {
      "item": "kubejs:impure_tungstic_acid",
      "amount": 1
  }
})
 event.custom({
  "id":"tungstic_acid_purification",
  "type": "modern_industrialization:centrifuge",
  "eu": 8,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:impure_tungstic_acid",
      "amount": 1
    },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 500
    },
  "item_outputs": [
  {
      "item": "kubejs:pure_tungstic_acid",
      "amount": 1
  },
  {
      "item": "modern_industrialization:salt_dust",
      "amount": 2
  }
]
})
 event.custom({
  "type": "minecraft:smelting",
  "ingredient": {
    "item": "kubejs:pure_tungstic_acid"
  },
  "result": "kubejs:tungsten_oxide",
  "cookingtime": 600
})
 event.custom({
  "id":"tungsten_oxide_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 32,
  "duration": 750,
  "item_inputs": {
      "item": "kubejs:tungsten_oxide",
      "amount": 1
  },
  "item_outputs": {
      "item": "modern_industrialization:tungsten_dust",
      "amount": 1
  },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:oxygen",
    "amount" : 1500
  }
})
 event.custom({
  "id":"tungsten_fusing",
  "type": "modern_industrialization:blast_furnace",
  "eu": 128,
  "duration": 1800,
  "item_inputs": {
      "item": "modern_industrialization:tungsten_dust",
      "amount": 1
    },
  "item_outputs": {
      "item": "modern_industrialization:tungsten_ingot",
      "amount": 1
    }
})
 event.custom({
  "id":"carbon_mono_oxide_production",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 100,
  "item_inputs": [
  {
      "item": "kubejs:inert_cell",
      "amount": 1
  },
  {
      "item": "modern_industrialization:carbon_dust",
      "amount": 1
  }
],
  "fluid_inputs": {
      "fluid": "modern_industrialization:oxygen",
      "amount": 500
  },
  "item_outputs": {
      "item": "kubejs:carbon_mono_oxide_cell",
      "amount": 1
  }
})
 event.custom({
  "id":"feronickel_carbonyl_disolition",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 800,
  "item_inputs": [
    {
      "item": "modern_industrialization:raw_nickel",
      "amount": 2
    },
    {
      "item": "kubejs:carbon_mono_oxide_cell",
      "amount": 21
    },
],
  "item_outputs": [
  {
      "item": "kubejs:impure_feronickel_carbonyl_cell",
      "amount": 4
  },
  {
      "item": "kubejs:inert_cell",
      "amount": 16
  }
]
})
 event.custom({
  "id":"feronickel_carbonyl_purification",
  "type": "modern_industrialization:centrifuge",
  "eu": 8,
  "duration": 200,
  "item_inputs": {
      "item": "kubejs:impure_feronickel_carbonyl_cell",
      "amount": 1
    },
  "item_outputs": [
  {
      "item": "kubejs:pure_feronickel_carbonyl_cell",
      "amount": 1
  },
  {
      "item": "modern_industrialization:copper_dust",
      "amount": 1,
	  "probability" : 0.15
  }
]
})
 event.custom({
  "id":"feronickel_carbonyl_separation",
  "type": "modern_industrialization:centrifuge",
  "eu": 16,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:pure_feronickel_carbonyl_cell",
      "amount": 1
    },
  "item_outputs": [
  {
      "item": "kubejs:nickel_carbonyl_cell",
      "amount": 1
  },
  {
      "item": "kubejs:iron_carbonyl_cell",
      "amount": 1,
	  "probability" : 0.25
  }
]
})
 event.custom({
  "id":"nickel_carbonyl_preparation",
  "type": "modern_industrialization:mixer",
  "eu": 8,
  "duration": 100,
  "item_inputs": [
    {
      "item": "kubejs:nickel_carbonyl_cell",
      "amount": 1
    },
    {
      "item": "kubejs:inert_cell",
      "amount": 3
    },
],
  "item_outputs": {
      "item": "kubejs:prepared_nickel_carbonyl_cell",
      "amount": 1
  }
})
 event.custom({
  "id":"iron_carbonyl_preparation",
  "type": "modern_industrialization:mixer",
  "eu": 8,
  "duration": 100,
  "item_inputs": [
    {
      "item": "kubejs:iron_carbonyl_cell",
      "amount": 1
    },
    {
      "item": "kubejs:inert_cell",
      "amount": 4
    }
],
  "item_outputs": {
      "item": "kubejs:prepared_iron_carbonyl_cell",
      "amount": 1
  }
})
 event.custom({
  "id":"nickel_carbonyl_pyrolysis",
  "type": "modern_industrialization:centrifuge",
  "eu": 8,
  "duration": 600,
  "item_inputs": {
      "item": "kubejs:prepared_nickel_carbonyl_cell",
      "amount": 1
  },
  "item_outputs": [
  {
      "item": "modern_industrialization:nickel_dust",
      "amount": 1
  },
  {
      "item": "kubejs:carbon_mono_oxide_cell",
      "amount": 4
  }
]
})
 event.custom({
  "id":"iron_carbonyl_pyrolysis",
  "type": "modern_industrialization:centrifuge",
  "eu": 8,
  "duration": 800,
  "item_inputs": {
      "item": "kubejs:prepared_iron_carbonyl_cell",
      "amount": 1
    },
  "item_outputs": [
  {
      "item": "modern_industrialization:iron_dust",
      "amount": 1
  },
  {
      "item": "kubejs:carbon_mono_oxide_cell",
      "amount": 5
  }
]
})
 event.custom({
  "id":"sulfuric_calcite_disolition",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 400,
  "item_inputs": [
    {
      "item": "minecraft:calcite",
      "amount": 1
    },
    {
      "item": "kubejs:inert_cell",
      "amount": 10
    }
],
  "fluid_inputs": {
      "fluid": "modern_industrialization:sulfuric_acid",
      "amount": 9000
  },
  "item_outputs": [
  {
      "item": "kubejs:calcium_sulfate",
      "amount": 9
  },
  {
      "item": "kubejs:carbon_dioxide_cell",
      "amount": 8
  },
  {
      "item": "kubejs:hydrogen_fluoride_cell",
      "amount": 2
  }
],
  "fluid_outputs" : {
    "fluid" : "minecraft:water",
    "amount" : 8000
  }

})
 event.custom({
  "id":"carbon_dioxide_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 32,
  "duration": 550,
  "item_inputs": {
      "item": "kubejs:carbon_dioxide_cell",
      "amount": 1
  },
  "item_outputs": [
  {
      "item": "kubejs:inert_cell",
      "amount": 1
  },
  {
      "item": "modern_industrialization:carbon_dust",
      "amount": 1
  }
],
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:oxygen",
    "amount" : 1000
  }
})
 event.custom({
  "type": "minecraft:smelting",
  "ingredient": {
    "item": "kubejs:carbon_dioxide_cell"
  },
  "result": "kubejs:inert_cell",
  "cookingtime": 100
})
 event.custom({
  "id":"calcium_sulfate_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 32,
  "duration": 1450,
  "item_inputs": {
      "item": "kubejs:calcium_sulfate",
      "amount": 1
  },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 2000
  },
  "item_outputs": {
      "item": "kubejs:calcium_hydro_oxide",
      "amount": 1
  },
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:sulfuric_acid",
    "amount" : 1000
  }
})
 event.custom({
  "id":"carbon_dioxide_reduction",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 200,
  "item_inputs": [
    {
      "item": "kubejs:inert_cell",
      "amount": 1
    },    
	{
      "item": "kubejs:carbon_dioxide_cell",
      "amount": 1
    },
    {
      "item": "modern_industrialization:carbon_dust",
      "amount": 1
    }
],
  "item_outputs": {
      "item": "kubejs:carbon_mono_oxide_cell",
      "amount": 2
  }
})
 event.custom({
  "id":"hydrogen_fluoride_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 16,
  "duration": 900,
  "item_inputs": {
      "item": "kubejs:hydrogen_fluoride_cell",
      "amount": 2
  },
  "item_outputs": [
  {
      "item": "kubejs:fluorine_cell",
      "amount": 1
  },
  {
      "item": "kubejs:inert_cell",
      "amount": 1
  }
],  
  "fluid_outputs" : {
    "fluid" : "modern_industrialization:hydrogen",
    "amount" : 500
  }
})
 event.custom({
  "id":"lead_fluorine_disolition",
  "type": "modern_industrialization:chemical_reactor",
  "eu": 8,
  "duration": 200,
  "item_inputs": [
    {
      "item": "modern_industrialization:raw_lead",
      "amount": 1
    },
    {
      "item": "kubejs:fluorine_cell",
      "amount": 5
    },
],
  "item_outputs": [
  {
      "item": "kubejs:impure_lead_fluoride",
      "amount": 3
  },
  {
      "item": "kubejs:inert_cell",
      "amount": 5
  }
]
})
 event.custom({
  "id":"lead_fluorine_purification",
  "type": "modern_industrialization:centrifuge",
  "eu": 8,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:impure_lead_fluoride",
      "amount": 1
    },
  "fluid_inputs": {
      "fluid": "minecraft:water",
      "amount": 500
    },
  "item_outputs": [
  {
      "item": "kubejs:pure_lead_fluoride",
      "amount": 1
  },
  {
      "item": "kubejs:impure_antimony_fluoride",
      "amount": 1,
	  "probability" : 0.35
  }
]
})
 event.custom({
  "id":"lead_fluorine_preparation",
  "type": "modern_industrialization:mixer",
  "eu": 8,
  "duration": 100,
  "item_inputs": [
    {
      "item": "kubejs:pure_lead_fluoride",
      "amount": 1
    },
    {
      "item": "kubejs:inert_cell",
      "amount": 1
    }
],
  "item_outputs": {
      "item": "kubejs:lead_fluoride_cell",
      "amount": 1
  }
})
 event.custom({
  "id":"lead_fluoride_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 16,
  "duration": 1000,
  "item_inputs": {
      "item": "kubejs:lead_fluoride_cell",
      "amount": 1
  },
  "item_outputs": [
  {
      "item": "modern_industrialization:lead_dust",
      "amount": 1
  },
  {
      "item": "kubejs:fluorine_cell",
      "amount": 1
  }
]
})
 event.custom({
  "id":"antimony_fluoride_purification",
  "type": "modern_industrialization:centrifuge",
  "eu": 16,
  "duration": 400,
  "item_inputs": {
      "item": "kubejs:impure_antimony_fluoride",
      "amount": 1
    },
  "item_outputs": [
  {
      "item": "kubejs:tin_fluoride",
      "amount": 1
  },
  {
      "item": "kubejs:pure_antimony_fluoride",
      "amount": 1,
	  "probability" : 0.6
  }
]
})
 event.custom({
  "id":"tin_fluorine_preparation",
  "type": "modern_industrialization:mixer",
  "eu": 8,
  "duration": 100,
  "item_inputs": [
    {
      "item": "kubejs:tin_fluoride",
      "amount": 1
    },
    {
      "item": "kubejs:inert_cell",
      "amount": 1
    }
],
  "item_outputs": {
      "item": "kubejs:tin_fluoride_cell",
      "amount": 1
  }
})
 event.custom({
  "id":"tin_fluoride_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 32,
  "duration": 600,
  "item_inputs": {
      "item": "kubejs:tin_fluoride_cell",
      "amount": 1
  },
  "item_outputs": [
  {
      "item": "modern_industrialization:tin_dust",
      "amount": 1
  },
  {
      "item": "kubejs:fluorine_cell",
      "amount": 1
  }
]
})
 event.custom({
  "id":"antimony_fluorine_preparation",
  "type": "modern_industrialization:mixer",
  "eu": 8,
  "duration": 200,
  "item_inputs": [
    {
      "item": "kubejs:pure_antimony_fluoride",
      "amount": 2
    },
    {
      "item": "kubejs:inert_cell",
      "amount": 3
    }
],
  "item_outputs": {
      "item": "kubejs:antimony_fluoride_cell",
      "amount": 2
  }
})
 event.custom({
  "id":"antimony_fluoride_electrolysis",
  "type": "modern_industrialization:electrolyzer",
  "eu": 32,
  "duration": 800,
  "item_inputs": {
      "item": "kubejs:antimony_fluoride_cell",
      "amount": 1
  },
  "item_outputs": [
  {
      "item": "modern_industrialization:antimony_dust",
      "amount": 1
  },
  {
      "item": "kubejs:fluorine_cell",
      "amount": 1
  },
  {
      "item": "kubejs:fluorine_cell",
      "amount": 1,
	  "probability" : 0.5
  }
]
})
})