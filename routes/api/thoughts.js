const router = require('express').Router();
const { 
    getAThought,
    getAllThoughts,
    createNewThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers//thoughtController');

router.route('/').get(getAllThoughts).post(createNewThought);

router.route('/:thoughtid').get(getAThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtid/reactions').post(addReaction).delete(removeReaction);

module.exports = router;