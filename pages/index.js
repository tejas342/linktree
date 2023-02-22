import Head from "next/head";
import About from "../components/About";
import Background from "../components/Background";
import Header from "../components/Header";
import Links from "../components/Links";
import Spotify from "../components/Spotify";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-8 ">
      <Head>
        <title>7 RAJ AIR SQN | Linktree </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="7 RAJ AIR SQN | Linktree | Air Squadron of Kota Group"
        />
      </Head>
      <Background />
      <Header />
      <About />
      {/* <Spotify /> */}
      <Links />
      <footer className="py-8 text-lg">
        &lt;/&gt; by {" "}
        <a
          href="https://www.instagram.com/_te_jas_/"
          className="text-blue-600 font-bold"
          target={"blank"}
        >
          {" "}
          Tejas Prajapati{" "}
        </a>
      </footer>
    </div>
  );
}
