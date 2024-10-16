import OpenAI from "openai";

export class AI {
    constructor() {
        this.name = 'AI';
        this.model = 'gpt-4o-mini';
        this.API_KEY = process.env.API_KEY;

        this.openai = new OpenAI({
            apiKey: this.API_KEY,
        });
    }

    async testResponse() {
        try {
            const response = await this.openai.chat.completions.create({
                model: this.model,
                messages: [
                    {
                        role: 'system',
                        content: 'You are a helpful assistant',
                    },
                    {
                        role: 'user',
                        content: 'Hello, who are you?',
                    },
                ],
                max_tokens: 100,
            });
            return response.choices[0].message.content;
        } catch (error) {
            console.error('Error generating text:', error);
            throw error;
        }
    }

    async songGenerationResponse(prompt) {
        try {
            const response = await this.openai.chat.completions.create({
                model: this.model,
                messages: [
                    {
                        role: 'system',
                        content: `
                        You are assistant to musician trying to learn a new song based on their experiences. You must suggest at least 10-20 best song that suits their style. These song will be get from Ultimate Guitar API and Genius, please make sure that the song exists.

                        user input might include:
                        - genre: the genre of the song
                        - song_difficulty: the difficulty of the song to play based on the instrument user plays or the user's skill level
                        - mood: the mood of the song
                        - era: the era of the song
                        - instrument: the main instrument of the song and the instrument user plays
                        - additional_info: any additional information that might help to generate the song


                        You must provide the output a valid json which follows this structure:

                        INPUT: 
                        
                        {
                            genre: ...,
                            song_difficulty: ...,
                            mood: ...,
                            era: ...,
                            instrument: ...,
                            additional_info: ...,
                        }

                        OUTPUT: 
                        
                        {
                            songs: [
                                {
                                    title: ...,
                                    artist: ...,
                                    analysed_difficulty: easy/intermediate/hard,
                                },
                                ...
                            ]
                        }
                        `,
                    },
                    {
                        role: 'user',
                        content: `
                        I like you to generate songs based on the information below:
                        {
                            genre: ${prompt.genre},
                            song_difficulty: ${prompt.difficulty},
                            mood: ${prompt.mood || 'not_specified'},
                            era: ${prompt.era || 'not_specified'},
                            instrument: ${prompt.instrument || 'not_specified'},
                            additional_info: ${prompt.additional || 'not_specified'},
                        }
                        `,
                    },
                ],
                response_format: { "type": "json_object" },
            });
            let result = JSON.parse(response.choices[0].message.content);
            return result;
        } catch (error) {
            console.error('Error generating text:', error);
            throw error;
        }
    }

    async chordsGenerationResponse(prompt) {
        try {
            const response = await this.openai.chat.completions.create({
                model: this.model,
                messages: [
                    {
                        role: 'system',
                        content: `
                        You are assistant to musician trying to learn a new song based on their experiences. You must suggest at least 10-20 best chords progression that suits their style. Also generate the uberchord endpoint to get chord informations.
                        Chords may have different duration, you must provide the duration of each chord and each list must not be the same.

                        user input might include:
                        - genre: the genre of the song
                        - song_difficulty: the difficulty of the song to play based on the instrument user plays or the user's skill level
                        - mood: the mood of the song
                        - era: the era of the song
                        - additional_info: any additional information that might help to generate the song

                        You must provide the output a valid json that JSON.parse can format which follows this structure:

                        INPUT: 
                        
                        {
                            genre: ...,
                            song_difficulty: ...,
                            mood: ...,
                            era: ...,
                            additional_info: ...,
                        }

                        OUTPUT: 
                        
                        {
                            chords: [
                                [
                                    {
                                        chord: ...,
                                        duration: ...
                                    },
                                    ...
                                ]
                                ...
                            ]
                        }
                        `,
                    },
                    {
                        role: 'user',
                        content: `
                        Here is my information:
                        {
                            genre: ${prompt.genre},
                            song_difficulty: ${prompt.difficulty},
                            mood: ${prompt.mood || 'not_specified'},
                            era: ${prompt.era || 'not_specified'},
                            additional_info: ${prompt.additional || 'not_specified'},
                        }
                        `,
                    },
                ],
                response_format: { "type": "json_object" },
            });
            let result = JSON.parse(response.choices[0].message.content);
            return result;
        } catch (error) {
            console.error('Error generating text:', error);
            throw error;
        }
    }
}