import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Full from "../views/Full.vue";
import Login from "../views/Login.vue";
import AddRest from "../components/AddRest.vue";
import Restpro from "../components/Restpro.vue";
import Ordering from "../components/Ordering.vue";
import Item from "../components/AddItem.vue"
import Test from "../components/Test.vue";
import SuccussPayment from "../components/SuccessfulPayment.vue"
import OrderProfile from "../components/OrderPage"
import { authGuard } from "../auth";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter: authGuard
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: authGuard
    },
    {
      path: "/ordering",
      name: "Ordering",
      component: Ordering,
      beforeEnter: authGuard,
    },
    {
      path: "/orderprofile",
      name: "OrderProfile",
      component: OrderProfile,
      beforeEnter: authGuard,
    },
    {
      path: "/item",
      name: "Item",
      component: Item,
      beforeEnter: authGuard
    },
    {
      path: "/full",
      name: "full",
      component: Full,
      beforeEnter: authGuard,
      children: [
        {
          path: "addrest",
          name: "addrest",
          component: AddRest
        },
        {
          path: "restpro",
          name: "restpro",
          component: Restpro
        },
        {
          path: "test",
          name: "test",
          component: Test
        },
        {
          path: "payment/:id",
          name: "payment",
          alias: '/success',
          component: SuccussPayment
        }
      ]
    }
  ]
});

export default router;
