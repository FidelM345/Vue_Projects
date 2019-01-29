<template>
    <div class="container">
        <h1>{{blogs.title}}</h1>
        <article>{{blogs.content}}</article>
    
        <p id="maxz"><b>Author: {{blogs.author}}</b> </p>
        <h6>Categories</h6>
        <ul>
            <li v-for="category in blogs.categories">{{category}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            //the id variable is assigned value entered by the user in the browser url
            id:this.$route.params.id,//able to use it becoz vue-router is available
            blogs:{}
        }
    },
    created(){//created life cycle hook is the best place to fetch resources at

                    this.$http.get('https://myprojo-be85d.firebaseio.com/post/'+this.id+'.json').then(function(data){

                    // get body data
                   // this.blogs = data.body;

                   return data.json()
              
            }).then(function(data){

                this.blogs=data; //a single blog to populate the blog object

            })

           }

}
</script>

<style scoped>

#maxz{
    margin-top: 35px;
}

</style>
