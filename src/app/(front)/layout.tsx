import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "../globals.css";
import Navbar02Page from "@/components/navbar-02/navbar-02";

const kanit = Kanit({
  subsets: ['thai'],
  weight: ['100','200','300','400','500','600','700','800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ระบบขายสินค้า COSCI Shop",
  description: "ขายสินค้าของนักศึกษา ประจำปี 2568",
};

    export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
        <body
            className={`${kanit.className}`}>
              <Navbar02Page/>
            {children}
        </body>
        </html>
    );
}
