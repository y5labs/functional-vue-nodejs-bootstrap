import inject from 'injectinto'

const store = {
  name: 'default_store',
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    increment: (state, n) => {
      state.count += n
    },
    decrement: (state, n) => {
      state.count -= n
    }
  }
}

inject('store', store)
inject('pod', ({hub, store}) => {
  hub.on('increment count', n =>
    store.commit('default_store/increment', n))
  hub.on('decrement count', n =>
    store.commit('default_store/decrement', n))
  // hub.on('create resource', resource =>
  //   axios.post('/api/resources', resource)
  //     .then((res) => {
  //       store.commit('resource/create', res.data)
  //       return hub.emit('created resource', res.data)
  //     })
  //     .catch(err => console.error(err)))
})
