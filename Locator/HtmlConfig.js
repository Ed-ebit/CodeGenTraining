const FileHandler = require('../classes/FileHandler');
const fetchedJson = require("../config/config.json");

const htmlConfig = {
    templatePath: `./templates/template_html.html`,
    writePath: `./out/${FileHandler.getFolderName()}/file.html`,
    // dataMarker: fetchedJson.data.forEach(dataMarker => {
    //     dataMarker[`FIRSTNAME`] = dataMarker['FIRST_NAME'];
    //     dataMarker['LASTNAME'] = dataMarker['LAST_NAME'];
    //     // console.log(dataMarker)
    //     delete(dataMarker)['FIRST_NAME'];
    //     delete(dataMarker)['LAST_NAME'];
    //     console.log(dataMarker);

    // }),   SCHADE ist UNDEFINED beim AUFRUFEN in ACTIVE RECORDS
};

const htmlDataMarker = fetchedJson.data
htmlDataMarker.forEach(dataMarker => {
    dataMarker[`FIRSTNAME`] = dataMarker['FIRST_NAME']; //Wie kann man hier ### als Marker nutzen, ohne dass der key zum string wird?
    dataMarker['LASTNAME'] = dataMarker['LAST_NAME'];
     // console.log(dataMarker)
    delete(dataMarker)['FIRST_NAME'];
    delete(dataMarker)['LAST_NAME'];
    console.log(dataMarker)
} );

module.exports = {htmlConfig, htmlDataMarker};

