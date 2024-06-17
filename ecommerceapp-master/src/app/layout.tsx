"use client";

import "@/styles/global.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar/page";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.5.2/css/all.css"
        />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" /> */}

      </head>
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ToastContainer theme="dark" autoClose={2000} closeOnClick />
            <Navbar />
            {children}
            <Footer />
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
