var app = new Vue ({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'Style and Comfort',
        altText: 'a pair of socks',
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        inStock: true,
        inventory: 0,
        onSale: true,
        variants: [
            {
                variantId: 2234,
                variantColor: "Green",
                variantImage: './images/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColor: "Blue",
                variantImage: './images/vmSocks-blue-onWhite.jpg'
            }
        ],
        cart: 0,        
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        details: ["80% cotton", "20% polyester", "Gender-neutral"], 
        image: './images/vmSocks-green-onWhite.jpg'
        /*'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'*/
    },
    methods: {
        addToCart: function () {
            this.cart += 1 
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        }
    }
})