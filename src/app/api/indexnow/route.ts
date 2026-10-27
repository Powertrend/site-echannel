import { submitToIndexNow } from '../../../../lib/indexnow'
import { NextResponse } from 'next/server'

function authorizeIndexNowSubmit(request: Request): boolean {
    const secret = process.env.INDEXNOW_SUBMIT_SECRET?.trim()
    if (!secret) return true
    const auth = request.headers.get('authorization')
    return auth === `Bearer ${secret}`
}

export async function POST(request: Request) {
    if (!authorizeIndexNowSubmit(request)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const body = await request.json()
        const { urls } = body as { urls?: string | string[] }
        if (!urls) {
            return NextResponse.json(
                { error: 'URLs are required' },
                { status: 400 },
            )
        }
        const urlList = Array.isArray(urls) ? urls : [urls]
        const result = await submitToIndexNow({ urls: urlList })
        if (!result.success) {
            return NextResponse.json(
                { success: false, error: result.error },
                { status: result.status ?? 500 },
            )
        }
        return NextResponse.json({ success: true, urls: urlList })
    } catch (error) {
        return NextResponse.json(
            {
                error:
                    error instanceof Error
                        ? error.message
                        : 'Internal server error',
            },
            { status: 500 },
        )
    }
}

export async function GET() {
    return NextResponse.json({
        configured: Boolean(process.env.INDEXNOW_API_KEY),
        endpoint: '/api/indexnow',
    })
}
