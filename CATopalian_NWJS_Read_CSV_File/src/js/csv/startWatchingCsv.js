// startWatchingCsv.js

function startWatchingCsv()
{
    console.log("Monitoring ourTable.csv for changes...");

    let targetFile = path.join(process.cwd(), 'src/csv/ourTable.csv');

    fs.watch(targetFile, (eventType, filename) => 
    {
        if (eventType === 'change') 
        {
            // The Debounce Trick: Clear the timer if it tries to fire twice
            clearTimeout(watchTimer);

            // Wait 100 milliseconds, then read the CSV and update the screen
            watchTimer = setTimeout(() => {
                console.log("File saved! Hot-reloading data...");
                readCsv(displayData);
            }, 100);
        }
    });
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

