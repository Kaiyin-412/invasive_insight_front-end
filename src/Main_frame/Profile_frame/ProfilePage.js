import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import './ProfilePage.css';
import backgroundImg from '../../image/Quiz_background_image/latestquizbg.jpg';
import badgeImage from '../../image/Dashboard_image/badge.png';

function ProfilePage() {
  const [userData, setUserData] = useState({}); 

  useEffect(() => {
    // for fetching user data from the backend
    const fetchUserData = async () => {
    try {
      // Replace this with actual API call in production
      const mockData = {
        username: "WaWa",
        role: "Admin",
        fullName: "WaWa",
        gender: "Male",
        email: "wawa@jiajia.com",
        phone: "012-3456789",
        profileImage: backgroundImg, 
        backgroundImage: backgroundImg, 
        badges: [
          badgeImage,
          badgeImage, 
          badgeImage, 
          badgeImage,
          badgeImage,
          badgeImage,
        ],
      };

      setUserData(mockData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

    fetchUserData();
  }, []);

  return (
    <div className="ProfilePage">
      <SideBar />
      <div className="ProfileFrame">
        <div 
  className="ProfileBackground" 
  style={{ backgroundImage: `url(${userData.backgroundImage || backgroundImg})` }}
></div>
        <div className="ProfileDetails">
          <img
            src={userData.profileImage || backgroundImg}
            alt="Profile"
            className="ProfileImage"
          />
          <div className="UserInfo">
            <p className="Username">{userData.username || 'Username'}</p>
            <p className="UserRole">{userData.role || 'Role'}</p>
          </div>
        </div>
        <div className="ProfileContent">
  <div className="UserInfoColumns">
    {/* Left Column */}
    <div className="InfoBox">
      <p className="InfoBoxTitle">Full Name</p>
      <div className="InfoBoxContent">{userData.fullName || 'UserName'}</div>
    </div>
    <div className="InfoBox">
      <p className="InfoBoxTitle">Gender</p>
      <div className="InfoBoxContent">{userData.gender || 'Gender'}</div>
    </div>
  </div>
  {/* Right Column */}
  <div className="UserInfoColumns">
    <div className="InfoBox">
      <p className="InfoBoxTitle">Email</p>
      <div className="InfoBoxContent">{userData.email || 'wawa@gmail.com'}</div>
    </div>
    <div className="InfoBox">
      <p className="InfoBoxTitle">Phone</p>
      <div className="InfoBoxContent">{userData.phone || '012-34567890'}</div>
    </div>
  </div>
  {/* Achievements */}
  <div className="Achievements">
    <p><strong>Achievements:</strong></p>
    <div className="Badges">
      {userData.badges && userData.badges.length > 0 ? (
        userData.badges.map((badge, index) => (
          <img key={index} src={badge} alt={`Badge ${index + 1}`} />
        ))
      ) : (
        <p>No achievements yet.</p>
      )}
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default ProfilePage;
