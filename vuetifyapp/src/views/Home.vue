<template>
  <div class="home">

    <productone ></productone>
    <producttwo ></producttwo>
   
  </div>
</template>

<script>
// @ is an alias to /src
import productone from '@/components/product-list-one.vue'
import producttwo from '@/components/product-list-two.vue'

export default {
  name: 'home',
  components: {
    productone,
    producttwo
  },
  data(){
    return{
        
    }
  }
}
</script>

<style>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>

