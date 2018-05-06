import Vue from 'vue'
import App from '../todolists.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);

document.addEventListener('DOMContentLoaded', () => {
  const el = "#todolists"
  const app = new Vue({
    el,
    render: h => h(App)
  })

  console.log(app)
})
