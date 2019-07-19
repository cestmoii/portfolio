$(document).ready(function(){
   flag=1;
    $(".forward").click(function(){
       if(flag==0)
        {
            $("#side1").css("z-index","999");
            $("#side1").css("cursor","pointer");
            $("#side2").css("z-index","9");
            $("#side3").css("z-index","9");
            $("#side4").css("z-index","9");
            $("#side1").css("transform","translateX(0px) scale(1.2)");
            $("#side2").css("transform","translateX(-160px)");
            $("#side3").css("transform","translateX(160px)");
            $("#side4").css("transform","translateX(0px)");
            flag=1;
        }
        else if(flag==1)
        {
            $("#side3").css("z-index","999");
            $("#side3").css("cursor","pointer");
            $("#side2").css("z-index","9");
            $("#side1").css("z-index","9");
            $("#side4").css("z-index","9");
            $("#side3").css("transform","translateX(0px) scale(1.2)");
            $("#side1").css("transform","translateX(-160px)");
            $("#side2").css("transform","translateX(0px)");
            $("#side4").css("transform","translateX(160px)");
            flag=2;
        }
        else if(flag==2)
        {
            $("#side4").css("z-index","999");
            $("#side2").css("z-index","9");
            $("#side3").css("z-index","9");
            $("#side1").css("z-index","9");
            $("#side4").css("transform","translateX(0px) scale(1.2)");
            $("#side2").css("transform","translateX(160px)");
            $("#side1").css("transform","translateX(0px)");
            $("#side3").css("transform","translateX(-160px)");
            flag=3;
        }
        else if(flag==3)
        {
            $("#side2").css("z-index","999");
            $("#side3").css("z-index","9");
            $("#side1").css("z-index","9");
            $("#side4").css("z-index","9");
            $("#side2").css("transform","translateX(0px) scale(1.2)");
            $("#side3").css("transform","translateX(0px)");
            $("#side1").css("transform","translateX(160px)");
            $("#side4").css("transform","translateX(-160px)");
            flag=0;
        }
    });
    $(".back").click(function(){
       if(flag==0)
        {
            $("#side1").css("z-index","999");
            $("#side2").css("z-index","9");
            $("#side3").css("z-index","9");
            $("#side4").css("z-index","9");
            $("#side1").css("transform","translateX(0px) scale(1.2)");
            $("#side2").css("transform","translateX(-160px)");
            $("#side3").css("transform","translateX(160px)");
            $("#side4").css("transform","translateX(0px)");
            flag=1;
        }
        else if(flag==1)
        {
            $("#side2").css("z-index","999");
            $("#side3").css("z-index","9");
            $("#side1").css("z-index","9");
            $("#side4").css("z-index","9");
            $("#side2").css("transform","translateX(0px) scale(1.2)");
            $("#side4").css("transform","translateX(-160px)");
            $("#side1").css("transform","translateX(160px)");
            $("#side3").css("transform","translateX(0px)");
            flag=2;
        }
        else if(flag==2)
        {
            $("#side4").css("z-index","999");
            $("#side2").css("z-index","9");
            $("#side1").css("z-index","9");
            $("#side4").css("z-index","9");
            $("#side4").css("transform","translateX(0px) scale(1.2)");
            $("#side3").css("transform","translateX(-160px)");
            $("#side2").css("transform","translateX(160px)");
            $("#side1").css("transform","translateX(0px)");
            flag=3;
        }
        else if(flag==3)
        {
            $("#side3").css("z-index","999");
            $("#side2").css("z-index","9");
            $("#side1").css("z-index","9");
            $("#side4").css("z-index","9");
            $("#side3").css("transform","translateX(0px) scale(1.2)");
            $("#side1").css("transform","translateX(-160px)");
            $("#side4").css("transform","translateX(160px)");
            $("#side2").css("transform","translateX(0px)");
            flag=0;
        }
    });
});
