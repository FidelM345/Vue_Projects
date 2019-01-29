              <template>
                <div>

                 <header-main></header-main>

                   <router-view></router-view>

                 

                 
              
                </div>
              </template>


              <script>

              import addBlog from './components/addBlog.vue'
              import showBlog from './components/showBlog.vue'
              import listBlog from './components/listBlog.vue'
              import header from './components/header.vue'

              export default {
              
                components: {
                'add-blog':addBlog,
                'show-blog':showBlog,
                'list-blog':listBlog,
                'header-main':header

                }
              }

              </script>


              <style>

              </style>
