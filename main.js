var app = new Vue ({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
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
        image(){
            return this.variants[this.selectedVariant].variantImage           
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if(this.onSale) {
                return this.brand + ' ' + this.product + ' are on sale !'
            }
                return this.brand + ' ' + this.product + ' are not on sale :('
        }
    }
})