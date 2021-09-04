import { Form, Formik, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';

const PersonalInfo = ({ handleNext }) => {
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
                    console.log(JSON.stringify(values, null, 2));
                    handleNext();
                }, 400);
            }}
        >
            <Form>
                <div className="mb-3">
                    <label for="firstName" className="form-label">First Name</label>
                    <Field name="firstName" type="text" className="form-control" />
                    <ErrorMessage name="firstName">
                        {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                </div>

                <div className="mb-3">
                    <label for="lastName" className="form-label">Last Name</label>
                    <Field name="lastName" type="text" className="form-control" />
                    <ErrorMessage name="lastName">
                        {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>

                </div>

                <div className="mb-3">


                    <label for="email" className="form-label">Email </label>
                    <Field name="email" type="text" className="form-control" />
                    <ErrorMessage name="email">
                        {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>

        </Formik>
    )
}

export default PersonalInfo