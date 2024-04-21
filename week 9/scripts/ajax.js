$(document).ready(function () 
{
    $("button").click(function () 
    {
        $("#pageInfomation").load("data/info.txt", fadeText);
    });
});

function fadeText()
{
    $("#pageInfomation").fadeOut("slow").fadeIn("slow");
}