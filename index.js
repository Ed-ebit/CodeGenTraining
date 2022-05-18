const FileHandler = require("./classes/FileHandler");
const htmlLocator = require("./classes/HtmlLocator");
const xmlLocator = require("./classes/xmlLocator");
const Render = require ("./classes/Render");
const fetchedJson = require("./config/config.json");

const nodeIndex = process.argv;
// console.log(nodeIndex);
let customValue = nodeIndex[2];
// console.log(customValue);

let templatePath;
let writePath;
switch (customValue){
    case 'xml':
        console.log('xml wird generiert')
        templatePath = xmlLocator.xmlLocator.templatePath;
        writePath = xmlLocator.xmlLocator.writePath;
        break;
    case 'html':
        console.log('html wird generiert')
        templatePath = htmlLocator.htmlLocator.templatePath;
        writePath = htmlLocator.htmlLocator.writePath;
        break;
    default:
        console.log('Bitte über zusätzlich \"xml\" oder \"html\" als Argument beim Start angeben!')
        process.exit()
        break;
}

let task = new Render(fetchedJson.data, FileHandler.readTemplate(templatePath));

FileHandler.write(writePath, task.generate());