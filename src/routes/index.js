import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";
import ContactUs from "../components/ContactUs";
import PrivacyPolicy from "../components/PrivacyPolicy";
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
      path: "/privacy-policy",
      name: "privacy",
      component: PrivacyPolicy,
    },
    {
      path: "/refund-policy",
      name: "refund-policy",
      component: RefundPolicy,
    },
  ],
});
