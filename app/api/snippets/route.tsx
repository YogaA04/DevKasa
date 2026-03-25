import { prisma } from "@/libs/prisma"

export async function GET() {
    const snippets = await prisma.snippet.findMany()
    console.log("hello world")
    return new Response(JSON.stringify(snippets), {
        headers: { "Content-Type": "application/json" },
    })
}  