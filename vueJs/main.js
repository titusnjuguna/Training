Vue.component('product',{
    props:{
        premium{type:Boolean,
                required:true
            }
                },

    template:`
    <img class="card-img-top" v-bind:src="image">
            <div class="card-body" style="float:right;">
                <h1 class="card-title">{{title }}</h1>
                <p class="card-text" v-if="instock">In-Stock</p>
                <p class="card-text" 
                    v-else>Out-Of-Stock 
                    :class="{strg:}"</p>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                <div v-for="(variant,index) in variants" :key="variant.variantId"
                    class="color-box"
                    :style="{background:variant.variantColor}"
                    @mouseover="updateProduct(index)">
                    
                </div>
                <div>
                    <ul id="menu" v-for="size in sizes">
                        <li>{{size}}</li>
                    </ul>
                </div>
                <button v-on:click="addToCart" type="button" 
                    class="btn btn-info"
                    :disabled='!instock'
                    :class="{disabledButton:!instock}">Add Cart</button>
                <button v-on:click="lessToCart" type="button" class="btn btn-info">Remove Cart</button>
                <div class="cart">
                    <p>Cart({{cart}})</p>
                </div>


            </div>
    
    
    `,
    data(){
        return{Brand:'Generic',
        Product:'Airforce 1',
        selectedVariant:0,
        instock: true,
        details:["condition:new","material:Leather","color:Black"],
        variants:[
            {variantId : 45,
            variantColor: 'white',
            variantImage:'./assets/airforce1.jpg',
            variantQuantity:10},
            {variantId : 50,
             variantColor:'black',
             variantImage:'./assets/Black.jpeg',
             variantQuantity:0}
        ],
        cart: 0,}

},
methods:{
         addToCart: function () {
             this.cart += 1
         },
         updateProduct: function(variantImage){
            this.selectedVariant = index
            console.log(index)
         },
         lessToCart(){
             this.cart -= 1
         }
         
     },
computed:{ title(){
             return  this.Brand + ' ' + this.Product
         },
         image(){
             return this.variants[this.selectedVariant].variantImage
         },
         instock(){
             return this.variants[this.selectedVariant].variantQuantity
         },
         shipping(){
             if(this.premium){
             return 'Free Shipping'
             }else{
                 return 2.99
             }

        }
        
})

var app = new Vue({

    el: '#app',
   
})