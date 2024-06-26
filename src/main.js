import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';


const app = createApp(App)
app.use(router)
app.use(TDesign)
app.use(Antd)
app.mount('#app')
