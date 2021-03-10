import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class SimpleForm extends React.Component {
    state = {
        checked : false
    }
    render() {
        return (
            <Formik
            initialValues = {{
                email : '', company : '', password : ''
            }}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    company : Yup.string()
                    .min(6, 'company must be at least 6 characters')
                    .required('company is required')
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
                
                render={({ errors, status, touched }) => (
                    <div className="container">
                        <h1 className="p-3 text-center h3 font-weight-bolder">Omega</h1>
                        <Form className="simple-form">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <div className="card p-5">
                                        <div className="card-body">
                                            <h2 className="font-weight-bolder display-4 text-center">Sign Up</h2>
                                            <p className="text-center">No Credit card details required</p>
                                            <div className="form-group mb-4">
                                                <Field name="email" type="text" className={'form-control p-4 input' + (errors.email && touched.email ? ' is-invalid' : '')} placeholder="Enter Email" />
                                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                            </div>
                                            <div className="form-group">
                                                <Field name="company" type="company" className={'form-control p-4 input' + (errors.company && touched.company ? ' is-invalid' : '')} placeholder="Company Name" />
                                                <ErrorMessage name="company" component="div" className="invalid-feedback" />
                                            </div>
                                            <div className="form-group">
                                                <Field name="password" type="password" className={'form-control p-4 input' + (errors.password && touched.password ? ' is-invalid' : '')} placeholder="Password" />
                                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                            </div>
                                            <div className="form-group">
                                                <Field name="checked" type="checkbox" className={'p-4' + (errors.condition && touched.condition ? ' is-invalid' : '')} placeholder="condition" /> I agree to the <a href="#" className="text-primary">Terms & Conditions</a>
                                                <ErrorMessage name="checked" component="div" className="invalid-feedback" />
                                            </div>
                                            <button className="btn btn-block btn-danger p-3">Get Started</button>
                                            <p className="mt-3">Already have an account? <a href="#" className="text-primary">Sign In</a> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                )}
            />
        )
    }
}

export default SimpleForm