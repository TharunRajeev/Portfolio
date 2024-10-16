import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import StairTransition from "./components/StairAnimation";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"]
})

export const metadata = {
  title: "Tharun Rajeev Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-light dark:bg-dark text-dark dark:text-light`}>
          <div className="h-24">
            <Navbar/>
          </div>
          <div className="h-[calc(100vh-96px)]">
            <StairTransition/>
            <PageTransition>
              {children}
            </PageTransition>
          </div> 
      </body>
    </html>
  );
}
