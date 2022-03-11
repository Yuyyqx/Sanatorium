import Vue from 'vue'
import App from './App'
//数据请求的封装
import api from './api/index.js'
Vue.prototype.$api = api;

//基础url
import baseUrl from './api/base.js'
Vue.prototype.$baseUrl = baseUrl;
//其他的工具类方法
import util from './utils/util.js'
Vue.prototype.$util = util;
//引入uView
import uView from "uview-ui";

// import "uni-colorui/lib/main.css";
// import "uni-colorui/lib/icon.css";
// import "uni-colorui/lib/animation.css";

import cuCustom from 'uni-colorui/lib/components/cu-custom.vue'
Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'
// 生成环境去除console.log
if (uni.getSystemInfoSync().platform !== "devtools") {
	console.log = () => {}
}
const app = new Vue({
    ...App
})
app.$mount()
