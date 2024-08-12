import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";



const Navbar = () => {

    const location = useLocation();
    const [page, setPage] = useState("Home");
    useEffect( () => {
        switch (location.pathname){
            case "/Dashboard":
                setPage("Home");
                break;
            case "/Patients":
                setPage("Patients");
                break;
            case "/Referrals":
                setPage("Referrals");
                break;
            default:
                setPage("Home");
                
        }
    },[])
    return (
        <div>
            <div className="sticky-top shadow px-3">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <a className="navbar-brand " href="#"><h2>{page}</h2></a>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;