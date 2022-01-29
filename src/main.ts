import { createApp } from "vue";
import { Quasar, Dialog } from "quasar";

// Import icon libraries
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";

// Import Quasar css
import "quasar/dist/quasar.css";

import App from "./App.vue";

const app = createApp(App);
app.use(Quasar, {
  plugins: { Dialog }, // import Quasar plugins and add here
});
app.mount("#app");
