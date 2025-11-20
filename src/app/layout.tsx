// Path: src/app/layout.tsx
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "TAFFA - Tanzania Film Festival & Awards",
  description: "TAFFA celebrates Tanzanian cinema — festival screenings, workshops and awards.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // default lang passed to header; pages can override if needed
  const lang = "en";
  const year = "2025";

  return (
    <html lang={lang}>
      <body className="bg-white text-black">
        <Header lang={lang} year={year} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
