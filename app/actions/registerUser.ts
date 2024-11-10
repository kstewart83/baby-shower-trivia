'use server'

import { Redis } from "@upstash/redis"
import { z } from "zod"

type FormState = {
    message: string
}

export async function registerUser(prevState: FormState, formData: FormData): Promise<FormState> {
    const schema = z.object({
        firstName: z.string().min(1),
        lastName: z.string().min(1)
    })

    const validatedData = schema.parse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName')
    })

    const redis = new Redis({
        url: process.env.KV_REST_API_URL,
        token: process.env.KV_REST_API_TOKEN,
    })

    redis.sadd("user:123", validatedData)

    return {
        message: `message processed`
    }
}