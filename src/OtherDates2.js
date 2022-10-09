import React from "react";

export default function OtherDates2({resApi}) {



    return (
        <div style={divStyle}>
            <div style={pStyle}>
                <img style={imgStyle} src="https://cdn.icon-icons.com/icons2/571/PNG/512/wind-weather-lines-group-symbol_icon-icons.com_54629.png" />
                <span style={spanStyle}>Feels Like</span>
                <span style={porcentaje}>{Math.round(resApi.main.feels_like) + 'º'}</span>
            </div>
            <div style={pStyle}>
                <img style={imgStyle} src="https://cdn.icon-icons.com/icons2/3406/PNG/512/humidity_icon_216457.png" />
                <span style={spanStyle}>Humidity</span>
                <span style={porcentaje}>{resApi.main.humidity + "%"}</span>
            </div>
            <div style={pStyle}>
                <img style={imgStyle} src="https://cdn.icon-icons.com/icons2/38/PNG/512/pressure_4667.png" />
                <span style={spanStyle}>Pressure</span>
                <span style={porcentaje}>{resApi.main.pressure}</span>
            </div>
            <div style={pStyle}>
                <img style={imgStyle} src="https://cdn.icon-icons.com/icons2/565/PNG/512/turbine-wind_icon-icons.com_54230.png" />
                <span style={spanStyle}>Wind Speed</span>
                <span style={porcentaje}>{resApi.wind.speed}</span>
            </div>
        </div>
    )
}

const divStyle = {
    width: '280px',
}

const pStyle = {
    display: 'flex',
    marginTop: '12px',
    alignItems: 'center',
    color: '#d9d9d9',
    fontWeight: 'bold',
}

const spanStyle = {
    fontSize: '18px',
    fontFamily: 'monospace',
    paddingLeft: '10px',
}

const imgStyle = {
    width: '25px',
    height: '25px',
}

const porcentaje = {
    margin: '0 0 0 auto',
    paddingRight: '10px',
}