<template>
  <div id="app">
    <h1>Welcome</h1>
    <Navigation />
    <Counter v-bind="counterProps" />
    <div>
      <h2>Second Page!</h2>
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
    transient_count() {
      return this.$attrs.transient_count || 0
    },
    counterProps() {
      return {
        count: this.transient_count,
        hub: this.$hub.child({
          up: () => this.$hub.emit('update', { transient_count: this.transient_count + 1 }),
          down: () => this.$hub.emit('update', { transient_count: this.transient_count - 1 })
        })
      }
    }
  }
}
</script>
