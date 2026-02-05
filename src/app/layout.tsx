import "./globals.scss";
import Header from "@/components/Header/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container" style={{ paddingTop: 24, paddingBottom: 48 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
