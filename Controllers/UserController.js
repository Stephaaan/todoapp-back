const login = require("../Database/login");
const generateToken = require("../Utils/Token");
const store = require("../State/State");

exports.login = (req, res) => {
    if(!req.body.name || !req.body.password){
        res.status(400).send({message:"Bad request"});
        return;
    }
    login(req.body.name, req.body.password)
        .then(() => {
            const token = generateToken();
            store("tokens", [...store("tokens"), {name:req.body.name, token}]);
            console.log(store("tokens"));
            res.status(200).send({message:"Login success", name:req.body.name, token})
        })
        .catch(()=>{
            res.status(401).send({message:"Wrong credentials"});
        });
}
exports.logout = (req, res) => {
    const tokens = store("tokens").filter(({token})=> token !== req.body.token);
 
    store("tokens", tokens)
    console.log(store("tokens"));
    res.status(200).send({message:"Logged out"});
}