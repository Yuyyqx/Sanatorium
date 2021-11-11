
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/login/login","pages/login/regist/regist","pages/login/regist/binding","pages/login/regist/bindingOld","pages/message/message","pages/mine/mine","pages/mine/edit/information","pages/mine/real/real","pages/photo/photo"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"selectedColor":"#3A9255","backgroundColor":"#fff","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/images/index1.png","selectedIconPath":"static/images/new2.png"},{"pagePath":"pages/photo/photo","text":"监控","iconPath":"static/images/photo1.png","selectedIconPath":"static/images/new1.png"},{"pagePath":"pages/message/message","text":"消息","iconPath":"static/images/message1.png","selectedIconPath":"static/images/new4.png"},{"pagePath":"pages/mine/mine","text":"我的","iconPath":"static/images/mine1.png","selectedIconPath":"static/images/new3.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"Sanatorium","compilerVersion":"3.1.13","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#27ACA3"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/login/regist/regist","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/login/regist/binding","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/login/regist/bindingOld","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/message/message","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"消息"}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/mine/edit/information","meta":{},"window":{"navigationBarTitleText":"个人设置"}},{"path":"/pages/mine/real/real","meta":{},"window":{"navigationBarTitleText":"实名认证"}},{"path":"/pages/photo/photo","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"监控"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});