import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'QR Code Component',
    description: 'Frontend Mentor QR Code Component Challenge',
    referrer: "origin-when-cross-origin",
    authors: [{ 
        name: 'Rutwij Patankar', 
        url: 'https://github.com/rutw1j' 
    }],
    creator: 'Rutwij Patankar',
    keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'ChakraUI'],
    appLinks: {
        web: {
            url: 'https://rutw1j-qr-code-component.vercel.app',
            should_fallback: true,
        }
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit&display=swap"></link>
            </head>
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
