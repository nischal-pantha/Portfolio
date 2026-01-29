import React from 'react';
import PropTypes from 'prop-types';
import { SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app_container ${classNames}`} style={{display:"flex",flexDirection:"row"}}>
      <SocialMedia/>
      <div className=' app__wrapper app__flex'>
        <Component />

        <div className='copyright'>
          <p className='p-text'>@2025 Nischal Pantha</p>
          <p className='p-text'>All rights reserved</p>
        </div>
      </div>

    </div>
  );
};

AppWrap.propTypes = {
  Component: PropTypes.elementType.isRequired,
  idName: PropTypes.string.isRequired,
  classNames: PropTypes.string,
};

export default AppWrap;
