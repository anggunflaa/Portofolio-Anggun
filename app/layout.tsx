import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Anggun | AI & Flutter Dev",
};

/* VIEWPORT: BIAR SKALA IKUT DEVICE */
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        {/* DESKTOP LOCK WRAPPER */}
        <div className="desktop-lock">
          {children}
        </div>
      </body>
    </html>
  );
}
