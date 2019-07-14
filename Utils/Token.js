const store = require("../State/State");
const randomString = require("./RandomString");
module.exports = () => {
    const tokens = store("tokens");
    
    let token = "";
    let valid = false;
    while(!valid){
        
        token = randomString();
        if(!tokens.find(({actualToken}) => token === actualToken)){
            valid = true;
        }
        
    }
    
    return token;    
}