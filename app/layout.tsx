


import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header"
import ActiveSectionContextProvider from "@/context/active-section-context";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Swastika Pradhan | Personal Portfolio",
  description:
    "Swastika Pradhan is a software engineer based in India. She  is passionate about building products that make a difference.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-black text-gray-200 relative pt-28 sm:pt-36`}
      >
         <div className=" bg-purple-800 opacity-30 duration-200 right-0 -z-10 rounded-full blur-3xl w-[60%] h-96 top-20 absolute"></div>
        <ActiveSectionContextProvider>
        <Header />
        {children}

        </ActiveSectionContextProvider>
       
      </body>
    </html>
  );
}
