import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "WhiteGuava — AI, Software & Automation Company | Bengaluru, India",
  description: "WhiteGuava is a Bengaluru-based AI and software solutions company. We build AI agents, intelligent software, automation systems, and custom digital solutions for businesses worldwide.",
  keywords: "AI solutions, AI agents, AI automation, AI software development, custom AI solutions, AI development company, AI automation company, custom software development, machine learning solutions, business automation, AI integration, AI application development, Bengaluru, Karnataka, India",
  openGraph: {
    title: "WhiteGuava — AI, Software & Automation",
    description: "We build AI agents, intelligent software, automation systems, and custom digital solutions that turn real business problems into working products.",
    type: "website",
    locale: "en_IN",
  },
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
      <head>
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="tNeak0Hwphy6NdHcrfQFBQ"
          async
        />
      </head>
      {/* suppressHydrationWarning prevents false alarms from browser extensions
          injecting attributes (e.g. password managers) into <body> */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
