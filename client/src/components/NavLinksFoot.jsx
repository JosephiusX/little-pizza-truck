import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from '../assets/img/logo-white.svg'

const NavLinksFoot = ({auth}) => {
  const renderContent = () => {
    switch (auth) {
      case null:
        return null;
      case false:
        return (
          <div className='cta'>
            <a className='btn btn--white btn--animated cta cta__request-footer ' href="/auth/google">Request Event</a>
          </div>
        );
      default:
        return (
        <div className='cta'>
          <a className='btn btn--white btn--animated cta cta__logout-footer' href="/api/logout">Logout</a>  
        </div>
        )
    }
  };

  return (
    <nav className="logo" >
      <Link className='logo logo__box-footer' to={auth ? '/prices' : '/'}>
          <img src={Logo} className='logo__icon-footer' />
      </Link>
      {renderContent()}
    </nav>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NavLinksFoot);