import { AI } from '../ai/main.js';
import { config } from 'dotenv';
config();

const ai = new AI();

export default {
    testAI: async (req, res) => {
        try {
            const response = await ai.testResponse();
            return response;
        }
        catch (error) {
            throw error;
        }
    },
    generateSongRecommendation: async (req, res) => {
        try {
            const response = await ai.songGenerationResponse(req.body);
            return response;
        }
        catch (error) {
            throw error;
        }
    },
    generateChords: async (req, res) => {
        try {
            const response = await ai.chordsGenerationResponse(req.body);
            return response;
        }
        catch (error) {
            throw error;
        }
    },
}
