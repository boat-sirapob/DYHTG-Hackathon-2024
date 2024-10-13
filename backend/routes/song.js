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

router.get("/youtube", async (req, res) => {
    try {
        let data = await ultimateGuitar.getEmbedYoutubeLink(req.body.title);
        const videoId = data.data.items[0].id.videoId;
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        res.json({ data: embedUrl, result: 0 });
    } catch (error) {
        res.json({ message: error, result: 1 });
    }
});

export const SongRoutes = router;