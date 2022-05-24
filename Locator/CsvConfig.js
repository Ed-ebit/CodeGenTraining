const FileHandler = require('../classes/FileHandler');

const config = {
    templatePath: `./templates/template_csv.csv`,
    writePath: `./out/${FileHandler.getFolderName()}/file.csv`,
    jsonMarker: ["FIRST_NAME", "LAST_NAME", "AGE"],
    dataMarker: ['FirstName', 'LastName','Age'],
    startMarker: '##CUSTOMER_START##',
    endMarker: '##CUSTOMER_END##'
};

module.exports = {config};