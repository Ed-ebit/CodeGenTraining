const FileHandler = require('../classes/FileHandler');

const config = {
    templatePath: `./templates/template_xml.xml`,
    writePath: `./out/${FileHandler.getFolderName()}/file.xml`,
    jsonMarker: ["FIRST_NAME", "LAST_NAME"],
    dataMarker: ['$$Name', '\\\\Lastname'],
    startMarker: '##CUSTOMER_START##',
    endMarker: '##CUSTOMER_END##'
};

module.exports = {config};