// readCsv.js

function readCsv(callback)
{
    fs.readFile(filePath, 'utf8', (err, data) =>
    {
        if(err)
        {
            console.error('Error reading the file:', err);
            return;
        }

        let cleanData = data.replace(/^\uFEFF/, '');
        const rows = cleanData.trim().split('\r\n');
        const headers = rows.shift().split(',');

        // Create a local array instead of a worldwide one
        let csvArray = []; 

        for (let i = 0; i < rows.length; i++)
        {
            const row = rows[i];
            if (!row) continue;

            const values = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            // row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/): This regex searches out only the commas that are outside of quotes, preventing the data array alignments from snapping out of order. It uses something called a "Lookahead" to scan the rest of the line and make sure there is an even number of quotes ahead of it before it decides to slice the comma.

            const rowData = {};

            for (let j = 0; j < headers.length; j++)
            {
                let cleanValue = (values[j] || '').replace(/^"|"$/g, '').trim();
                rowData[headers[j]] = cleanValue;
            }

            // Push the clean object into our local array
            csvArray.push(rowData);

            // if we want to utilize a worldwide variable
            csvContent.push(rowData);
        }

        // THE ASYNC HAND-OFF
        // When the loop is 100% finished, hand the completed array to the callback function
        if (typeof callback === 'function')
        {
            callback(csvArray);
        }
    });
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

