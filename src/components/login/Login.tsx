import React, { useState } from "react";
import FormNavbar from "./FormNavbar";
import { Button, Col, Row } from "react-bootstrap";
import { Icon } from '@iconify/react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";  
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => { 

    const [password,setPassword] =useState(true);
    const handlePasswordShow = () => {
        setPassword(!password);
    }
    const nav = useNavigate();
  interface FormValue {
    email: string;
    password: string;
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must be at most 20 characters")
      .required("Password is required"),
  });

  const initialValues: FormValue = { email: '', password: '' };

  const onSubmit = async (values: FormValue, { setSubmitting, setFieldError }: FormikHelpers<FormValue>) => { 
    try { 
      const response = await axios.post("https://devapi.myorthopedicproblem.com/v1/auth/login", {
        email: values.email,
        password: values.password,
        role: "provider",
      }); 
      if (response.data.tokens.access) {
        sessionStorage.setItem('mop_token', response.data.tokens.access.token); 
        nav("/Dashboard");
      }
    } catch (e) {
      setFieldError("email", "Error in logging in: please try again");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="fixed-top">
        <FormNavbar />
      </div>
      <div className="vh-100 d-flex align-items-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting,errors,touched }) => (
            <Form>
              <Row className="m-0 vw-100">
                <Col md={6} className="ps-5 d-none bg-white d-lg-flex justify-content-center align-items-center borderLogin">
                  <div>
                    <h1 className="WelcomeSize">Welcome Back</h1>
                  </div>
                </Col>
                <Col sm={12} lg={6} className="bg-white pe-1 pe-md-5">
                  <div className="p-0 p-md-5">
                    <div className="px-0 ps-md-5 pe-md-3 pe-xl-5">
                      <div className="d-block d-lg-none text-center pb-3">
                        <h1>Welcome Back</h1>
                      </div>
                      <div className="vstack py-2 px-2 p-md-5 gap-3 shadow-lg">
                        <h4 className="text-center">Login</h4>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email"
                          className={`form-control w-100 mb-2 p-2 ps-4 pb-3 rounded-2 shadow-none ${errors.password && touched.password && 'border-danger outline-danger'} `}
                        />
                        <ErrorMessage name="email" className="text-danger" component="div" />
                        <div className="position-relative">
                            <Field type={password ? "password" : "text"} id="password"
                                name="password" className={`form-control w-100 mb-2 p-2 ps-4 pb-3 shadow-none ${errors.password && touched.password && 'border-danger outline-danger'}`}
                                placeholder="Enter the Password"
                            />
                            <div className="eyeIcon position-absolute Color" onClick={handlePasswordShow} >
                                <Icon
                                icon={ password ? "clarity:eye-hide-line" : "clarity:eye-line" }  width={"25px"} />{" "}
                            </div>
                        </div>
                        <ErrorMessage name="password" className="text-danger" component="div" />
                        <div className="text-primary">Forget Password?</div>
                        <Button type="submit" disabled={isSubmitting}>
                          Continue
                        </Button>
                        <div>Don't have an account? Sign Up</div>
                        <Row>
                          <Col sm={5} className="pe-0">
                            <hr />
                          </Col>
                          <Col sm={1} className="pe-0">
                            OR
                          </Col>
                          <Col sm={6} className="ps-0">
                            <hr />
                          </Col>
                        </Row>
                        <Button variant="none" className="border border-2 text-start">
                          <Icon icon="devicon:google" className="me-3" /> Continue with Google
                        </Button>
                        <Button variant="none" className="border border-2 text-start">
                          <Icon icon="devicon:facebook" className="me-3" /> Continue with Facebook
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
