import { useState, useEffect } from "react";
import { getRemainingTime } from "./Timer";
import "./countdown.css";
import "../index.css";

const timer = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

const Contador = ({ timesTamp }) => {
  const [time, setTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime(timesTamp);
    }, 1000);
    return () => clearInterval(interval);
  }, [timesTamp]);

  function updateTime(countdown) {
    setTime(getRemainingTime(countdown));
  }

  return (
    <div className="countdown-container">
      <h1>we're launching soon</h1>
      <section className="countdown">
        <div className="day content-time">
          <div className="time">
            <p>{time.days}</p>
          </div>
          <p>days</p>
        </div>
        <div className="hour content-time">
          <div className="time">
            <p>{time.hours}</p>
          </div>
          <p>hours</p>
        </div>
        <div className="min content-time">
          <div className="time">
            <p>{time.minutes}</p>
          </div>
          <p>minutes</p>
        </div>
        <div className="secs content-time">
          <div className="time">
            <p>{time.seconds}</p>
          </div>
          <p>seconds</p>
        </div>
      </section>
      <div className="social-networks">
        <span>
          <i className="fa-brands fa-facebook-square"></i>
        </span>
        <span>
          <i className="fa-brands fa-pinterest"></i>
        </span>
        <span>
          <i className="fa-brands fa-instagram"></i>
        </span>
      </div>
    </div>
  );
};

export default Contador;
