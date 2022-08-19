const { User, thought } = require('../models');

module.exports = {
    getAllUser(req,res) {
        User.find().then((users) => res.json(users))
        .catch((err) => res.status(500).json(err))
    },
    getOneUser(req,res) {

        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('thoughts')
        .populate('friends')
        .then((user) =>
            !user
                ? res.status(404).json({ message: 'No user with that id' })
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
            
    },
    createNewUser(req,res){
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err))
    },
    updateUser(req,res){
        User.findByIdAndUpdate(
            {_id: req.params.userid},
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
        User.findByIdAndDelete({ _id : req.params.userid })
            .then((user) => 
                !user
                    ? res.status(404).json({ message: "No User found with that ID" })
                    : thought.deleteMany( {_id: {$in: user.thoughts}}).then(( res.json({message: "User and thoughts Deleted"})))
                ).catch((err) => {
                    res.status(500).json(err)
                })
    },
    addFriend(req,res){
        User.findOneAndUpdate(
            {_id: req.params.id},
            {$addToSet: {friends: req.params.friendId}},
            {new: true}
        ).then((user) => 
            !user
            ?  res.status(404).json({ message: 'No user with this id!' })
            :  res.json(user)
        ).catch((err) => {
            res.status(500).json(err)
        })
    },
    removeFriend(req,res){
        User.findOneAndUpdate(
            {_id: req.params.id},
            {$pull: {friends: req.params.friendId}},
            {new: true}
        ).then((user) => 
            !user
            ?  res.status(404).json({ message: 'No user with this id!' })
            :  res.json(user)
        ).catch((err) => {
            res.status(500).json(err)
        })
    }
}