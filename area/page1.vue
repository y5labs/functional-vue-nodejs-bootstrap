<template>
  <div id="app">
    <h1>Welcome</h1>
    <Navigation />
    <Counter v-bind="counterProps" />
    <div>
      <h2>First Page!</h2>
    </div>
  </div>
</template>
<script>
import Navigation from '../resources/navigation.vue'
import Counter from '../resources/counter'

export default {
  components: {
    Navigation,
    Counter
  },
  computed: {
    storedCount() { return this.$store.state.default_store.count },
    counterProps() {
      return {
        count: this.storedCount,
        hub: this.$hub.child({
          up: () => this.$hub.emit('increment count', 1),
          down: () => this.$hub.emit('decrement count', 1)
        })
      }
    }
  }
}
</script>