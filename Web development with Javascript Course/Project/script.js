$(document).ready(function(){

    $("#btn1").click(function(){
        $("body").css("background-color",("#" + ((1<<24)*Math.random() | 0).toString(16))); //the second part of the parameters is a colour randomiser
    })

    $("#btn2").click(function(){
        $("h1").css("color", ("#" + ((1<<24)*Math.random() | 0).toString(16)));
    })

    $("#btn3").click(function(){
        switch(Math.floor(Math.random()*7)){
            case 1:
                $("h1").attr("#disappear");
                break
            case 2:
                $("#btn1").attr("#disappear");
                break
            case 3:
                $("#btn2").attr("#disappear");
                break
            case 4:
                $("h1").removeAttr("#disappear");
                break
            case 5:
                $("#btn1").removeAttr("#disappear");
                break
            case 6:
                $("#btn2").removeAttr("#disappear");
                break  
        }

    })
})