import { useContext } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';
import { ShippingContext } from "../../../CartContext";
import "../../index.css"

const Address = ({ handleNext }) => {

    const [ShippingState, setShippingContext] = useContext(ShippingContext);

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
                    setShippingContext({ ...ShippingState, ...values });
                    handleNext();
                }, 400);
            }}
        >
            <Form>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <Field name="address" type="text" className="form-control" />
                    <ErrorMessage name="address">
                        {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>

                </div>

                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City </label>
                    <Field name="city" type="text" className="form-control" />
                    <ErrorMessage name="city">
                        {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                </div>

                <div className="mb-3">
                    <label htmlFor="state" className="form-label">State </label>
                    <Field name="state" type="text" className="form-control" />
                    <ErrorMessage name="state">
                        {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                </div>

                <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country </label>
                    <Field name="country" type="text" className="form-control" />
                    <ErrorMessage name="country">
                        {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                </div>

                <div className="mb-3">
                    <label htmlFor="zipCode" className="form-label">Zip Code </label>
                    <Field name="zipCode" type="text" className="form-control" />
                    <ErrorMessage name="zipCode">
                        {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                </div>
                <div className="d-grid">

                    <button type="submit" className="form-btn btn  ">Submit</button>
                </div>
            </Form>

        </Formik>
    )
}

export default Address