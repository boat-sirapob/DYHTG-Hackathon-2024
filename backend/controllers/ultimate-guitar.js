import asyncHandler from 'express-async-handler';
import UltimateGuitar from 'ultimate-guitar';

export default {
    getFirstDataFromTitle: asyncHandler(async (req, res) => {
        try {
            const guitar = new UltimateGuitar();
            await guitar.init(req.query.song);
            const data = await guitar.fetch_data(UltimateGuitar.FIRST);
            res.json({ data: data, result: 0 });
        }
        catch (error) {
            res.json({ message: error, result: 1 });
        }
    }),
    getSongsListFromTitle: asyncHandler(async (req, res) => {
        try {
            const guitar = new UltimateGuitar();
            await guitar.init(req.query.title);
            const data = await guitar.search();
            res.json({ data: data, result: 0 });
        }
        catch (error) {
            res.json({ message: error, result: 1 });
        }
    }),
}
