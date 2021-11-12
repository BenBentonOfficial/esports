export default function Carousel() {
  return (
    <>
      <div class="carousel rounded-box lg:mx-40 mx-8 h-full w-full">
        <div className="carousel-item h-full w-full">
          <img className="object-contain" src="images/trophy.jpeg"></img>
        </div>
        <div className="carousel-item h-full w-full">
          <img className="object-contain" src="images/comp-team.jpeg"></img>
        </div>
        <div className="carousel-item h-full w-full">
          <img className="object-contain" src="images/comp-team-2.jpeg"></img>
        </div>
      </div>
    </>
  );
}
