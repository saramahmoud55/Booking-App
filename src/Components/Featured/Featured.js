import "./Featured.css"

export default function Featured() {
    const Countries = [
        {
            id: '1',
            name: "Dublin",
            property: '123 properties',
            imgAlt: 'Dublin_photo',
            image: require( "../../assets/dublin.jpg" )
        },
        {
            id: '2',
            name: "Austin",
            property: '632 properties',
            imgAlt: 'Austin_photo',
            image: require("../../assets/austin.jpg")
        },
        {
            id: '3',
            name: "Reno",
            property: '544 properties',
            imgAlt: 'Reno_photo',
            image: require("../../assets/reno.jpg")

        }
    ]
  return (
    <div className="featured">
        {Countries.map((countrey,id)=>(

        <div className="featuredItem" key={id}>
            <img src={countrey.image} alt={countrey.imgAlt} className="featuredImg"/>
            <div className="featuredTitles">
                <h1>{countrey.name}</h1>
                <h2>{countrey.property}</h2>
            </div>
        </div>
        ))}
        
    </div>
  )
}
