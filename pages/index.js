import Head from "next/head";
import App from "../core/views/App";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Woodle Clone</title>
        <meta name="description" content="Woodle clone with bootstrap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <App />
    </div>
  );
}
