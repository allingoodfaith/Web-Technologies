var imageNames = ["image1", "image2", "image3", "image4"];
var blankImagePath = "images/gofish.jpg";
var firstNumber = -1;
var secondNumber = -1;

var player = {"fristname":"","lastname":""}

function printblacks ()
{
    createRandomImageArray();
    for(var i = 0; i < imageNames.length; i++)
    {
        document.getElementById(imageNames[i]).src= blankImagePath;
    }
}

function createRandomImageArray()
{
    var actualImagePath = ["images/card_1.png","images/card_2.png","images/card_3.png","images/card_4.png","images/card_5.png","images/card_6.png","images/card_7.png","images/card_8.png","images/card_9.png","images/card_10.png"];
    var count = [0,0];
    while(actualImagePath.length <4)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if (count[randomNumber] < 2)
        {
            actualImage.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function flipImage(number)
{
    if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageNames[number]).src = actualImage[secondNumber];
    }
    else if(firstNumber < 0)
    {
        firstNumber = number;
        document.getElementById(imageNames[firstNumber]).src = actualImage[firstNumber];
    }
}

function imageDisappear()
{
    console.log(fristname)
    document.getElementById(imageNames[firstNumber]).src = blankImagePath;
    document.getElementById(imageNames[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

function addToPlayer()
{
    var fristname = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    console.log(player.fristname);
}