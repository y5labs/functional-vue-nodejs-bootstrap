import component from '../lib/component'

export default component({
  name: 'counter',
  module,
  render: (h, { props, hub }) => {
    const count = props.count || 0
    return h('div', [
      h('div', count.toString()),
      h('button', { on: { click: (e) => hub.emit('up') } }, 'Up'),
      h('button', { on: { click: (e) => hub.emit('down') } }, 'Down')
    ])
  }
})
