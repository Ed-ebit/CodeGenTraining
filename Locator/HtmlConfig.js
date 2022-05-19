const FileHandler = require('../classes/FileHandler')

const htmlConfig = {
    templatePath: `./templates/template_html.html`,
    writePath: `./out/${FileHandler.getFolderName()}/file.html`,
    keyPrefix: `##`,
    keySuffix: `##`,
    key: {
        FIRST_NAME: 'lastname'
    }
};

module.exports = {htmlConfig};

