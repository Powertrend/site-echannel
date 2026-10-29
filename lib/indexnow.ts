const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

export async function submitToIndexNow(options: {
    urls: string[]
    apiKey?: string
    host?: string
}): Promise<{ success: boolean; status?: number; error?: string }> {
    const apiKey = options.apiKey ?? process.env.INDEXNOW_API_KEY
    const host =
        options.host ??
        new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.echannel.com.br')
            .host

    if (!apiKey) {
        return { success: false, error: 'API key not configured' }
    }

    try {
        const response = await fetch(INDEXNOW_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({
                host,
                key: apiKey,
                keyLocation: `https://${host}/${apiKey}.txt`,
                urlList: options.urls,
            }),
        })

        if (response.ok || response.status === 202) {
            return { success: true, status: response.status }
        }

        return {
            success: false,
            status: response.status,
            error: await response.text(),
        }
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Request failed',
        }
    }
}
