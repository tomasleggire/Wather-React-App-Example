import React from "react";

export default function OtherDates({resApi}) {


    return (
        <div style={divStyle}>
            <div style={div2Style}>
                <p style={pStyle}>Weather</p>
            </div>
            <div style={div2Style}>
                <p style={p2Style}>{resApi.weather[0].main.toUpperCase()}</p>
                <p style={p2Style}>{resApi.weather[0].description.toUpperCase()}</p>
            </div>
        </div>
    )
}

const divStyle = {
    width: '280px',
    height: '75px',
    backgroundColor: '#87cce6',
    marginTop: '10px',
    borderRadius: '20px',
}

const div2Style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0 15px',
}

const pStyle = {
    marginTop: '10px',
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#4f87d6',
    fontFamily: 'monospace',
}

const p2Style = {
    marginTop: '5px',
    fontWeight: 'bold',
    fontSize: '14px',
    color: '#656769',
    letterSpacing: '1px',
}

