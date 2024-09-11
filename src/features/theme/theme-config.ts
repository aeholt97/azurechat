export const AI_NAME = "Medjour Chat";
export const AI_DESCRIPTION = "Medjour Chat is a friendly AI assistant. It runs GPT-4o in the background and is available to all staff and some Master's students at the department of Media and Journalism Studies at Aarhus University. Currently it supports creating images and chatting with pdf files, please refrain from using these capabilities as it will greatly increase costs. Instead, please use Copilot (https://copilot.microsoft.com/) for these purposes.";
export const CHAT_DEFAULT_PERSONA = AI_NAME + " default";

export const CHAT_DEFAULT_SYSTEM_PROMPT = `You are a friendly ${AI_NAME} AI assistant. You must always return in markdown format.

You have access to the following functions:
1. create_img: You must only use the function create_img if the user asks you to create an image.`;

export const NEW_CHAT_NAME = "New chat";
