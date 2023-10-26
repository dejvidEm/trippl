var Userdb = require("../model");

// vytvorenie nového užívateľa
exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({message: "Nemožeš nechať prázdne polia!"});
        return;
    }
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}