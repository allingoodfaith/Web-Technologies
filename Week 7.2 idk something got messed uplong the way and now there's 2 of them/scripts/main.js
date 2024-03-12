var myViewFinderArray = new Array();

class ViewFinder
{
    constructor(title,)
    {
        this.title = title;
    }

    toString()
    {
        return "Title: " + this.title;
    }

    get theTitle()
    {
        return this.title;
    }
}

function initializeArray()
{
    // object 1 text
    var myViewFinder = new ViewFinder("A render of a castle I made");
    // object 2 text
    var myViewFinder1 = new ViewFinder("A render of a pot of plants I made");
    // add object 1
    myviewFinderArray.push(myViewFinder);
    // add object 2
    myviewFinderArray.push(myViewFinder1);
}

function accessInformation()
{
    var randomNumber = Math.floor(Math.random() * myImageViewArray.length);

    document.getElementById("title").innerHTML =  myImageViewArray[randomNumber].toString();
}