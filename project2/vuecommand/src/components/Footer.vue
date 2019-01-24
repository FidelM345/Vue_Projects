<template>

  <div>
     
     <footer> 
         
         <p>{{copy}} - {{title}}</p>
     
     </footer>
    
  </div>

</template>

<script>
import {bus} from '../main';
export default {
   props:{
        title:{
            type:String
        }
    },

  data(){

    return{
      copy:"Copy right - all rights reserved"
    }

  },
  created(){
    bus.$on('titleChanged',(data)=>{

      this.title=data;
      
    })
  }

 
}
</script>

<style scoped>

    footer{
        background: #222;
        padding:6px;
    }

   p{
       color: lightgreen;
       text-align: center;
   }


</style>
