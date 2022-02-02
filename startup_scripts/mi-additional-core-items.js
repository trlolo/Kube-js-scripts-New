onEvent('item.registry', event => {
  event.create('inert_cell', item => item.displayName('Inert Cell'))
  event.create('nitric_acid_cell', item => item.displayName('Nitric Acid Cell'))
})