import { Button } from "react-bootstrap";


const SearchReferrals = () => {
    return(
        <div>
            <div className="d-flex flex-row border shadow bg-white ">
                <div className="fw-semibolder fs-5 mx-5 my-3"> Created </div>
                <div className="fw-semibolder fs-5 mx-5 my-3"> Received </div>
                <div className="fw-semibolder fs-5 mx-5 my-3"> Completed </div>
                <div className="ms-auto my-3 mx-2 searchReferralWidth">
                    <input type="text" placeholder="Search" className="w-100 py-1 rounded-5 searchInput px-2" />
                </div>
                <div className="mx-2 my-3"> <Button >Create</Button> </div>
            </div>
        </div>
    );
}

export default SearchReferrals;