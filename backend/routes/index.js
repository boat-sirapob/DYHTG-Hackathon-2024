import express from "express";
import UltimateGuitar from 'ultimate-guitar' 
import AIController from "../controllers/ai.js";

const router = express.Router();

// Route for handling form submission
router.post('/submit-form', async (req, res) => {
    try {

        const { genre, difficulty, additionalInfo } = req.body;
    
        // Validate inputs (basic validation)
        if ( !genre || !difficulty) {
            res.json({ message: "Error: must provide all required fields ", error: 1 });
        }
    
        console.log(req.body);
        let recommendation_res = await AIController.generateSongRecommendation(req, res);
    
        // Respond with the submitted data
        res.json({
            message: 'Form submitted successfully!',
            data: recommendation_res,
            error: 0
        });
    } catch (error) {
        res.json({ message: error, error: 1 });
    }
});

export const IndexRoutes = router;