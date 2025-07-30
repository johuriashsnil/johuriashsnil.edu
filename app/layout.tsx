import AuthProvider from "@/utils/SessionProvider";
import "./globals.css";
// import Script from "next/script";
import { Metadata } from "next";

export async function generateMetadata({ }: { params: unknown }): Promise<Metadata> {
    return {
        title: process.env.NEXT_PUBLIC_ENGLISH_TITLE,
        description: "Created by MD. Abdur Rahman Sifat",
    };
}

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    <main>{children}</main>
                </AuthProvider>
            </body>
        </html>
    );
}
