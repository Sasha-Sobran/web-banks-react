import React from "react";
import { Formik, Form, Field } from "formik";

const Checkout = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Checkout;
