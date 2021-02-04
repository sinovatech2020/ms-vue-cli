let baseUrl;
import Vue from "vue";
import VConsole from "vconsole";
if('pro' === process.env.UNICOM_SERVER_ENV){
    //生产环境
    console.warn('当前生产环境');
    baseUrl = `https://m.client.10010.com`;
}else if('huidu' === process.env.UNICOM_SERVER_ENV){
    //灰度环境
    console.warn('当前灰度环境');
    baseUrl = `https://m.client.10010.com`;
}else if('prepub' === process.env.UNICOM_SERVER_ENV){
    //预发布环境
    console.warn('当前预发布环境');
    baseUrl = `https://client.10010.com`;
}else if('dev' === process.env.UNICOM_SERVER_ENV){
    //预发布环境
    console.warn('当前测试环境');
    baseUrl = `http://ecstest2018.10010.com`;
}else if('api' === process.env.UNICOM_SERVER_ENV){
    //本地开发环境
    console.warn('当前本地开发环境');
    baseUrl = `/api-proxy`;
}
// 移动端调试
if('pro' !== process.env.UNICOM_SERVER_ENV){
    if(navigator.userAgent.indexOf("unicom") > -1){
        new VConsole();
    }
    Vue.config.devtools = false;
}
export { baseUrl };