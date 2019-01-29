export default{
    computed:{
        filteredBlogs:function(){
            //used for handling the search box functionality

            return this.blogs.filter((blog)=>{

                return blog.title.toUpperCase().match(this.search.toUpperCase())//checks whether the entered words math with the blog content
           
           })


        }
    }
}