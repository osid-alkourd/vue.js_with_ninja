<template>
  <div class="block" v-if="showBlock">
    click me
  </div>
</template>

<script>
export default {
  props: ["delay"],
  data(){
    return {
        showBlock: false
    }
  } , 
  // mounted hook
  // this mean if the current component (Block) is invoked from the parent component, will luanch 
  //the following code
  mounted() {
    setTimeout(()=> {
        this.showBlock = true
        console.log(this.delay)
    }, this.delay)
    console.log("components mounded");
  },
  // updated hook
  updated(){
    console.log("components updated");
  }
};
</script>

<style scoped>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>