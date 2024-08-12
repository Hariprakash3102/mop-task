import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/mop-image.png';
import loudspeaker from '../../assets/loudspeaker.png';
import group from '../../assets/group.png';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <div className="d-flex flex-column vh-100 shadow justify-content-between"> 
      <div className='text-start d-flex flex-column'>
        <Link to='/'><img src={logo} className='img-fluid p-4 ms-1' alt="Logo" width={'220px'} /></Link>
        <div className='ps-4 my-2 sidebarHover fw-semibold fs-5 text-decoration-none'> 
          <Link to='/Dashboard' className={isActive('/Dashboard')}>
            <Icon icon="material-symbols-light:house-outline" width={'30px'} /> Home
          </Link> 
        </div>
        <div className='ps-4 my-2 fw-semibold fs-5'>
          <img src={loudspeaker} alt="loudspeaker" width={'25px'} /> Notification
        </div>
        <div className='ps-4 my-2 fw-semibold fs-5'>
          <Icon icon="et:clock" /> Appointments
        </div>
        <div className='ps-4 my-2 fw-semibold fs-5 text-decoration-none'>
          <Link to='/Patients' className={isActive('/Patients')}>
            <Icon icon="heroicons:user-group" width={'25px'} /> Patients
          </Link>
        </div>
        <div className='ps-4 my-2 fw-semibold fs-5'>
          <Icon icon="uil:schedule" width={'25px'} /> Schedule
        </div>
        <div className='ps-4 my-2 fw-semibold fs-5'>
          <Icon icon="hugeicons:message-multiple-01" width={'25px'}/> Messages
        </div>
        <div className='ps-4 my-2 fw-semibold fs-5'>
          <Icon icon="ph:phone" width={'25px'}/> Calls
        </div>
        <div className='ps-4 my-2 fw-semibold fs-5 text-decoration-none'>
          <Link to='/Referrals' className={isActive('/Referrals')}>
            <Icon icon="fluent-mdl2:text-document" width={'25px'} /> Referrals
          </Link>
        </div>
        <div className='ps-4 my-2 fw-semibold fs-5'>
          <Icon icon="carbon:analytics" width={'25px'} /> Analytics
        </div>
        <div className='ps-4 my-2 fw-semibold fs-5'>
          <Icon icon="lets-icons:setting-line" width={'25px'} /> Settings
        </div>
      </div>
      <div className="mt-auto ps-4 mb-5 fw-semibold fs-5 text-decoration-none" onClick={() => { sessionStorage.removeItem('mop_token') }}> 
        <Link to='/' className='logout text-decoration-none'>
          <Icon icon="humbleicons:logout" width={'25px'}/> Log out
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
