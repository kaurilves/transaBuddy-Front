import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminHomeView from "@/views/Admin/AdminHomeView";
import SenderHomeView from "@/views/SenderHomeView";
import CourierHomeView from "@/views/CourierHomeView";
import RegisterUserView from "@/views/RegisterUserView";
import AdminUserProfileView from "@/views/Admin/AdminUserProfileView";
import AdminAdjustPricingView from "@/views/Admin/AdminAdjustPricingView";
import SenderOrderView from "@/views/SenderOrderView";

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
        path: '/sender',
        name: 'senderRoute',
        component: SenderHomeView,
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
        path: '/admin/users/profile',
        name: 'AdminUserProfileView',
        component: AdminUserProfileView
    },
    {
        path: '/admin/prices',
        name: 'AdminAdjustPricingView',
        component: AdminAdjustPricingView
    },
    {
        path: '/sender/order',
        name: 'SenderOrderView',
        component: SenderOrderView
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
];

const router = new VueRouter({
    routes
})

export default router
