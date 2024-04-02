import { Field, Form, Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().min(2).required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().min(6).required("Required"),
});

export const RegisterForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    // const newContact = {
    //   id: nanoid(),
    //   ...values,
    // };
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>Name</label>
          <Field type="text" name="name" />
          <label>Email</label>
          <Field type="email" name="email" />
          <label>Password</label>
          <Field type="password" name="password" />
        </Form>
      </Formik>
    </>
  );
};
