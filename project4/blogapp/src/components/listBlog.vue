            <template>
 
            <div id="show-blog" v-theme="narrow">
                <h1>List Blog Titles</h1>
                <input type="text" placeholder="search blogs" v-model="search">
                <div class="single-blog" v-for="blog in filteredBlogs">
                    <h2 v-rainbow>{{blog.title|to-uppercase}}</h2>
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

                    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){

                    // get body data
                    this.blogs = data.body.slice(0,10);
              
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
                    mixins:[searchMixin]

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
