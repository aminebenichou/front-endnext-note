import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavMenu from "./components/nav";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Note App",
  description: "This is a note app that will make me rich",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
        <NavMenu />
        {children}
        </div>
      </body>
    </html>
  );
}
