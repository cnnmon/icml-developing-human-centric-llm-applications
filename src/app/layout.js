import { Lora } from "next/font/google";
import "./globals.css";

const font = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "ICML Workshop on Developing Human-centric LLM Applications",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
