// $(document)    - 選取器：尋找整份網頁物件
// $()            - 搜尋物件
// document       - 網頁文件
// .              - 執行某件事
// ready();       - 方法：準備完成 - 當指定物件準備完成會執行 () 內容
// function() {}  - 匿名方法：可以在 {} 內執行任何事情
// alert();       - 方法：跳出訊息 () 內可以輸入任何文字，必須用 ""
    $(document).ready(function () {
        alert("QQQQQQQQQQQ");

// $("選取器") - 與 CSS 選取器語法相同但必須加 ""
// hide()     - 隱藏物件
        $("h1").hide();
        $("h2").hide();

// addClass("類別名稱") - 增加類別
        $("#box1").addClass("gold");
    });

// fadeOut() - 淡出 可指定毫秒
// fadeIn()  - 淡入 可指定毫秒
    $("#box2").fadeOut(3000).fadeIn(3000);

    $("#box3").slideUp(3000).slideDown(3000);
    
// mouseenter() - 滑鼠滑入
    $("#box4").mouseenter(function () { 
// this 指的是這個物件 #box4
        $(this).animate({width:"200px", height:"200px"},1000);
    });
// mouseout() - 滑鼠滑出
    $("#box4").mouseout(function() {
        $(this).animate({width: "100px", height:"100px"},2000);
    });
  
// 函式、方法
function A(){

}