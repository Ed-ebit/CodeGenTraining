const FileHandler = require("./classes/FileHandler");
const Render = require("./classes/Render");
const fetchedJson = require("./config/config.json");
const ActiveRecord = require("./classes/ActiveRecord");

const nodeIndex = process.argv;
let customValue = nodeIndex[2];

let {templatePath, writePath,keyPrefix,keySuffix} = ActiveRecord.chooseProcess(customValue);
let task = new Render(fetchedJson.data, FileHandler.readTemplate(templatePath),keyPrefix,keySuffix);

FileHandler.write(writePath, task.generate());