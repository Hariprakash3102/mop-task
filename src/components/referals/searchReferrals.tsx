import { Button } from "react-bootstrap";
import { useState } from "react";

interface SearchReferralsProps {
  onSearch: (term: string) => void;
}

const SearchReferrals: React.FC<SearchReferralsProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div>
      <div className="d-flex flex-row border shadow bg-white">
        <div className="fw-semibold fs-5 mx-5 my-3"> Created </div>
        <div className="fw-semibold fs-5 mx-5 my-3"> Received </div>
        <div className="fw-semibold fs-5 mx-5 my-3"> Completed </div>
        <div className="ms-auto my-3 mx-2 searchReferralWidth">
          <input
            type="text"
            placeholder="Search"
            className="w-100 py-1 rounded-5 searchInput px-2"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="mx-2 my-3">
          <Button>Create</Button>
        </div>
      </div>
    </div>
  );
};

export default SearchReferrals;
