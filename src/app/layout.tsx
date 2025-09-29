import type { Metadata } from "next";
import { Inter, Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "TOP ADVANCED MEDICAL - Healthcare Solutions Provider",
  description:
    "TOP ADVANCED MEDICAL is a leading healthcare solutions provider specializing in medical devices, consumables, and cutting-edge healthcare technologies with local manufacturing capabilities.",
  keywords:
    "healthcare solutions, medical devices, central venous catheters, hemodialysis sets, chest drainage systems, medical manufacturing",
  authors: [{ name: "TOP ADVANCED MEDICAL" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} ${montserrat.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
