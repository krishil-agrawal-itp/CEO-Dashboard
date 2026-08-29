import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CEO Command Center",
  description: "Sales, delivery, products, certifications, and events at a glance.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml", sizes: "any" }],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
