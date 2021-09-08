import { useContext } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';
import { ShippingContext } from "../../../CartContext";
import "../../index.css"


const PersonalInfo = ({ handleNext }) => {

    const [ShippingState, setShippingContext] = useContext(ShippingContext);

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: ''
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 5 characters or less')
                    .required('Required'),
                lastName: Yup.string()
                    .max(15, 'Must be 5 characters or less')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required')
            })}
            onSubmit={(values) => {
                setTimeout(() => {
                    setShippingContext(values)
                    handleNext();
                }, 400);
            }}
        >
            <Form>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <Field name="firstName" type="text" className="form-control" />
                    <ErrorMessage name="firstName">
                        {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                </div>

                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <Field name="lastName" type="text" className="form-control" />
                    <ErrorMessage name="lastName">
                        {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>

                </div>

                <div className="mb-3">


                    <label htmlFor="email" className="form-label">Email </label>
                    <Field name="email" type="text" className="form-control" />
                    <ErrorMessage name="email">
                        {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                </div>

                <div className="d-grid">
                <button type="submit" className="form-btn btn ">Submit</button>

                </div>
            </Form>

        </Formik>
    )
}

export default PersonalInfo