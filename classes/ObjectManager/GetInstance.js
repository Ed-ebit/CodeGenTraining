const GeneralUtility = require("../GeneralUtility");

module.exports = (InstancePath) => {
    try {
        return new (require(`${GeneralUtility.getBasePath()}${InstancePath}`))();
    }
    catch (error) {
        console.error(error);
    }

}