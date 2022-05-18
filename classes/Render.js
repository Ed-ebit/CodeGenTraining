class Render {

    /**
     *
     * @param {object} entities
     * @param {string} template
     */
    constructor(entities, template) {
        this.entities = entities;
        this.template = template;

    }

    generate() {
        const replaceReducerGenerator = (entity) => (prev, key) =>
            prev.replace(`##${key}##`, entity[key])

        const entityReducer = (prev, entity) => prev + Object.keys(entity)
            .reduce(
                replaceReducerGenerator(entity),
                this.findByMarker("CUSTOMER")
            )

        const returnStr = this.entities.reduce(entityReducer, '');
        return this.template.replace(/##CUSTOMER_START##.*##CUSTOMER_END##/s, returnStr);
    }

    findByMarker(marker) {
        return this.template.split(`##${marker}_START##`)[1].split(`##${marker}_END##`)[0];
    }

}

module.exports = Render;