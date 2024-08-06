import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "APIIT FCS",
  description:
    "APIIT Fullstack Computer Society is the premier student-led organization dedicated to fostering excellence in IT education and innovation at Asia Pacific Institute of Information Technology.",
  keywords: [
    "APIIT FCS",
    "Fullstack Computer Society",
    "APIIT",
    "APIIT Colombo",
    "IT education",
    "student-led organization",
    "innovation in IT",
    "Asia Pacific Institute of Information Technology",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
