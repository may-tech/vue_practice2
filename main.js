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
        variantColor: "green"
      },
      {
        variantId: 2235,
        variantColor: "blue"
      }
    ],
    sizes: ["24.0", "24.5", "25.0"]
  }
})