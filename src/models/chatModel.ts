import {z} from "zod";

const ChatInput = z.object({
    prompt: z.string,
});

const ChatOutput = z.object({
    answer: z.string,
    ts: z.int,
});