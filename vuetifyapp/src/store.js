import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {name: 'Banana Skin', price: 20},
      {name: 'Shiny Star', price: 40},
      {name: 'Green Shells', price: 60},
      {name: 'Red Shells', price: 80}
  ]

  },
  getters:{
    salesProducts(state){
      var sales=state.products.map(product=>{
          //used to map the data again inorder to modify them
          return {
              name:'**'+product.name+'**',
              price:product.price/2
          }
      })

      return sales;
  }

  },
  mutations: {
    reducePrice:state=>{

      state.products.forEach(element => {

           element.price-=1
           
       });

   }

  },
  actions: {

  }
})
