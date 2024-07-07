import React from 'react';


function Nav({ showSection }) {
  return (
    <nav>
      <ul>
        <li><a onClick={() => showSection('Home')}>Home</a></li>
        <li><a onClick={() => showSection('Listings')}>Tenant Info</a></li>
        <li><a onClick={() => showSection('About')}>About</a></li>
        <li><a onClick={() => showSection('Contact')}>Room Details</a></li>
        <li><a onClick={() => logout()}>Logout</a></li>
      </ul>
    </nav>
  );
}

export default Nav;