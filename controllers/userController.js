const { User } = require('../models/user');

module.exports = {
    getAllUser(req,res) {
        User.find().then((users) => res.json(users))
        .catch((err) => res.status(500).json(err))
    },
    getOneUser(req,res) {

    },
}