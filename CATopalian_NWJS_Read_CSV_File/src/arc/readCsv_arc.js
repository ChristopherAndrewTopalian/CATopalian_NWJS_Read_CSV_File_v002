//----//

// ALTERNATIVE Functions below

function readCsvWorldWide()
{
    // Clear the div before reading so we don't get duplicates if we run it twice
    //ge('outputDiv').innerHTML = '';

    // Read the content of the CSV file
    fs.readFile(filePath, 'utf8', (err, data) =>
    {
        if(err)
        {
            console.error('Error reading the file:', err);
            return;
        }

        // Clean out any invisible BOM characters from Excel
        let cleanData = data.replace(/^\uFEFF/, '');

        // Split the content into rows using '\r\n'
        const rows = cleanData.trim().split('\r\n');

        // Assuming the first row contains headers
        const headers = rows.shift().split(',');

        // Process each row using traditional for loops
        for (let i = 0; i < rows.length; i++)
        {
            const row = rows[i];

            if (!row) continue; // Skip any accidental trailing blank lines

            // The Superpower Regex Split (The Scissors)
            const values = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

            // row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/): This regex searches out only the commas that are outside of quotes, preventing the data array alignments from snapping out of order. It uses something called a "Lookahead" to scan the rest of the line and make sure there is an even number of quotes ahead of it before it decides to slice the comma.

            const rowData = {};

            // Map headers to values for each row
            for (let j = 0; j < headers.length; j++)
            {
                // Grab the raw string (or an empty string if it's missing)
                let rawValue = values[j] ? values[j] : '';

                // The Scrubber: Remove quotes from the exact start and end, and trim spaces
                let cleanValue = rawValue.replace(/^"|"$/g, '').trim();

                // Assign the CLEANED value to the object, not the raw value
                rowData[headers[j]] = cleanValue;
            }

            csvFile.push(rowData);

            console.log(rowData);

            /*
            // The Dynamic Output Generator
            for (let key in rowData)
            {
                // Added a bold tag to the key for a super clean UI look
                ge('outputDiv').innerHTML += `<b>${key}:</b> ${rowData[key]}<br>`;
            }
            ge('outputDiv').innerHTML += '<hr>';
            */
        }
    });
}

function readCsv2()
{
    // Clear the div before reading so we don't get duplicates if we run it twice
    ge('outputDiv').innerHTML = '';

    // Read the content of the CSV file
    fs.readFile(filePath, 'utf8', (err, data) =>
    {
        if(err)
        {
            console.error('Error reading the file:', err);
            return;
        }

        // Clean out any invisible BOM characters from Excel
        let cleanData = data.replace(/^\uFEFF/, '');

        // Split the content into rows using '\r\n'
        const rows = cleanData.trim().split('\r\n');

        // Assuming the first row contains headers
        const headers = rows.shift().split(',');

        // Process each row using traditional for loops
        for (let i = 0; i < rows.length; i++)
        {
            const row = rows[i];

            if (!row) continue; // Skip any accidental trailing blank lines

            // The Superpower Regex Split (The Scissors)
            const values = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

            const rowData = {};

            // Map headers to values for each row
            for (let j = 0; j < headers.length; j++)
            {
                // Grab the raw string (or an empty string if it's missing)
                let rawValue = values[j] ? values[j] : '';

                // The Scrubber: Remove quotes from the exact start and end, and trim spaces
                let cleanValue = rawValue.replace(/^"|"$/g, '').trim();

                // Assign the CLEANED value to the object, not the raw value
                rowData[headers[j]] = cleanValue;
            }

            csvFile.push(rowData);

            console.log(rowData);

            // The Dynamic Output Generator
            for (let key in rowData)
            {
                // Added a bold tag to the key for a super clean UI look
                ge('outputDiv').innerHTML += `<b>${key}:</b> ${rowData[key]}<br>`;
            }
            ge('outputDiv').innerHTML += '<hr>';
        }
    });
}