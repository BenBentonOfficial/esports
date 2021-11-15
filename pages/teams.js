import Carousel from "../components/carousel";
import Navbar from "../components/navbar";
import PlayerCard from "../components/playerCard";

export default function Teams() {
  return (
    <>
      <Navbar />
      <h1>Overwatch</h1>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
      <PlayerCard name="Benjamin Benton" grade="Master" playerTag="Hexxus" position="Coach" imgURL="/images/ben_pfp.png"/>
      <PlayerCard name="Benjamin Benton" grade="Master" playerTag="Hexxus" position="Coach" imgURL="/images/ben_pfp.png"/>
      <PlayerCard name="Benjamin Benton" grade="Master" playerTag="Hexxus" position="Coach" imgURL="/images/ben_pfp.png"/>
      <PlayerCard name="Benjamin Benton" grade="Master" playerTag="Hexxus" position="Coach" imgURL="/images/ben_pfp.png"/>
      <PlayerCard name="Benjamin Benton" grade="Master" playerTag="Hexxus" position="Coach" imgURL="/images/ben_pfp.png"/>
      <PlayerCard name="Benjamin Benton" grade="Master" playerTag="Hexxus" position="Coach" imgURL="/images/ben_pfp.png"/>
      </div>
    </>
  );
}
