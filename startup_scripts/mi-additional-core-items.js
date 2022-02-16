onEvent('item.registry', event => {
  event.create('inert_cell', item => {item.displayName('Inert Cell'),item.tooltip('Used For Storage And Transporting Reactive Fluids')})
  event.create('nitric_acid_cell', item => {item.displayName('Nitric Acid Cell'),item.tooltip('HNO3')})
})