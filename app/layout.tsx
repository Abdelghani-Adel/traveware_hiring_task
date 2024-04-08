import type { Metadata } from "next";
import AppProviders from "./_provider/AppProviders";
import MainHeader from "./_components/MainHeader";

export const metadata: Metadata = {
  title: "TraveWare Task",
  description: "Abdelghani Adel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppProviders>
        <body>
          <MainHeader />
          {children}
        </body>
      </AppProviders>
    </html>
  );
}
