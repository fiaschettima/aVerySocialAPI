const router = require('express').Router();
const { 
    getAllUser, 
    getOneUser, 
    createNewUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend    
} = require('../../controllers/userController');

router.route('/').get(getAllUser).post(createNewUser);
// TODO fix Delete user and get one user
router.route('/:userid').get(getOneUser).put(updateUser).delete(deleteUser);

router.route('/:id/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
