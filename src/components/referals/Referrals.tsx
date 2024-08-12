import { Button, Col,  Nav,  Row,  Spinner,  Tab,  Table,  Tabs, } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import SearchReferrals from "./searchReferrals";
import { useGetRefferalQuery } from "../../redux/slice";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import moment from "moment";

const Referrals = () => {
  const limit = 10;
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [event, setEvent] = useState(""); 
  const { data, isLoading, isError } = useGetRefferalQuery({
    limit,
    page,
    search: searchTerm,
    type: event,
  });

  const handlePageChange = (selectedPage: any) => {
    setPage(selectedPage.selected + 1);
  };

  const handleTabSelect = (selectedKey: string | null) => {
    setEvent(selectedKey || "");
   
     
  };

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

          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey=""
            onSelect={handleTabSelect}
          >
            <div className="d-flex  border ps-2">
              <Nav>
                <Nav.Item>
                  <Nav.Link eventKey="" className="fw-semibolder fs-5 ref_nav_link">
                    Created
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="received" className="fw-semibolder fs-5 ref_nav_link">
                    Received
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="completed" className="fw-semibolder fs-5 ref_nav_link">
                    Completed
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <div className="ms-auto me-4 my-2" style={{width:'400px'}}>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-100 py-1 rounded-5 searchInput px-2"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="my-2 me-3"> 
                 <Button >Create</Button>
              </div>
             
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="">
                <div className="mx-2 overflow-y-scroll mt-5 px-4 px-xl-5">
                  <Table hover className="mx-1 border-0 shadow">
                    <thead className="sticky-top fw-semibold fs-5">
                      <tr>
                        <td>PATIENT</td>
                        <td>ID</td>
                        <td>DATE</td>
                        <td>REFERRED TO</td>
                        <td>NOTE</td>
                      </tr>
                    </thead>
                    {isLoading ? (
                      <tbody>
                        <tr>
                          <td colSpan={5} className="text-center">
                            <Spinner animation="border" variant="info" />
                          </td>
                        </tr>
                      </tbody>
                    ) : isError ? (
                      <tbody>
                        <tr>
                          <td colSpan={5} className="text-center">
                            Error fetching data
                          </td>
                        </tr>
                      </tbody>
                    ) : (
                      <tbody>
                        {data?.results.length > 0 ? (
                          data?.results.map((item: any) => (
                            <tr key={item._id}>
                              <td>{item.patientName}</td>
                              <td>{item.referralNo}</td>
                              <td>
                                {moment(item.date)
                                  .subtract(10, "days")
                                  .calendar()}
                              </td>
                              <td>{item.referredTo?.name}</td>
                              <td>{item.note}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={5} className="text-center">
                              No data available
                            </td>
                          </tr>
                        )}
                      </tbody>
                    )}
                  </Table>
                  <div className="d-flex justify-content-center">
                    <ReactPaginate
                      pageCount={Math.ceil(
                        (data?.pagination.totalCount || 0) / limit
                      )}
                      pageRangeDisplayed={5}
                      marginPagesDisplayed={2}
                      onPageChange={handlePageChange}
                      containerClassName="pagination"
                      pageClassName="page-item text-dark px-2"
                      pageLinkClassName="page-link shadow-none text-dark border border-0 rounded"
                      previousClassName="page-item shadow-none"
                      previousLinkClassName="page-link text-dark fw-semibold shadow-none bg-white border border-0 rounded"
                      nextClassName="page-item"
                      nextLinkClassName="page-link text-dark fw-semibold shadow-none bg-white border border-0 rounded"
                      activeClassName="page-item active"
                      activeLinkClassName="page-link text-white bg-dark fw-semibold shadow-none border border-0 rounded"
                      breakClassName="page-item"
                      breakLinkClassName="page-link text-dark fw-semibold shadow-none bg-white border border-0 rounded"
                    />
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="received">
              <div className="mx-2 overflow-y-scroll mt-5 px-4 px-xl-5">
                  <Table hover className="mx-1 border-0 shadow">
                    <thead className="sticky-top fw-semibold fs-5">
                      <tr>
                        <td>PATIENT</td>
                        <td>ID</td>
                        <td>DATE</td>
                        <td>REFERRED BY </td>
                        <td>NOTE</td>
                      </tr>
                    </thead>
                    {isLoading ? (
                      <tbody>
                        <tr>
                          <td colSpan={5} className="text-center">
                            <Spinner animation="border" variant="info" />
                          </td>
                        </tr>
                      </tbody>
                    ) : isError ? (
                      <tbody>
                        <tr>
                          <td colSpan={5} className="text-center">
                            Error fetching data
                          </td>
                        </tr>
                      </tbody>
                    ) : (
                      <tbody>
                        {data?.results.length > 0 ? (
                          data?.results.map((item: any) => (
                            <tr key={item._id}>
                              <td>{item.patientName}</td>
                              <td>{item.referralNo}</td>
                              <td>
                                {moment(item.date)
                                  .subtract(10, "days")
                                  .calendar()}
                              </td>
                              <td>{item.referredBy?.name || '-' }</td>
                              <td>{item.note}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={5} className="text-center">
                              No data available
                            </td>
                          </tr>
                        )}
                      </tbody>
                    )}
                  </Table>
                  <div className="d-flex justify-content-center">
                    <ReactPaginate
                      pageCount={Math.ceil(
                        (data?.pagination.totalCount || 0) / limit
                      )}
                      pageRangeDisplayed={5}
                      marginPagesDisplayed={2}
                      onPageChange={handlePageChange}
                      containerClassName="pagination"
                      pageClassName="page-item text-dark px-2"
                      pageLinkClassName="page-link shadow-none text-dark border border-0 rounded"
                      previousClassName="page-item shadow-none"
                      previousLinkClassName="page-link text-dark fw-semibold shadow-none bg-white border border-0 rounded"
                      nextClassName="page-item"
                      nextLinkClassName="page-link text-dark fw-semibold shadow-none bg-white border border-0 rounded"
                      activeClassName="page-item active"
                      activeLinkClassName="page-link text-white bg-dark fw-semibold shadow-none border border-0 rounded"
                      breakClassName="page-item"
                      breakLinkClassName="page-link text-dark fw-semibold shadow-none bg-white border border-0 rounded"
                    />
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="completed">
              <div className="mx-2 overflow-y-scroll mt-5 px-4 px-xl-5">
                  <Table hover className="mx-1 border-0 shadow">
                    <thead className="sticky-top fw-semibold fs-5">
                      <tr>
                        <td>PATIENT</td>
                        <td>ID</td>
                        <td>DATE</td>
                        <td>REFERRED TO</td>
                        <td>NOTE</td>
                      </tr>
                    </thead>
                    {isLoading ? (
                      <tbody>
                        <tr>
                          <td colSpan={5} className="text-center">
                            <Spinner animation="border" variant="info" />
                          </td>
                        </tr>
                      </tbody>
                    ) : isError ? (
                      <tbody>
                        <tr>
                          <td colSpan={5} className="text-center">
                            Error fetching data
                          </td>
                        </tr>
                      </tbody>
                    ) : (
                      <tbody>
                        {data?.results.length > 0 ? (
                          data?.results.map((item: any) => (
                            <tr key={item._id}>
                              <td>{item.patientName}</td>
                              <td>{item.referralNo}</td>
                              <td>
                                {moment(item.date)
                                  .subtract(10, "days")
                                  .calendar()}
                              </td>
                              <td>{item.referredTo?.name}</td>
                              <td>{item.note}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={5} className="text-center">
                              No data available
                            </td>
                          </tr>
                        )}
                      </tbody>
                    )}
                  </Table>
                  <div className="d-flex justify-content-center">
                    <ReactPaginate
                      pageCount={Math.ceil(
                        (data?.pagination.totalCount || 0) / limit
                      )}
                      pageRangeDisplayed={5}
                      marginPagesDisplayed={2}
                      onPageChange={handlePageChange}
                      containerClassName="pagination"
                      pageClassName="page-item text-dark px-2"
                      pageLinkClassName="page-link shadow-none text-dark border border-0 rounded"
                      previousClassName="page-item shadow-none"
                      previousLinkClassName="page-link text-dark fw-semibold shadow-none bg-white border border-0 rounded"
                      nextClassName="page-item"
                      nextLinkClassName="page-link text-dark fw-semibold shadow-none bg-white border border-0 rounded"
                      activeClassName="page-item active"
                      activeLinkClassName="page-link text-white bg-dark fw-semibold shadow-none border border-0 rounded"
                      breakClassName="page-item"
                      breakLinkClassName="page-link text-dark fw-semibold shadow-none bg-white border border-0 rounded"
                    />
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </div>
  );
};

export default Referrals;
