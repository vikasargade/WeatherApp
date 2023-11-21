import { useState } from "react"

const App = () =>{
    const api ={
        key:"0ba2ae08f09ba84a81b8daec0ed68bc2",
        base:"https://api.openweathermap.org/data/2.5/"
    }

    const[search,setSearch] = useState(null) // or useState(" ")
    const[weather,setWeather] =useState({})
    function searchPress(){

        fetch(`${api.base}/weather?q=${search}&units=metric&APPID=${api.key}`)
        .then(res=>res.json())
        .then(data=>setWeather(data))
    }

    return(
        <div className="App">
            <h1>Enter City Name To Check Weather </h1>
            <input type="text" onChange={(e)=>setSearch(e.target.value)} />
            <button onClick={searchPress}>Search</button>
            {(typeof weather.main !=="undefined")?(
                <div>
                     
                    <p>Name Of City: <b>{weather.name}</b> </p>
                    <p> Temperature Of City: <b>{weather.main.temp}</b> </p>
                    <p>Weather: <b>{weather.weather[0].main}</b></p>
                    <p>Description Of Weather: <b>{weather.weather[0].description}</b> </p>
                </div>
            ):("Not Found")}
        </div>
    )
}

export default App