const router = require('express').Router();
const { user, thought } = require('../../models');


// Get All thoughts----------------------------------------------------------------
router.get('/', async (req,res) => {
    try{
        res.status(200).json()
    }catch(err){
        res.status(500).json(err)
    }
});
// Get A Single thought----------------------------------------------------------------
router.get('/:id', async (req,res) => {
    try{
        res.status(200).json()
    }catch(err){
        res.status(500).json(err)
    }
});
// Post a new thought ----------------------------------------------------------------
router.post('/', async (req,res) => {
    try{
        res.status(200).json()
    }catch(err){
        res.status(500).json(err)
    }
});
// Post a reaction to a single thought----------------------------------------------------------------
router.post('/:thoughtId/reactions', async (req,res) => {
    try{
        res.status(200).json()
    }catch(err){
        res.status(500).json(err)
    }
});
// Delete a reaction to a single thought----------------------------------------------------------------
router.post('/:thoughtId/:reactionId', async (req,res) => {
    try{
        res.status(200).json()
    }catch(err){
        res.status(500).json(err)
    }
});