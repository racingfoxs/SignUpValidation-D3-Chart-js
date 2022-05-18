export default function validateInfo(values) {
  let errors = {};

  //Email Validation by Raj
  if (!values.email) {
    errors.email = "Email Required*";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(values.email)
  ) {
    errors.email = "Please input the valid email Id";
  }

  //Password Validation by Raj
  if (!values.password) {
    errors.password = "Password Required*";
  } else if (values.password.length < 6) {
    errors.password = "Password Needs to be 6 Character or more.";
  }
  if (!values.confirm_password) {
    errors.confirm_password = "Confirm Password Required*";
  } else if (values.confirm_password !== values.password) {
    errors.confirm_password = "Password Do not match.";
  }

  //Name Validation by Raj
  if (!values.name) {
    errors.name = "Name Required*";
  } else if (values.name.length < 3) {
    errors.name = "Name Needs to be 3 Character or more.";
  }
  //number Validation by Raj
  if (!values.number) {
    errors.number = "Contact Number Required*";
  } else if (values.number.length < 10) {
    errors.number = "You have typed LESS than 10 Digit Contact Number";
  } else if (values.number.length > 10) {
    errors.number = "You have typed MORE than 10 Digit Contact Number";
  }

  //terms validation by Raj

  if (!values.checkbox) {
      errors.checkbox = "Please accept the Terms & Condition";
  }

  return errors;
}
