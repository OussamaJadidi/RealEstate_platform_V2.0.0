import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 
import "./globals.css";
import type { Metadata } from "next";
import ToastContext from "@/components/ToastContext";
import { EdgeStoreProvider } from "../lib/edgestore";
import SessionProvider from "@/components/SesssionProvider";
import CopyRights from "@/components/CopyRights";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <SessionProvider>
          <Header />
          <ToastContext />
          <EdgeStoreProvider>{children}</EdgeStoreProvider>
          <Footer />
          <CopyRights />
        </SessionProvider>
      </body>
    </html>
  );
}