import Link from 'next/link'

export default function PlayerCard(props){
  return (
    <>
      <div className="card text-center shadow-2xl sm:text-sm">
        <figure className="px-10 pt-10" >
          <img src={props.imgURL} className="object-center object-cover rounded-full"></img>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p>{props.playerTag}</p>
          <p>{props.position}</p>
          <p>{props.grade}</p>
        </div>
      </div>
    </>
  )
}