import React from "react";

export default function Error() {

    return (
        <div style={divStyle}>
          <img style={imgStyle} src="https://cdn-icons-png.flaticon.com/512/1254/1254938.png?w=740&t=st=1665285140~exp=1665285740~hmac=b0baa668e9ab1e427458a73e78ff7941ddb2d71925d838e9b541dc36ec461f68"/>
          <h2 style={h2Style}>Ocurrio un error...</h2>
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

const imgStyle = {
    width: '150px',
    height: '150px'
}