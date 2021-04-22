import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";
import ContactUs from "../components/ContactUs";
import Terms from "../components/Terms";
import AboutUs from "../components/AboutUs";
import RefundPolicy from "../components/RefundPolicy";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: ContactUs,
    },
    {
      path: "/about-us",
      name: "about-us",
      component: AboutUs,
    },
    {
      path: "/terms",
      name: "terms",
      component: Terms,
    },
    {
      path: "/refund-policy",
      name: "refund-policy",
      component: RefundPolicy,
    },
  ],
});
