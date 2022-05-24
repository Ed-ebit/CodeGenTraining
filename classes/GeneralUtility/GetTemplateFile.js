const getBasePath = require("./GetBasePath");
const fs = require('fs');

module.exports = (templatePath) => {
    try {
        return fs.readFileSync(`${getBasePath()}${templatePath}`).toString('utf8');
    }
    catch (error) {
        console.error(error);
    }

}