import { useEffect, useState } from "react";
import "./App.css";
import axios, { Axios } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const key = "51f58e3e3ac807a2e9c56df7ee680833";

function App() {
  const [city, setcity] = useState("");
  const [data, setdata] = useState();
  const fetchdata = async (e) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      );
      console.log(response.data);
      setdata(response.data);
    } catch (error) {
      toast.error("Please Enter City Name");
    }
  };
  const getinput = (e) => {
    setcity(e.target.value);
  };
  return (
    <div className=" container">
      <ToastContainer />
      <h1 className="text-center my-5">Whether App</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <input
                type="text"
                className="form-control"
                value={city}
                onChange={getinput}
              />
            </div>
            <div className="col-md-2">
              <button className="btn btn-success" onClick={fetchdata}>
                Fetch
              </button>
            </div>
            <div className="col-md-8">
            {
         data && (
          <div className="card p-5 my-4">
               <h3 className="text-center">{data.name}, {data.sys.country}</h3>
               <div>
               <strong>Temp : </strong>{Math.round(data.main.temp)} C
               </div>
               <div>
               <strong>Lattitude : {data.coord.lat} </strong>
               </div>
               <div>
               <strong>Langitude : {data.coord.lon} </strong>
               </div>
          </div>
        )
      }
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default App;
