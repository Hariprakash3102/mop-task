import { Button, Col, Row } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import total from '../../assets/Total_Income.png';
import visit from '../../assets/Patient Visits.png';
import overview from '../../assets/Patient_overview.png';
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Row className="m-0">
        <Col
          xs={3}
          xl={2}
          className="p-0 vh-100 sticky-top d-none d-lg-block bg-white"
        >
          <Sidebar />
        </Col>
        <Col xs={12} lg={9} xl={10} className="m-0 p-0">
          <div className="sticky-top">
            <Navbar />
          </div>
          <Row className="m-0 pt-3 text-center">
            <Col xs={12} md={6} lg={3} className="rounded my-2">
              <div className="position-relative rounded-5 shadow py-3">
                <h1>153</h1>
                <div>Appointments</div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}  className="rounded my-2 ">
              <Link to="/Patients" className="text-decoration-none text-dark">
                <div className="position-relative rounded-5 shadow py-3">
                  <h1>21</h1>
                  <div>Total Patients</div>
                </div>
              </Link>
            </Col>
            <Col xs={12} md={6} lg={3}  className="rounded my-2">
              <div className="position-relative rounded-5 shadow py-3">
                <h1>0</h1>
                <div>Profile Views</div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}  className="rounded my-2 " > 
              <Link to="/Referrals" className="text-decoration-none text-dark">
                <div className="position-relative rounded-5 shadow py-3">
                  <h1>132</h1>
                  <div>Referrals Give</div>
                </div>
              </Link>
            </Col>
          </Row>
          <Row className="m-0">
                <Col xs={12} lg={8} className="mt-3">
                    <div className="rounded-5 shadow p-3">
                        <div className="fw-bold fs-4" >Upcoming Appointments</div>
                        <div className="d-flex flex-row mt-2">
                            <Col >Name</Col>
                            <Col>Status</Col>
                            <Col>Type</Col>
                            <Col>Date</Col>
                            <Col>Time</Col>
                            <Col>Action</Col>
                        </div>
                        <div style={{height: '185px'}} className="mt-5 pt-5 text-center">No Upcoming Appointments</div>
                        
                    </div>
                </Col>
                <Col xs={12} lg={4} className="mt-3">
                  <div className="rounded-5 shadow p-3">
                    <div className="fw-bold fs-4">Total Income</div>
                      <p><span className="me-1"><Icon icon="bxs:up-arrow"  style={{color:' #0000ff'}} /></span>0% Till last month</p>
                      <div className="d-flex justify-content-center">
                        <img src={total} alt="" className="img-fluid "/>
                      </div> 
                  </div>    
                </Col>
          </Row>
          <Row className="m-0">
              <Col sm={12} lg={8}  className="mt-3">
                  <div className="rounded-5 shadow p-3">
                    <div className="d-flex">
                        <div  className="fw-bold fs-4" >Pateient Visits</div>
                        <div className="ms-auto">
                          <Button variant="none" className="border rounded-5 me-1">Monthly</Button>
                          <Button variant="none" className="border rounded-5"> August</Button> 
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-2 mb-4 ">
                        <img src={visit} alt="" className="img-fluid "/>
                    </div>
                  </div> 
              </Col>
              <Col xs={12} lg={4} className="mt-3">
                  <div className="rounded-5 shadow p-3">
                    <div  className="fw-bold fs-4" >Patients Overview</div>
                    <p><span className="me-1"><Icon icon="bxs:up-arrow"  style={{color:' #0000ff'}} /></span>0% Till last month</p>
                    <div className="d-flex justify-content-center">
                      <img src={overview} alt="" className="img-fluid "/>
                    </div> 
                  </div>
              </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}; 
export default Dashboard;
