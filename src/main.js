/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import './index.css';

import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  render(h) {
    return h(App);
  },
}).$mount('#app');
