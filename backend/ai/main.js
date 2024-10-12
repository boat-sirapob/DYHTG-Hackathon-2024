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

    async generateResponse(prompt) {
        try {
            const response = await this.openai.chat.completions.create({
                model: this.model,
                messages: [
                    {
                        role: 'system',
                        content: 'You are a helpful assistant.',
                    },
                    {
                        role: 'user',
                        content: prompt,
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
}