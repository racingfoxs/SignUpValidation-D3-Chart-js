import { React } from "react";
import bg from "../assets/bg.jpg";
import "./signup.scss";
import useForm from "./useForm";
import validateInfo from "./ValidateInfo";

const Signup = ({submitForm}) => {
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validateInfo);
  
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
                <input
                  name="email"
                  type="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="__toast">{errors.email}</span>
                )}
                <br />
                <label htmlFor="password" className="__inputTitle">
                  Your password
                </label>
                <br />
                <input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="on"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <span className="__toast">{errors.password}</span>
                )}

                <br />
                <label htmlFor="confirm_password" className="__inputTitle">
                  Confirm your password
                </label>
                <br />
                <input
                  name="confirm_password"
                  type="password"
                  id="confirm_password"
                  autoComplete="on"
                  value={values.confirm_password}
                  onChange={handleChange}
                />
                {errors.confirm_password && (
                  <span className="__toast">{errors.confirm_password}</span>
                )}
                <br />
                <label htmlFor="name" className="__inputTitle">
                  Your full name
                </label>
                <br />
                <input
                  name="name"
                  type="text"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="__toast">{errors.name}</span>}
                <br />
                <label htmlFor="number" className="__inputTitle">
                  Your phone number
                </label>
                <br />
                <input
                  name="number"
                  type="number"
                  id="number"
                  value={values.number}
                  onChange={handleChange}
                />
                {errors.number && (
                  <span className="__toast">{errors.number}</span>
                )}
                <br />
                <input className="__inLine" name ="checkbox" type="checkbox" id="checkbox" value={values.checkbox} onChange={handleChange} />
                <label className="__cbTitle" htmlFor="checkbox" >
                  I read and agree Terms and Conditions
                </label>                
                <span className="__toast">{errors.checkbox}</span>
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
