const FileHandler = require('../classes/FileHandler');

const htmlConfig = {
    templatePath: `./templates/template_html.html`,
    writePath: `./out/${FileHandler.getFolderName()}/file.html`,
    dataMarker: ['##FIRSTNAME##', '##LASTNAME##'],
    startMarker: '##CUSTOMER_START##',
    endMarker: '##CUSTOMER_END##'
};

module.exports = {htmlConfig};

