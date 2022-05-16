class Render {

    /**
     *
     * @param {array} entities
     * @param {string} template
     */
    constructor(entities, template){

        this.entities = entities;
        this.template = template;

    }

    generate(){
        const partial = this.findByMarker("CUSTOMER");
        let returnStr = '';

        this.entities.forEach(entity => {
            Object.keys(entity).forEach(property => {
                returnStr += `${ partial.replace(`##${property}##`, entity[property])}\n`;
            })
        });

        return this.template.replace(`##CUSTOMER_START##.*##CUSTOMER_END##`, returnStr);
    }

    findByMarker(marker){
        return this.template.split(`##${marker}_START##`)[1].split(`##${marker}_END##`)[0];
    }

}