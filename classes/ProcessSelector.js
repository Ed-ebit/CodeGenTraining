const config = require("../Locator")

const getConfig = (customValue) => {
    let possibleConfigs = Object.keys(config).join(', ');
    try {
        customValue = customValue.charAt(0).toUpperCase() + customValue.slice(1);
        return (config[customValue].config)
    } catch {
        console.log('Zusätzliches Argument nicht erkannt/nicht vorhanden. \n' +
            'Bitte eine der folgenden Optionen beim Start mit angeben:\n' + possibleConfigs)
        process.exit();
    }
}

module.exports = {
    getConfig
};
