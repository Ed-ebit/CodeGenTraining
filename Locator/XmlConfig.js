const FileHandler = require('../classes/FileHandler')

const xmlConfig = {
    templatePath: `./templates/template_xml.xml`,
    writePath: `./out/${FileHandler.getFolderName()}/file.xml`,
    keyPrefix: `##`,
    keySuffix: `##`
};

module.exports = {xmlLocator: xmlConfig};