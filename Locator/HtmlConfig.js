const FileHandler = require('../classes/FileHandler');

const config = {
    templatePath: `./templates/template_html.html`,
    writePath: `./out/${FileHandler.getFolderName()}/file.html`,
    jsonMarker: ["FIRST_NAME", "LAST_NAME"],
    dataMarker: ['##FIRSTNAME##' , '##LASTNAME##'],
    startMarker: '##CUSTOMER_START##',
    endMarker: '##CUSTOMER_END##'
};

module.exports = {config};

