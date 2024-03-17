import { AppProps } from "next/app";
import Layout from "@/components/Layout";
import youtubeImg from "@/public/youtube.png";

import "@/styles/globals.scss";
import Image from "next/image";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <main>
      <Component {...pageProps} />
    </main>
    <Image
      src={youtubeImg}
      width={500}
      height={350}
      alt="preview"
      placeholder="blur"
    />
  </Layout>
);

export default MyApp;
