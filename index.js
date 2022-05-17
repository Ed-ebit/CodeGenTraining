const FileHandler = require("./classes/FileHandler");
const htmlLocation = require("./classes/HtmlParser");
const Render = require ("./classes/Render");

const customIndex = process.argv.indexOf('--custom');
let customValue;

if (customIndex >= 0) {
    customValue = process.argv[customIndex+1];
}

let templatePath = "";
switch (customValue){
    case 'xml':
        console.log('xml wird generiert')
        // templatePath = xmlLocation
        break;
    case 'html':
        console.log('html wird generiert')
        templatePath = htmlLocation
        break;
    default:
        console.log('Bitte über --custom \"xml\" oder \"html\" als Argument angeben!')

        templatePath = htmlLocation
        break;
}
let task = new Render.constructor(FileHandler.readJson(), FileHandler.readTemplate(templatePath));
//wieso Render.constructor?? Sollte nicht new render reichen?

console.log(task);
task.generate(); // Not a Function, whyyyy? ;((
