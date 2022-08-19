const { User, thought } = require('../models');

module.exports = {
    getAllThoughts(req,res) {
        thought.find()
            .select('-__V')
            .populate('reactions')
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    getAThought(req,res){
        thought.findOne({_id : req.params.id})
            .select('-__V')
            .populate('reactions')
            .then((thought) =>
                !thought
                ? res.status(500).json({ message: 'No Thoughts here' })
                : res.json(thought)
            ).catch((err) => res.status(500).json(err))
    },
    createNewThought(req,es){
        thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    {_id: req.body.userId},
                    {$addToSet : {thoughts : thought._id}},
                    {new: true}
                )
            }).then((user) => 
                !user   
                ? res.status(404).json({ message: 'No user with that id' })
                : res.json(user)    
            ).catch((err) => res.status(500).json(err))
    },
    updateThought(req,res){
        thought.findByIdAndUpdate({ _id: req.params.thoughtid})
            .then((thought) =>
                !thought
                ? res.status(404).json({ message: 'No thought with that id' })
                : res.json(thought)    
            ).catch((err) => res.status(500).json(err))
    },
    deleteThought(req,res){},
    addReaction(req,res){},
    removeReaction(req,res){}
    
}