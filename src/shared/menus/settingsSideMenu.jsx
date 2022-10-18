import CopyRight from '../../shared/copyright/copyright';
import SignOut from '../../assets/icon/snapbrillia_signout_icon.svg';
// import Profile from '../../assets/icon/snapbrillia_profile_personal_icon.svg';
// import CompanyandUsers from '../../assets/icon/snapbrillia_profile_company_icon.svg';
import Security from '../../assets/icon/snapbrillia_profile_security_icon.svg';
import Accessibility from '../../assets/icon/snapbrillia_profile_accessibility_icon.svg';
import Management from '../../assets/icon/snapbrillia_mentor_icon.svg';
// import Subscription from '../../assets/icon/snapbrillia_subscription_icon.png';
import '../css/sharedStyles.css';
import '../css/sharedStyles.css';
import './css/profileSideMenu.css';
import { navigate } from '@reach/router';
import { useAuth } from '../../context/authContext';

export default function PrimarySideMenu({ component, setComponent, isAdmin }) {
  const { logout } = useAuth();
  const handleSignOut = () => {
    logout();
    return navigate('/signin');
  };
  return (
    <div className="menulabel profile-menu-bar">
    {/*  <div
        className={
          component === 0
            ? 'menu_item_selected profile_menu_general'
            : 'profile_menu_general'
        }
        onClick={() => setComponent(0)}
      >
    
        <img src={Profile} alt="profile-icon" />
        <span>Personal</span>
      </div>
      <div
        className={
          component === 1
            ? 'menu_item_selected profile_menu_general'
            : 'profile_menu_general'
        }
        onClick={() => setComponent(1)}
      >
        <img src={CompanyandUsers} alt="company-users-icon" />
        <span>Company and Users</span>
      </div>
    */}  
      <div
        className={
          component === 2
            ? 'menu_item_selected profile_menu_general'
            : 'profile_menu_general'
        }
        onClick={() => setComponent(2)}
      >
        <img src={Security} alt="security-icon" />
        <span>Security and Login</span>
      </div>
      
      <div
        className={
          component === 3
            ? 'menu_item_selected profile_menu_general'
            : 'profile_menu_general'
        }
        onClick={() => setComponent(3)}
      >
        <img src={Accessibility} alt="accessibility-icon" />
        <span>Accessibility</span>
      </div>
       {/*<div
        className={
          component === 4
            ? 'menu_item_selected profile_menu_general'
            : 'profile_menu_general'
        }
        onClick={() => setComponent(4)}
      >
        <img src={Subscription} alt="profile-icon" />
        <span>
          Subscription<small>(Coming Soon)</small>
        </span>
      </div> */}
      {isAdmin && (
        <div
          className={
            component === 4 //Component 5 after Subscription page is finnished
              ? 'menu_item_selected profile_menu_general'
              : 'profile_menu_general'
          }
          onClick={() => setComponent(4)} //Component 5 after Subscription page is finnished
        >
          <img src={Management} alt="management-icon" />
          <span style={{ paddingLeft: '9px' }}>Management</span>
        </div>
      )}
      <div className="profile_menu_general" onClick={handleSignOut}>
        <div className="profile_signout">
          <img src={SignOut} alt="signout-icon" />
          <span>Sign Out</span>
        </div>
      </div>
      <div className="profile_copyright">
        <CopyRight />
      </div>
    </div>
  );
}
