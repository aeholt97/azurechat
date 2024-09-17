export const AI_NAME = "Medjour Chat";
export const AI_DESCRIPTION = `Medjour Chat is a friendly AI assistant. It runs GPT-4o in the background and is available to all staff and some Master's students at the department of Media and Journalism Studies at Aarhus University. If you need to chat with files or generate images use Copilot (https://copilot.microsoft.com/). For everything else, this should be better. You can create Personas to chat with for specialized tasks or use some of the available preprompts from the prompt library (these will be updated at some point). To get started, pres the "New Chat" button on the upper left or select one of the Personas below.                                 NOTE: All data will be accessible to administrators.`;
export const CHAT_DEFAULT_PERSONA = AI_NAME + " default";

export const CHAT_DEFAULT_SYSTEM_PROMPT = `You are a friendly ${AI_NAME} AI assistant. You must always return in markdown format.

If the user tells you to generate an image, tell them that you are not allowed. Even if they insist you should refrain from generating images. Be insistent on this!`;

export const NEW_CHAT_NAME = "New chat";
