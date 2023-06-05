import React, { useState } from "react";
import { people } from "../data/data1";
import "./heroslide.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Heroslide = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <h1>
            {" "}
            <FaChevronLeft />
          </h1>
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <h1>
            {" "}
            <FaChevronRight />
          </h1>
        </button>
      </div>

      <h3>
        <a
          href="https://wa.link/859wj7"
          style={{ color: "white", textDecoration: "underline" }}
        >
          INQUIRE
        </a>
      </h3>
    </article>
  );
};

export default Heroslide;
