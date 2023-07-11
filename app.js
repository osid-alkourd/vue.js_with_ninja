const app = Vue.createApp({
  //  template: '<h2>Hello osid</h2>'
  data() {
    return {
        title: "Vue lesson" , 
        author: "Osid Alkourd" , 
        age: 22 , 
        showBooks: true
    }
  } , 

  methods: {
    changeTitle(){
      this.title = "Vue3 lesson"
    } , 
    changeAuthor(learner){
      this.author = learner
    } , 
    changeShowBooksStatus(){
      this.showBooks = !this.showBooks
    }
  }
})
app.mount('#app')

// mount function used to create connection between vue instance and specific element 
// allowing Vue to control and render the contents of that element.
//When you call app.mount('#app'), Vue will search for an element in the DOM that matches 
// the provided selector (#app in this case).