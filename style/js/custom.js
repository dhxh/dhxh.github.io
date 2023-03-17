/*浏览器网页标题特效*/
<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = '！！这里这里 ◕ ں ◕ ';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '(ฅ>ω<*ฅ) 喵喵爱你哟~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });


/*自动播放*/
let ref = setInterval(function(){	//每隔2秒尝试播放一次
    isaplay();
},2000);
function isaplay(){
    $(".aplayer-play").click()	//尝试播放
    setTimeout(function() {		//延时100毫秒再执行其内部的判断
        if($(".aplayer-pause").length > 0){    //`aplayer-button aplayer-pause`是否存在
        clearInterval(ref);		//停止Interval，即停止循环
    }}, 100);
}
