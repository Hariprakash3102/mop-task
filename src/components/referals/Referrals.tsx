import { Col, Row, Spinner, Table } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import FormNavbar from "../login/FormNavbar";
import Navbar from "../navbar/Navbar";
import SearchReferrals from "./searchReferrals";
import { Icon } from "@iconify/react";
import { useGetRefferalQuery } from "../../redux/slice";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import moment from "moment";


const Referrals = () => {
    const limit=10;
    const [page,setPage] =useState(1);
    const handlePageChange = (selectedPage: any) => {
        setPage(selectedPage.selected + 1); 
      };
    const {data,isLoading,isError} = useGetRefferalQuery({ limit, page });
    return (
        <div>
            <Row className="m-0">
                <Col xs={3} xl={2} className="p-0 vh-100 sticky-top d-none d-lg-block bg-white">
                    <Sidebar />
                </Col>
                <Col xs={12} lg={9} xl={10} className='m-0 p-0'>
                    <div className='sticky-top'>
                        <Navbar />
                        <SearchReferrals />
                    </div>
                    <div className="mx-2 overflow-y-scroll mt-5 px-4 px-xl-5">
                    <Table hover className="mx-1 border-0 shadow">
                    <thead className="sticky-top fw-semibold fs-5">
                        <tr>
                        <td>PATIENT</td>
                        <td>ID</td>
                        <td>DATE</td>
                        <td>REFERRED BY</td>
                        <td>NOTE</td>
                        <td>ACTION</td>
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
                            <td colSpan={6} className="text-center">
                            Error fetching data
                            </td>
                        </tr>
                        </tbody>
                    ) : (
                        <tbody>
                        {data?.results?.length > 0 ? (
                            data.results.map((item: any) => (
                            <tr key={item._id}>
                                <td>{item.patientName}</td>
                                <td>{item.referralNo}</td>
                                <td>{moment(item.date).subtract(10, 'days').calendar()}</td>
                                <td>{item.referredTo.name}</td>
                                <td>{item.note}</td> 
                                <td>
                                <Icon icon="entypo:dots-three-vertical" style={{ color: "black" }} />
                                </td>
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
                            pageCount={7 || 0} // Total pages from the API response
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
}

 export default Referrals;