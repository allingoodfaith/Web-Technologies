function storyFunction(choice)
{
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;

    if(choice == 1 && answer1 == "Yes")
    {
        document.getElementById("story").innerHTML = "Niether path looks too different the other.";
        document.getElementById("choice1").innerHTML = "Go Left";
        document.getElementById("choice2").innerHTML = "Go Right";
    }
    else if(choice == 2 && answer2 == "No")
    {
        document.getElementById("story").innerHTML = "Then you stay there, standing still...Why where you even here?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Stay Still";
    }
    else if(choice == 1 && answer1 == "Go Left")
    {
        document.getElementById("story").innerHTML = "You have chosen to go left. The woods are full of sounds of animals scittering by, the sound of running water in the distance. Do you go to the water?";
        document.getElementById("choice1").innerHTML = "Walk towards The Water";
        document.getElementById("choice2").innerHTML = "Keep Moving Ahead";
    }
    else if(choice == 2 && answer2 == "Go Right")
    {
        document.getElementById("story").innerHTML = "You have chosen to go right. The woods are quiet aside form the wind flow through the branches. Ahead before you the path breaks again, one path begins to incline. Which do you take ";
        document.getElementById("choice1").innerHTML = "Go up the incline";
        document.getElementById("choice2").innerHTML = "Stay on the wooded road";
    }
    else if(choice == 1 && answer1 == "Walk towards The Water")
    {
        document.getElementById("story").innerHTML = "The sound of water grows as you walk closer till you're on the banks of a river. It's beautiful. Take another path?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Stay Still";
    }
    else if(choice == 2 && answer2 == "Keep Moving Ahead")
    {
        document.getElementById("story").innerHTML = "You keep to the path you're familar with. It wides its way till it ends at the base of a grand oak tree. It's majestic. Take another path?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Stay Still";
    }
    else if(choice == 1 && answer1 == "Go up the incline")
    {
        document.getElementById("story").innerHTML = "The path climbs up and up till you reach a break in the trees as it over looks a valley. It's a wonderful view. Take another path?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Stay Still";
    }
    else if(choice == 2 && answer2 == "Stay on the wooded road")
    {
        document.getElementById("story").innerHTML = "You stay on the flat path. As you walk the trees thin till they fully give way to an open field filled with flowers. It's so peaceful. Take another path?";
        document.getElementById("choice1").innerHTML = "Restart";
        document.getElementById("choice2").innerHTML = "Stay Still";
    }
    else if(choice == 1 && answer1 == "Restart")
    {
        document.getElementById("story").innerHTML = "Before you lays two paths. Do you step forward?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    }
    else if(choice == 2 && answer2 == "Stay Still")
    {
        document.getElementById("story").innerHTML = "You take a breath and compose yourself. Do you take one of the paths?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    }
    else if(choice == 1 && answer1 == "Yes")
    {
        document.getElementById("story").innerHTML = "Before you lays two paths. Do you step forward?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    }
    else if(choice == 2 && answer2 == "No")
    {
        document.getElementById("story").innerHTML = "The Pathes will always be there for you. You will just need to take one.";

    }
    
}