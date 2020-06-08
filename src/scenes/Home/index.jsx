import React from 'react';

import './index.scss';
import Filters from './partials/Filters';

function HomeScene() {
  return (
    <div className='homeContainer'>
      <div className='header'>
        <div className='leftNav'>
          <img src={require('../../assets/images/itilite-logo.png')} alt='logo' />
          <div className='navigation'>
            <ul className='nav-ul'>
              <li className='active'>
                Dashboard
            </li>
              <li>
                Create new trip
            </li>
              <li>
                Service request
            </li>
              <li>
                Use IL cash
            </li>
            </ul>
          </div>
        </div>
        <div className='right'>
          <img src={require('../../assets/images/bell.webp')} alt='bell' />
          <img src={require('../../assets/images/user.jpeg')} alt='user' />
          Kritarth
        </div>
      </div>

      <div className='layout'>
        <div className='filters-wrapper'>
          <Filters />
        </div>
        <div className='results-wrapper'> 
          reults
      </div>
      </div>
    </div>
  )
}

export default HomeScene;
