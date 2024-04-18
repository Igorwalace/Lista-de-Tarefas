import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const inter = Outfit({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: 'Lista de Tarefas',
  description: "WebSite de lista de tarefas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href='/icon.png' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
