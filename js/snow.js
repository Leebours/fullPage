/**
 * Created by Administrator on 2016/11/29.
 */
var minSize = 5;//雪花最小的尺寸
var maxSize = 50; //雪花最大的尺寸
var newOn = 200;//时隔多长时间产生一个雪花，值越小，雪越多
//    var flake =$("<div></div>").css("position","absolute").html("❉");//雪花
var flake =$("<div></div>").css("position","absolute").html("❤");//爱心
//    var flake =$("<div></div>").css("position","absolute").html("<div style='background:url(images/wings-33.png) no-repeat;background-size:contain'>&nbsp;</div>");//自定义图片

$(function(){
    setInterval(function(){
        var wWidth = $(document).width();//浏览器的宽度
        var wHight = $(document).height();//浏览器的高度
        var startLeft =Math.random()*wWidth;//雪花一开始距离浏览器的间距
        var endLeft =Math.random()*wWidth;//雪花一下落后距离浏览器的间距
        var flakeSize =minSize + maxSize*Math.random();//雪花的大小
        var flakeOpacity=0.7 + Math.random()*0.3;//雪花开始时的透明度
        var flakeEndOpacity=0.5+Math.random()*0.3;//雪花下落后的透明度
        var durationTime = 3000 * Math.random()+ 10*wHight;//雪花下落的时间
        flake.clone().appendTo($("body")).css({
            "left":startLeft,
            "font-size":flakeSize,
            "opacity":flakeOpacity,
            "color":"#ff5588",//爱心颜色
//                "color":"#88D6FF",
            "top":"-55px"
        }).animate({
            "left":endLeft,
            "opacity":flakeEndOpacity,
            "top":wHight
        },durationTime,function(){
            $(this).remove();
        });
    },newOn);
});
