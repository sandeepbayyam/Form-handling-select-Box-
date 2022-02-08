import React from "react";
import "./style.css";

export default function App() {
  var [country,setCountry]=React.useState(['India','Pakisthan','Australia','England','New zealand','Sri lanka','Bangladesh'])

  var [selectedCountry,setselectedCountry]=React.useState('')
  const handleselectedCountry =(e)=>{
    setselectedCountry(e.target.value)
  }
  return (
    <div>
      <h1>Form handling(select box)!</h1>
      Country: 
      <select onChange={handleselectedCountry}value={selectedCountry}>
         <option selected disabled value={''}>Please select your country
         </option>
         {
         country.map((country,index)=>{
              return(
                  <option value={country}>{country}</option>
              )
         })
        }
      </select>
      <h3>Selected Country : {selectedCountry}</h3>
    </div>
  );
}
