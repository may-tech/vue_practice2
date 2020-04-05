var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    link: 'https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding',
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
    ]
  }
})