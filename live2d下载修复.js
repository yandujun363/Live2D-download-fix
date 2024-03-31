// ==UserScript==
// @name         live2d下载修复
// @namespace    https://github.com/yandujun363/Live2D-download-fix
// @updateURL    https://github.com/yandujun363/Live2D-download-fix/blob/main/live2d下载修复.js
// @downloadURL  https://github.com/yandujun363/Live2D-download-fix/blob/main/live2d下载修复.js
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
        );
        $("#v5_00_03").click(
            function (){
                window.open(Liv2D_download_link+"5.0.03"+exe)
            }
        );
        $("#v5_00_03_B1").click(
            function (){
                window.open(Liv2D_download_link+"5.0.03 beta1"+exe)
            }
        );
        $("#v5_00_02").click(
            function (){
                window.open(Liv2D_download_link+"5.0.02"+exe)
            }
        );
        $("#v5_00_01").click(
            function (){
                window.open(Liv2D_download_link+"5.0.01"+exe)
            }
        );
        $("#v5_00_00").click(
            function(){
                window.open(Liv2D_download_link+"5.0.00"+exe)
            }
        );
        $("#v5_00_00_B2").click(
            function (){
                window.open(Liv2D_download_link+"5.0.00 beta2"+exe)
            }
        );
        $("#v5_00_00_B1").click(
            function (){
                window.open(Liv2D_download_link+"5.0.00 bate2"+exe)
            }
        );
        $("#v4_02_04").click(
            function (){
                window.open(Liv2D_download_link+"4.2.04"+exe)
            }
        );
        $("#v4_02_04_B5").click(
            function (){
                window.open(Liv2D_download_link+"4.2.04 bate5"+exe)
            }
        );
        $("#v4_02_04_B4").click(
            function (){
                window.open(Liv2D_download_link+"4.2.04 bate4"+exe)
            }
        );
        $("#v4_02_04_B2").click(
            function (){
                window.open(Liv2D_download_link+"4.2.04 bate2"+exe)
            }
        );
        $("#v4_02_04_B1").click(
            function (){
                window.open(Liv2D_download_link+"4.2.04 bate1"+exe)
            }
        );
        $("#v4_02_03_2").click(
            function (){
                window.open(Liv2D_download_link+"4.2.03_2"+exe)
            }
        );
        $("#v4_02_03").click(
            function (){
                window.open(Liv2D_download_link+"4.2.03"+exe)
            }
        );
        $("#v4_02_02").click(
            function (){
                window.open(Liv2D_download_link+"4.2.02_1"+exe)
            }
        );
        $("#v4_02_02_B2").click(
            function (){
                window.open(Liv2D_download_link+"4.2.02 beta2_1"+exe)
            }
        );
        $("#v4_02_02_B1").click(
            function (){
                window.open(Liv2D_download_link+"4.2.02 beta1_1"+exe)
            }
        );
        $("#v4_02_01").click(
            function (){
                window.open(Liv2D_download_link+"4.2.01_1"+exe)
            }
        );
        $("#v4_02_01_B1").click(
            function (){
                window.open(Liv2D_download_link+"4.2.01 beta1_1"+exe)
            }
        );
        $("#v4_02_00").click(
            function (){
                window.open(Liv2D_download_link+"4.2.00_1"+exe)
            }
        );
        $("#v4_01_05").click(
            function (){
                window.open(Liv2D_download_link+"4.1.05_1"+exe)
            }
        );
        $("#v4_01_04").click(
            function (){
                window.open(Liv2D_download_link+"4.1.04_1"+exe)
            }
        );
        $("#v4_01_03").click(
            function (){
                window.open(Liv2D_download_link+"4.1.03_1"+exe)
            }
        );
        $("#v4_00_09").click(
            function (){
                window.open(Liv2D_download_link+"4.0.09_1"+exe)
            }
        );
        $("#v3_03_03").click(
            function (){
                window.open(Liv2D_download_link+"3.3.03_2"+exe)
            }
        );
     });
})();