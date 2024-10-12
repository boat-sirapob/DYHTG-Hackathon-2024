import OpenAI from "openai";

export class AI {
    constructor() {
        this.name = 'AI';
        this.model = 'gpt-3.5-turbo'
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
                        You are assistant to musician trying to learn a new song based on their experiences. You must suggest 20 best song that suits their style. These song will be get from Ultimate Guitar API and Genius, please make sure that the song exists.

                        You must provide the output a valid json that JSON.parse can format which follows this structure:

                        INPUT: 
                        
                        {
                            genre: ...,
                            skill_level: ...
                        }

                        OUTPUT: 
                        
                        {
                            songs: [
                                {
                                    title: ...,
                                    artist: ...,
                                },
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
                            skill_level: ${prompt.difficulty},
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
                        You are assistant to musician trying to learn a new song based on their experiences. You must suggest 20 best chords progression that suits their style. Also generate the guitar chord diagram for each chord that will use with svguitar npm library. If you are unsure of the chord, you can specified it as empty object.
                        Chords may have different duration, you must provide the duration of each chord and each list must not be the same.

                        You must provide the output a valid json that JSON.parse can format which follows this structure:

                        INPUT: 
                        
                        {
                            skill_level: ...,
                            genre: ...,
                        }

                        OUTPUT: 
                        
                        {
                            chords: [
                                [
                                    {
                                        chord: ...,
                                        duration: ...,
                                        svguitar: {
                                            fingers: [[finger_at, fret or x], [...], [...], [...]],
                                            barres: [{from_string: ..., to_string: ..., fret: ...}],
                                        },
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
                            skill_level: ${prompt.skill_level},
                            genre: ${prompt.genre},
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