import Vue from "vue";
import VueRouter from "vue-router";
import AuthGuard from "@/utils/auth.guard";
import { adminRoot } from "@/constants/config";
// import { UserRole } from "../utils/auth.roles";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "home" */ "@/views/home")
    // redirect: `${adminRoot}/piaf`,
  },
  {
    path: adminRoot,
    component: () => import(/* webpackChunkName: "app" */ "@/views/app"),
    redirect: `${adminRoot}/home`,
    meta: { loginRequired: true },
    /*
   define with Authorization :
   meta: { loginRequired: true, roles: [UserRole@Admin, UserRole@Editor] },
   */
    children: [
      {
        path: "home",
        component: () => import("@/views/app/home")
      },
      {
        path: "search",
        component: () => import("@/views/app/search"),
        redirect: `${adminRoot}/search/area`,
        children: [
          {
            path: "area",
            component: () => import("@/views/app/search/Area")
            // meta: { roles: [UserRole@Admin, UserRole@Editor] },
          },
          {
            path: "name",
            component: () => import("@/views/app/search/Name")
            // meta: { roles: [UserRole@Admin, UserRole@Editor] },
          }
        ]
      },
      {
        path: "bookmark",
        component: () => import("@/views/app/bookmark"),
        redirect: `${adminRoot}/bookmark/area`,
        children: [
          {
            path: "area",
            component: () => import("@/views/app/bookmark/Area")
          },
          {
            path: "house",
            component: () => import("@/views/app/bookmark/House")
          }
        ]
      },

      {
        path: "support",
        component: () => import("@/views/app/support"),
        redirect: `${adminRoot}/support/notice`,
        children: [
          {
            path: "notice",
            component: () => import("@/views/app/support/Notice")
          },
          {
            path: "QnA",
            component: () => import("@/views/app/support/QnA")
          },
          {
            path: "contact",
            component: () => import("@/views/app/support/Contact")
          }
        ]
      }
    ]
  },
  {
    path: "/error",
    component: () => import("@/views/Error")
  },
  {
    path: "/user",
    component: () => import("@/views/user"),
    redirect: "/user/login",
    children: [
      {
        path: "login",
        component: () => import("@/views/user/Login")
      },
      {
        path: "register",
        component: () => import("@/views/user/Register")
      },
      {
        path: "forgot-password",
        component: () => import("@/views/user/ForgotPassword")
      },
      {
        path: "reset-password",
        component: () => import("@/views/user/ResetPassword")
      }
    ]
  },
  {
    path: "*",
    component: () => import("@/views/Error")
  }
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history"
});
router.beforeEach(AuthGuard);
export default router;
