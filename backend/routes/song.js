import express from "express";
import ultimateGuitar from "../controllers/ultimate-guitar";

const router = express.Router();

router.post("/", (req, res) => {
    ultimateGuitar.getFirstDataFromTitle(req, res);
});

router.post("/all", (req, res) => {
    ultimateGuitar.getSongsListFromTitle(req, res);
});

export const AIRoutes = router;