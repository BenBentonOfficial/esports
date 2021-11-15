import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import PlayerCard from "../components/playerCard";

export default function Teams() {
  return (
    <>
      <Navbar />
      <h1 className="text-center text-5xl pb-4">Overwatch</h1>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        <PlayerCard
          name="Benjamin Benton"
          grade="Sophomore"
          playerTag="Hexxus"
          position="Coach"
          imgURL="/images/ben_pfp.png"
        />
        <PlayerCard
          name="James Allen"
          grade="Junior"
          playerTag="DragonMeister40"
          position="GM - Tank/Support"
          imgURL="/images/ben_pfp.png"
        />
        <PlayerCard
          name="Cole Cassidy"
          grade="Senior"
          playerTag="Thundercrash McGee"
          position="DPS"
          imgURL="/images/ben_pfp.png"
        />
        <PlayerCard
          name="Dexter Bailey"
          grade="Senior"
          playerTag="DVA-Main"
          position="Support"
          imgURL="/images/ben_pfp.png"
        />
        <PlayerCard
          name="Chadious McThadious"
          grade="Master"
          playerTag="Hexxus"
          position="Tank/DPS"
          imgURL="/images/ben_pfp.png"
        />
        <PlayerCard
          name="Last Guy"
          grade="Master"
          playerTag="Hexxus"
          position="DPS/Support"
          imgURL="/images/ben_pfp.png"
        />
      </div>
      <h1 className="text-center text-5xl pt-12 pb-4">Rocket League Varsity</h1>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        <PlayerCard
          name="Benjamin Benton"
          grade="Sophomore"
          playerTag="Hexxus"
          position="Coach"
          imgURL="/images/ben_pfp.png"
        />
        <PlayerCard
          name="James Allen"
          grade="Junior"
          playerTag="DragonMeister40"
          position="GM - Tank/Support"
          imgURL="/images/ben_pfp.png"
        />
        <PlayerCard
          name="Cole Cassidy"
          grade="Senior"
          playerTag="Thundercrash McGee"
          position="DPS"
          imgURL="/images/ben_pfp.png"
        />
      </div>
      <h1 className="text-center text-5xl pt-12 pb-4">
        Rocket League J-Varsity
      </h1>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        <PlayerCard
          name="Dexter Bailey"
          grade="Senior"
          playerTag="DVA-Main"
          position="Support"
          imgURL="/images/ben_pfp.png"
        />
        <PlayerCard
          name="Chadious McThadious"
          grade="Master"
          playerTag="Hexxus"
          position="Tank/DPS"
          imgURL="/images/ben_pfp.png"
        />
        <PlayerCard
          name="Last Guy"
          grade="Master"
          playerTag="Hexxus"
          position="DPS/Support"
          imgURL="/images/ben_pfp.png"
        />
      </div>
      <Footer />
    </>
  );
}
