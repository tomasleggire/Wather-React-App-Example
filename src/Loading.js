import React from "react";
import ReactLoading from 'react-loading';


export default function Loading() {
    return (
      <div style={divStyle}>
        <ReactLoading type="spin" color="#8eacee" height={150} width={150}/>
        <h2 style={h2Style}>Loading...</h2>
      </div>
    )
}

const divStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}

const h2Style = {
  color: '#DDD',
  textAlign: 'center',
  marginTop: '20px',
  fontFamily: 'monospace'
}