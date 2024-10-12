import asyncHandler from 'express-async-handler';
import UltimateGuitar from 'ultimate-guitar' 

export default {
    testAI: asyncHandler(async (req, res) => {
        try {
            const response = await ai.generateResponse("Say Hello world");
            res.json({ message: response });
        }
        catch (error) {
            res.json({ message: error, error: true });
        }
    }),
}
