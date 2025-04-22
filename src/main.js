import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import pinia from '@/stores/index'
import ECharts from 'vue-echarts'
import 'echarts'
import '@/assets/main.scss'

const app = createApp(App)
app.use(ElementPlus)

app.use(pinia)
app.use(router)
app.mount('#app')
app.component('ECharts', ECharts)

