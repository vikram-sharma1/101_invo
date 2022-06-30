import React, { useEffect, useState } from 'react'
import axios from 'axios';
import icon from "../Images/Icon.png"
import { useNavigate } from 'react-router';
import Header from './common/Header';

export default function Homepage() {

  const [data, setData] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/foodData").then((res) => {
      setData(res.data) 
    })
  }, [])

  return (

    <div>
      <Header/>

      <div className='lists'>
        <div className='lft'>Food List</div>
        <div className='rit'>Favourites</div>
      </div>

      <div className='proodetails'>
      {data.map((el) => (<div onClick={(() => navigate(`/${el.code}`))}
        className= "dataMapping"
        key={el.code}>
        <img src={icon} alt="not found" className='iconimgmail'/>
        <div className='linedraw'><h3>{el.product_name} ({el.generic_name})</h3></div>
        
      </div>))}
        
      </div>
    </div>
  )
}
