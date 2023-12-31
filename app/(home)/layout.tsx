import Nav from "@/components/Nav/Nav";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E Commerce - Fullfill your requirement",
  description: "Generated by create next app",
  icons: ["/vercel.svg"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
