import express from "express";

const router = express.Router();


// You can require and use your routes here ;)
router.get('/info', (req,res) => {
    console.log("setting up router point 1")
    res.status(200)
});                                                                                                                                                                                                                                                                                                                                                                         

export default router;