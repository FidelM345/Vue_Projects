Vue.component('greeting',{
    template:'<p> I am A Component very reusable {{name}} <button v-on:click="changeName">Change Name</button> </p>.'
    
    ,data:function(){
        return{

            name:'fidel omolo'

        }
    },
    methods:{
        changeName:function(){

            return this.name='Matunda Esther'
            
        }
    }
})





var one=new Vue({
    el:'#vue-app-one',
    data:{

        title:'Vue App One',
        posted:''

    },
    methods:{
        submits:function(){

            this.posted=this.$refs.input.value;
    
            }
    
    

    },
    computed:{
        greet:function(){

            return 'Hello I am APP one Beast';

        },

        

    }
})


var two=new Vue({
    el:'#vue-app-two',
    data:{

        title:'Vue App Two'

    },
    methods:{
        changeTitle:function(){
            one.title="APP Two changed it"
        }

    },
    computed:{

        greet:function(){

            return 'Hello I am APP Two Bwana';

        }

        
    }
})