import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

  const _user = useSelector(state => state.auth?.user?.role) 



  const authLinks = (
    <ul>

      {
        (_user === "admin") ?
        <li>
          <Link to='/admin'>Admin panel</Link>
        </li>
      :""
      }
      <li>
        <Link to='/profiles'>Developers</Link>
      </li>

      <li>
        <Link to='/posts'>Posts</Link>
      </li>
      <li>
        <Link to='/companies'>Companies</Link>
      </li>

      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user'></i>{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>

      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Developers</Link>
      </li>

      <li>
        <Link to='/register'>Register</Link>
      </li>

      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code-branch' /> DevBook
        </Link>
      </h1>

      {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { logout })(Navbar);
