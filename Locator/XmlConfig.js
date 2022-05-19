const FileHandler = require('../classes/FileHandler');
const fetchedJson = require("../config/config.json");

const xmlConfig = {
    templatePath: `./templates/template_xml.xml`,
    writePath: `./out/${FileHandler.getFolderName()}/file.xml`,
};

const xmlDataMarker = fetchedJson.data
xmlDataMarker.forEach(dataMarker => {
    dataMarker[`NAME`] = dataMarker['FIRST_NAME'];
    dataMarker['LASTNAME'] = dataMarker['LAST_NAME'];
    // dataMarker['NAME'] = dataMarker['LASTNAME'];
    // console.log(dataMarker)
    delete(dataMarker)['FIRST_NAME'];
    delete(dataMarker)['LAST_NAME'];
    console.log(dataMarker)
} );


module.exports = {xmlConfig, xmlDataMarker};