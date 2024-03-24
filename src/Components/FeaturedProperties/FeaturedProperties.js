import './FeaturedProperties.css'

export default function FeaturedProperties() {
    const cites = [
        {
            id: '1',
            city: "Prague",
            name: '3 Epoques',
            price: '502$',
            ratePercent: '9.0',
            rate: 'Wonderful',
            image: require('../../assets/prague.jpg')

        },
        {
            id: '2',
            city: "Rio de janeiro",
            name: 'Suger Loft Apartments',
            price: '333$',
            ratePercent: '9.1',
            rate: 'Wonderful',
            image: require('../../assets/riodejaniro.jpg')

        },
        {
            id: '3',
            city: "Rome",
            name: 'Appartamento Benincampi',
            price: '1,413 $',
            ratePercent: '9.7',
            rate: 'Exceptional',
            image: require('../../assets/rome room.jpg')

        },
        {
            id: '4',
            city: "Budapest",
            name: 'Terrace Apartments at City Park ',
            price: '1,710 $',
            ratePercent: '9.6',
            rate: 'Excellent',
            image: require('../../assets/budapest.jpg')

        }
    ]
    return (
        <div className='featuredProperties'>
            {cites.map((city, id) => (
                <div className='featuredPropertiestem' key={id}>
                    <img src={city.image} alt={city.city} className='featuredPropertiesImg' />
                    <span className='featuredPropertiesName'>{city.name}</span>
                    <span className='featuredPropertiesCity'>{city.city}</span>
                    <span className='featuredPropertiesPrice'>Starting from {city.price}</span>
                    <div className='featuredPropertiesRating'>
                        <button>{city.ratePercent}</button>
                        <span>{city.rate}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
