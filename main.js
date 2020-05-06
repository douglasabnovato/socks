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
                <p>Shipping: {{ shipping }}</p>                   

                <product-details :details="details"></product-details>

                <div class="color-box" 
                    v-for="(variant, index) in variants"                     
                    :key="variant.variantId"
                    :style="{ backgroundColor: variant.variantColor }"
                    @mouseover="updateProduct(index)">
                </div>                

                <button v-on:click="addToCart" 
                        :disabled="!inStock"
                        :class="{ disabledButton: !inStock }"
                >Add Cart</button> 
                
                <button @click="removeFromCart">
                    Remove Cart
                </button>

                <p><a :href="link" target="_blank">More products like this</a></p>
                
            </div> 
            
            <div class="product-reviews-form">
                <h2>Reviews</h2>
                <p v-if="!reviews.length">There are no reviews yet.</p>
                <ul v-else>
                    <li v-for="(review, index) in reviews" :key="index">
                        <p>Name: {{ review.name }}</p>
                        <p>Rating: {{ review.rating }}</p>
                        <p>Reviews: {{ review.review }}</p>
                    </li>
                </ul>
            </div>

            <product-review @review-submitted="addReview"></product-review> 

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
            reviews:[],
            onSale: true
        }
    },
    methods: {
        addToCart () {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        updateProduct(index) {
            this.selectedVariant = index
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
        },
        addReview(productReview){
            this.reviews.push(productReview)
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
        shipping() {
          if (this.premium) {
            return "Free"
          }
            return 2.99
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' are on sale !'
            }
            return this.brand + ' ' + this.product + ' are not on sale :('
        }
    }
})

Vue.component('product-review',{
    template: `
        <form class="review-form" @submit.prevent="onSubmit">
            
            <p class="error" v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p>

            <p>
                <label for="name">Name: </label>
                <input required id="name" v-model="name" placeholder="name">
            </p>

            <p>
                <label for="review">Review:</label>
                <textarea required id="review" v-model="review"></textarea>
            </p>

            <p>
                <label for="rating">Rating:</label>
                <select id="rating" v-model.number="rating">
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
            </p>

            <p>Would you recommend this product?</p>
            <label>
                Yes
                <input type="radio" value="Yes" v-model="recommend"/>
            </label>
            <label>
                No
                <input type="radio" value="No" v-model="recommend"/>
            </label>
            <p>
                <input type="submit" value="Submit">
            </p>

        </form>
    `,
    data(){
        return {
            name: null,
            review: [],
            rating: null,
            recommend: null,
            errors:[]
        }
    },
    methods:{
        onSubmit(){
            this.errors = []
            if(this.name && this.review && this.rating){
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating
                }
                this.$emit('review-submitted', productReview)
                this.name = null
                this.review = null
                this.rating = null
            }else{
                if(!this.name) this.errors.push("Name required.")
                if(!this.review) this.errors.push("Review required.")
                if(!this.rating) this.errors.push("Rating required.")
            }          
            this.name=null,
            this.review=null,
            this.rating=null
        }
    }
})

Vue.component('product-details',{
    props: {
        details:{
            type:Array,
            required: true
        }
    },
    template: `
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
    `
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods:{
        updateCart(id){
            this.cart.push(id)
        }, 
        removeItem(id){
            for(var i = this.cart.length - 1; i >= 0; i--){
                if(this.cart[i] === id){
                    this.cart.splice(i, 1);
                }
            }
        }
    }    
})