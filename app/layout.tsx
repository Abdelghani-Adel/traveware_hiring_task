import type { Metadata } from "next";
import AppProviders from "./_provider/AppProviders";
import MainHeader from "./_components/MainHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            theme="light"
            stacked={true}
          />
        </body>
      </AppProviders>
    </html>
  );
}
