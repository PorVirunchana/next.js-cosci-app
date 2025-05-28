import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "../globals.css";

const kanit = Kanit({
    subsets: ['thai'],
    weight: ['100','200','300','400','500','600','700','800'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "เข้าสู่ระบบ",
    description: "ขายสินค้าของนักศึกษา ประจำปี 2568",
};

    export default function AuthLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
        <body
            className={`${kanit.className}`}
        >
            {children}
        </body>
        </html>
    );
}
