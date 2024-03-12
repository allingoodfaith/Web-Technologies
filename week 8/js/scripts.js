var imageSelector = "#images";
var allImages = new Array();

class imageInfo
{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector()
    {
        return this.selector;
    }

    get theImagePath()
    {
        return this.imagePath;
    }

    tostring()
    {
        return this.selector + ":" + this.imagePath;
    }
}

function initializeArray()
{
    var image = new imageInfo("#image","images/castle 1.png");
    allImages.push(image);
}

$(document).ready(function()
{
    initializeArray();
    console.log(allImages.length);
    console.log(allImages[0].tostring());
    console.log(allImages[0].theSelector());
    console.log(allImages[0].theImagePath());

    $(allImages[0].theSelector).attr("src",allImages[0].theImagePath);
    $("#image_2").attr("src","Pot of Plants_2.png")
    
    $("button").click(function(){
       
        $(".stuff").fadeOut();

        $("#third").toggle();
           setInterval(moveSquare, 1000);
        
        $(allDogs[0].theSelector).fadeOut().fadeIn();    
    }); 
});

function moveSquare()
{
    $("#square").animate({left:250}).animate({top:250}).animate({left:0}).animate({top:300});
}