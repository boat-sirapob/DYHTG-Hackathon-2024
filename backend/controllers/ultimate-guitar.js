import asyncHandler from 'express-async-handler';
import UltimateGuitar from 'ultimate-guitar';

export default {
    getFirstDataFromTitle: async (req, res) => {
        try {
            const guitar = new UltimateGuitar();
            await guitar.init(req.body.title);
            const data = await guitar.fetch_data(UltimateGuitar.FIRST);
            return data
        }
        catch (error) {
            throw error
        }
    },
    getSongsListFromTitle: async (req, res) => {
        try {
            const guitar = new UltimateGuitar();
            await guitar.init(req.body.title);
            const data = await guitar.fetch_data();
            return data
        }
        catch (error) {
            throw error
        }
    },
}
