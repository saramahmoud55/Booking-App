import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import {useNavigate} from 'react-router-dom';


export default function Header({type}) {

    const [destiation, setDestiation] = useState("");
    const [showDate, setShowDate] = useState(false);
    const [date, setDate] = useState([

        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });
    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, [name]: operation === "decrease" ? options[name] + 1 : options[name] - 1
            }
        })
    }
    const navigate = useNavigate();
        const handleSearch =()=>{
            navigate('/hotels',{state:{destiation,date,options}})
        }

    return (
        <div className='header'>
            <div className={type === "list"? "headerContainer listMode" : "headerContainer"}>
                <div className='headerList'>
                    <div className="headerListItem active" >
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== "list" && 
                <>
                <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
                <p className='headerDesc'>Get rewarded for your travels - unlock instant saving of 10% or more
                    with a free E7gezly account</p>
                <button className='headerBtn'>Sign in / Register </button>
                <div className='headerSearch'>
                    {/* Destiation option */}
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type='text' placeholder="where are you going?"
                         className="headerSearchInput" onChange={(e)=>setDestiation(e.target.value) } />
                    </div>
                    {/* Date option */}
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span onClick={() => setShowDate(!showDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `} </span>
                        {showDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date} className="date" minDate={new Date()}
                        />}
                    </div>
                    {/* person option */}
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult .${options.children} childern .${options.room} room`}</span>
                        {openOptions && <div className='options' >
                            <div className='optionItem'>
                                <span className='optionText'>Adult </span>
                                <div className='optionCounter'>
                                    <button className='optionCounterBtn' disabled={options.adult <= 1} onClick={() => handleOption("adult", "increase")}>-</button>
                                    <span className='optionCounterNumber'>{options.adult}</span>
                                    <button className='optionCounterBtn' onClick={() => handleOption("adult", "decrease")}>+</button>
                                </div>
                            </div>
                            <div className='optionItem'>
                                <span className='optionText'>Childern </span>
                                <div className='optionCounter'>
                                    <button className='optionCounterBtn' disabled={options.children <= 0} onClick={() => handleOption("children", "increase")}>-</button>
                                    <span className='optionCounterNumber'>{options.children}</span>
                                    <button className='optionCounterBtn' onClick={() => handleOption("children", "decrease")}>+</button>
                                </div>
                            </div>
                            <div className='optionItem'>
                                <span className='optionText'>Room </span>
                                <div className='optionCounter'>
                                    <button className='optionCounterBtn' disabled={options.room <= 1} onClick={() => handleOption("room", "increase")}>-</button>
                                    <span className='optionCounterNumber'>{options.room}</span>
                                    <button className='optionCounterBtn' onClick={() => handleOption("room", "decrease")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    {/* Search Button */}
                    <div className='headerSearchItem'>
                        <button className='headerBtn' onClick={handleSearch}>Search</button>
                    </div>
                </div>
                </>
                }
            </div>
        </div>
    )
}
