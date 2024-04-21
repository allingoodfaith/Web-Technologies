class Square
{
    constructor(x,y,height, width, color)
    {
        this.x = x;
        this.y = y; 
        this.height = height;
        this.width = width;
        this.color = color;
    }
    setX(x)
    {
        this.x = x;
    }
    setY(x)
    {
        this.y = y;
    }
    setX(height)
    {
        this.height = height;
    }
    setX(width)
    {
        this.width = width;
    }
    setX(color)
    {
        this.color = color;
    }
    get theX()
    {
        return this.x;
    }
    get theY()
    {
        return this.y;
    }
    get theHeight()
    {
        return this.height;
    }
    get theWidth()
    {
        return this.width;
    }
    get theColor()
    {
        return this.color;
    }
}