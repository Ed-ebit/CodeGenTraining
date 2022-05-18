class Render {

    /**
     *
     * @param {object} entities
     * @param {string} template
     */
    constructor(entities, template ){
        this.entities = entities;
        this.template = template;

    }

    generate(){
        let partial = this.findByMarker("CUSTOMER");

        let returnStr = '';
        this.entities.forEach(entity => {
            let templateToReplace = partial
            Object.keys(entity).forEach(key => {
               templateToReplace = templateToReplace.replace(`##${key}##`, entity[key])
            })
            returnStr += templateToReplace;
        });

         console.log(returnStr)

        return this.template.replace(`##CUSTOMER_START##.*##CUSTOMER_END##`, returnStr);
    }

    findByMarker(marker){
        return this.template.split(`##${marker}_START##`)[1].split(`##${marker}_END##`)[0];
    }

}

module.exports = Render;