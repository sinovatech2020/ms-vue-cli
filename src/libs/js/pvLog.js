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
    /**
     * 字符串转Base64编码
     * @param {String} str 
     * @returns 
     */
    function encode(str){
        // 对字符串进行编码
        var encode = encodeURI(str);
        // 对编码的字符串转化base64
        var base64 = btoa(encode);
        return base64;
    }
    /**
     * 截取url参数
     * @param {String} name 
     * @returns 
     */
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
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
        data[`urlApp`] = encode(window.location.href);
        data[`baseConvert`] = 'YES';//urlApp转译base64，此参数必须传YES；
        data[`remark4`] = getQueryString('channel');
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

// 入口编码 transId
// 入口位置名称   actCode
// 类型   upType
// 菜单ID menuId
// title名称  titleName
// 用户号码 mobile
// 省份编码 provId
// 地市编码 cityId
// 点击时间 uptime
// 客户端版本    version
// 客户端类型    clientType
// 目标URL    urlApp
// 来源url    refer
// 用户筛选的省份编码    choosepro
// 用户筛选的地市编码    choosecity
// 停留时长（秒）  staytimes
// 页面耗时，渲染时长    duration
// 渠道编码 channel
// 触点编码 touchcode
// 业务编码 bizcode
// 本异网标识    diffnet
// 是否登入 islogin
// 备注1  remark1
// 备注2  remark2
// 备注3  remark3
// 备注4  remark4
