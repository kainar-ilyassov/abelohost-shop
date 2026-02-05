import "./globals.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="container" style={{ paddingTop: 24, paddingBottom: 48 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
