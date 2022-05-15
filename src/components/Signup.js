import React from "react";
import bg from "../assets/bg.jpg";
import "./signup.scss";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sumbit button Works");
    navigate("/Dashboard");
  };

  return (
    <>
      <div className="container">
        <div className="container--flex --border">
          <div className="__col">
            <div className="__center __bgGrey">
              <div className="__img">
                <img className="__imgResize" src={bg} alt="Background" />
              </div>
              <div className="__paragraph">
                <span className="__title">Choose a data range</span>
                <span className="__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  aliquid fugiat?
                </span>
              </div>
            </div>
          </div>
          <div className="__col">
            <div className="__left __white">
              <span className="__title">Create an account</span>
              <br />
              <form>
                <label htmlFor="email" className="__inputTitle">
                  Your email address
                </label>
                <br />
                <input type="email" id="email" />
                <br />
                <label htmlFor="password" className="__inputTitle">
                  Your password
                </label>
                <br />
                <input type="password" id="password" autoComplete="on" />
                <br />
                <label htmlFor="confirm_password" className="__inputTitle">
                  Confirm your password
                </label>
                <br />
                <input
                  type="password"
                  id="confirm_password"
                  autoComplete="on"
                />
                <br />
                <label htmlFor="name" className="__inputTitle">
                  Your full name
                </label>
                <br />
                <input type="text" id="name" />
                <br />
                <label htmlFor="number" className="__inputTitle">
                  Your phone number
                </label>
                <br />
                <input type="number" id="number" />
                <br />
                <input className="__inLine" type="checkbox" id="terms" />
                <label className="__cbTitle" htmlFor="terms">
                  I read and agree Terms and Conditions
                </label>
                <br />
                <button
                  type="sumbit"
                  onClick={handleSubmit}
                  className="__sumbitBTN"
                >
                  Create account
                </button>
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
