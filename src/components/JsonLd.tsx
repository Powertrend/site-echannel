import type { JsonLdThing } from '../../lib/seo/schemas'

export function JsonLd({ data }: { data: JsonLdThing | JsonLdThing[] }) {
    const payload = Array.isArray(data) ? data : [data]
    return (
        <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
        />
    )
}
