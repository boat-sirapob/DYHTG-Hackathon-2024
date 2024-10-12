import asyncHandler from 'express-async-handler';
import { AI } from '../ai/main.js';
import { config } from 'dotenv';
config();

const ai = new AI();

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
