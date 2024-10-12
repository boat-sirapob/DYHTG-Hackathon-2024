import express from "express";
import AIController from "../controllers/ai.js";

const router = express.Router();

router.get("/test", (req, res) => {
    AIController.testAI(req, res);
});

export const AIRoutes = router;