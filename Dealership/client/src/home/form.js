import "./form.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Form = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
  });
  const setdata = (e) => {
    const { name, value } = e.target;

    setInputValue((newInput) => {
      return {
        ...newInput,
        [name]: value,
      };
    });
  };

  const addData = async (e) => {
    e.preventDefault();
    const { email } = inputValue;
    const res = await fetch("/reg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const data = await res.json();

    if (res.status === 404 || !data) {
      alert("error");
      console.log("error");
    } else {
      alert("data added");
      console.log("data added");
    }
  };
  return (
    <main className="formBody">
      <div className="form">
        <h2>notify me of new updates</h2>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          value={inputValue.email}
          onChange={setdata}
          name="email"
          className="form-control"
          id="email"
        />
        <div>
          <button type="submit" onClick={addData} className="btn btn-primary">
            Notify Me
          </button>
        </div>
      </div>
    </main>
  );
};
export default Form;
