import { I18nProvider } from "./client";

export default function RootLayout({
  children,
  slot,
}: Readonly<{
  children: React.ReactNode;
  slot: React.ReactNode;
}>) {
  return (
    <I18nProvider locale="en">
      <html lang="en">
        <body>
          {children}
          {slot}
        </body>
      </html>
    </I18nProvider>
  );
}
