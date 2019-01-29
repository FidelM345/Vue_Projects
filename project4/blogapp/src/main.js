import Vue from 'vue'
import App from './App.vue'
import VueResoure from 'vue-resource'//imports vue resource plugin
import VueRouter from 'vue-router'//imports vue router plugin
import Routes from './routes'

Vue.use(VueResoure)//tell vue it wants to use the resource plugin
Vue.use(VueRouter)//tell vue it wants to use the router plugin

Vue.config.productionTip = false

//creating routes
const router=new VueRouter({
  routes:Routes,
  mode:'history'

})

//Custom dires=ctive
Vue.directive('rainbow',{
  //a lifecycle hook for a directive fired when the directive is bound on a component
  bind(el){

    el.style.color="#"+Math.random().toString().slice(2,8);



  }
})


Vue.directive('theme',{
  //a lifecycle hook for a directive fired when the directive is bound on a component
  bind(el,binding){

    if(binding.value=='wide'){


      el.style.maxWidth="1200px"


    }else if(binding.value=='narrow'){

      el.style.maxWidth="720px"


    }
    if(binding.arg=='column'){

      el.style.background='#ddd'
      el.style.padding='20px'


    }
  }
})

//filters

Vue.filter('snippets',function(value){

  return value.slice(0,250)+".......";
  
})


//rendering to the index file
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
