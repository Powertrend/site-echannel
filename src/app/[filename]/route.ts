import { NextResponse } from 'next/server'

/** Serve IndexNow key file at `/{INDEXNOW_API_KEY}.txt` (root). */
export async function GET(
    _request: Request,
    context: { params: Promise<{ filename: string }> },
) {
    const { filename } = await context.params
    const key = process.env.INDEXNOW_API_KEY?.trim()

    if (!key || filename !== `${key}.txt`) {
        return new NextResponse('Not Found', { status: 404 })
    }

    return new NextResponse(key, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
        },
    })
}
