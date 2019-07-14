const randomString = require("randomstring");

module.exports = () => {
    const random = randomString.generate(30);
    return random;
};