class Render {

    /**
     *
     * @param {array} entities
     * @param {string} template
     */
    constructor(entities, template ){
        // console.log(entities, template);
        this.entities = entities;
        this.template = template;
        // this.generate = generate;

    }

    generate(){
        const partial = this.findByMarker("CUSTOMER");
        let returnStr = '';

        this.entities.forEach(entity => {
            Object.keys(entity).forEach(property => {
                console.log(entity, entity[property])
                returnStr += `${ partial.replace(`##${property}##`, entity[property])}\n`;
            })
        });

        return this.template.replace(`##CUSTOMER_START##.*##CUSTOMER_END##`, returnStr);
    }

    findByMarker(marker){
        // console.log(this.template.split(`##${marker}_START##`)[1].split(`##${marker}_END##`)[0])
        return this.template.split(`##${marker}_START##`)[1].split(`##${marker}_END##`)[0];
    }

}

module.exports = Render;