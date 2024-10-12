import express from "express";
import AIController from "../controllers/ai.js";

const router = express.Router();

router.get("/test", async (req, res) => {
    try {
        const response = await AIController.testAI(req, res);
        res.json({ data: response, result: 0 });
    } catch (error) {
        res.json({ message: error, result: 1 });
    }
});

router.post("/generate-song-recommendation", async (req, res) => {
    try {
        const data = await AIController.generateSongRecommendation(req, res);
        res.json({ data: data, result: 0 });
    } catch (error) {
        res.json({ message: error, result: 1 });
    }
});

router.post("/generate-chords", async (req, res) => {
    try {
        const data = await AIController.generateChords(req, res);
        res.json({ data: data, result: 0 });
    } catch (error) {
        res.json({ message: error, result: 1 });
    }
});

export const AIRoutes = router;