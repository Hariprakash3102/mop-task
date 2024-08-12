import { Col, Row } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

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
              <div className="position-relative rounded-5 shadow py-3">
                <h1>21</h1>
                <div>Total Patients</div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}  className="rounded my-2">
              <div className="position-relative rounded-5 shadow py-3">
                <h1>0</h1>
                <div>Profile Views</div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}  className="rounded my-2 " > 
              <div className="position-relative rounded-5 shadow py-3">
                <h1>132</h1>
                <div>Referrals Give</div>
              </div>
            </Col>
          </Row>
          <Row className="m-0">
                <Col xs={12} lg={8} className="mt-3">
                    <div className="rounded-5 shadow p-3">
                        <div>Upcoming Appointments</div>
                        <div className="d-flex flex-row mt-2">
                            <Col >Name</Col>
                            <Col>Status</Col>
                            <Col>Type</Col>
                            <Col>Date</Col>
                            <Col>Time</Col>
                            <Col>Action</Col>
                        </div>
                        <div style={{height: '100px'}} className="mt-5 text-center">No Upcoming Appointments</div>
                        
                    </div>
                </Col>
                <Col xs={12} lg={8}>

                </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
