import DefaultTheme from "vitepress/theme";
import { inBrowser } from "vitepress";
import Layout from "./Layout.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ router }) {
    if (inBrowser) {
      const root = document.documentElement;
      router.onBeforePageLoad = () => { root.classList.add("route-loading"); };
      router.onAfterRouteChange = () => { root.classList.remove("route-loading"); };
    }
  },
};
