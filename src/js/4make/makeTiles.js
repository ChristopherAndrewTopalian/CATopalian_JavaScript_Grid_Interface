// makeTiles.js

function makeTiles(whichArray, rows, columns)
{
    let theTitle = ce("a");
    theTitle.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Grid_Interface';
    theTitle.className = "theTitleStyle";
    theTitle.style.textAlign = 'center';
    theTitle.textContent = 'CATopalian JavaScript Grid Interface';
    ba(theTitle);

    //-//

    let mainDiv = ce("div");
    mainDiv.className = "gridContainerStyle";
    mainDiv.id = "mainDivId";
    ba(mainDiv);

    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        let theTile = ce("div");
        theTile.id = whichArray[x].name;
        theTile.src = whichArray[x].textureOnline;
        theTile.className = "gridItemStyle nameOfElement";
        theTile.style.zIndex = 1;
        theTile.style.borderStyle = "solid";
        theTile.style.borderWidth = "3px";
        theTile.style.borderColor = "white";

        // title
        // theTile.title += whichArray[x].number;
        // theTile.title += "\n";
        //  theTile.title += whichArray[x].abbreviation;
        // theTile.title += "\n";
        // theTile.title += whichArray[x].name;

        // gloss
        // when a person hovers their mouse over a tile they will see a pop up label appear that shows the name of the element
        theTile.setAttribute("gloss", whichArray[x].name);

        theTile.innerHTML = whichArray[x].abbreviation + "<br>";
        theTile.style.overflow = "hidden";
        theTile.style.objectFit = "cover";
        theTile.style.fontFamily = "tahoma";
        theTile.style.fontWeight = "bold";
        theTile.style.fontSize = "25px";
        theTile.style.color = "rgb(255, 255, 255)";
        theTile.style.textAlign = "center";
        theTile.onclick = function()
        {
            theTile.style.borderColor = 'rgb(255, 0, 255)';
            
            window.open(whichArray[x].url, '_blank');
        };

        //theTile.oncontextmenu = function()
        //{
            // window.open(whichArray[x].textureOnline);
        //};

        theTile.onmouseover = function()
        {
            theTile.style.borderColor = 'rgb(0, 255, 255)';
        };

        theTile.onmouseout = function()
        {
            theTile.style.borderColor = 'rgb(255, 255, 255)';
        };
        mainDiv.append(theTile);

        //-//

        let theImage = ce("img");

        if (online == true)
        {
            theImage.src = whichArray[x].textureOnline;
        }
        else if (online == false)
        {
            theImage.src = whichArray[x].textureOffline;
        }

        theImage.style.width = '100%';
        theImage.style.position = 'absolute';
        theImage.style.top = '0px';
        theImage.style.left = '0px';
        theImage.style.zIndex = 1;
        theImage.onmouseover = function()
        {
            hoverSound();
        };
        theImage.onclick = function()
        {
            clickSound();
        };
        theTile.append(theImage);
    } 
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

