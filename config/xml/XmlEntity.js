module.exports = class XmlEntity {

    constructor(data) {
        this['$$Name'] = data['FIRST_NAME'];
        this['\\\\Lastname'] = data['LAST_NAME'];
    }

}