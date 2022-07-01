import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Icon from "../Images/Icon.png"
import Header from './common/Header';
import { useParams } from 'react-router'

function Details() {
  const { code } = useParams();

  const [singledata, setSingledata] = useState({});


  
//   setTimeout(() => {

//     for(var key in data) {
              
//       console.log(key, data[key])
//     }
  
// }, 1000);
  // console.log(data)
  useEffect(() => {
    axios.get(`https://inovat-api.herokuapp.com/foodData?code=${code}`).then(res => setSingledata(res.data[0]))
    
  }, [])
  
return (
  <div>      
    <Header/>

    <div className='details'>           
      <div className='prod_name'>
        <img src={Icon} alt="not found" className='iconimgg' />          
        <h3 className='prodalign'>{singledata.product_name}</h3>          
      </div>
      
      <table>  
        <tbody>
          {Object.keys(singledata).map((key, index) => {

            return (
              <tr key={index}>                  
                <td>{key}</td>
                <td>{singledata[key]}</td>                  
              </tr>                         
            )              
          })}           
         

        </tbody>          
      </table>
        
    </div>     
  </div>

  )

}


export default Details
