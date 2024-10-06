import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: process.env.APP_NAME,
  description: process.env.APP_DESCRIPTION,
  icons: {
    icon: ["/assets/Logo.ico"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={`${inter.className} antialiased min-h-screen`}
          data-theme="nord"
        >
          <Header />
          {children}
          <Toaster
            toastOptions={{
              duration: 3000,
            }}
          />
        </body>
      </html>
    </SessionProvider>
  );
}
