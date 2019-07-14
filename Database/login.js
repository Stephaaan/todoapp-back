const Knex = require("./Knex");

module.exports = (username, password) => new Promise((resolve, reject)=>{
    Knex("users").where({
        username, password
    })
    .then(result => JSON.parse(JSON.stringify(result)))
    .then(result => {
        return result;
    })
    .then(result => result.length===0?reject():resolve());
});