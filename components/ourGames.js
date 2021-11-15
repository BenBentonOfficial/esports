import GameCard from "../components/gameCard";
import Link from "next/link";

export default function OurGames() {
  return (
    <div className="lg:p-20 m-4">
      <h1 className="text-6xl font-bold pb-4 sm:text-center md:text-left">
        Our{" "}
        <Link href="/info">
          <a className="text-blue-600 hover:text-blue-700">Games</a>
        </Link>
      </h1>
      <div className="grid lg:grid-cols-4 lg:gap-8 grid-cols-2 gap-8">
        <GameCard
          imgURL="images/rocket.jpg"
          title="Rocket League"
          subTitle="3v3"
        />
        <GameCard
          imgURL="images/overwatch.png"
          title="Overwatch"
          subTitle="6v6"
        />
        <GameCard
          imgURL="images/league.jpg"
          title="League of Legends"
          subTitle="5v5"
        />
        <GameCard imgURL="images/smash.jpg" title="Smash Bros" subTitle="1v1" />
      </div>
    </div>
  );
}
