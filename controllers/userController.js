const { User } = require('../models');

module.exports = {
    getAllUser(req,res) {
        User.find().then((users) => res.json(users))
        .catch((err) => res.status(500).json(err))
    },
    getOneUser(req,res) {
        User.findOne({ _id: req.params.id})
            .select('-__V')
            .populate('thoughts')
            .populate('friends')
            .then((user) => 
                !user
                    ? res.status(400).json({message: 'No User found'})
                    :res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    createNewUser(req,res){},
    updateUser(req,res){},
    deleteUser(req,res){},
    addFriend(req,res){},
    removeFriend(req,res){}
}