import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import {createRouter, createWebHistory } from "vue-router"
import LogIn from "./components/LogIn.vue";
import BlogPage from "./components/BlogPage.vue";
import ResumePage from "./components/ResumePage.vue";
import ContactPage from "./components/ContactPage.vue";
import PortfolioPage from "./components/PortfolioPage.vue";

const routes=[
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },

  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },

  {
    name: "LogIn",
    component: LogIn,
    path: "/login",
  },
  {
    name: "BlogPage",
    component: BlogPage,
    path: "/blog",
  },
  {
    name: "ResumePage",
    component: ResumePage,
    path: "/resume",
  },
  {
    name: "ContactPage",
    component: ContactPage,
    path: "/contact",
  },

  {
    name: "PortfolioPage",
    component: PortfolioPage,
    path: "/portfolio",
  },
];

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router
