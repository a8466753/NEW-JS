$(document).ready(function () {

    // #btnTop 按鈕點擊事件
    $("#btnTop").click(function (e) {
        // alert("1212123132123123");
        // 尋找 網頁與身體 動畫效果({捲動上方:0}，時間);
        $("html, body").animate({scrollTop:0},1000);
    });

    //函式會有小括號
    $("#a1").click(function (e) { 
        var top = $("#section1").position().top;
        $("html, body").animate({scrollTop:top},500);
    });
    $("#a2").click(function (e) { 
        var top = $("#section2").position().top;
        $("html, body").animate({scrollTop:top},500);
    });

    //API
    //自訂函示 (參數){ 內容 }
    //btn - 要點選的按鈕選取器名稱
    //pos - 要前往的區塊選取器名稱
    //dur - 前往的時間
    function scrollToPosition(btn, pos, dur){
        $(btn).click(function(e){
            var top = $(pos).position().top;
            $("html, body").animate({scrollTop: top}, dur);
        });
    }

    scrollToPosition("#a1","#section1",1000);
    scrollToPosition("#a2","#section2",1000);
    scrollToPosition("#a3","#section3",1000);
    scrollToPosition("#a4","#section4",1000);
    scrollToPosition("#a5","#section5",1000);


    // alert($(window).scrollTop());

    //按鈕隱藏 - 也可以設定在css內
    $("#btnTop").fadeOut(0);  

    // 元素 捲動(匿名函式() { });
    $(window).scroll(function(){
        // alert($(window).scrollTop());
        if($(window).scrollTop() > 200){ // 如果 螢幕頂端 > 200
            $("#btnTop").fadeIn(500);   // 顯示按鈕
        }
        else{                           // 否則
            $("#btnTop").fadeOut(500);  // 隱藏按鈕
        }
    });
});