import Vue from "vue";
import VueRouter from "vue-router";
import AuthGuard from "./utils/auth.guard";
import { adminRoot } from "./constants/config";
import { UserRole } from "./utils/auth.roles";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "home" */ "./views/home")
    // redirect: `${adminRoot}/piaf`,
  },
  {
    path: adminRoot,
    component: () => import(/* webpackChunkName: "app" */ "./views/app"),
    redirect: `${adminRoot}/home`,
    meta: { loginRequired: true },
    /*
   define with Authorization :
   meta: { loginRequired: true, roles: [UserRole.Admin, UserRole.Editor] },
   */
    children: [
      {
        path: "home",
        component: () =>
          import(/* webpackChunkName: "piaf" */ "./views/app/home")
      },
      {
        path: "search",
        component: () =>
          import(/* webpackChunkName: "piaf" */ "./views/app/search"),
        redirect: `${adminRoot}/search/area`,
        children: [
          {
            path: "area",
            component: () =>
              import(/* webpackChunkName: "piaf" */ "./views/app/search/Area")
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: "name",
            component: () =>
              import(/* webpackChunkName: "piaf" */ "./views/app/search/Name")
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          }
        ]
      },
      {
        path: "bookmark",
        component: () =>
          import(/* webpackChunkName: "second-menu" */ "./views/app/bookmark"),
        redirect: `${adminRoot}/bookmark/area`,
        children: [
          {
            path: "area",
            component: () =>
              import(/* webpackChunkName: "piaf" */ "./views/app/bookmark/Area")
          },
          {
            path: "house",
            component: () =>
              import(
                /* webpackChunkName: "piaf" */ "./views/app/bookmark/House"
              )
          }
        ]
      },

      {
        path: "support",
        component: () =>
          import(/* webpackChunkName: "single" */ "./views/app/support"),
        redirect: `${adminRoot}/support/notice`,
        children: [
          {
            path: "notice",
            component: () =>
              import(
                /* webpackChunkName: "piaf" */ "./views/app/support/Notice"
              )
          },
          {
            path: "QnA",
            component: () =>
              import(/* webpackChunkName: "piaf" */ "./views/app/support/QnA")
          },
          {
            path: "contact",
            component: () =>
              import(
                /* webpackChunkName: "piaf" */ "./views/app/support/Contact"
              )
          }
        ]
      }
    ]
  },
  {
    path: "/error",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  },
  {
    path: "/user",
    component: () => import(/* webpackChunkName: "user" */ "./views/user"),
    redirect: "/user/login",
    children: [
      {
        path: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Login")
      },
      {
        path: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Register")
      },
      {
        path: "forgot-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ForgotPassword")
      },
      {
        path: "reset-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ResetPassword")
      }
    ]
  },
  {
    path: "*",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  }
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history"
});
router.beforeEach(AuthGuard);
export default router;
