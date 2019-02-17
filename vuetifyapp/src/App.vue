<template>

<v-app class="">

  <Toolbar></Toolbar>

  <v-content class="mx-4 mt-4">

     <router-view></router-view>

  </v-content>
 
</v-app>
  

</template>

<script>
import Toolbar from '@/components/Toolbar.vue'
export default {
    components:{
        Toolbar
    }

}
</script>

