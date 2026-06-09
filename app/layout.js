import "./globals.css";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <head>
                <title>WebTech Network</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            </head>
            <body className="">
                <Header></Header>
                <main className="">
                    {children}
                </main>
                <Footer></Footer>
            </body>
        </html>
    );
}

