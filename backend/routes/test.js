import express from "express";
import UltimateGuitar from 'ultimate-guitar' 

const router = express.Router();

router.get("/ultimate-guitar-api", async (req, res) => {
    const guitar = new UltimateGuitar()
	await guitar.init("your love") // Required for you to search a song
	const data = await guitar.fetch_data(UltimateGuitar.FIRST)
	res.json(data)
});

export const TestRoutes = router;