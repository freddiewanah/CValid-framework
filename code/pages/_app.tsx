// Global styles
import "../styles/globals.css";
import "../styles/style.scss";
import "../styles/responsive.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import type { AppProps } from "next/app";
import Head from "next/head";
import GoTop from "../components/go-top";
import { AuthContext } from "../components/context/authContext";
import { useAuth } from "../components/hooks/useAuth";
import '../styles/flaticon.css';
import { GoogleAnalytics } from "nextjs-google-analytics";


function MyApp({ Component, pageProps }: AppProps) {
  const { user, login, logout, setUser } = useAuth();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>CValid -- next generation credentialing system</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>

      </Head>
      <GoogleAnalytics trackPageViews />
      <AuthContext.Provider value={{ user, setUser }}>
        <Component {...pageProps} />
      </AuthContext.Provider>

      {/* Go Top Button */}
      <GoTop />
    </>
  );
}

export default MyApp;
