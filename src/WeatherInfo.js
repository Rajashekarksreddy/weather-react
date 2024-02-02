export default function WeatherInfo(props){
    return(
        <div>
            <h1 className=" city">{props.data.city}</h1>
            <ul>
                <li> temperature: {props.data.temperature} </li>

                <br/>

                <li> description: {props.data.description}</li>
            </ul>


            <ul>
                <li> visibility: {props.data.visibility} </li>
                <li> humidity: {props.data.humidity} %</li>
                <li> windSpeed: {props.data.wind}mph</li>
                <li> Feels Like : {props.data.feelsLike} celsius</li>
            </ul>
        </div>
    )
}