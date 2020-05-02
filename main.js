Vue.component('product', {
    props: {
        premium:{
            type: Boolean,
            required: true
        }
    },
    template: `
        <div class="product">

            <div class="product-image">
                <img v-bind:src="image" v-bind:alt="altText"/>
            </div>

            <div class="product-info">
            
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>                    
                <p v-else :class="{outOfStock: !inStock}">Out of Stock</p>
                <span>{{ sale }}</span> 

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>    

                <div v-for="(variant, index) in variants" 
                    class="color-box"
                    :key="variant.variantId"
                    :style="{ backgroundColor: variant.variantColor }"
                    @mouseover="updateProduct(index)">
                </div>

                <p>User is premium: {{ premium }}</p>

                <button v-on:click="addToCart" 
                        :disabled="!inStock"
                        :class="{ disabledButton: !inStock }"
                >Add cart</button>

                <button @click="removeFromCart">Remove cart</button>

                <div class="cart">
                    <p>Cart({{ cart }})</p>
                </div>

                <p><a :href="link" target="_blank">More products like this</a></p>
                
            </div> 
        </div>
    `,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            altText: 'a pair of socks',
            link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "Green",
                    variantImage: './images/vmSocks-green-onWhite.jpg',
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: "Blue",
                    variantImage: './images/vmSocks-blue-onWhite.jpg',
                    variantQuantity: 0
                }
            ],
            cart: 0,
            onSale: true
        }
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectedVariant = index
        },
        removeFromCart() {
            this.cart -= 1
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' are on sale !'
            }
            return this.brand + ' ' + this.product + ' are not on sale :('
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true
    }
})