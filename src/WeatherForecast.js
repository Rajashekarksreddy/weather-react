// import { useState, useEffect } from "react"
// import Forecast from "./Forecast"
// import axios from "axios"

// export default function WeatherForecast(props){
//     const [ready, setReady] = useState(false)
//     const [forecast, setForecast] = useState(null)


//      useEffect(() => {
//         setReady(false)

//      }, [props.coord])



//     function handleResponse(response){
//         setForecast(response.data.daily)

//         setReady(true)
//     }
   
  
//      return(
//     <div>
//     <h3> weekly forecast</h3>
//        {/* {forecast.map(function(dailyForecast, index){
//         if(index < 6){
//             return (
//                 <div key={index}>
//                  <Forecast data = {dailyForecast}/>
//                 </div>
//             )
//         }else {
//             return null
//         }

//        })} */}
//      </div>
//     )
// }