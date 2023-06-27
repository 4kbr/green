import Navbar from "@/components/Navbar/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import Footbar from "@/components/Footbar/Footbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FUYYAHH",
  description: "fuyaahhhh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen my-0 mx-0 py-0 flex flex-col w-full">
          <Navbar />
          <div className="pt-24">{children}</div>
          <Footbar />
        </div>
      </body>
    </html>
  );
}
