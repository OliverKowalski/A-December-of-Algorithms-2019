/* REquired files */
const fs = require('fs');
const CSVFILE = "./A-December-of-Algorithms-2019/src/res/csv_to_html_res.csv";


let openTag = "<html><body><table>";
let closeTag = "</table></body></html>";

let data;
let finalResult = "";
finalResult += openTag;

fs.readFile(CSVFILE, async function(text){
    await console.log(text);
});


