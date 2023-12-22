import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 
import "./globals.css";
import type { Metadata } from "next";
import ToastContext from "@/components/ToastContext";
import { EdgeStoreProvider } from "../lib/edgestore";
import SessionProvider from "@/components/SesssionProvider";
import CopyRights from "@/components/CopyRights";
export const metadata: Metadata = {
  title: "EstateElite",
  description: 'EstateElite is the revolution in real estate. Connect, transact, and transform your journey. Explore now!',
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
