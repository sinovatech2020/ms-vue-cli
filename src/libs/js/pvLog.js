import qs from "qs";
import Vue from "vue";
/**
     * 判断是否在联通手厅客户端内部
     */
    function isInApp() {
        if (navigator.userAgent.indexOf("unicom") > -1) {
            return true;
        } else {
            return false;
        };
    }
    /**
     * 判断是否在联通手厅客户端内部
     */
    function isAndroid() {
        let u = navigator.userAgent;
        let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
        return isAndroid;
    };
    /**
     * 获取cookie
     */
    function getCookie(name){
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
        else
        return '';
    }
export default{
    install(){
        Vue.prototype.$pvLog = this.pvLog;
    },
    pvLog(item = {} , endCallback = Function){
        let newImg = new Image(1, 1);
        let data = new Object();
        data[`transId`] = `业务ID写死`;
        data[`mobile`] = getCookie(`u_account`);
        data[`provId`] = getCookie(`city`)?getCookie(`city`).split('|')[0]:``;
        data[`cityId`] = getCookie(`city`)?getCookie(`city`).split('|')[1]:``;
        data[`uptime`] = new Date() || Date.now();
        data[`version`] = getCookie(`c_version`);
        data[`clientType`] = isInApp()?isAndroid()?'Android':'IOS':'';
        data[`refer`] = window.location.href;
        data = {
            ...data,
            ...item
        };
        newImg.src = `http://smartad.10010.com/msupport/count/businessLogRecords.gif?${qs.stringify(data)}`;
        let toLoad = function(){
            newImg.parentNode.removeChild(newImg);
        }
        newImg.onload = toLoad;
        newImg.onerror = toLoad;
        document.getElementsByTagName(`body`)[0].appendChild(newImg);
    }
}
