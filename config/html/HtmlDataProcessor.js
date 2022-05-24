const DataProcessor = require("../../classes/DataProcessor");
const HtmlEntity = require("./HtmlEntity");

module.exports = class HtmlDataProcessor extends DataProcessor {

    ModelInstance = HtmlEntity;
    Type = 'Html';
}