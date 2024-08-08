import React from "react";  
import { Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const FormNavbar = () => {
  return (
    <>
      <div>
        <div className="pt-1 bg-white height ms-auto px-3">
            {/* <div className=" ms-3 d-flex flex-row "> */}
                <Navbar expand="lg" className="w-100 ">
                    <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                    <div className="px-5 d-none d-lg-flex">
                         <NavDropdown id="nav-dropdown-dark-example" title="For Individuals">
                        <NavDropdown.Item>Talk to a Provider </NavDropdown.Item>
                        <NavDropdown.Item>Symptom action</NavDropdown.Item>
                        <NavDropdown.Item>Education Library</NavDropdown.Item>
                        <NavDropdown.Item>Medical Suppiler</NavDropdown.Item>
                        <NavDropdown.Item>Wellness Assessment</NavDropdown.Item>
                        <NavDropdown.Item>Online Prescription</NavDropdown.Item>
                    </NavDropdown>
                    </div>
                    <div className="px-5 d-none d-lg-flex ">
                    <NavDropdown id="nav-dropdown-dark-example" title="For Provider">
                        <NavDropdown.Item>Jion our Network</NavDropdown.Item>
                        <NavDropdown.Item>FAQ's</NavDropdown.Item>
                    </NavDropdown>
                    </div>
                    <div className="px-5 d-none d-lg-flex ">
                    <NavDropdown id="nav-dropdown-dark-example" title="About us">
                        <NavDropdown.Item>Who We Are</NavDropdown.Item>
                        <NavDropdown.Item>Who Trust Us</NavDropdown.Item>
                        <NavDropdown.Item>Who We Work With</NavDropdown.Item>
                        <NavDropdown.Item> Newsroom</NavDropdown.Item>
                        <NavDropdown.Item> Contact Us</NavDropdown.Item>
                    </NavDropdown>
                    </div>
                    <div className="ms-auto">
                        <Button variant="none" className="border border-primary text-primary rounded-4 me-2 ">Login</Button>
                        <Button variant="primary" className="border rounded-4" > Sign Up</Button>
                    </div>
                </Navbar> 
            <div className=" d-block d-lg-none">
              {/* <Button variant="white" onClick={handleShow}> <img src={ToggleButton} width={'34px'} height={'34px'} alt="Toggle Button" /> </Button>
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton> 
                            </Offcanvas.Header>
                            <Offcanvas.Body >
                            <Sidebar />
                            </Offcanvas.Body>                        
                        </Offcanvas> */}
            </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default FormNavbar;
