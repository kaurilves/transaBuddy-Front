import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from "@/views/Admin/AdminHomeView";
import CustomerView from "@/views/SenderHomeView";
import CourierView from "@/views/CourierHomeView";
import AdminHomeView from "@/views/Admin/AdminHomeView";
import CustomerHomeView from "@/views/SenderHomeView";
import CourierHomeView from "@/views/CourierHomeView";
import RegisterUserView from "@/views/RegisterUserView";
import UserIsNotActiveView from "@/views/UserIsNotActiveView";
import SenderHomeView from "@/views/SenderHomeView";
import UserProfileView from "@/views/Admin/AdminUserProfileView";
import AdminUserProfileView from "@/views/Admin/AdminUserProfileView";
import AdminAdjustPricingView from "@/views/Admin/AdminAdjustPricingView";
import NewOrderView from "@/views/NewOrderView";
import SenderOrderView from "@/views/SenderOrderView";
import OrderView from "@/views/OrderView";

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
      path: '/order',
      name: 'NewOrderView',
        path: '/new-order',
        name: 'NewOrderView',
        component: NewOrderView

    },
    {
        path: '/order',
        name: 'OrderView',
        component: OrderView
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
