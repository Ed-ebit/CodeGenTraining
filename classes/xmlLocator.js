const FileHandler = require('./FileHandler')

const xmlLocator = {
    templatePath: `./templates/template_xml.xml`,
    writePath: `./out/${FileHandler.getFolderName()}/file.xml`
};

module.exports = {xmlLocator};