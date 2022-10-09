import React from "react";
import OtherDates from "./OtherDates";
import OtherDates2 from "./OtherDates2";

export default function WeatherApp({resApi}) {

    const [img, setImg] = React.useState("https://cdn-icons-png.flaticon.com/512/1146/1146869.png");

    return (
        <div style={divStyle}>
            <h1 style={h1Style}>Buenos Aires</h1>
            <img style={imgStyle} src={img} />
            <h2 style={h2Style}>{Math.round(resApi.main.temp) + "º"}</h2>
            <p style={pStyle}>
                <span>{Math.round(resApi.main.temp_min) + "º"}</span>/<span>{Math.round(resApi.main.temp_max) + "º"}</span>
            </p>

            <OtherDates resApi={resApi}/>

            <OtherDates2 resApi={resApi}/>

        </div>
    )
}


const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-10px',
}

const h1Style = {
    color: '#FFF',
    textAlign: 'center',
    
}

const imgStyle = {
    height: '220px',
    width: '220px',
}

const h2Style = {
    color: '#FFF',
    textAlign: 'center',
    fontSize: '62px',
}

const pStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#CCC',
}
