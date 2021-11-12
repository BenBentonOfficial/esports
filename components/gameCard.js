import Link from 'next/link'

export default function GameCard(props){
  return (
    <><Link href="/info">
    <div className="card m-8 image-full hover:opacity-60 z-0">
      <figure>
        <img src={props.imgURL}></img>
      </figure>
      <div className="justify-end card-body items-start">
        <h2 className="card-title text-7xl xl:text-4xl ">{props.title}</h2>
        <p className="text-lg italic">{props.subTitle}</p>
      </div>
    </div>
    </Link>
    </>
  )
}