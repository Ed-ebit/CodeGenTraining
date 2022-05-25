const FileHandler = require("./classes/FileHandler");
const Render = require("./classes/Render");
const processSelector = require("./classes/ProcessSelector");

const nodeIndex = process.argv;
let customValue = nodeIndex[2];

let chosenConfig = processSelector.getConfig(customValue);
let {templatePath, writePath, dataMarker, jsonMarker} = chosenConfig;

let render = new Render(FileHandler.setMarkers(dataMarker,jsonMarker), FileHandler.readTemplate(templatePath), chosenConfig);
FileHandler.write(writePath, render.generate());