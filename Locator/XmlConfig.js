const FileHandler = require('../classes/FileHandler');

const xmlConfig = {
    templatePath: `./templates/template_xml.xml`,
    writePath: `./out/${FileHandler.getFolderName()}/file.xml`,
    dataMarker: ['$$Name', '\\\\Lastname'],
    startMarker: '##CUSTOMER_START##',
    endMarker: '##CUSTOMER_END##'
};

module.exports = {xmlConfig};