import Head from "next/head";
import Link from "next/link";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Landing from "../components/landing";
import Navbar from "../components/navbar";
import OurGames from "../components/ourGames";

export default function Home() {
  return (
    <>
      <Head>
        <title>BCTAL Esports</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Landing />
      <OurGames />
      
      <div className="mt-44 ">
      <h1 className="text-6xl font-bold pb-4 lg:mx-40 mx-4 sm:text-center md:text-left">
        Our{" "}
        <Link href="/">
          <a className="text-blue-600 hover:text-blue-700">Memories</a>
        </Link>
      </h1>
        <Carousel />
      </div>

      <Footer />
    </>
  );
}
