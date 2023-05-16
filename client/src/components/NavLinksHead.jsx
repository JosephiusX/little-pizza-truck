import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../assets/img/logo-white.svg';


const NavLinksHead = ({auth}) => {

  const renderContent = () => {
    switch (auth) {
      case null:
        return null;
      case false:
        return (
          <div className='cta'>
            <a className='btn btn--white btn--animated cta__request  ' href="/auth/google">Request Event</a>
          </div>
        );
      default:
        return (
          <div className='cta'>
            <a className='btn btn--white btn--animated cta__logout' href="/api/logout">Logout</a>  
          </div>

        )
    }
  };

  return (
    <nav className="" >
      <Link className='logo logo__box'to={auth ? '/prices' : '/'}>
          <img src={Logo} className='logo__icon' />
      </Link>
      {renderContent()}
    </nav>
  );
};


function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NavLinksHead);