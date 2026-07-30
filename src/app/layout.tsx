import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BiMoji — Emoții pentru fiecare conversație",
  description:
    "BiMoji. O colecție delicată de stickere emoji pentru fiecare conversație.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
