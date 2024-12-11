import React from 'react'
import SideBar from '../SideBar/SideBar'
import "./ProfilePage.css";

function ProfilePage() {
  return (
    <div className="ProfilePage">
      <SideBar />
      <div className="ProfileFrame">
        {/* Profile Background */}
        <div className="ProfileBackground"></div>

        {/* Profile Image and User Details */}
        <div className="ProfileDetails">
          <img
            src="/path-to-profile-image.jpg"
            alt="Profile"
            className="ProfileImage"
          />
          <div className="UserInfo">
            <p className="Username">John Doe</p>
            <p className="UserRole">Admin</p>
          </div>
        </div>

        {/* Info and Achievements Section */}
        <div className="ProfileContent">
          <div className="UserInfoColumns">
            <div>
              <p><strong>Full Name:</strong> John Doe</p>
              <p><strong>Gender:</strong> Male</p>
            </div>
            <div>
              <p><strong>Email:</strong> john.doe@example.com</p>
              <p><strong>Phone:</strong> +1234567890</p>
            </div>
          </div>

          <div className="Achievements">
            <p><strong>Achievements:</strong></p>
            <div className="Badges">
              <img src="/path-to-badge1.png" alt="Badge 1" />
              <img src="/path-to-badge2.png" alt="Badge 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;