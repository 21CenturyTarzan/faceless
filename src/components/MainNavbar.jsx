import { NavLink, useNavigate } from 'react-router-dom';
import { colors } from '../values/colors';
import './navbar.css';
import logo from './logo.svg';

function MainNavbar() {
  const items = [
    { path: '/', title: 'How it\' work' },
    { path: '/', title: 'Create transaction' },
    { path: '/', title: 'FAQ' },
  ];
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand d-flex pt-2 text-white" href="/">
          <img src={logo} alt="" className="navbar-logo " />LOGO
        </a>
        <div className="collapse navbar-collapse justify-content-center" id="navbarMenu">
          <ul className="navbar-nav">
            {
              items.map((item, i) => (
                <li key={i} className="nav-item text-white px-4">
                  <NavLink className="nav-link text-white" to={item.path}>{item.title}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
        <button type="button"
          className="btn btn-success px-4 text-black"
          style={{ background: colors.primary }}
          onClick={() => navigate('/login')}
        >
          Sign In <i class="bi bi-box-arrow-in-right"></i>
        </button>
        <button className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
  );
}

export default MainNavbar;
