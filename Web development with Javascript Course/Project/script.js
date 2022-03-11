$(document).ready(function(){

    $("#btn1").click(function(){
        $("body").css("background-color",("#" + ((1<<24)*Math.random() | 0).toString(16))); //the second part of the code is a colour randomiser
    })

    
})