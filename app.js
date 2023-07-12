const app = Vue.createApp({
  //  template: '<h2>Hello osid</h2>'
  data() {
    return {
        showBooks: true , 
        books: [
          {title: 'Java' , author: 'Ahmed' , img: 'assets/1.png' , isFav: true} , 
          {title: 'PHP' , author: 'Mohammed', img: 'assets/2.png', isFav: false} , 
          {title: 'Node.js' , author: 'Amer', img: 'assets/3.jpg', isFav: true}
        ]
    }
  } , 

  methods: {
   toggleFav(book){
      book.isFav  = !book.isFav 
   }
  } , 
  computed: {
    filteredBooks(){
      return this.books.filter((book) => book.isFav)
    }
  }

  
})
app.mount('#app')

// mount function used to create connection between vue instance and specific element 
// allowing Vue to control and render the contents of that element.
//When you call app.mount('#app'), Vue will search for an element in the DOM that matches 
// the provided selector (#app in this case).