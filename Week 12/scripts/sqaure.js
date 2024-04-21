class Square
{
    constructor(xCord,yCord,Objectheight, Objectwidth, color)
    {
        this.xCord = xCord;
        this.yCord = yCord; 
        this.Objectheight = Objectheight;
        this.Objectwidth = Objectwidth;
        this.color = color;
    }

    get x()
    {
        return this.xCoord;
    }

    set x(value)
    {
        this.xCoord = value;
    }
    get y()
    {
        return this.yCoord;
    }
    set y(value)
    {
        this.yCoord = value;
    }

    get height()
    {
        return this.objectHeight;
    }

    get width()
    {
        return this.objectWidth;
    }
    get mainColor()
    {
        return this.color;
    }
}