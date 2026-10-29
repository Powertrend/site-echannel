import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import { JsonLd } from '../components/JsonLd'
import { SiteHeader } from '../components/layout/SiteHeader'
import { homeFaqsPtBr } from '../data/home-faq'
import {
    buildPageMetadata,
    HOME_PAGE_SEO,
} from '../../lib/seo/page-seo'
import {
    getFAQSchema,
    getMinimalOrganizationSchema,
    getSoftwareApplicationSchema,
    getWebSiteSchema,
} from '../../lib/seo/schemas'
import 'material-symbols/outlined.css'
import './globals.css'

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    display: 'swap',
})

const outfit = Outfit({
    variable: '--font-outfit',
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = buildPageMetadata(HOME_PAGE_SEO)

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='pt-BR'>
            <head>
                <meta
                    name='google-site-verification'
                    content='9_hh6Xu5_gBgG35OqBv47Vc-Azpwv92YeMiohghMZsk'
                />
                <link rel='icon' href='/favicon.ico' type='image/x-icon' />
                <link
                    rel='alternate'
                    type='text/plain'
                    href='/llms.txt'
                    title='LLMs'
                />
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
                />
                <JsonLd
                    data={[
                        getWebSiteSchema(),
                        getMinimalOrganizationSchema(),
                        getSoftwareApplicationSchema(),
                        getFAQSchema(homeFaqsPtBr),
                    ]}
                />
            </head>
            <body
                className={`${inter.variable} ${outfit.variable} antialiased`}
                suppressHydrationWarning={true}
            >
                <SiteHeader />
                {children}
            </body>
        </html>
    )
}
