import React, { useEffect, useState } from "react";
import "./Countries.css";
import image from "../../logo.svg";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        console.log("data", data);
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="container">
      {countries?.map((item) => {
        return (
          <div className="card-container">
            <img src={item?.flags?.svg} alt="countryImage" className="image" />
            <p className="para">{item?.name?.common}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
