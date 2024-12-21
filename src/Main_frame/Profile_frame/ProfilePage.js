import React, { useEffect, useState,useContext } from 'react';
import SideBar from '../SideBar/SideBar';
import './ProfilePage.css';
import backgroundImg from '../../image/Profile_image/profilebg.jpg';
import profileImg from '../../image/Profile_image/profileimg.jpg';
import badgeImage from '../../image/Dashboard_image/badge.png';
import axios from 'axios';
import { id } from '../../Login_page/Login/login';
import { FontSizeContext } from '../../FontSize/FontSizeContext';

function ProfilePage() {

  // handle the change in fontsize
  const {fontSize} = useContext(FontSizeContext);


  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false); // Modal state
  const [editedData, setEditedData] = useState({}); // Data being edited

  // update user profile 
  const update= async()=>{
    const Username = document.getElementById("username").value;
    const Email = document.getElementById("email").value;
    console.log("username "+Username);
    console.log("EMial" + Email);
    const data={
      "username" : Username,
      "email" : Email
    }
    try{
      const res = await axios.put(`http://127.0.0.1:5000/user/update_profile/${id}`,data);
      console.log(res.data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:5000/users");
        console.log("Fetched users:", res.data);
        const user = res.data.find((user) => user.id === id);
        console.log("Matched user:", user);
        
        if (user) {
          setUserData({
            ...user,
            profileImage: profileImg,
            backgroundImage: backgroundImg,
            badges: [badgeImage, badgeImage, badgeImage, badgeImage, badgeImage, badgeImage],
            gender: "Male",
            role: "Student",
            fullName: user.username,
            phone: "012-3456789",
          });
        }
      } catch (err) {
        console.error("Error fetching user details:", err);
      }
    };

    fetchUserData();
  }, []); // Runs once when the component mounts

  const handleEditButtonClick = () => {
    setEditedData(userData);
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSaveChanges = async() => {

    try {
      // Save the changes to the backend
      await update();
  
      // Fetch the latest user data
      const res = await axios.get("http://127.0.0.1:5000/users");
      const updatedUser = res.data.find((user) => user.id === id);
  
      if (updatedUser) {
        // Update the local state with the latest data
        setUserData({
          ...updatedUser,
          profileImage: profileImg,
          backgroundImage: backgroundImg,
          badges: [badgeImage, badgeImage, badgeImage, badgeImage, badgeImage, badgeImage],
          gender: editedData.gender,
          role: editedData.role,
          phone: editedData.phone
        });
      }
      console.log("User data updated:", updatedUser);
  
      // Close the editing frame
      setIsEditing(false);

    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div className="ProfilePage" style={{fontSize}}>
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
              <p className="InfoBoxTitle">Username</p>
              <div className="InfoBoxContent">{userData.username || 'UserName'}</div>
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
                Username:
                <input
                  id="username"
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
                  id="email"
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
                <button onClick={()=>{handleSaveChanges()}}>Save</button>
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