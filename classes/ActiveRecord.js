class ActiveRecord {

    static chooseProcess(customValue){
        switch (customValue){
            case 'xml':
                console.log('xml wird generiert');
                const xmlConfig = require("../Locator/XmlConfig");
                return xmlConfig.xmlConfig;
            case 'html':
                console.log('html wird generiert');
                const htmlConfig = require("../Locator/HtmlConfig");
                return htmlConfig.htmlConfig;
            case 'csv':
                console.log('csv wird generiert');
                const csvConfig = require("../Locator/CsvConfig");
                return csvConfig.csvConfig;
            default:
                console.log('Bitte zusätzlich \"xml\" oder \"html\" als Argument beim Start angeben!');
                process.exit();
        }
    }

}
module.exports = ActiveRecord;
