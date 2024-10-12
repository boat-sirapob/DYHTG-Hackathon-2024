import asyncHandler from 'express-async-handler';
import { AI } from '../ai/main.js';
import { config } from 'dotenv';
config();

const ai = new AI();

export default {
    testAI: asyncHandler(async (req, res) => {
        try {
            const response = await ai.testResponse();
            res.json({ data: response, result: 0 });
        }
        catch (error) {
            res.json({ message: error, result: 1 });
        }
    }),
    generateSongRecommendation: asyncHandler(async (req, res) => {
        try {
            const response = await ai.songGenerationResponse(req.body);
            res.json({ data: response, result: 0 });
        }
        catch (error) {
            res.json({ message: error, result: 1 });
        }
    }),
    generateChords: asyncHandler(async (req, res) => {
        try {
            const response = await ai.chordsGenerationResponse(req.body);
            res.json({ data: response, result: 0 });
        }
        catch (error) {
            res.json({ message: error, result: 1 });
        }
    }),
}
