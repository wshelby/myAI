import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello! I'm ${AI_NAME}, ${OWNER_NAME}'s AI assistant. If you're looking for information on our JammyCat products, you've come to the right spot!`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response, I must consult my fellow JammyCats. Please take a look around the rest of our site and try again later.`;
export const WORD_CUTOFF: number = 800; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Thank you so much for your message! I would love to help you with our JammyCat products, but I'm gonna need some more time to think! `;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
