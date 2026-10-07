import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

const siteDescription =
    'Para quem compra, vende ou opera um shopping. Descoberta com IA, lojas parceiras e operação integrada. Lista de abertura.'

export const metadata: Metadata = {
    title: 'Echannel — Shopping digital inteligente',
    description: siteDescription,
    openGraph: {
        title: 'Echannel — Shopping digital inteligente',
        description: siteDescription,
        locale: 'pt_BR',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='pt-BR'>
            <head>
                <link rel='icon' href='/favicon.ico' type='image/x-icon' />
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                suppressHydrationWarning={true}
            >
                {children}
            </body>
        </html>
    )
}
