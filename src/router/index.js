import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import AdminHomeView from "@/views/admin/AdminHomeView";
import SenderHomeView from "@/views/sender/SenderHomeView";
import CourierHomeView from "@/views/courier/CourierHomeView";
import RegisterUserView from "@/views/home/RegisterUserView";
import AdminUserProfileView from "@/views/admin/AdminUserProfileView";
import AdminAdjustPricingView from "@/views/admin/AdminAdjustPricingView";
import NewOrderView from "@/views/order/NewOrderView";
import OrderView from "@/views/order/OrderView";
import SenderUserProfileView from "@/views/sender/SenderUserProfileView";
import SenderAllOrdersView from "@/views/sender/SenderAllOrdersView";

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
        name: 'adminUserProfileView',
        component: AdminUserProfileView
    },
    {
        path: '/admin/prices',
        name: 'adminAdjustPricingView',
        component: AdminAdjustPricingView
    },

    {

        path: '/new-order',
        name: 'newOrderView',
        component: NewOrderView

    },
    {
        path: '/order',
        name: 'orderView',
        component: OrderView
    },
    {
        path: '/sender/users/profile',
        name: 'senderUserProfileView',
        component: SenderUserProfileView
    },
    {
        path: '/sender/users/profile',
        name: 'senderUserProfileView',
        component: SenderUserProfileView
    },
    {
        path: '/sender/orders',
        name: 'senderAllOrders',
        component: SenderAllOrdersView
    },

    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/home/AboutView.vue')
        }
    }
];

const router = new VueRouter({
    routes
})

export default router
