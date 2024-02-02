export default function WeatherInfo(props){

    
        let date = new Date(props.data.sunrise * 1000)
        let day = date.getDay()
        console.log(day)

    return(
        <div>
            <h1 className=" city">{props.data.city}</h1>
            <ul className=" list-none">
                <li> temperature: {props.data.temperature} </li>

                <br/>

                <li> description: {props.data.description}</li>
            </ul>


            <ul>
                <li> visibility: {props.data.visibility} </li>
                <li> humidity: {props.data.humidity} %</li>
                <li> windSpeed: {props.data.wind}mph</li>
                <li> Feels Like : {props.data.feelsLike} celsius</li>

                <li> lat: {props.data.coord}</li>

            </ul>
        </div>
    )
}