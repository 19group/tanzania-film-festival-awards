import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const year = "2025"; 

  return (
    <html lang={lang}>
      <body className="bg-white text-black">
        <Header lang={lang} year={year} />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
