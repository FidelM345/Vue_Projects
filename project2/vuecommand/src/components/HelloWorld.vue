<template>

  <div>

    <h1>List of top 4 club in england</h1>
    
    <ul>
      <li v-for="club in clubs" :key="club.id">{{club}}</li>
    </ul>
   
  </div>

</template>

<script>


export default {

  data(){
    return{
      clubs:['chelsea','manu','mancity','liverpool']
    }
  }

 
}
</script>

<style scoped>
h1{
  color:green
}

</style>
