// whenLoaded.js

function whenLoaded()
{
    makeInterface();

    // We tell the Read engine to execute, and to trigger the Display engine exactly when it is done
    readCsv(displayData);

    startWatchingCsv(); // watch the csv file for changes
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

