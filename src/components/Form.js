import React, { useState } from 'react';

const Form = ({newLocation}) => {
  const [city, setCity] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ city });
    if (city === "" || !city) return;
    newLocation(city);
  }

  return (
    <div className="form-container">
      <form onSubmit={onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Ciudad"
          style={{
            backgroundColor: "white",
            color: "black",
            '::placeholder': { color: 'white' },
          }}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-dark" type="submit" style={{ marginLeft: "10px" }}>
          Buscar
        </button>
      </form>
    </div>
  );
  
}

export default Form;
