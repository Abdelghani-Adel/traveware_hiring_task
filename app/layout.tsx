import type { Metadata } from "next";
import AppProviders from "./_provider/AppProviders";
import MainHeader from "./_components/MainHeader/MainHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingScreen from "./_components/loadingScreen/LoadingScreen";

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
          <LoadingScreen />
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
