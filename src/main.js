import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkerAlt,
  faPaw,
  faHome,
  faCar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Auth0Plugin } from "./plugins/auth0.plugin";
import "bulma-extensions/dist/css/bulma-extensions.min.css";
import "bulma-extensions/dist/js/bulma-extensions";

library.add(faMapMarkerAlt, faPaw, faHome, faCar);

Vue.component("fa-icon", FontAwesomeIcon);

Vue.use(Auth0Plugin, {
  // TODO: sacar credenciales del repo
  domain: "dev-n4s3nw3w.auth0.com",
  clientId: "oFSeqe0VzzrZVQBbEXXdmpiLKs70jWNb",
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
