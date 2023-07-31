

import { createApp } from 'vue'
import App from './App.vue'
import activeElement from "./components/ActiveElement.vue"
import KnowledgeBase from "./components/KnowledgeBase.vue"
import KnowledgeGrid from './components/KnowledgeGrid.vue';
import KnowledgeElement from "./components/KnowledgeElement.vue";


const app = createApp(App);
app.component("active-element",activeElement);
app.component("knowledge-base",KnowledgeBase);
app.component('knowledge-grid', KnowledgeGrid);
app.component("knowledge-element",KnowledgeElement);

app.mount("#app");
