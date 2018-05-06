import Vue from 'vue'
import App from '../todolists.vue'

document.addEventListener('DOMContentLoaded', () => {
  const el = "todolists"
  const app = new Vue({
    el,
    render: h => h(App)
  })

  console.log(app)
})
