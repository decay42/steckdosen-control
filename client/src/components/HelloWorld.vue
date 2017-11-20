<template>
  <div class="hello">
    <h1>3D Printer Control Panel</h1>
    <button @click="switchOn">On</button>
    <button @click="switchOff">Off</button>
  </div>
</template>

<script>
import printer from '@/services/printer'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    switchOn () {
      printer.on()
    },
    switchOff () {
      printer.off()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
