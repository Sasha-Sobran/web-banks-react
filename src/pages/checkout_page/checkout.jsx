import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import "./checkout.css";
import InputError from "./input_error";

const Checkout = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(true);

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleVerify = (formik) => {
    setIsSubmitted(false);
    formik.validateForm().then((errors) => {
      const isValid = Object.keys(errors).length === 0;
      if (isValid) {
        setIsVerified(true);
        setIsSubmitted(true)
      }
    });
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string()
      .trim()
      .min(2)
      .max(30)
      .required("First Name is required"),
    last_name: Yup.string()
      .trim()
      .min(2)
      .max(30)
      .required("Last Name is required"),
    email: Yup.string()
      .trim()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().trim().min(10).max(12).required("Phone is required"),
    address: Yup.string()
      .trim()
      .matches(
        /[A-Za-z]+,\s[A-Za-z\s]+\s\d+$/,
        'Address must be like: "City, Street Number"'
      )
      .required("Address is required"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          address: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form className="center_form">
            <div className="row">
              <div className="form_item">
                <label htmlFor="First Name">First Name:</label>
                <Field className="form_form" type="text" name="first_name" />
                <ErrorMessage
                  name="first_name"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form_item">
                <label htmlFor="Last Name">Last Name:</label>
                <Field className="form_form" type="text" name="last_name" />
                <ErrorMessage
                  name="last_name"
                  component="div"
                  className="error"
                />
              </div>
            </div>
            <div className="row">
              <div className="form_item">
                <label htmlFor="Email">Email:</label>
                <Field className="form_form" type="text" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="form_item">
                <label htmlFor="Last Name">Phone:</label>
                <Field className="form_form" type="text" name="phone" />
                <ErrorMessage name="phone" component="div" className="error" />
              </div>
            </div>
            <div className="address">
              <label htmlFor="Last Name">Address:</label>
              <Field className="form_form_address" type="text" name="address" />
              <ErrorMessage name="address" component="div" className="error" />
            </div>

            {isSubmitted ? "" : <InputError text={"All fields must be valid"} />}

            <div className="form_buttons">
              <NavLink className="cart_page_button" to={`/cart`}>
                Back To Cart
              </NavLink>
              {isVerified ? (
                <NavLink className="cart_page_button" to={`/success`}>
                  Submit
                </NavLink>
              ) : (
                <button
                  className="cart_page_button"
                  type="submit"
                  onClick={() => handleVerify(formik)}
                >
                  Verify
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Checkout;
