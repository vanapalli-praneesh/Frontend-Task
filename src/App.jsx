import React, { useState } from 'react';
import UserManagementPage from './components/User';
import MyProfile from './components/MyProfile';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('users');
  const [userData, setUserData] = useState(null);

  const handleNavigateToProfile = (newUserData) => {
    // Update user data if new user is added or when viewing a specific user
    if (newUserData) {
      setUserData(newUserData);
    }
    // Navigate to My Profile page when Add button is clicked in modal or when viewing a user
    setCurrentPage('profile');
  };

  const handleBackToUsers = () => {
    setCurrentPage('users');
    setUserData(null);
  };

  return (
    <div className="App">
      {currentPage === 'users' ? (
        <UserManagementPage onNavigateToProfile={handleNavigateToProfile} />
      ) : (
        <MyProfile onBackToUsers={handleBackToUsers} userData={userData} />
      )}
    </div>
  );
}

export default App;
