// const xmlConfig = require("../Locator/XmlConfig");
// const {htmlDataMarker} = require("../Locator/HtmlConfig");

class ActiveRecord {

    static chooseProcess(customValue){

        let templatePath;
        let writePath;
        let dataMarker;
        switch (customValue){
            case 'xml':
                console.log('xml wird generiert');
                const xmlConfig = require("../Locator/XmlConfig");
                templatePath = xmlConfig.xmlConfig.templatePath; // diese blöcke noch refactorisieren
                writePath = xmlConfig.xmlConfig.writePath;
                dataMarker = xmlConfig.xmlDataMarker;
                break;
            case 'html':
                console.log('html wird generiert');
                const htmlConfig = require("../Locator/HtmlConfig");
                templatePath = htmlConfig.htmlConfig.templatePath;
                writePath = htmlConfig.htmlConfig.writePath;
                dataMarker = htmlConfig.htmlDataMarker;
                //console.log(dataMarker)
                break;
            default:
                console.log('Bitte über zusätzlich \"xml\" oder \"html\" als Argument beim Start angeben!');
                process.exit();
        }
        // console.log(dataMarker)
        return {templatePath, writePath, dataMarker};
    }

}
module.exports = ActiveRecord;
