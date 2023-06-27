import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

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
        </div>
      </body>
    </html>
  );
}
