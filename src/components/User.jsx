import React, { useState } from 'react';
import { Eye, Trash2, Bell, Headphones, User, Plus } from 'lucide-react';
import AddUserModal from './AddUserModal';

export default function UserManagementPage({ onNavigateToProfile }) {
  const [users, setUsers] = useState(() => {
    // Load users from localStorage on component mount
    const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (savedUsers.length === 0) {
      // If no saved users, use default users
      const defaultUsers = [
        { id: 1, name: 'Dave Richards', email: 'dave@mail.com', contact: '+1 234-567-8900' },
        { id: 2, name: 'Abhishek Hari', email: 'hari@mail.com', contact: '+1 234-567-8901' },
        { id: 3, name: 'Nishta Gupta', email: 'nishta@mail.com', contact: '+1 234-567-8902' }
      ];
      localStorage.setItem('users', JSON.stringify(defaultUsers));
      return defaultUsers;
    }
    return savedUsers;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleView = (user) => {
    // Navigate to the specific user's profile page
    if (onNavigateToProfile) {
      onNavigateToProfile(user);
    }
  };

  const handleAddUser = (userData) => {
    setUsers([...users, userData]);
    // Update localStorage
    const updatedUsers = [...users, userData];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm border-b border-gray-200">
        <div className="w-full h-[72px] px-8 py-4 flex items-center justify-between">
            {/* Logo - Left Corner */}
            <div className="flex items-start">
              <div className="flex flex-col items-center">
                <div className="border-[2.7px] border-black flex items-center justify-center" style={{width: '84.67px', height: '31.43px', marginTop: '8px', marginLeft: '32px'}}>
                  <div className="text-base font-bold text-black leading-tight">LOGO</div>
                </div>
                <div className="text-black text-center text-[6px] font-bold" style={{marginTop: '2px', marginLeft: '32px'}}>
                  <div>ESTD</div>
                  <div>2025</div>
                </div>
              </div>
            </div>

          {/* Right Icons - Right Corner */}
          <div className="flex items-center gap-6">
            <button className="text-gray-600 hover:text-gray-900">
              <Headphones size={22} />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <Bell size={22} />
            </button>
            <button className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
              <User size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Table Header */}
          <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900 leading-tight">Users</h1>
            <button
              onClick={openModal}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium"
            >
              <Plus size={18} />
              Add user
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-3 text-left text-gray-600" style={{fontFamily: 'Nunito Sans', fontWeight: 400, fontStyle: 'normal', fontSize: '14px', lineHeight: '20px', letterSpacing: '0%'}}>
                    Sr. No
                  </th>
                  <th className="text-left text-gray-600" style={{width: '400px', height: '44px', paddingRight: '12px', paddingLeft: '12px', fontFamily: 'Nunito Sans', fontWeight: 400, fontStyle: 'normal', fontSize: '14px', lineHeight: '20px', letterSpacing: '0%'}}>
                    User name
                  </th>
                  <th className="px-6 py-3 text-left text-gray-600" style={{fontFamily: 'Nunito Sans', fontWeight: 400, fontStyle: 'normal', fontSize: '14px', lineHeight: '20px', letterSpacing: '0%'}}>
                    E-mail
                  </th>
                  <th className="px-6 py-3 text-right text-gray-600" style={{fontFamily: 'Nunito Sans', fontWeight: 400, fontStyle: 'normal', fontSize: '14px', lineHeight: '20px', letterSpacing: '0%'}}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="pl-6 pr-2 py-4 text-gray-900" style={{fontFamily: 'Nunito Sans', fontWeight: 400, fontStyle: 'normal', fontSize: '14px', lineHeight: '20px', letterSpacing: '0%'}}>{index + 1}</td>
                    <td className="pr-6 py-4 text-gray-900" style={{fontFamily: 'Nunito Sans', fontWeight: 400, fontStyle: 'normal', fontSize: '14px', lineHeight: '20px', letterSpacing: '0%'}}>{user.name}</td>
                    <td className="px-6 py-4 text-gray-900" style={{fontFamily: 'Nunito Sans', fontWeight: 400, fontStyle: 'normal', fontSize: '14px', lineHeight: '20px', letterSpacing: '0%'}}>{user.email}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button
                          onClick={() => handleView(user)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="text-gray-400 hover:text-red-600"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Add User Modal */}
      <AddUserModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddUser={handleAddUser}
        onNavigateToProfile={onNavigateToProfile}
      />
    </div>
  );
}