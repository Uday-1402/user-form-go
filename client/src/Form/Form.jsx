import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      firstname: firstName,
      lastname: lastName,
      age: age,
      city: city,
      state: state,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };

    const res = await axios.post("http://localhost:4000/", userData, config);

    console.log(res);
    navigate("/form-submitted");
  };

  return (
    <>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          required={true}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          required={true}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          required={true}
        />
        <input
          type="text"
          placeholder="City"
          onChange={(e) => {
            setCity(e.target.value);
          }}
          required={true}
        />
        <input
          type="text"
          placeholder="State"
          onChange={(e) => {
            setState(e.target.value);
          }}
          required={true}
        />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
