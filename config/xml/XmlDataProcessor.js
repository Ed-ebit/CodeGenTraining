const DataProcessor = require("../../classes/DataProcessor");
const XmlEntity = require("./XmlEntity");

module.exports = class XmlDataProcessor extends DataProcessor {

    ModelInstance = XmlEntity;
    Type = 'Xml';
}