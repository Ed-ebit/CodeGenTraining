const xmlConfig = require("../Locator/XmlConfig");

class ActiveRecord {

    static chooseProcess(customValue){
        let templatePath;
        let writePath;
        let keyPrefix;
        let keySuffix;
        switch (customValue){
            case 'xml':
                console.log('xml wird generiert');
                const xmlConfig = require("../Locator/XmlConfig");
                templatePath = xmlConfig.xmlLocator.templatePath;
                writePath = xmlConfig.xmlLocator.writePath;
                keyPrefix = xmlConfig.xmlLocator.keyPrefix;
                keySuffix = xmlConfig.xmlLocator.keySuffix;
                break;
            case 'html':
                console.log('html wird generiert');
                const htmlConfig = require("../Locator/HtmlConfig");
                templatePath = htmlConfig.htmlConfig.templatePath;
                writePath = htmlConfig.htmlConfig.writePath;
                keyPrefix = htmlConfig.htmlConfig.keyPrefix;
                keySuffix = htmlConfig.htmlConfig.keySuffix;
                break;
            default:
                console.log('Bitte über zusätzlich \"xml\" oder \"html\" als Argument beim Start angeben!');
                process.exit();
        }
        return {templatePath, writePath, keyPrefix, keySuffix};
    }

}
module.exports = ActiveRecord;
