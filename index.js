const GeneralUtility = require("./classes/GeneralUtility");
const ObjectManager = require("./classes/ObjectManager");

const processorType = process.argv[2];

const dataProcessor = ObjectManager.getInstance(`/config/${processorType}/${GeneralUtility.getClassName(`${processorType}DataProcessor`)}`)
const entities = dataProcessor.getEntities(GeneralUtility.loadFile('/config/config.json'))

const output = dataProcessor.render(entities);

GeneralUtility.saveAs(output, dataProcessor.getOutputPath());