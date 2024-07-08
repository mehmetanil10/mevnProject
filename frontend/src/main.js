import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/styles.css";

import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/index.js';
import { createPinia } from "pinia";
import { useBookStore } from "./stores/bookStore";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp} from '@fortawesome/free-regular-svg-icons'
library.add(faArrowLeft, faThumbsUp)

const pinia = createPinia();

const bookStore = useBookStore(pinia);

bookStore.fetchBooks().then(()=> {

    const app = createApp(App);
    app.use(pinia);
    app.use(router);
    app.mount('#app');
    app.component('font-awesome-icon', FontAwesomeIcon)

})
