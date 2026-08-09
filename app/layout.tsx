import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Montserrat covers both display and interface type per the brief —
// weights span the light hero display down to the utility 500 used
// in nav/labels.
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jumana Motorwala — Product Designer",
  description:
    "Portfolio of Jumana Motorwala, Senior Product Designer specializing in UX/UI.", // TODO: confirm final positioning line with Jumana
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        {/* Skip link — first focusable element, visually hidden until focused */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-lime focus:px-4 focus:py-2 focus:text-navy focus:font-semibold"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
