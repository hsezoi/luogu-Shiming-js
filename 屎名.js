// ==UserScript==
// @name         洛谷屎名优化
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  让除了你之外所有洛谷用户名变成屎色并添加作弊者标签，让自己化身强哥QAQ
// @author       ghj1222
// @match        https://www.luogu.com.cn/*
// @match        http://www.luogu.com.cn/*
// @match        https://www.luogu.com.cn
// @match        http://www.luogu.com.cn
// @match        https://www.luogu.com.cn/space/show?uid=*
// @match        http://www.luogu.com.cn/space/show?uid=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var uid = 87940; //这里放你想要变成屎名的uid
    var fuck1 = document.getElementsByClassName("lg-fg-red lg-bold");
    var fuck2 = document.getElementsByClassName("lg-fg-orange lg-bold");
    var fuck3 = document.getElementsByClassName("lg-fg-purple lg-bold");
    var fuck4 = document.getElementsByClassName("lg-fg-bluelight");
    var fuck5 = document.getElementsByClassName("lg-fg-green");
    var fuck6 = document.getElementsByClassName("lg-fg-gray");
    var tar = [];
    for (var i1 = 0; i1 < fuck1.length; i1++) tar.push(fuck1[i1]);
    for (var i2 = 0; i2 < fuck2.length; i2++) tar.push(fuck2[i2]);
    for (var i3 = 0; i3 < fuck3.length; i3++) tar.push(fuck3[i3]);
    for (var i4 = 0; i4 < fuck4.length; i4++) tar.push(fuck4[i4]);
    for (var i5 = 0; i5 < fuck5.length; i5++) tar.push(fuck5[i5]);
    for (var i6 = 0; i6 < fuck6.length; i6++) tar.push(fuck6[i6]);
    var ele = "&nbsp;<span class=\"am-badge am-radius lg-bg-brown\">作弊者</span>";
    var fuck = [];
    for (var i = 0; i < tar.length; i++){
        if (tar[i].attributes["href"] != undefined &&
            tar[i].attributes["href"].value == ("/space/show?uid="+uid))
        {
            //console.warn(tar[i].innerHTML);
            fuck.push(tar[i]);
        }
    }
    for(i = 0; i < fuck.length; i++){
        $(fuck[i]).after(ele);
        fuck[i].className="lg-fg-brown lg-bold";
    }
    var tar1 = document.getElementsByClassName("lg-right");
    var tar2 = document.getElementsByClassName("lg-bignum-num");
    if (document.URL == ("https://www.luogu.com.cn/space/show?uid="+uid))
    {
        tar1[2].innerHTML="作弊者";
        tar2[2].innerHTML="-INF";
    }
})();


