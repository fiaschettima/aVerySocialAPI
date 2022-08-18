const { User, thought } = require('../models');

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
    createNewUser(req,res){
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err))
    },
    updateUser(req,res){
        User.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {runValidators: true, new: true}
        ).then((user) =>
            !user
                ?  res.status(404).json({ message: 'No user with this id!' })
                :  res.json(user)
        ).catch((err) => {
            res.status(500).json(err)
        })
    },
    deleteUser(req,res){
        User.findOneAndDelete({ _id : req.params.id })
            .then((user) => 
                !user
                ? res.status(404).json({ message: "No User found with that ID" })
                : thought.deleteMany( {_id: {$in: user.thoughts}})
                ).catch((err) => {
                    res.status(500).json(err)
                })
    },
    addFriend(req,res){},
    removeFriend(req,res){}
}