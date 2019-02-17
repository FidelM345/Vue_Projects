<template>
    <div id="product-list-two">

        <h1>Product list one</h1>
        <ul>
            <li v-for="item in salesProducts">
                <span class="name">{{item.name}}</span>
                <span class="price">${{item.price}}</span>
            </li>
            
        </ul>

        <button v-on:click="reducePrice" class="mato">Reduce Price</button>

    </div>

</template>

<script>
    export default {
       // props: ['list']
       computed:{
           products(){
               
               return this.$store.state.products
           },
           salesProducts(){

               return this.$store.getters.salesProducts



            //    var sales=this.$store.state.products.map(product=>{
            //        //used to map the data again inorder to modify them
            //        return {
            //            name:'**'+product.name+'**',
            //            price:product.price/2
            //        }
            //    })

            //    return sales;
           }
       },
       methods:{
           reducePrice:function(){

            //   this.$store.state.products.forEach(element => {

            //        element.price-=1
                   
            //    });

            //commits the reducePrice mutation
            this.$store.commit('reducePrice');

           }
       }

    }
</script>
<style scoped>
#product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul{
    padding: 0;
    list-style-type: none;
}
#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}

.mato{
    background-color: aliceblue;
}
</style>

