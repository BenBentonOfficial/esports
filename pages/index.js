import Head from "next/head";
import Carousel from "../components/carousel";
import GameCard from "../components/gameCard";
import Landing from "../components/landing";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>BCTAL Esports</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Landing />

      <div className=" 2xl:mx-2 mx-44">
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-1">
      <GameCard imgURL="images/rocket.jpg" title="Rocket League" subTitle="3v3"/>
      <GameCard imgURL="images/overwatch.png" title="Overwatch" subTitle="6v6"/>
      <GameCard imgURL="images/league.jpg" title="League of Legends" subTitle="5v5"/>
      <GameCard imgURL="images/smash.jpg"title="Smash Bros" subTitle="1v1"/>
      </div>
      </div>
      <div className="flex w-full justify-center">
        <Carousel />
      </div>
      
      <footer className="flex flex-col text-xs items-center justify-center w-full h-24">
        <p>Created by Benjamin Benton </p>
        <p>Copyright 2021</p>
      </footer>
    </>
  );
}
