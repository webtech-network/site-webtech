import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <title>WebTech - PUC Minas</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      </head>
      <body className={inter.className}>

        <Header></Header>

        <main className="">
          {children}
        </main>

        <Footer></Footer>

      </body>

    </html>
  );
}
