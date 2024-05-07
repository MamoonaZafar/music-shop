import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/Footer/Footer";
import CartProvider from "../../Providers/CartProvider";
import { Toaster } from "react-hot-toast";
import { getCurrentUser } from "../../actions/getCurrentUSer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Instruments",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUser = await getCurrentUser()

  console.log("user<<<", currentUser);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster toastOptions={{
          style: {
            background: 'rgb(51 65 85)',
            color: '#fff',
          }
        }}/>
        <CartProvider>
        <div className="flex flex-col min-h-screen">
        <NavBar/>
        <main className="flex-grow">{children}</main>
        <Footer/>
        </div>
        </CartProvider>
        </body>
    </html>
  );
}
