const FileHandler = require('./FileHandler')
const fse = require ('fs-extra');

const htmlLocation = {
    templatePath: `./templates/template_html.html`,
    writePath: `./out/${FileHandler.getFolderName()}/file.html` //selbes Problem: FileHandler.getFoldername() funzt nicht
};

module.exports = {htmlLocation};

