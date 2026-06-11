// makeInterface.js

function makeInterface()
{
    let theTitle = ce('a');
    theTitle.textContent = 'CATopalian NWJS Read CSV File';
    theTitle.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_NWJS_Read_CSV_File';
    theTitle.style.textDecoration = 'none';
    theTitle.style.color = 'rgb(170, 170, 170)';
    theTitle.style.fontSize = '17px';
    theTitle.style.fontWeight = 'bold';
    ba(theTitle);

    //-//

    ba(ce('hr'));

    //-//

    let outputDiv = ce('div');
    outputDiv.id = 'outputDiv';
    outputDiv.style.whiteSpace = 'pre-wrap';
    outputDiv.innerHTML = '';
    outputDiv.style.width = '600px';
    outputDiv.style.height = '200px';
    ba(outputDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

