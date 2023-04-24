import type { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "@comp/UI/Navbar/Navbar";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
};

export default App;
