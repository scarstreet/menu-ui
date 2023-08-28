import Vue from 'vue';
import './index.css';

import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,

  render(h) {
    return h(App);
  },
}).$mount('#app');
