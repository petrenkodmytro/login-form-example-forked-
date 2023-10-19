import { Inter } from "next/font/google";

import { cn } from "@/utilities/cn";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Next App",
  description: "",
};

type Props = React.PropsWithChildren<{}>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen flex flex-col", inter.variable)}>
        {children}
      </body>
    </html>
  );
}
