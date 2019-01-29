            <template>
 
            <div id="show-blog" v-theme="narrow">
                <h1>All Blog Articles</h1>
                <input type="text" placeholder="search blogs" v-model="search">
                <div class="single-blog" v-for="blog in filteredBlogs">
                    <router-link v-bind:to="'/blog/'+blog.id"><h2 v-rainbow>{{blog.title|to-uppercase}}</h2></router-link>
                    <article>{{blog.content|snippets}}</article>
                </div>
            </div>

            </template>


            <script>

             import searchMixin from '../mixins/searchMixin'



                export default {
                   

                    data(){
                        return{
                            wide:'wide',
                            narrow:'narrow',
                            blogs:[],
                            search:''

                        }
                    },
                    methods:{

                    },
                    created(){

                    this.$http.get('https://myprojo-be85d.firebaseio.com/post.json').then(function(data){

                    // get body data
                    //this.blogs = data.body.slice(0,10);

                    console.log(data)
                   
                   return data.json();// this is an asychronize task and returns a promise
              
            }).then(function(data){
                //fires when the data.json is through with its task
                var blogsArray=[]
                for(let key in data){
                    //key gives us access to the unique number of each of the posted blogs
                    data[key].id=key //adds key property to the object
                    blogsArray.push(data[key])//pushes the data objects to the array

                }
                this.blogs=blogsArray //asigns all the data object to the bkogs data property
            })
                    },
                    computed:{
                      
                    },
                    filters:{
                        'to-uppercase':function(value){

                            //the filter is used to turn contents from the API to upper case.

                            return value.toUpperCase();

                        }
                    },
                    mixins:[searchMixin]//externalizes the search fucntionality making reusability easy

                }
            </script>


            <style>

            #show-blog{
                max-width: 800px;
                margin: 0 auto;

            }
            .single-blog{
                padding: 20px;
                margin: 20px 0;
                box-sizing: border-box;
                background: #eeeeee
            }

            </style>
