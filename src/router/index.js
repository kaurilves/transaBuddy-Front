import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from "@/views/AdminHomeView";
import CustomerView from "@/views/CustomerHomeView";
import CourierView from "@/views/CourierHomeView";
import AdminHomeView from "@/views/AdminHomeView";
import CustomerHomeView from "@/views/CustomerHomeView";
import CourierHomeView from "@/views/CourierHomeView";
import RegisterUserView from "@/views/RegisterUserView";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/admin',
        name: 'adminRoute',
        component: AdminHomeView
    },
    {
        path: '/customer',
        name: 'customerRoute',
        component: CustomerHomeView
    },
    {
        path: '/courier',
        name: 'courierRoute',
        component: CourierHomeView
    },
    {
        path: '/register',
        name: 'registerRoute',
        component: RegisterUserView
    },

    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
        }
    }
]

const router = new VueRouter({
    routes
})

export default router
