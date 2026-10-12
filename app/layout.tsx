import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brewmandu Coffee Co. — Coffee worth slowing down for",
  description:
    "Small-batch Himalayan arabica, roasted in Kathmandu. See the menu, our story, and visit us in Thamel.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#120b06]">{children}</body>
    </html>
  );
}
