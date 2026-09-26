import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Mesa Secreta | Restaurante campestre en Rionegro",
  description:
    "Cocina campestre de autor, cenas con reserva y atardeceres en el oriente antioqueño.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
