import React, { useState } from "react";
import { Button, Col, Row, Spinner, Table } from "react-bootstrap";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { useGetRtkQuery } from "../../redux/slice";
import ReactPaginate from "react-paginate";
import { Icon } from "@iconify/react";

const Patients = () => {
  const [page, setPage] = useState(1);
  const [searchPatients, setSearchPatients] = useState("")
  console.log(page);
  const limit = 10; 
 
  const { data, isLoading, isError } = useGetRtkQuery({ limit, page, search: searchPatients });


  const handlePageChange = (selectedPage) => {
    setPage(selectedPage.selected + 1); 
  };

  return (

    <div>
      <Row className="m-0">
        <Col xs={3} xl={2} className="p-0 vh-100 sticky-top d-none d-lg-block bg-white">
          <Sidebar />
        </Col>
        <Col xs={12} lg={9} xl={10} className="m-0 p-0">
          <div className="sticky-top">
            <Navbar />
          </div>
          <div className="d-flex flex-row position-relative">
            <div className="ms-auto mt-3 me-5" style={{width: '300px'}}>
              <div className="position-absolute end-0 me-5 pe-2 "><Icon icon="basil:search-outline" width={'30px'} /></div>
              <input type="text" name="patientSearch" placeholder="search"  className="w-100 py-1 rounded-5 searchInput px-2"
              onChange={(e) => setSearchPatients(e.target.value)}/>
            </div> 
          </div>
          <div className="mx-2 overflow-y-scroll mt-5 px-5">
            <Table hover className="mx-1 border-0 shadow rounded">
              <thead className="sticky-top fw-semibold fs-5">
                <tr>
                  <td>PATIENT</td>
                  <td>PATIENT ID</td>
                  <td>AGE</td>
                  <td>GENDER</td>       
                  <td>INJURY</td>
                </tr>
              </thead>
              {isLoading ? (
                <tbody>
                  <tr>
                    <td colSpan={6} className="text-center">
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
                  {data?.docs?.length > 0 ? (
                    data.docs.map((item) => (
                      <tr key={item._id}>
                        <td>{item.appointmentschedules.patient.name}</td>
                        <td>{item.appointmentschedules.patient.patientId}</td>
                        <td>{item.appointmentschedules.patient.age || '-'}</td>
                        <td>{item.appointmentschedules.patient.gender || '-'}</td>
                        <td>{item.appointmentschedules.reason}</td>
                       
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center">
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              )}
            </Table>
            <div className="d-flex justify-content-center">
              <ReactPaginate
                pageCount={data?.totalPages || 0} // Total pages from the API response
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName="pagination"
                pageClassName='page-item text-dark px-2'
                pageLinkClassName='page-link shadow-none text-dark border border-0 rounded'
                previousClassName='page-item shadow-none'
                previousLinkClassName='page-link text-dark fw-semibold shadow-none bg-white border border-0 rounded'
                nextClassName='page-item'
                nextLinkClassName='page-link text-dark fw-semibold shadow-none bg-white border border-0 rounded'
                activeClassName='page-item active'
                activeLinkClassName='page-link text-white bg-dark fw-semibold shadow-none border border-0 rounded'
                breakClassName='page-item'
                breakLinkClassName='page-link text-dark fw-semibold shadow-none bg-white border border-0 rounded' 
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Patients;
