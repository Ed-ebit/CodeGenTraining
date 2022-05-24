const FileHandler = require("./classes/FileHandler");
const Render = require("./classes/Render");
const ActiveRecord = require("./classes/ProcessSelector");

const nodeIndex = process.argv;
let customValue = nodeIndex[2];

let chosenConfig = ActiveRecord.chooseProcess(customValue);
let {templatePath, writePath, dataMarker, jsonMarker} = chosenConfig;

let task = new Render(FileHandler.setMarkers(dataMarker,jsonMarker), FileHandler.readTemplate(templatePath), chosenConfig);
FileHandler.write(writePath, task.generate());