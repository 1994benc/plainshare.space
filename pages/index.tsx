import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
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
          <p className="my-10 text-4xl leading-relaxed font-medium">
            Share plain content with the world, or use your own branding.
          </p>
          <Link href="/boards">
            <a>
              <button className="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                  />
                </svg>
                <span>Content boards</span>
              </button>
            </a>
          </Link>
        </>
      </MainLayout>
    </div>
  );
};

export default Home;
