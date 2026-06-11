// worldVariables.js

const fs = require('fs');
const path = require('path');

// Specify the path to our CSV file
const filePath = path.join(process.cwd(), 'src/csv/ourTable.csv');

let csvContent = [];

let watchTimer; // for the csv file

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

