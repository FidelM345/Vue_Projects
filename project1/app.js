new Vue({
    el:'#vue-app',
    data:{
        name:'The vue beast angel',
        student:'fidel',
        website:'https://travis-ci.org/vuejs/vetur',
        linktag:'<a href="https://travis-ci.org/vuejs/vetur"> The Beast website</a>',
        age:23,
        f_name:'',
        f_age:'',
        Num:20,
        a:0,
        b:0,
        available:false ,
        nearby:false,
        success:false,
        error:false,
        clubs:['chelsea','manu','mancity','liverpool'],
        table:[
            {name:'chelsea',points:81},
            {name:'manu',points:77},
            {name:'mancity',points:74},
            {name:'liverpool',points:71}
        ]
    },
    methods:{
        greet:function(){

            return "Good morning Bro?"+" "+this.name;
        },
        subtract:function(){
           
           return this.age-=2;
        }
        // ,
        // addAgeToA:function(){

        //     console.log("addAgeToA")

        //     return this.age+this.a;
        // },
        // addAgeToB:function(){
        //     console.log("addAgeToB")

        //     return this.Num+this.b;
        // }
    },
    computed:{
        addAgeToA:function(){

            console.log("addAgeToA")

            return this.age+this.a;
        },
        addAgeToB:function(){
            console.log("addAgeToB")

            return this.Num+this.b;
        },
        compClasses:function(){

            return{
                available:this.available,
                nearby:this.nearby

            }
        }

    }
})