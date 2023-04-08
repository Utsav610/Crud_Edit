import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../auth-context";

const useInput = (validateValue) => {
  const [id, setid] = useState(null);

  const [enteredValue, setEnteredValue] = useState();
  const [isTouched, setIsTouched] = useState(false);
  const ctx = useContext(AuthContext);
  console.log(ctx);
  useEffect(() => {
    console.log("useeffect")
    if (ctx.isData.fname && ctx.isData.lname) {
      console.log("if condition 1");
      // setEnteredValue(ctx.isData.fname,ctx.isData.lname);
      // setEnteredValue( current => ({ ...current, fname: ctx.isData.fname , lname: ctx.isData.lname}))
      setEnteredValue({ fname: ctx.isData.fname, lname: ctx.isData.lname });
      console.log("enteredValue " + enteredValue);
      setid(ctx.isData.id);
    }
  },[ctx.isData]);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    hasError,
    reset,
  };
};

export default useInput;
