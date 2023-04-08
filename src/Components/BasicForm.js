import React, { useEffect, useState, useContext } from "react";
import useInput from "./Hook/use-input";
import AuthContext from "./auth-context";

const BasicForm = (props) => {
  // console.log(ctx.isData.fname);

  const [Image, setImage] = useState(null);

  const ctx = useContext(AuthContext);

  const imageChangeHandler = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const {
    value: enteredFValue,
    valueChangeHandler: fnameChangeHandler,
    isValid: enteredFNameIsValid,
    hasError: fnameInputHasError,
    reset: resetFNameInput,
    inputBlurHandler: fnameBlurHandler,
  } = useInput((value) => typeof value === "string" && value.trim().length > 2);

  const {
    value: enteredLValue,
    valueChangeHandler: LnameChangeHandler,
    isValid: enteredLNameIsValid,
    reset: resetLNameInput,
    hasError: lnameInputHasError,
    inputBlurHandler: lnameBlurHandler,
  } = useInput((value) => typeof value === "string" && value.trim().length > 2);

  const {
    value: enteredBDate,
    valueChangeHandler: bdateChangeHandler,
    isValid: enteredBDateIsValid,
    hasError: bdateInputHasError,
    reset: resetBDateInput,
  } = useInput((value) => {
    const trimmedValue = typeof value === "string" ? value.trim() : "";
    if (trimmedValue) {
      const inputDate = new Date(trimmedValue);
      const currentDate = new Date();
      if (inputDate <= currentDate) {
        return true;
      }
    }
    return false;
  });

  const {
    value: enteredAddressValue,
    valueChangeHandler: AddressChangeHandler,
    isValid: enteredAddressIsValid,
    hasError: AddressInputHasError,
    reset: resetAddressInput,
    inputBlurHandler: AddressBlurHandler,
  } = useInput((value) => typeof value === "string" && value.trim().length > 5);

  const {
    value: enteredAddress2Value,
    valueChangeHandler: Address2ChangeHandler,
    isValid: enteredAddress2IsValid,
    hasError: Address2InputHasError,
    reset: resetAddress2Input,
    inputBlurHandler: Address2BlurHandler,
  } = useInput((value) => typeof value === "string" && value.trim().length > 5);

  const {
    value: enteredBPlaceValue,
    valueChangeHandler: BPlaceChangeHandler,
    isValid: enteredBPlaceIsValid,
    hasError: BPlaceInputHasError,
    reset: resetBPlaceInput,
    inputBlurHandler: BPlaceBlurHandler,
  } = useInput((value) => typeof value === "string" && value.trim().length > 2);

  const {
    value: enteredMnumberValue,
    valueChangeHandler: MnumberChangeHandler,
    isValid: enteredMnumberIsValid,
    hasError: MnumberInputHasError,
    reset: resetMnumberInput,
    inputBlurHandler: MnumberBlurHandler,
  } = useInput((value) => {
    const trimmedValue = typeof value === "string" ? value.trim() : "";
    return /^\d{10}$/.test(trimmedValue);
  });

  let formIsValid = false;

  if (
    enteredFNameIsValid &&
    enteredLNameIsValid &&
    enteredAddressIsValid &&
    enteredMnumberIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // if (
    //   !enteredFNameIsValid ||
    //   !enteredLNameIsValid ||
    //   !enteredBDateIsValid ||
    //   !enteredAddressIsValid
    // ) {
    //   return;
    // }

    const formData = {
      id: ctx.isData.id,
      //  img:
      fname: enteredFValue,
      lname: enteredLValue,
      address: enteredAddressValue,
      address2: enteredAddress2Value,
      Birthplace: enteredBPlaceValue,
      MobileNum: enteredMnumberValue,
    };
    // console.log(formData.Birthplace);
    props.onHandleItem(formData);

    resetFNameInput();
    resetLNameInput();
    resetBDateInput();
    resetAddressInput();
    resetAddress2Input();
    resetBPlaceInput();
    resetMnumberInput();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="w-90 max-w-43rem p-4 rounded-lg bg-white  mx-auto">
        <div>
          <label htmlFor="Profile_pic">Profile Picture</label>
          <input
            type="file"
            className="block w-64 py-2 px-4 rounded-md border border-gray-300 max-w-full"
            onChange={imageChangeHandler}
          />
        </div>
      </div>
      <div className=" flex space-x-4 w-90 max-w-43rem p-4 rounded-lg bg-white my-4 mx-auto sm:flex-wrap ">
        <div>
          <label htmlFor="fname">First Name</label>
          <input
            className="block w-64 py-2 px-4 rounded-md border border-gray-300 max-w-full"
            type="text"
            id="fname"
            value={enteredFValue}
            onChange={fnameChangeHandler}
            onBlur={fnameBlurHandler}
          />

          {fnameInputHasError && (
            <p className="text-red-600">
              {enteredFValue.trim().length === 0
                ? "First Name is required"
                : "First Name is too short! Please enter at least 2 characters"}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
          <input
            className="block w-64 py-2 px-4 rounded-md border border-gray-300 max-w-full"
            type="text"
            id="lname"
            value={enteredLValue}
            onChange={LnameChangeHandler}
            onBlur={lnameBlurHandler}
          />
          {lnameInputHasError && (
            <p className="text-red-600">
              {enteredLValue.trim().length === 0
                ? "Last Name is required"
                : "Last Name is too short! Please enter at least 2 characters"}
            </p>
          )}
        </div>
      </div>

      <div className="w-90 max-w-43rem p-4 rounded-lg bg-white my-4 mx-auto">
        <div>
          <label htmlFor="date">Birth Date</label>
          <input
            type="date"
            className="block w-64 py-2 px-4 rounded-md border border-gray-300 max-w-full"
            value={enteredBDate}
            onChange={bdateChangeHandler}
          />
          {bdateInputHasError && (
            <p className="error-text">Please enter a valid birth date</p>
          )}
        </div>
      </div>
      <div className="space-x-4 w-90 max-w-43rem p-4 rounded-lg bg-white my-4 mx-auto">
        <div>
          <label htmlFor="date">Address</label>
          <textarea
            className="resize-none w-64 py-2 px-4 rounded-md border border-gray-300 max-w-full"
            id="address"
            name="address"
            value={enteredAddressValue}
            onChange={AddressChangeHandler}
            onBlur={AddressBlurHandler}
            rows={1}
            cols="20"
          ></textarea>

          <textarea
            className="resize-none w-64 py-2 px-4 rounded-md border border-gray-300 max-w-full"
            id="address"
            name="address"
            value={enteredAddress2Value}
            onChange={Address2ChangeHandler}
            onBlur={Address2BlurHandler}
            rows={1}
            cols="20"
          ></textarea>

          {AddressInputHasError && Address2InputHasError && (
            <p className="text-red-600">
              {enteredAddressValue.trim().length === 0 ||
              enteredAddress2Value.trim().length === 0
                ? "Address are required"
                : "Address are too short! Please enter at least 5 characters for each"}
            </p>
          )}
        </div>
      </div>
      <div className="space-x-4 w-90 max-w-43rem p-4 rounded-lg bg-white my-4 mx-auto">
        <div>
          <label htmlFor="fname">Birth Place</label>
          <input
            className="block w-64 py-2 px-4 rounded-md border border-gray-300 max-w-full"
            type="text"
            id="fname"
            value={enteredBPlaceValue}
            onChange={BPlaceChangeHandler}
            onBlur={BPlaceBlurHandler}
          />
          {BPlaceInputHasError && (
            <p className="text-red-600">
              {enteredBPlaceValue.trim().length === 0
                ? "Birth Place  is required"
                : "Birth Place is too short! Please enter at least 2 characters"}
            </p>
          )}
        </div>
      </div>
      <div className="space-x-4 w-90 max-w-43rem p-4 rounded-lg bg-white my-4 mx-auto">
        <div>
          <label htmlFor="PhoneNumber">Mobile Number</label>
          <input
            className="block w-64 py-2 px-4 rounded-md border border-gray-300 max-w-full"
            type="text"
            id="mobileNum"
            value={enteredMnumberValue}
            onChange={MnumberChangeHandler}
            onBlur={MnumberBlurHandler}
          />
          {MnumberInputHasError && (
            <p className="text-red-600">
              {enteredMnumberValue.trim().length === 0
                ? "Mobile Number is required"
                : "Mobile Number is too short! Please enter 10 Number"}
            </p>
          )}
        </div>
      </div>
      <div className="my-4">
        <button
          // disabled={!formIsValid}
          className="font-inherit bg-purple-900 text-white border border-purple-900 py-2 px-4 rounded cursor-pointer hover:bg-purple-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default BasicForm;
