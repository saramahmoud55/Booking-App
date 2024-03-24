import './PropertyList.css'

export default function PropertyList() {
    const places =[
        {
            id:'1',
            name:"Hotels",
            description:'233 Hotel',
            image: require('../../assets/hotels.jpg')
            
        },
        {
            id:'2',
            name:"Apartment",
            description:'602 Apartment',
            image: require('../../assets/apartment.jpg')
            
        },
        {
            id:'3',
            name:"Resorts",
            description:'233 Resort',
            image: require('../../assets/resorts.jpg')
            
        },
        {
            id:'4',
            name:"Villas",
            description:'210 Villas',
            image: require('../../assets/villa.jpg') 
        },
        {
            id:'5',
            name:"Cabins",
            description:'500 Cabins',
            image: require( '../../assets/cabin.jpg') 
        }
    ]
    return (
        <div className='PropertyList'>
         {places.map((place,id)=>(
            <div className='PropertyListItem' key={id}>
                <img src={place.image} alt={place.name} className='PropertyListImg'/>
                <div className="PropertyListItemTitles">
                    <h1>{place.name}</h1>
                    <h2>{place.description}</h2>
                </div>
            </div>
         ))}
            
        </div>
    )
}
