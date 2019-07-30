import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faPhone,
    faEnvelope,
    faGlobeAsia
  } from '@fortawesome/free-solid-svg-icons'
import {
    faFacebookMessenger,
    faLinkedin,
    faGithub
  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhone)
library.add(faEnvelope)
library.add(faGlobeAsia)
library.add(faFacebookMessenger)
library.add(faLinkedin)
library.add(faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  vuetify,
  components: { App },
  render: h => h(App)
}).$mount('#app')
