require ("./classes/utilities");
require ("./classes/parser_html");
const {utilities} = require("./classes/utilities");
const {parserHtml} = require("./classes/parser_html");
const {parserXml} = require("./classes/parser_xml");



// document.getElementById("./config/config.json");
const customIndex = process.argv.indexOf('--custom');
let customValue;

if (customIndex >= 0) {
    customValue = process.argv[customIndex+1];
}
// require('./templates/template_'+ customValue +'.'+customValue);
switch (customValue){
    case 'xml':
        console.log('xmlhöhö')
        //require('./templates/template_xml.xml');
        parserXml.writeXml(parserXml.replaceXml());
        break;
    case 'html':
        console.log('htmlhöhö')
        //require('templates/template_html.html');
        parserHtml.writeHtml(parserHtml.replaceHtml());
        //console.log(utilities.setDate())
        break;
    default:
        console.log('Bitte über --custom \"xml\" oder \"html\" als Argument angeben!')
        parserHtml.writeHtml(parserHtml.replaceHtml());
        break;
}

// let test2 = fileReader.readFile();
// let test = parserHtml.readHtml();
// let test3 = fileReader.buildHtmlReplacement(fileReader.readFile())
// console.log(test3);




