export default function Carousel() {
  return (
    <>
      <div class="carousel rounded-box lg:mx-40 mx-8">
        <div className="carousel-item h-auto w-full lg:w-4/5 xl:w-2/5">
          <img className="object-contain" src="images/trophy.jpeg"></img>
        </div>
        <div className="carousel-item h-auto w-full lg:w-4/5 xl:w-2/5">
          <img className="object-contain" src="images/comp-team.jpeg"></img>
        </div>
        <div className="carousel-item h-auto w-full lg:w-4/5 xl:w-2/5">
          <img className="object-contain" src="images/comp-team-2.jpeg"></img>
        </div>
      </div>
    </>
  );
}
