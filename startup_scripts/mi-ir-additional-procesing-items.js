onEvent('item.registry', event => {
  event.create('solid_waste_dust', item => item.displayName('Solid Waste Dust'))
  event.create('solid_heavy_sulfates_mix_dust', item => {item.displayName('Heavy Sulfates Mix'),item.tooltip('Will Be Usefull Some Day')})
})