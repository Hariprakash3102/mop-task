import { Icon } from "@iconify/react";
import { Navbar} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import FormNavbar from "../login/FormNavbar";
import logo from '../../assets/mop-image.png'

const Sidebar: React.FC = () => {
  return (
    <div className="d-flex flex-column vh-100 shadow justify-content-between"> 
    <div className='text-start d-flex flex-column'>
      <NavLink  to='/' ><img src={logo} className='img-fluid p-4 ms-1' alt="Logo" width={'220px'} /> </NavLink>
      <div className='ps-4 my-2 sidebarHover  fw-semibold fs-5 '> 
        <NavLink to='/Dashboard' className='text-decoration-none nav-link' >
          <Icon icon="material-symbols-light:house-outline"  width={'25px'}/> Home
        </NavLink> 
      </div>
      <div className='ps-4 my-2 fw-semibold fs-5'>
        <Icon icon="mdi:loudspeaker-outline" width={'25px'} /> Notification
      </div>
      <div className='ps-4 my-2 fw-semibold fs-5'>
        <Icon icon="et:clock" /> Appointments
      </div>
      <div className='ps-4 my-2 fw-semibold fs-5'>
      <NavLink to='/Patients' className='text-decoration-none nav-link' >
        <Icon icon="heroicons-outline:user-group"  width={'25px'}/> Patients
        </NavLink>
      </div>
      <div className='ps-4 my-2 fw-semibold fs-5'>
        <Icon icon="uil:schedule"  width={'25px'}/> Schedule
      </div>
      <div className='ps-4 my-2 fw-semibold fs-5'>
        <Icon icon="hugeicons:message-multiple-01"  width={'25px'}/> Messages
      </div>
      <div className='ps-4 my-2 fw-semibold fs-5'>
        <Icon icon="ph:phone"  width={'25px'}/> Calls
      </div>
      <div className='ps-4 my-2 fw-semibold fs-5'>
        <Link to='/Referrals' className='text-decoration-none nav-link' >
          <Icon icon="fluent-mdl2:text-document"  width={'25px'} /> Referrals
        </Link>
      </div>
      <div className='ps-4 my-2 fw-semibold fs-5'>
        <Icon icon="carbon:analytics"  width={'25px'} /> Analytics
      </div>
      <div className='ps-4 my-2 fw-semibold fs-5'>
        <Icon icon="lets-icons:setting-line"  width={'25px'} /> Settings
      </div>
    </div>
    <div className="mt-auto ps-4 mb-5 fw-semibold fs-5" onClick={() => { sessionStorage.removeItem('mop_token') }} > 
      <NavLink to='/' className='text-decoration-none nav-link' >
        <Icon icon="humbleicons:logout"  width={'25px'}/> Log out
      </NavLink>
    </div>
  </div>
  );
}

export default Sidebar;