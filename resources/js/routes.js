import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomeComp from './components/pages/HomeComp';
import PizzaListComp from './components/pages/PizzaListComp';


const router = new VueRouter({

    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [

      {
        path: '/',
        name: 'home',
        component: HomeComp,
      },
      {
        path: '/lista-pizze',
        name: 'PizzaList',
        component: PizzaListComp,
      }
    ]
})

export default router;