import { config } from 'dotenv';
config();
import express from "express";
import UltimateGuitar from 'ultimate-guitar' 
import AIController from "../controllers/ai.js";
import ultimateGuitar from "../controllers/ultimate-guitar.js";

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
        console.log("RECOMMENDATION", recommendation_res);
        const updatedRecommendations = await Promise.all(recommendation_res.songs.map(async (song) => {
            let data = await ultimateGuitar.getSongsDataByTitle(song.title);
            console.log(data.data.response.hits[0].result);
            song.data = data.data.response.hits[0].result;
            return song;
        }));
        // console.log("UPDATED RECOMMENDATIONS", updatedRecommendations);
    
        // Respond with the submitted data
        res.json({
            message: 'Form submitted successfully!',
            data: updatedRecommendations,
            error: 0
        });
    } catch (error) {
        res.json({ message: error, error: 1 });
    }
});

export const IndexRoutes = router;