class HtmlParser{

    constructor(entities){
        this.entities = entities;
    }
    readPath = `./templates/template_html.html`;
    writePath = `./out/${utilities.setDate()}/file.html`;

}