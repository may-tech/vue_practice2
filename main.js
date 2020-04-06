var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: 'images/green-cocktail.jpeg',
    // inventry: '10',
    inStock: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: 'images/green-cocktail.jpeg'
      },
      {
        variantId: 2235,
        variantColor: 'pink',
        variantImage: 'images/pink-cocktail.jpeg'
      }
    ],
    sizes: ["24.0", "24.5", "25.0"],
    cart: 0
  },
  methods: {
    addToCart: function(){
      this.cart +=1
    },
    decrements: function(){
      this.cart -=1
    },
    updataProduct: function(variantImage){
      this.image = variantImage
    }
  }
})