import Vue from 'vue'
import Route from 'vue-router'

import App from '../views/App.vue'
import Login from '../views/login.vue'
import Reg from '../views/register.vue'

Vue.use(Route);

export default new Route({

    mode: 'history',
    routes:[
        {
            path: '/',
            component: App
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Reg
        },
    ]

})