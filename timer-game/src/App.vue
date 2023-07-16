
<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">start</button>
  <Block v-if="isPlaying" :delay="delay"/>
</template>

<script>
import Block from './components/Block.vue'

export default {
 components: {Block},
  data() {
    return {
      isPlaying: false,
      delay: null,
    }
  },
  methods:{
    start(){
      this.isPlaying = true
      this.delay = 2000 + Math.random() * 5000
      console.log(this.delay)
    }
  },

 
};
</script>

<style scoped>
</style>
