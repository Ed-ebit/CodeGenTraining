const FileHandler = require('../classes/FileHandler');
const fetchedJson = require("../config/config.json");

const xmlConfig = {
    templatePath: `./templates/template_xml.xml`,
    writePath: `./out/${FileHandler.getFolderName()}/file.xml`,
};
// const hier ungünstig: immer wenn config dokument aufgerugfen wird, wird die funktion ausgeführt die
// const XMLDataMarker definiert und liefert undefined
const xmlDataMarker = fetchedJson.data
xmlDataMarker.forEach(dataMarker => {
    dataMarker[`Name`] = dataMarker['FIRST_NAME'] +' '+ dataMarker['LAST_NAME'];
    dataMarker['"Lastname"'] = dataMarker['LAST_NAME'];
    delete(dataMarker)['FIRST_NAME'];
    delete(dataMarker)['LAST_NAME'];
    console.log(dataMarker)
} );


module.exports = {xmlConfig, xmlDataMarker};