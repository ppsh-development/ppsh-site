import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";

const karla = Karla({
	variable: "--font-karla",
	subsets: ["latin", "latin-ext"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "PPSh - Третий съезд",
	description: "Official website of PPSh",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${karla.variable} antialiased`}
			>
			<div className="main-container animate-fade-in">
				<Header/>
				{children}
				<Footer/>
			</div>
			</body>
		</html>
	);
}
