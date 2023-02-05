$(function(){
    //교보문고
    $("#kyobobox").mouseenter(function(){
        $("#kyobo > li").stop().animate({marginTop:"-1190px"},8000)
    }).mouseleave(function(){
        $("#kyobo > li").stop().animate({marginTop:"0px"},3000)
    })
    
    //mixtape
    $("#mixbox").mouseenter(function(){
        $("#mix > li").stop().animate({marginTop:"-2880px"},8000)
    }).mouseleave(function(){
        $("#mix > li").stop().animate({marginTop:"0px"},3000)
    })
    
    //쓰임스토어
    $("#ssueimbox").mouseenter(function(){
        $("#ssueim > li").stop().animate({marginTop:"-1298px"},8000)
    }).mouseleave(function(){
        $("#ssueim > li").stop().animate({marginTop:"0px"},3000)
    })
})