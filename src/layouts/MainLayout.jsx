import { Outlet } from 'react-router-dom';
import './main-layout.css';
import Footer from '../components/Footer';
import MainNavbar from '../components/MainNavbar';

function MainLayout() {
  return (
    <div className="top-container">
      <div className='container'>
        <MainNavbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
