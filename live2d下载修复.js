// ==UserScript==
// @name         live2d下载修复
// @namespace    https://github.com/yandujun363/Live2D-download-fix
// @version      1.0
// @description  修复live2d无法下载
// @author       氧度菌
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @match        https://www.live2d.com/zh-CHS/cubism/download/editor/*
// @icon         https://www.live2d.com/wp-content/themes/cubism_new/assets/img/favicon.ico
// @grant        none
// ==/UserScript==


(function() {
    let vre_win = "5.0.05";
    $(document).ready(function(){
        $("#accept_win").click(
            function (){
                window.open("https://cubism.live2d.com/editor/bin/Live2D_Cubism_Setup_"+vre_win+".exe")
            }
        )
     });
})();