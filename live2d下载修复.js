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
    let Liv2D_download_link = "https://cubism.live2d.com/editor/bin/Live2D_Cubism_Setup_"
    let exe = ".exe"
    $(document).ready(function(){
        $("#accept_win").click(
            function (){
                window.open(Liv2D_download_link+"5.0.05"+exe)
            }
        );
        $("#v5_00_05_B1").click(
            function () {
                window.open(Liv2D_download_link+"5.0.05 beta1"+exe)
            }
        );
        $("#v5_00_04").click(
            function (){
                window.open(Liv2D_download_link+"5.0.04"+exe)
            }
        )
     });
})();