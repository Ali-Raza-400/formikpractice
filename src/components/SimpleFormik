import { useFormik } from "formik";
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
const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log("form Values Touched", formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label>Name</label>
          <input
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            type="text"
            onBlur={formik.onBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label>E-mail</label>
          <input
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="text"
            onBlur={formik.onBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label>Channel</label>
          <input
            id="channel"
            value={formik.values.channel}
            onChange={formik.handleChange}
            type="text"
            onBlur={formik.onBlur}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
