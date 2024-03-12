var myViewFinderArray = new Array();

class ViewFinder
{
    constructor(title, description, author, year, image)
    {
        this.title = title;
        this.description = description;
        this.author = author;
        this.year = year;
        this.image = image;
    }

    toString()
    {
        return "Title: " + this.title;
        return "Description: " + this.description;
        return "Author: " = this.author;
        return "Year: " = this.year;
    }    
}

function initializeArray()
{
    // object 1 view
    myViewFinderArray.push(new ViewFinder("Castle", "A cartoon Casle on a beach", "Grete Tanberg", "2024", "images/castle 1.png"));
    // object 2 view
    myViewFinderArray.push(new ViewFinder("Plant", "A series of succulents in a pot", "Grete Tanberg", "2024","images/Pot of Plants_2"));    
}

function accessInformation()
{
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("title", "description", "author", "year").innerHTML = myViewFinderArray[randomNumber].toString();
}