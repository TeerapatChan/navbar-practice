import "./globals.css";
import type { Metadata } from "next";
import { Prompt } from "next/font/google";

const promptFont = Prompt({
    subsets: ["latin", "thai"],
    weight: ["400", "600"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={promptFont.className}>{children}</body>
        </html>
    );
}
