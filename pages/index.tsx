import type { NextPage } from "next";
import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import BigHeader from "../components/texts/BigHeader";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PlainShare - share plain content with the world</title>
        <meta name="description" content="Share plain content with the world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <>
          <BigHeader>Welcome to PlainShare.Space</BigHeader>
          <p className="my-10 text-3xl">Share plain content with the world, or use your own branding.</p>
        </>
      </MainLayout>
    </div>
  );
};

export default Home;
