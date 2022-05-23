const FileHandler = require('../classes/FileHandler');

const csvConfig = {
    templatePath: `./templates/template_csv.csv`,
    writePath: `./out/${FileHandler.getFolderName()}/file.csv`,
    dataMarker: ['FirstName', 'LastName','Age'],
    startMarker: '##CUSTOMER_START##',
    endMarker: '##CUSTOMER_END##'
};

module.exports = {csvConfig};