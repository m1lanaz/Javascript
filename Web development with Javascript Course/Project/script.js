$(document).ready(function(){

    $("#btn1").click(function(){
        $("body").css("background-color",("#" + ((1<<24)*Math.random() | 0).toString(16))); //the second part of the parameters is a colour randomiser
    })

    $("#btn2").click(function(){
        $("h1").css("color", ("#" + ((1<<24)*Math.random() | 0).toString(16)))
    })
})