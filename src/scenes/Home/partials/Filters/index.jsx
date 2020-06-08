import React from 'react';

import './index.scss';

function Filters() {
  return (
    <div className='filters'>
      <div className='wrapper'>
        <img src={require('../../../../assets/images/edit.png')} alt='edit' />
          Update Itinerary
      </div>
    </div>
  )
}

export default Filters;