import React, { useState } from 'react';

const SECTION_IDS = {
  HOME: 'home',
  LISTINGS: 'listings',
  ABOUT: 'about',
  CONTACT: 'contact',
};

function Nav() {
  const [currentSection, setCurrentSection] = useState(SECTION_IDS.HOME);

  const handleSectionChange = (sectionId) => {
    setCurrentSection(sectionId);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a onClick={() => handleSectionChange(SECTION_IDS.HOME)}>Home</a>
          </li>
          <li>
            <a onClick={() => handleSectionChange(SECTION_IDS.LISTINGS)}>Tenant Info</a>
          </li>
          <li>
            <a onClick={() => handleSectionChange(SECTION_IDS.ABOUT)}>About</a>
          </li>
          <li>
            <a onClick={() => handleSectionChange(SECTION_IDS.CONTACT)}>Room Details</a>
          </li>
          <li>
            <a onClick={() => console.log('Logout logic goes here')}>Logout</a>
          </li>
        </ul>
      </nav>
      {currentSection === SECTION_IDS.HOME && (
        <div className="containerHome" id="home">
          <h2>Welcome to Apartment Manager</h2>
          <p>Find your perfect room from our listings below. We provide the best options available in the apartment to suit all your needs.</p>
          <img src="https://www.moneycrashers.com/wp-content/uploads/2023/08/good-landlord-tips-advice-responsibilities.jpg" alt="Picture raba ni" srcSet="https://www.moneycrashers.com/wp-content/uploads/2023/08/good-landlord-tips-advice-responsibilities.jpg 2x" />
        </div>
      )}
      {currentSection === SECTION_IDS.LISTINGS && (
        <div className="containerListings" id="listings">
          <h2>Clients</h2>
          <div className="form-container">
            {/* Form for client input */}
          </div>
          <div id="clients-list">
            {/* Clients will be listed here */}
          </div>
        </div>
      )}
      {currentSection === SECTION_IDS.ABOUT && (
        <div className="containerAbout" id="about">
          <h2>About Us</h2>
          <p>We provide the best room listings in the apartment. Our mission is to help you find a place that you can call home.</p>
          <h2>Mission</h2>
          <p>"Our mission is to revolutionize the tenant experience by providing a seamless, integrated platform that simplifies daily interactions, enhances communication, and fosters a stronger sense of community among residents."</p>
          <h2>Vision</h2>
          <p>"Envision a future where every tenant enjoys a hassle-free living experience, characterized by effortless communication, immediate access to services, and a vibrant community atmosphere, all facilitated by innovative technology."</p>
        </div>
      )}
      {currentSection === SECTION_IDS.CONTACT && (
        <div className="containerContact" id="contact">
          <div className="form-container">
            <h2>Add New Room</h2>
            <input type="number" id="room-num" placeholder="Room Number" />
            <input type="number" id="room-price" placeholder="Room Price" />
            <input type="text" id="room-size" placeholder="Room Size" />
            <button onClick={() => console.log('Add room logic goes here')}>Add Room</button>
          </div>
          <div id="rooms-list">
            {/* Rooms will be listed here */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;