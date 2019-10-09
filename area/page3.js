import component from '../lib/component'
import Navigation from '../resources/navigation.vue'
import Counter from '../resources/counter'

export default component({
  name: 'page3',
  module,
  render: (h, { props, hub, state }) => {
    const transient_count = props.transient_count || 0
    return h('#app', [
      h('h1', 'Welcome'),
      h(Navigation),
      h(Counter, {
        attrs: {
          count: transient_count,
          hub: hub.child({
            up: () => hub.emit('update', { transient_count: transient_count + 1 }),
            down: () => hub.emit('update', { transient_count: transient_count - 1 })
          })
        }
      }),
      h(Counter, {
        attrs: {
          count: state.default_store.count,
          hub: hub.child({
            up: () => hub.emit('increment count', 1),
            down: () => hub.emit('decrement count', 1)
          })
        }
      }),
      h('div', [
        h('h2', 'Third Page!')
      ])
    ])
  }
})
