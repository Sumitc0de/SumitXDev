import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuantumCursor from "@/components/ui/QuantumCursor";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-white antialiased">
        <QuantumCursor />
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}