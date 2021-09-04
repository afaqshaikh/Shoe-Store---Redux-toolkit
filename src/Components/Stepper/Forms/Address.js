import { Form, Formik, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';

const Address = ({ handleNext }) => {
    return (
        <Formik
            initialValues={{
                address: "",
                city: "",
                state: "",
                zipCode: "",
                country: "",
            }}
            validationSchema={Yup.object({
                address: Yup.string()
                    .max(60, "Must be 60 characters or less")
                    .required("required"),

                // Validate city
                city: Yup.string()
                    .max(15, "Must be 15 characters or less")
                    .required("required"),

                // Validate state
                state: Yup.string()
                    .max(15, "Must be 15 characters or less")
                    .required("required"),

                // Validate zipCode
                zipCode: Yup.string()
                    .length(5)
                    .max(99999, "Must be 99999 or less")
                    .min(1, "Must be at least 00001")
                    .required("required")
                    .length(5),

                // Validate country
                country: Yup.string()
                    .max(20, "Must be 20 characters or less")
                    .required("required"),
            })}
            onSubmit={(values) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    handleNext();
                }, 400);
            }}
        >
            <Form>
                <div className="mb-3">
                    <label for="address" className="form-label">Address</label>
                    <Field name="address" type="text" className="form-control" />
                    <ErrorMessage name="address">
                        {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>

                </div>

                <div className="mb-3">
                    <label for="city" className="form-label">City </label>
                    <Field name="city" type="text" className="form-control" />
                    <ErrorMessage name="city">
                        {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                </div>

                <div className="mb-3">
                    <label for="state" className="form-label">State </label>
                    <Field name="state" type="text" className="form-control" />
                    <ErrorMessage name="state">
                        {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                </div>

                <div className="mb-3">
                    <label for="country" className="form-label">Country </label>
                    <Field name="country" type="text" className="form-control" />
                    <ErrorMessage name="country">
                        {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                </div>

                <div className="mb-3">
                    <label for="zipCode" className="form-label">Zip Code </label>
                    <Field name="zipCode" type="text" className="form-control" />
                    <ErrorMessage name="zipCode">
                        {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>

        </Formik>
    )
}

export default Address