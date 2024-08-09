import { Col, Row } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";


const Dashboard = () => {
    return(
        <div>
            <Row className="m-0">
                <Col xs={3} xl={2} className="p-0 vh-100 sticky-top d-none d-lg-block bg-white">
                    <Sidebar />
                </Col>
                <Col xs={12} lg={9} xl={10} className='m-0 p-0'>
                    <div className='sticky-top'>
                        <Navbar />
                    </div>
                    <Row className="m-0">
                        <Col xs={12} md={6} lg={3}>
                        <div className="position-relative">
                            
                        </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                        <div className="position-relative">
                            
                        </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                        <div className="position-relative">
                            
                        </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                        <div className="position-relative">
                            
                        </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Dashboard;