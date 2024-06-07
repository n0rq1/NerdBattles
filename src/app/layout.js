import Spline from '@splinetool/react-spline';
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nerd Battles",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add any necessary head elements here */}
      </head>
      <body className={inter.className}>
        <div className="spline-background">
          <Spline scene="https://prod.spline.design/7QG5CF4LfbZXdMLj/scene.splinecode" />
        </div>
        <NavBar />
        <div className="content">
          {children}
        </div>
      </body>
    </html>
  );
}
