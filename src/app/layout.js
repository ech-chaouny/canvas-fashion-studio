import { axiforma } from "@/fonts";
import "./globals.css";

export const metadata = {
  title: "Canvas Studio",
  description: "Canvas Fashion Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={axiforma.className}>{children}</body>
    </html>
  );
}
