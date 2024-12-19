import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import './ProfilePage.css';
import backgroundImg from '../../image/Profile_image/profilebg.jpg';
import profileImg from '../../image/Profile_image/profileimg.jpg';
import badgeImage from '../../image/Dashboard_image/badge.png';
import axios from 'axios';
import { id } from '../../Login_page/Login/login';
const getUserDetail = async()=>{
  let array=[];
  try{
    const res = await axios.get("http://127.0.0.1:5000/users");
    // copy all the data from backend into array
    array=[...res.data];
    // filter the user detail based on the user id
    const user = array.find(user => user.id === id);
    // use for debug 
    console.log(user)
    return user;
  }catch(err){
    console.log(err);
  }
}

const userDetail = await getUserDetail(); 

function ProfilePage() {

  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false); // Modal state
  const [editedData, setEditedData] = useState({}); // Data being edited


  // this the user detail
  console.log(userDetail);

  const [userData, setUserData] = useState({}); 


  useEffect(() => {
    // for fetching user data from the backend
    const fetchUserData = async () => {
      try {
        // Replace with actual API
        const mockData = {
          username: "WaWa",
          role: "Admin",
          fullName: "WaWa",
          gender: "Male",
          email: "wawa@jiajia.com",
          phone: "012-3456789",
          profileImage: profileImg,
          backgroundImage: backgroundImg,
          badges: [badgeImage, badgeImage, badgeImage, badgeImage, badgeImage, badgeImage],
        };

        setUserData(mockData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleEditButtonClick = () => {
    setEditedData(userData);
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSaveChanges = () => {
    setUserData(editedData);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

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
            src={userData.profileImage || profileImg}
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
            <div className="InfoBox">
              <p className="InfoBoxTitle">Full Name</p>
              <div className="InfoBoxContent">{userData.fullName || 'UserName'}</div>
            </div>
            <div className="InfoBox">
              <p className="InfoBoxTitle">Gender</p>
              <div className="InfoBoxContent">{userData.gender || 'Gender'}</div>
            </div>
          </div>
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
        <button className="EditButton" onClick={handleEditButtonClick}>Edit</button>

        {isEditing && (
          <div className="EditModal">
            <div className="EditModalContent">
              <h2>Edit Profile</h2>
              <label>
                Full Name:
                <input
                  type="text"
                  name="fullName"
                  value={editedData.fullName}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Gender:
                <input
                  type="text"
                  name="gender"
                  value={editedData.gender}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={editedData.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Phone:
                <input
                  type="text"
                  name="phone"
                  value={editedData.phone}
                  onChange={handleInputChange}
                />
              </label>
              <div className="ModalActions">
                <button onClick={handleSaveChanges}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
