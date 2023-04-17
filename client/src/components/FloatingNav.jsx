import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const FloatingNav = ({ auth }) => {

  const renderContent = () => {
    switch (auth) {
      case null:
        return null;
      case false:
        return (
          <li><a className='btn btn--white u-auth-floating-nav u-position-absolute ' href="/auth/google">Learn More</a></li>
        );
      default:
        return <li><a className='btn btn--white u-auth-floating-nav u-position-absolute ' href="/api/logout">Logout</a></li>  
    }
  };

  return (
    <div className="navigation">


      
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">{renderContent()}</li>
        </ul>
      </nav>
    </div>

    
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(FloatingNav);

