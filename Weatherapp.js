import React,{useEffect, useState}from "react";
import "./Weather.css"
const WeatherApp = () =>{
    const [state, setstate] = useState(null)
    const [search,setSearch]=useState("Mumbai");
    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8099703be286a8095616bce27712089b`;
            const respone=await fetch(url);
            const resjson=await respone.json();
            setstate(resjson.main);
            // const val={temp};
            // val=5*(val-32)/9;
        }
        fetchApi();
    },[search])
    return(
        <>
          <div className="box">
            <div className="inputData">
                <input type="search" className="inputfield" onChange={(event)=>{setSearch(event.target.value)

                }}></input>
            </div>
            {!state? (
                <p>No data found</p>
            ):(
                <div>
            <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view"></i>{search}</h2>
            <h4>Current time {new Date().toLocaleTimeString()}</h4>
            <h1 className="weather">{Math.floor(state.temp-273)}<sup>o</sup></h1>
            <h3 className="weathermin_max"></h3>
            <div className="wave"></div>
            <div className="wave-two"></div>
            <div className="wave-three"></div>
            </div>
            </div>
            )}
            </div>
         </>
    );
    }
    export default WeatherApp;