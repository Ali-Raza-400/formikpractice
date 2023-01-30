import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const onSubmit = (values) => {
  console.log("form values", values);
};
const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
    errors.email = "Enter Valid Email Address";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};
let validationSchema = Yup.object({
  name: Yup.string().required("req"),
  email: Yup.string().email("not Valid Email").required("required"),
  channel: Yup.string().required("required"),
});
const YoutubeForm = () => {
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   // validate,
  //   validationSchema,
  // });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="form-control">
          <label>Name</label>
          <Field id="name" name="name" type="text" />
          <ErrorMessage name="name" />
        </div>
        <div className="form-control">
          <label>E-mail</label>
          <Field id="email" name="email" type="text" />
          <ErrorMessage name="email" />
        </div>
        <div className="form-control">
          <label>Channel</label>
          <Field id="channel" type="text" name="channel" />
          <ErrorMessage name="channel" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
