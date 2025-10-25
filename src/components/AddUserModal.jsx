import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AddUserModal({ isOpen, onClose, onAddUser, onNavigateToProfile }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Validation for name field - only allow characters
    if (name === 'name') {
      // Check if value contains only letters and spaces
      const isValid = /^[a-zA-Z\s]*$/.test(value);
      if (!isValid && value !== '') {
        alert('Please enter characters only');
        return;
      }
    }
    
    
    // Validation for contact - must be exactly 10 digits
    if (name === 'contact') {
      const isValid = /^[0-9]*$/.test(value);
      if (!isValid && value !== '') {
        alert('Please enter numbers only');
        return;
      }
      if (value.length > 10) {
        alert('Contact should be exactly 10 digits');
        return;
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate contact number before saving
    if (formData.contact && formData.contact.length !== 10) {
      alert('Contact must be exactly 10 digits');
      return;
    }
    
    if (formData.name && formData.email && formData.contact) {
      // Create a complete user object with additional fields for BasicInfo
      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        firstName: formData.name.split(' ')[0] || '',
        lastName: formData.name.split(' ').slice(1).join(' ') || '',
        yearOfBirth: '',
        gender: '',
        phoneNumber: formData.contact,
        alternatePhone: '',
        address: '',
        pincode: '',
        domicileState: '',
        domicileCountry: '',
        countryCode: '+91'
      };
      
      // Store in localStorage
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      
      onAddUser(newUser);
      setFormData({ name: '', email: '', contact: '' });
      onClose();
      // Navigate to My Profile page after adding user
      if (onNavigateToProfile) {
        onNavigateToProfile(newUser);
      }
    }
  };

  const handleCancel = () => {
    setFormData({ name: '', email: '', contact: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50" style={{ opacity: 1 }}>
      <div className="bg-white rounded-lg shadow-xl mr-8 flex flex-col" style={{ width: '623px', height: '720px', opacity: 1 }}>
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 leading-tight">Add User</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-4 flex-1 flex flex-col">
          <form onSubmit={handleSubmit} className="flex flex-col h-full">
            <div className="flex-1" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* Name Field */}
              <div>
                <label className="block mb-2">
                  <span style={{ 
                    width: '93px', 
                    height: '20px',
                    fontFamily: 'Nunito Sans', 
                    fontSize: '12px', 
                    fontWeight: 400, 
                    fontStyle: 'normal',
                    lineHeight: '20px', 
                    letterSpacing: '0%', 
                    color: '#777777'
                  }}>
                    Name of the user
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Type here"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Email and Contact Row */}
              <div className="grid grid-cols-2 gap-4" style={{ gap: '10px' }}>
                <div>
                  <label className="block mb-2">
                    <span style={{ 
                      width: '36px', 
                      height: '20px',
                      fontFamily: 'Nunito Sans', 
                      fontSize: '12px', 
                      fontWeight: 400, 
                      fontStyle: 'normal',
                      lineHeight: '20px', 
                      letterSpacing: '0%', 
                      color: '#777777'
                    }}>
                      E-mail
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Type here"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2">
                    <span style={{ 
                      width: '42px', 
                      height: '20px',
                      fontFamily: 'Nunito Sans', 
                      fontSize: '12px', 
                      fontWeight: 400, 
                      fontStyle: 'normal',
                      lineHeight: '20px', 
                      letterSpacing: '0%', 
                      color: '#777777'
                    }}>
                      Contact
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    placeholder="Type here"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 mt-8 pt-6" style={{ gap: '10px' }}>
              <button
                type="button"
                onClick={handleCancel}
                className="w-[75px] h-[40px] px-4 py-[10px] rounded-[6px] bg-[#F0EBFF] transition-colors flex items-center justify-center"
                style={{ gap: '4px' }}
              >
                <span style={{ 
                  fontFamily: 'Nunito Sans', 
                  fontSize: '14px', 
                  fontWeight: 400, 
                  fontStyle: 'normal',
                  lineHeight: '20px', 
                  letterSpacing: '0%', 
                  color: '#6834FF'
                }}>
                  Cancel
                </span>
              </button>
              <button
                type="submit"
                className="w-[59px] h-[40px] px-4 py-[10px] rounded-[6px] bg-[#6834FF] transition-colors flex items-center justify-center"
                style={{ gap: '4px' }}
              >
                <span style={{ 
                  fontFamily: 'Nunito Sans', 
                  fontSize: '14px', 
                  fontWeight: 400, 
                  fontStyle: 'normal',
                  lineHeight: '20px', 
                  letterSpacing: '0%', 
                  color: '#FFFFFF'
                }}>
                  Add
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
