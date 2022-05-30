const FileHandler = require("./classes/FileHandler");
const Render = require("./classes/Render");
const processSelector = require("./classes/ProcessSelector");

const nodeIndex = process.argv;
let desiredFormat = nodeIndex[2];

let chosenConfig = processSelector.getConfig(desiredFormat);
console.log(`${desiredFormat} wird generiert.` )
let {templatePath, writePath, dataMarker, jsonMarker} = chosenConfig;
let render = new Render(FileHandler.setMarkers(dataMarker,jsonMarker), FileHandler.readTemplate(templatePath), chosenConfig);
FileHandler.write(writePath, render.generate());