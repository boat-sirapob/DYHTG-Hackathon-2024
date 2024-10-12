import express from "express";
import ultimateGuitar from "../controllers/ultimate-guitar.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        let data = await ultimateGuitar.getFirstDataFromTitle(req, res);
        res.json({ data: data, result: 0 });
    } catch (error) {
        res.json({ message: error, result: 1 });
    }
});

router.post("/all", async (req, res) => {
    try {
        let data = await ultimateGuitar.getSongsListFromTitle(req, res);
        res.json({ data: data, result: 0 });
    } catch (error) {
        res.json({ message: error, result: 1 });
    }
});

export const SongRoutes = router;