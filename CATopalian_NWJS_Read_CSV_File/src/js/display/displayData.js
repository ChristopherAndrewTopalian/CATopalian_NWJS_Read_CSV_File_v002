// displayData.js

// THE PURE DISPLAY ENGINE
// This function doesn't know about files or hard drives. It only knows about Arrays.
function displayData(dataArray)
{
    console.log(dataArray[0].name);

    let outputContainer = ge('outputDiv');
    outputContainer.innerHTML = '';

    // Loop through the main Array
    for (let i = 0; i < dataArray.length; i++)
    {
        let rowObject = dataArray[i];

        // The Dynamic Loop: Cycle through whatever keys exist in this specific object
        for (let key in rowObject)
        {
            outputContainer.innerHTML += `<b>${key}:</b> ${rowObject[key]}<br>`;
        }

        outputContainer.innerHTML += '<hr>';
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

