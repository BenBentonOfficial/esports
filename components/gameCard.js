import Link from 'next/link'

export default function GameCard(props){
  return (
    <><Link href="/info">
    <div className="card image-full hover:opacity-60 z-0">
      <figure>
        <img className="" src={props.imgURL}></img>
      </figure>
      <div className="justify-end card-body items-start">
        <h2 className="card-title xl:text-4xl md:text-2xl sm:text-base ">{props.title}</h2>
        <p className="text-lg italic">{props.subTitle}</p>
      </div>
    </div>
    </Link>
    </>
  )
}