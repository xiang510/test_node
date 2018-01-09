import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/common.css';
import components from './components';
import router  from './routers';

Vue.use(ElementUI);

Object.keys(components).forEach((key)=>{
  var name = key.replace(/(\w)/,(v) => v.toUpperCase()); //首字母大写

  Vue.component(`v${name}`, components[key])
});

new Vue({
  router
}).$mount('#app')



