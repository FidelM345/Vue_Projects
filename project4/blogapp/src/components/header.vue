<template>

<!-- <nav>
    <ul>
        <li><router-link to="/">Blog</router-link></li>
        <li><router-link to="/add">Add New Blog</router-link></li>
       
    </ul>
</nav> -->

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
       <router-link to="/" class="nav-link" exact>Blog</router-link>
      </li>
      <li class="nav-item">
       <router-link to="/add" class="nav-link">Add Blog</router-link>
      </li>
    
    </ul>
  </div>
</nav>
    
</template>

<script>
export default {

}
</script>

<style scoped>

.router-link-active{
    background: #eeeeee;
    color: #444;
}


</style>
