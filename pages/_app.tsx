import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import MainLayout from "@/layout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      {router.pathname == "/login" ? (
        <Component {...pageProps} />
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </>
  );
}
