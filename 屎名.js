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
// @match        https://www.luogu.com.cn/user/*
// @match        http://www.luogu.com.cn/user/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var uid = 87940; //这里放你想要变成屎名的uid
	var str = ["lg-fg-red lg-bold", "lg-fg-orange lg-bold", "lg-fg-purple lg-bold", "lg-fg-bluelight", "lg-fg-green","lg-fg-gray"];
    var tar = [];
	for(var i0 = 0; i0 < str.length; i0++)
	{
		var tmp = document.getElementsByClassName(str[i0]);
		for(var i1 = 0; i1 < tmp.length; i1++)
			tar.push(tmp[i1]);
	}
    var ele = "&nbsp;<span class=\"am-badge am-radius lg-bg-brown\">作弊者</span>";
    var fuck = [];
    for (var i = 0; i < tar.length; i++){
        if (tar[i].attributes["href"] != undefined &&
            tar[i].attributes["href"].value == ("/user/"+uid))
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
    if (document.URL == ("https://www.luogu.com.cn/user/"+uid))
    {
        tar1[2].innerHTML="作弊者";
        tar2[2].innerHTML="-INF";
    }
})();


