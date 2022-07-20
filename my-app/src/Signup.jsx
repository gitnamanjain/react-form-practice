import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./Signup.css";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
function Signup() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      addr1: "",
      urlResume: "",
      city: "",
      stateregion: "",
      zip: "",
      country: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(8)
        .required(() => {
          console.log("min 8");
        }),
      lastName: Yup.string()
        .min(8)
        .required("Minimum Length Must be 8 character"),
      addr1: Yup.string()
        .min(32)
        .required("Minimum Length Must be 32 character"),
      urlResume: Yup.string(),
      city: Yup.string().required("Required"),
      stateregion: Yup.string(),
      zip: Yup.string()
        .min(6, "Must be 6 Characters")
        .max(6, "Must be 6 Characters")
        .required("Must be 6 Characters"),
      country: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {},
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="div1">
        <TextField
          type="text"
          label="First Name*"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
      </div>
      <div className="div2">
        <TextField
          type="text"
          label="Last Name *"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
      </div>
      <div className="div3">
        <TextField
          type="text"
          label="Address Line 1 *"
          name="addr1"
          className="expand"
          value={formik.values.addr1}
          onChange={formik.handleChange}
          error={formik.touched.addr1 && Boolean(formik.errors.addr1)}
          helperText={formik.touched.addr1 && formik.errors.addr1}
        />
      </div>
      <div className="div4">
        <TextField
          type="text"
          label="Address Line 2"
          name="urlResume"
          className="expand"
          value={formik.values.urlResume}
          onChange={formik.handleChange}
          error={formik.touched.urlResume && Boolean(formik.errors.urlResume)}
          helperText={formik.touched.urlResume && formik.errors.urlResume}
        />
      </div>
      <div className="div5">
        <TextField
          type="text"
          label="City *"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />
      </div>
      <div className="div6">
        <TextField
          type="text"
          label="State/Province/Region"
          name="stateregion"
          value={formik.values.stateregion}
          onChange={formik.handleChange}
          error={
            formik.touched.stateregion && Boolean(formik.errors.stateregion)
          }
          helperText={formik.touched.stateregion && formik.errors.stateregion}
        />
      </div>
      <div className="div7">
        <TextField
          type="text"
          label="Zip/Postal Code*"
          name="zip"
          value={formik.values.zip}
          onChange={formik.handleChange}
          error={formik.touched.zip && Boolean(formik.errors.zip)}
          helperText={formik.touched.zip && formik.errors.zip}
        />
      </div>
      <div className="div8">
        <TextField
          type="text"
          label="Country *"
          name="country"
          value={formik.values.country}
          onChange={formik.handleChange}
          error={formik.touched.country && Boolean(formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}
        />
      </div>
      <div className="div9">
        <Checkbox defaultChecked />
        Use this address for payment details
      </div>
      <div className="div10">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
export default Signup;
