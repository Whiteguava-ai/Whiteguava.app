import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WhiteGuava — Your AI Sprint Team on Demand",
  description: "From discovery to deployment, we plug into your stack to prototype, validate, and launch AI experiences your users actually love.",
  keywords: "AI agency, AI development, LLM, agent, machine learning, product design",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
