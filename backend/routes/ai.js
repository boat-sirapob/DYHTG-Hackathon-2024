import express from "express";
import AIController from "../controllers/ai.js";

const router = express.Router();

router.get("/test", (req, res) => {
    AIController.testAI(req, res);
});

router.post("/generate-song-recommendation", (req, res) => {
    AIController.generateSongRecommendation(req, res);
});

router.post("/generate-chords", (req, res) => {
    AIController.generateChords(req, res);
});

export const AIRoutes = router;