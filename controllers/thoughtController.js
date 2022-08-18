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
    createNewThought(req,es){},
    updateThought(req,res){},
    deleteThought(req,res){},
    addReaction(req,res){},
    removeReaction(req,res){}
    
}