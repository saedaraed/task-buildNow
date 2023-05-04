import React, { useState } from "react";
// import mobiscroll from '@mobiscroll/react';

import "./style.css";
import { Slider } from "@mui/material";
const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 10,
    label: "|",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 30,
    label: "|",
  },
  {
    value: 40,
    label: "40",
  },
  {
    value: 50,
    label: "|",
  },
  {
    value: 60,
    label: "60",
  },
  {
    value: 70,
    label: "|",
  },
  {
    value: 80,
    label: "80",
  },
  {
    value: 90,
    label: "|",
  },
  {
    value: 100,
    label: "100",
  },
  {
    value: 120,
    label: "120",
  },
  {
    value: 140,
    label: "140",
  },
  {
    value: 160,
    label: "160",
  },
  {
    value: 180,
    label: "180",
  },
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}
const Register = () => {
  const month = [
    "Janaury",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [payment, setPayment] = useState([100, 400]);
  return (
    <>
      <h1>Registration</h1>
      <form action="">
        <div className="sec-input">
          <label htmlFor="testNumber">Text/Number input</label>
          <input type="text" id="testNumber" placeholder="CR Number" />
        </div>
        <div className="sec-input">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" placeholder="phone number" />
        </div>
        <div className="sec-input">
          <label htmlFor="money">Money Input</label>
          <input
            type="text"
            id="money"
            placeholder="What is the estimated cost?"
          />
        </div>
        <div className="sec-input">
          <label htmlFor="slider">Slider</label>
          <div className="sec-slider"> 
            <p>Is there any payment delay?</p>
          <Slider
            aria-label="Restricted values"
            defaultValue={20}
            // valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            step={null}
            valueLabelDisplay="auto"
            marks={marks}
            sx={{ width: "100%" }}
          />
          </div>
       
        </div>
        <div className="sec-input">
          <label htmlFor="date">Date of birth</label>
          <div className="sec-birth-parents">
            <span>Date of birth</span>
            <input type="date" id="date" placeholder=" month" />
          </div>
        </div>
        <div className="sec-input">
          <label htmlFor="bolicy">check box</label>
          <div>
            <input
              type="checkbox"
              id="bolicy"
              placeholder="What is the estimated cost?"
            />
            <p>
              I agree to recieve <a href="#">Business Communications</a> from
              bildnw.
            </p>
          </div>
        </div>
        <div className="sec-input">
          <label htmlFor="">Button</label>
          <button>Continue</button>
        </div>
      </form>
    </>
  );
};

export default Register;
