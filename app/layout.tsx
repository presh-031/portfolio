import "./globals.css";
import { inter } from "./fonts";

export const metadata = {
  title: "Presh | Portfolio",
  description: "My Personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
