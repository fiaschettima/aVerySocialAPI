const router = require('express').Router();
const { user, thought } = require('../../models');

// Get All Users----------------------------------------------------------------
router.get('/', async (req,res) => {
    try{
        res.status(200).json()
    }catch(err){
        res.status(500).json(err)
    }
});
// Get A Single User----------------------------------------------------------------
router.get('/:id', async (req,res) => {
    try{
        res.status(200).json()
    }catch(err){
        res.status(500).json(err)
    }
});
// Post a new user ----------------------------------------------------------------
router.post('/', async (req,res) => {
    try{
        res.status(200).json()
    }catch(err){
        res.status(500).json(err)
    }
});
// Update a user by its ID----------------------------------------------------------------
router.put('/:id', async (req,res) => {
    try{
        res.status(200).json()
    }catch(err){
        res.status(500).json(err)
    }
});
// Delete a user by its ID----------------------------------------------------------------
router.delete('/:id', async (req,res) => {
    try{
        res.status(200).json()
    }catch(err){
        res.status(500).json(err)
    }
});
// Add a Friend to a User----------------------------------------------------------------
router.post('/:userId/friends/:friendId', async (req,res) => {
    try{
        res.status(200).json()
    }catch(err){
        res.status(500).json(err)
    }
});
// Delete a Friend from a User----------------------------------------------------------------
router.delete('/:userId/friends/:friendId', async (req,res) => {
    try{
        res.status(200).json()
    }catch(err){
        res.status(500).json(err)
    }
});