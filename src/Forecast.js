

// export default function Forecast(props){

//     function maxTemp(){
//         let maxTemp = Math.round(props.data.temp.min)
//         return `${maxTemp}`
//     }

//     function minTemp(){
//     let minTemp = Math.round(props.data.temp.min)
//     return ` ${minTemp}`
//     }


//     function day(){
//         let date = new Date(props.data.dt * 1000)
//         let day = date.getDay()

//         let days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri','sat']

//         return days[day]
//     }


//     return(


//         <div>
//             <h4> {day()}</h4>

//             <p> {minTemp()}</p>

//             <p>{maxTemp()}</p>
//         </div>
//     )
// }
