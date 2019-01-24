<template>

  <div>
    <app-header v-bind:title="header_title" v-on:changeTitleName="updateTitle($event)"></app-header>
    <ninjas v-bind:ninjas="ninjas"></ninjas>
    <app-footer  v-bind:title="header_title"></app-footer>
   
  </div>

</template>

<script>
import Clubs from './components/HelloWorld'
import Header from './components/Header'
import Footer from './components/Footer'
import Ninja from './components/Ninjas'


export default {
  components:{
    'clubs':Clubs,
    'app-header':Header,
    'app-footer':Footer,
    'ninjas':Ninja
  },

  data(){
    return{
      title:"EPL Clubs",
      header_title:"Vue Ninjas",
      ninjas: [
                {name: 'Ryu', speciality: 'Vue Components', show: false},
                {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                {name: 'Hitoshi', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ]
    }
  },

  methods:{

    // greetings:function(){

    //   return "I will be a Vue expert";
    // }

    updateTitle:function(message){

     this.header_title=message;
    }

  }



 
}
</script>

<style scoped>

h1{
  color: blueviolet
}

</style>
