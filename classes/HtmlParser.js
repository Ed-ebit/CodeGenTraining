import {utilities} from "./utilities";


const htmlLocation = {
    templatePath: `./templates/template_html.html`,
    writePath: `./out/${utilities.setDate()}/file.html`
};

module.exports = {htmlLocation};

