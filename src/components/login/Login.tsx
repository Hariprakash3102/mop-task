import React from "react";
import FormNavbar from "../navbar/Navbar";
import { Button, Col, Row } from "react-bootstrap";
import { Icon } from '@iconify/react';
import { Formik } from "formik";
import * as Yup from "yup";


const Login = () => {
    interface FormValue {
        email: string;
        password: string;
    }
    const validSchema = {}
    const initialValues: FormValue = {email:'', password:''};     
    return(
        <>
        <FormNavbar />
         <Formik
      initialValues ={initialValues}                       
      validationSchema={validSchema}
      onSubmit={} 
    >
            <div className="fixed-top">
                <FormNavbar />
            </div>
            <div className="vh-100 d-flex align-items-center">
                <Row className="m-0 vw-100">
                    <Col md={6} className="ps-5 d-none bg-white d    -lg-flex justify-content-center align-items-center" > 
                        <div>
                            <h1 className="WelcomeSize">Welcome Back </h1> </div>
                    </Col> 
                    <Col sm={12} lg={6} className="bg-white pe-1 pe-md-5">
                        <div className="p-0 p-md-5">
                            <div className="px-0 ps-md-5 pe-md-3">
                                <div className="d-block d-lg-none text-center pb-3"> <h1>Welcome Back </h1>  </div>
                                <div className="vstack py-2 px-2 p-md-5 gap-3 shadow-lg">
                                    <h4 className="text-center">Login</h4> 
                                    <input type="email" placeholder="Email" name="email" className="py-2 px-2 rounded-2" /> 
                                    <div className="position-relative" >
                                        <input type="password" placeholder="Password" name="password"  className="w-100 py-2 px-2 rounded-2"/>
                                        <span className="posiion-absolute" />
                                    </div>
                                    <div className="text-primary" >Forget Password?</div>
                                    <Button>Continue</Button>
                                    <div>Don't have an account? Sign Up</div>
                                    <Row>
                                        <Col sm={5} className="pe-0 "><hr/></Col>
                                        <Col sm={1}  className="pe-0" >OR</Col>
                                        <Col sm={6}  className="ps-0" ><hr/></Col>
                                    </Row> 
                                    <Button variant="none" className="border border-2 text-start">
                                    <Icon icon="devicon:google" className="me-3" /> Continue with Google 
                                    </Button>
                                    <Button variant="none" className="border border-2 text-start" >
                                    <Icon icon="devicon:facebook" className="me-3"/>Continue with Facebook
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            </Formik>
        </>
    );
}

export default Login;