import express from "express";
import UltimateGuitar from 'ultimate-guitar' 

const router = express.Router();

// Route for handling form submission
router.post('/submit-form', async (req, res) => {
    const { songName, genre, difficulty, additionalInfo } = req.body;

    // Validate inputs (basic validation)
    if (!songName || !genre || !difficulty) {
        res.json({ message: "Error: must provide all required fields ", error: 1 });
    }

    const guitar = new UltimateGuitar()
	await guitar.init(songName) // Required for you to search a song
	const data = await guitar.fetch_data(UltimateGuitar.FIRST)

    // Respond with the submitted data
    res.json({
        message: 'Form submitted successfully!',
        data,
        error: 0
    });
});

export const IndexRoutes = router;