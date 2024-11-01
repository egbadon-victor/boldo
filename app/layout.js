import localFont from "next/font/local";
import {Manrope, Open_Sans} from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-primary",
  subsets: ["latin"],
})

const openSans = Open_Sans({
  variable: "--font-secondary",
  subsets: ["latin"]
})

export const metadata = {
  title: "Boldo",
  description: "The only template you will ever need",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${openSans.variable} antialiased bg-primary`}
      >
        {children}
      </body>
    </html>
  );
}
