import './List.css'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../Components/SeachItem/SearchItem'

export default function List() {
  const location = useLocation()
  const [showDate, setShowDate] = useState(false);
  const [destiation, setDestiation] = useState(location.state.destiation);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='listTitle'>Search</h1>
            <div className='listItem'>
              <label>Check-in Date</label>
              <input placeholder={destiation} type='text' />
            </div>
            <div className='listItem'>
              <label>Destination</label>
              <span onClick={() => setShowDate(!showDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {showDate && (<DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                minDate={new Date()} ranges={date} className="date"
              />
              )}
            </div>
            <div className='listItem'>
              <label>Options</label>
              <div className='listOptions'>
                <div className='listOptionItem'>
                  <span className='isOptionText'>Min price <small>per night</small></span>
                  <input className='isOptionInput' type='number' />
                </div>
                <div className='listOptionItem'>
                  <span className='isOptionText'>Max price <small>per night</small></span>
                  <input className='isOptionInput' type='number' />
                </div>
                <div className='listOptionItem'>
                  <span className='isOptionText'>Adult</span>
                  <input className='isOptionInput' min={1} type='number' placeholder={options.adult} />
                </div>
                <div className='listOptionItem'>
                  <span className='isOptionText'>Childern</span>
                  <input className='isOptionInput' type='number' min={0} placeholder={options.children} />
                </div>
                <div className='listOptionItem'>
                  <span className='isOptionText'>Room</span>
                  <input className='isOptionInput' type='number' min={1} placeholder={options.room} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className='listResult'>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}
