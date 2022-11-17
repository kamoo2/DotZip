import Vue from "vue";
import VueRouter from "vue-router";
import AuthGuard from "./utils/auth.guard";
import { adminRoot } from "./constants/config";
import { UserRole } from "./utils/auth.roles";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("./views/home")
  },
  {
    path: adminRoot,
    component: () => import("./views/app"),
    redirect: `${adminRoot}/home`,
    meta: { loginRequired: true },
    children: [
      {
        path: "home",
        component: () => import("./views/app/home")
      },
      {
        path: "search",
        component: () => import("./views/app/search"),
        redirect: `${adminRoot}/search/area`,
        children: [
          {
            path: "area",
            component: () => import("./views/app/search/Area")
          },
          {
            path: "name",
            component: () => import("./views/app/search/Name")
          }
        ]
      },
      {
        path: "bookmark",
        component: () => import("./views/app/bookmark"),
        redirect: `${adminRoot}/bookmark/area`,
        children: [
          {
            path: "area",
            component: () => import("./views/app/bookmark/Area")
          },
          {
            path: "house",
            component: () => import("./views/app/bookmark/House")
          }
        ]
      },

      {
        path: "support",
        component: () => import("./views/app/support"),
        redirect: `${adminRoot}/support/notice`,
        children: [
          {
            path: "notice",
            component: () => import("./views/app/support/Notice")
          },
          {
            path: "QnA",
            component: () => import("./views/app/support/QnA")
          },
          {
            path: "contact",
            component: () => import("./views/app/support/Contact")
          }
        ]
      }
    ]
  },
  {
    path: "/error",
    component: () => import("./views/Error")
  },
  {
    path: "/user",
    component: () => import("./views/user"),
    redirect: "/user/login",
    children: [
      {
        path: "login",
        component: () => import("./views/user/Login")
      },
      {
        path: "register",
        component: () => import("./views/user/Register")
      },
      {
        path: "forgot-password",
        component: () => import("./views/user/ForgotPassword")
      },
      {
        path: "reset-password",
        component: () => import("./views/user/ResetPassword")
      }
    ]
  },
  {
    path: "*",
    component: () => import("./views/Error")
  }
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history"
});
router.beforeEach(AuthGuard);
export default router;
