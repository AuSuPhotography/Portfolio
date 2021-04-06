var relation ={
    homeTab:"homeDiv",
    aboutTab:"aboutDiv",
    projectTab:"projectsDiv",
    contactTab:"contactDiv"
}

var lastClick= "homeTab";

$("#"+relation[lastClick]).css({display:"block",transform:"translateX(0%)"});

$("#"+lastClick).addClass("active-tab");

$("#homeTab").click(()=>{
    $("#"+lastClick).removeClass("active-tab");
    $("#"+relation[lastClick]).css({display:"none"});
    $("#homeTab").addClass("active-tab");
    $("#homeDiv").css({display:"block",transform:"translate(0%,0%)"});
    lastClick="homeTab";
});

$("#aboutTab").click(()=>{
    $("#"+lastClick).removeClass("active-tab");
    $("#"+relation[lastClick]).css({display:"none"})
    $("#aboutTab").addClass("active-tab");

    $("#aboutDiv").css({display:"block",transform:"translate(0%,0%)"});
    lastClick="aboutTab";
});
$("#projectTab").click(()=>{
    $("#"+lastClick).removeClass("active-tab");
    $("#"+relation[lastClick]).css({display:"none"})
    $("#projectTab").addClass("active-tab");

    $("#projectsDiv").css({display:"block",transform:"translate(0%,0%)"});
    lastClick="projectTab";
});

$("#contactTab").click(()=>{
    $("#"+lastClick).removeClass("active-tab");
    $("#"+relation[lastClick]).css({display:"none"})
    $("#contactTab").addClass("active-tab");

    $("#contactDiv").css({display:"block",transform:"translate(0%,0%)"});
    lastClick="contactTab";
});



function changeTheme(){
    if($("#Dark").is(":checked")){
        $("#main1").removeClass("light");
        $("#main1").addClass("dark");
        console.log("Black");
    }
    else{
        $("#main1").addClass("ligth");
        $("#main1").removeClass("dark");

        console.log("white");
    }
    console.log($("#Dark").is(":checked"),$("#Light").is(":checked"));
}