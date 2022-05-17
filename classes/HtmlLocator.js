const FileHandler = require('./FileHandler')

const htmlLocator = {
    templatePath: `./templates/template_html.html`,
    writePath: `./out/${FileHandler.getFolderName()}/file.html`
};

module.exports = {htmlLocator};

