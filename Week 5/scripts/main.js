
var imageTags = ["image1", "image2", "image3", "image4"];
var blankImagePath = "images/card back.png";
var actualImages = new Array();
    
function printBlanks()
{  
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
       
}

function createRandomImageArray()
{
    var actualImagePath = ["images/card_1.png","images/card_2.png" ];
    var count = [0,0];
    while(actualImages.length < 4)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }   
}

function flipImage(number)
{
    if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageNames[number]).src = actualImages[secondNumber];  
    }
    else if(firstNumber < 0) 
    {
        firstNumber = number;
        document.getElementById(imageNames[firstNumber]).src= actualImages[firstNumber];
    }
    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        setTimeout(imagesDisappear, 1000);
    }
    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        firstNumber = -1;
        secondNumber = -1;
    }      
}

function imagesDisappear()
{

    console.log(firstNumber);
    document.getElementById(imageNames[firstNumber]).src = blankImagePath;
    document.getElementById(imageNames[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    player.firstname = firstName;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "HWExample.html";
}

function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    console.log(player.firstname);
   
}