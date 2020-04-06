var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: 'images/green-cocktail.jpeg',
    inStock: false,
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