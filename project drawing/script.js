var theNumber=0.6,shower=true,lines=[
];
MAKECUBERECTANGLE("red",[0.3,0.3,0],[1,0.3,4]);
MAKECUBERECTANGLE("red",[6.7,0.3,0],[1,0.3,4]);
MAKECUBERECTANGLE("red",[0.3,4.4,0],[1,0.3,4]);
MAKECUBERECTANGLE("red",[6.7,4.4,0],[1,0.3,4]);
MAKECUBERECTANGLE("red",[0.3,0.3,4],[7.4,4.4,1]);
MAKECUBERECTANGLE("red",[0,0,5],[8,5,0.4]);
draw();
function MAKECUBE(color,atA,hoN)
{
    MAKECUBERECTANGLE(color,atA,[hoN,hoN,hoN]);
}
function MAKECUBERECTANGLE(color,atA,hoA)
{
    var homes=[];
    for(var x=0;x<2;x++)
    {
        for(var y=0;y<2;y++)
        {
            for(var z=0;z<2;z++)
            {
                homes[homes.length]=[atA[0]+hoA[0]*x,atA[1]+hoA[1]*y,atA[2]+hoA[2]*z];
            }
        }
    }
    if(shower)
    {
        LINED(color,homes,[0,1]);
        LINED(color,homes,[0,2]);
        LINED(color,homes,[0,4]);
    }
    LINED(color,homes,[2,3]);
    LINED(color,homes,[4,5]);
    LINED(color,homes,[6,7]);
    LINED(color,homes,[1,3]);
    LINED(color,homes,[4,6]);
    LINED(color,homes,[5,7]);
    LINED(color,homes,[1,5]);
    LINED(color,homes,[2,6]);
    LINED(color,homes,[3,7]);
}
function LINED(color,homes,numbers)
{
    lines[lines.length]=[color,homes[numbers[0]],homes[numbers[1]]];
}
function draw()
{
    var text="";
    for(var i=0;i<lines.length;i++)
    {
        text+=LINE(lines[i]);
    }
    document.getElementById("svg").innerHTML=text;
}
function LINE(line)
{
    var p1=MAKE2D(line[1]);
    var p2=MAKE2D(line[2]);
    return "<line x1='"+p1[0]+"' y1='"+p1[1]+"' x2='"+p2[0]+"' y2='"+p2[1]+"' style='stroke-width:3px;stroke:"+line[0]+"'></line>";
}
function MAKE2D(point)
{
    return [500+30*theNumber*point[0]-(60-30*theNumber)*point[1],300+(30-15*theNumber)*point[0]+15*theNumber*point[1]-30*point[2]];
}