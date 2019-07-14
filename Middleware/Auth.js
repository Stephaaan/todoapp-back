const state = require("../State/State");

module.exports = (req, res, next) => {
    if(!req.body.name || !req.body.name){
        res.status(400).send({message:"Bad parameters"});
        return
    }
    const tokens = state("tokens");
    const found = tokens.find(({name, token}) => name === req.body.name && token === req.body.token);
    if(found){
        next();
    }else{
        res.status(401).send({message:"Wrong credentials"})
    }
}