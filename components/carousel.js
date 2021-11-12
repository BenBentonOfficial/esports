export default function Carousel() {
  return (
    <>
      <div class="carousel rounded-box h-80 w-110 lg:mx-40 mx-8 ">
        <div className="carousel-item">
          <img className="image-full" src="images/trophy.jpeg"></img>
        </div>
        <div className="carousel-item">
          <img src="images/comp-team.jpeg"></img>
        </div>
        <div className="carousel-item">
          <img src="images/comp-team-2.jpeg"></img>
        </div>
      </div>
    </>
  );
}
