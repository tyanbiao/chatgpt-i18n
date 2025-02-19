import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const OpenAI = require("openai");

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const params = request.body;
    const { content, langList = [] } = params;
    if (langList.length === 0) {
        response.status(200).json({
            success: false,
            message: "langList is empty",
        });
        return;
    }
    try {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
            baseURL: process.env.OPENAI_API_BASE_URL,
        });
        const result: { lang: string; content: string }[] = [];
        for (let lang of langList) {
            const completion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: `Translate a i18n locale json content to ${lang}. It's a key-value structure, don't translate the key. Consider the context of the value to make better translation.`,
                    },
                    {
                        role: "user",
                        content: content,
                    },
                ],
                max_tokens: 1000,
            }, { timeout:5000 });
            result.push({
                lang,
                content: `${completion.choices[0].message?.content}`,
            });
        }

        response.status(200).json({
            success: true,
            data: result,
        });
    } catch (error) {
        console.error(error)
        response.status(500).json({
            success: false,
            message: '[/exportLocalFiles] Translating services failed',
            info: error
        });
    }
}
