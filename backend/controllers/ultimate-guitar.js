import UltimateGuitar from 'ultimate-guitar';
import axios from 'axios';

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
    getSongsDataByTitle: async (title) => {
        try {
            const data = await axios.get(`https://api.genius.com/search?access_token=${process.env.GENIUS_API_KEY}&q=${title}`)
            return data
        }
        catch (error) {
            throw error
        }
    },
    getEmbedYoutubeLink: async (title) => {
        try {
            const data = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${title}&key=${process.env.YOUTUBE_API_KEY}`)
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
