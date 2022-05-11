require ("./classes/fileReader");
require ("./classes/parser_html");
const {fileReader} = require("./classes/fileReader");
const {parserHtml} = require("./classes/parser_html");



// document.getElementById("./config/config.json");
const customIndex = process.argv.indexOf('--custom');
let customValue;

if (customIndex >= 0) {
    customValue = process.argv[customIndex+1];
}
// require('./templates/template_'+ customValue +'.'+customValue);
switch (customValue){
    case 'xml':
        // console.log('xmlhöhö')
        require('./templates/template_xml.xml')
        break;
    case 'html':
        // console.log('htmlhöhö')
        require('templates/template_html.html')
        break;
    default:
        // console.log('unbekanntes Argument! Opfa')
        break;
}
 parserHtml.replaceHtml()
// let test2 = fileReader.readFile();
// let test = parserHtml.readHtml();
// let test3 = fileReader.buildHtmlReplacement(fileReader.readFile())
// console.log(test3);




