import react from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Template() {
  const [Cite, setCite] = useState(null);
  const [Search, setSerach] = useState();
  const [list, setList] = useState();

  const getData = () => {
    // const api = `https://openweathermap.org/weather-conditions`;
    const api =
      "http://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=70eefff73d1dfcf0e9ca4bfb45c3c9d2";
    axios.get(api).then((res) => {
      setList(res.data);
    });
  };
  console.log(list);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="parent">
      <div className="">
        <div className="child">
          {/* <div>
          <h2>{Cite}</h2>
          <h3>min : 5.25,cel ! max : 5,25,cel</h3>
        </div> */}

          {list ? (
            <div className="call">
              <img
                src={`https://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png`}
                alt=""
              />
              <h4 className="text">
                {list.weather[0].description.toUpperCase()}
              </h4>
              <h4>{list?.name ?? null}</h4>
              <h2>{list.main.humidity}</h2>
              <h1>{Math.round(list.main.temp - 273.15)}°C</h1>
              <div>
                <h2>{Cite}</h2>
                <h3>
                  min:{Math.round(list.main.temp_min - 301.25)}°C | max:{" "}
                  {Math.round(list.main.temp_max - 301.25)}°C
                </h3>
                <h3></h3>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
