var app = new Vue({
  el: '#app',
  data: {
    brand: 'VueMastery',
    product: 'Socks',
    selectedVariant: 0,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: 'images/green-cocktail.jpeg',
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: 'pink',
        variantImage: 'images/pink-cocktail.jpeg',
        variantQuantity: 0
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
    updataProduct: function(index){
      this.selectedVariant = index
      console.log(index)
    }
  },
    computed: {
      // 「brand」と「product」を足して「title」プロパティとする。
      title(){
        return this.brand + ' ' + this.product 
      },
      // 配列データ「variants[selectedVariant(0 or 1)]」の「variantImage」を「image」とする。
      image(){
        return this.variants[this.selectedVariant].variantImage
      },
      // 配列データ「variants[selectedVariant(0 or 1)]」の「variantQuantity」を「inStock」とする。
      inStock(){
        return this.variants[this.selectedVariant].variantQuantity

      }
  }
})