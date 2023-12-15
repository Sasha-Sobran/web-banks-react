import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./auth.css";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../api";
import InputError from "../checkout_page/input_error";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isFailedEmail, setIsFailedEmail] = useState(false);

  const submitForm = async (values) => {
    try {
      await login(values.email, values.password);
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
      setIsFailedEmail(true);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("email is required"),
    password: Yup.string().min(4).required("password is required"),
  });

  return (
    <>
      <div className="login">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={submitForm}
          validationSchema={validationSchema}
        >
          <Form className="form">
            LOG IN
            <div className="cursed_class">
              <div className="field_column">
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
              </div>
            </div>
            {isFailedEmail ? (
              <InputError text={"Such account does not exists"} />
            ) : (
              ""
            )}
            <div>
              Don`t have an account?{" "}
              <NavLink className="up_button" to={"/register"}>
                SIGN UP
              </NavLink>
            </div>
            <button type="submit">SIGN IN</button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default LoginPage;
