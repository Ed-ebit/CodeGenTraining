const FileHandler = require("./classes/FileHandler");
const Render = require("./classes/Render");
const ActiveRecord = require("./classes/ActiveRecord");

const nodeIndex = process.argv;
let customValue = nodeIndex[2];

let {templatePath, writePath,dataMarker} = ActiveRecord.chooseProcess(customValue);
let task = new Render(FileHandler.setMarkers(dataMarker), FileHandler.readTemplate(templatePath));
FileHandler.write(writePath, task.generate());