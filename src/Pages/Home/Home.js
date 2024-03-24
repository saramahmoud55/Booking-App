import Featured from '../../Components/Featured/Featured'
import FeaturedProperties from '../../Components/FeaturedProperties/FeaturedProperties'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import MailList from '../../Components/Mail.list/MailList'
import Navbar from '../../Components/Navbar/Navbar'
import PropertyList from '../../Components/PropertyList/PropertyList'
import './Home.css'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className='homeContainer'>
                <Featured/>
                <h1 className='homeTitle'>Browse by property type</h1>
                <PropertyList/>
                <h1 className='homeTitle'>Home guests love</h1>
                <FeaturedProperties/>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}
