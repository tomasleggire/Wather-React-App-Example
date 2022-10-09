import React, { useEffect } from "react";
import Loading from "./Loading";
import Error from "./Error";
import WeatherApp from "./WeatherApp";

function App() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [resApi, setResApi] = React.useState(null);
  const [error, setError] = React.useState(false);

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=-34.60&lon=-58.43&appid=82ba7e681789f0bac388a129ec9847b8&units=metric")
      .then((response) => response.json())
      .then((clima) => {
        setResApi(clima);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(true)
      })
  }, []);

  console.log(resApi);

  if (error) {
    return (
      <Error />
    )
  }

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <WeatherApp resApi={resApi}/>
  )
  
}

export default App;


//82ba7e681789f0bac388a129ec9847b8