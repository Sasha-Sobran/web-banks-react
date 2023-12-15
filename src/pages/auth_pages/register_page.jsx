import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./auth.css";
import { NavLink, useNavigate } from "react-router-dom";
import { register, login } from "../../api";
import InputError from "../checkout_page/input_error";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isFailedEmail, setIsFailedEmail] = useState(false);

  const submitForm = async (values) => {
    try {
      await register(values.username, values.email, values.password);
      await login(values.email, values.password);
      navigate("/", { replace: true });
    } catch (e) {
      setIsFailedEmail(true);
    }
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(4).required("username is required"),
    email: Yup.string().email().required("email is required"),
    password: Yup.string().min(6).required("password is required"),
    repeated_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("repeated password is required"),
  });

  return (
    <>
      <div className="register">
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            repeated_password: "",
          }}
          onSubmit={submitForm}
          validationSchema={validationSchema}
        >
          <Form className="form">
            REGISTER THE NEW ACCOUNT
            <div className="cursed_class">
              <div className="field_column">
                <label>Username:</label>
                <Field className="field" type="text" name="username" />
                <div className="error">
                  <ErrorMessage name="username" />
                </div>
                <label>Email:</label>
                <Field className="field" type="text" name="email" />
                <div className="error">
                  <ErrorMessage name="email" />
                </div>
                <label>Password:</label>
                <Field className="field" type="text" name="password" />
                <div className="error">
                  <ErrorMessage name="password" />
                </div>
                <label>Repeat password:</label>
                <Field className="field" type="text" name="repeated_password" />
                <div className="error">
                  <ErrorMessage name="repeated_password" />
                </div>
              </div>
            </div>
            {isFailedEmail ? (
              <InputError text={"This email already exist"} />
            ) : (
              ""
            )}
            <div>
              Already a member?{" "}
              <NavLink className="up_button" to={"/login"}>
                SIGN IN
              </NavLink>
            </div>
            <button type="submit">SIGN UP</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default RegisterPage;
