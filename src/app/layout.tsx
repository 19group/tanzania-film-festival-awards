// Path: src/app/layout.tsx
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "TAFFA - Tanzania Film Festival & Awards",
  description: "TAFFA celebrates Tanzanian cinema — festival screenings, workshops and awards.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  );
}
