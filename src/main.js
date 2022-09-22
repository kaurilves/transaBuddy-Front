import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import VueAxios from "vue-axios"
import VueSimpleAlert from "vue-simple-alert";
import "./assets/css/style.css"
// import "./assets/image/track.png"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.use(VueAxios, axios)
Vue.use(VueSimpleAlert)
Vue.config.productionTip = false


new Vue({

    router,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
