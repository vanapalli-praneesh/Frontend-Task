import React, { useState } from 'react';
import { Edit3 } from 'lucide-react';

export default function BasicInfo({ userData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: userData?.firstName || userData?.name?.split(' ')[0] || 'Dave',
    lastName: userData?.lastName || userData?.name?.split(' ').slice(1).join(' ') || 'Richards',
    email: userData?.email || 'dave@mail.com',
    yearOfBirth: userData?.yearOfBirth || '',
    gender: userData?.gender || '',
    phoneNumber: userData?.phoneNumber || userData?.contact || '8332883854',
    alternatePhone: userData?.alternatePhone || '',
    address: userData?.address || '',
    pincode: userData?.pincode || '',
    domicileState: userData?.domicileState || '',
    domicileCountry: userData?.domicileCountry || '',
    countryCode: userData?.countryCode || '+91'
  });

  const countries = [
    { code: 'IN', dialCode: '+91', name: 'India' },
    { code: 'US', dialCode: '+1', name: 'United States' },
    { code: 'UK', dialCode: '+44', name: 'United Kingdom' },
    { code: 'AU', dialCode: '+61', name: 'Australia' },
    { code: 'DE', dialCode: '+49', name: 'Germany' },
    { code: 'FR', dialCode: '+33', name: 'France' },
    { code: 'JP', dialCode: '+81', name: 'Japan' },
    { code: 'CN', dialCode: '+86', name: 'China' },
    { code: 'BR', dialCode: '+55', name: 'Brazil' },
  ];
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Validation for first name and last name - only allow characters
    if (name === 'firstName' || name === 'lastName') {
      // Check if value contains only letters and spaces
      const isValid = /^[a-zA-Z\s]*$/.test(value);
      if (!isValid && value !== '') {
        alert('Please enter characters only');
        return;
      }
    }
    
    // Validation for pincode - only allow numbers
    if (name === 'pincode') {
      const isValid = /^[0-9]*$/.test(value);
      if (!isValid && value !== '') {
        alert('Please enter numbers only');
        return;
      }
    }
    
    // Validation for phone number - must be exactly 10 digits
    if (name === 'phoneNumber') {
      const isValid = /^[0-9]*$/.test(value);
      if (!isValid && value !== '') {
        alert('Please enter numbers only');
        return;
      }
      if (value.length > 10) {
        alert('Phone number should be exactly 10 digits');
        return;
      }
    }
    
    // Validation for alternate phone - must be exactly 10 digits
    if (name === 'alternatePhone') {
      const isValid = /^[0-9]*$/.test(value);
      if (!isValid && value !== '') {
        alert('Please enter numbers only');
        return;
      }
      if (value.length > 10) {
        alert('Alternate phone should be exactly 10 digits');
        return;
      }
    }
    
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Validate phone numbers before saving
    if (formData.phoneNumber && formData.phoneNumber.length !== 10) {
      alert('Phone number must be exactly 10 digits');
      return;
    }
    
    if (formData.alternatePhone && formData.alternatePhone.length !== 10) {
      alert('Alternate phone must be exactly 10 digits');
      return;
    }
    
    // Update the user data in localStorage
    if (userData) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const updatedUsers = users.map(user => 
        user.id === userData.id 
          ? { ...user, ...formData, name: `${formData.firstName} ${formData.lastName}`.trim() }
          : user
      );
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pb-0">
        <h2 
          style={{
            width: '107px',
            height: '28px',
            opacity: 1,
            fontFamily: 'Nunito Sans',
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '28px',
            letterSpacing: '0%',
            color: 'rgba(35, 35, 35, 1)'
          }}
        >
          Basic Details
        </h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-indigo-600 hover:text-indigo-700 transition-colors bg-indigo-50/80 p-1.5 rounded-md"
          style={{ textDecoration: 'none',
                   display: 'inline-flex',
                   alignItems: 'center',
                   justifyContent: 'center'
           }}
        >
          <Edit3 size={16} />
        </button>
      </div>

      {/* Form */}
      <div className="p-4">
        <div className="grid grid-cols-1 gap-y-3">
          {/* First Row: Last Name, First Name, Email ID */}
          <div className="grid grid-cols-3 gap-x-[20px]" style={{ marginBottom: '5px' }}>
            {/* First Name */}
            <div>
              <label 
                className="block mb-1"
                style={{
                  width: '56px',
                  height: '20px',
                  opacity: 1,
                  fontFamily: 'Nunito Sans',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  color: 'rgba(119, 119, 119, 1)'
                }}
              >
                First name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="e.g. John"
                disabled={!isEditing}
                className="w-full h-10 px-3 text-sm text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-md focus:ring-1 focus:ring-indigo-500 disabled:text-gray-500"
                style={{
                  marginRight: '0px',
                  width: '353.3333435058594px',   // ✅ Updated width
                  height: '40px',                  // ✅ Updated height
                  justifyContent: 'space-between', // ✅ Added justify-content
                  opacity: 1,                       // ✅ Set opacity
                  borderRadius: '6px',              // ✅ Updated border-radius
                  borderWidth: '1px',               // ✅ Updated border-width
                  paddingTop: '4px',                // ✅ Updated padding top
                  paddingRight: '12px',             // ✅ Updated padding right
                  paddingBottom: '4px',             // ✅ Updated padding bottom
                  paddingLeft: '12px',              // ✅ Updated padding left
                  outline: 'none'
                }}
              />
            </div>

            {/* Last Name */}
            <div>
              <label 
                className="block mb-1"
                style={{
                  width: '57px',
                  height: '20px',
                  opacity: 1,
                  fontFamily: 'Nunito Sans',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  color: 'rgba(119, 119, 119, 1)'
                }}
              >
                Last name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="e.g. Doe"
                disabled={!isEditing}
                className="w-full h-10 px-3 text-sm text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-md focus:ring-1 focus:ring-indigo-500 disabled:text-gray-500"
                style={{
                  marginRight: '0px',
                  width: '353.3333435058594px',   // ✅ Updated width
                  height: '40px',                  // ✅ Updated height
                  justifyContent: 'space-between', // ✅ Added justify-content
                  opacity: 1,                       // ✅ Set opacity
                  borderRadius: '6px',              // ✅ Updated border-radius
                  borderWidth: '1px',               // ✅ Updated border-width
                  paddingTop: '4px',                // ✅ Updated padding top
                  paddingRight: '12px',             // ✅ Updated padding right
                  paddingBottom: '4px',             // ✅ Updated padding bottom
                  paddingLeft: '12px',              // ✅ Updated padding left
                  outline: 'none'
                }}
              />
            </div>

            {/* Email ID */}
            <div>
              <label 
                className="block mb-1"
                style={{
                  width: '46px',
                  height: '20px',
                  gap: '4px',
                  opacity: 1,
                  fontFamily: 'Nunito Sans',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  color: 'rgba(119, 119, 119, 1)'
                }}
              >
                Email ID
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="e.g. mrnobody@mail.com"
                disabled={!isEditing}
                className="w-full h-10 px-3 text-sm text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-md focus:ring-1 focus:ring-indigo-500 disabled:text-gray-500"
                style={{
                  width: '353.3333435058594px',   // ✅ Updated width
                  height: '40px',                  // ✅ Updated height
                  justifyContent: 'space-between', // ✅ Added justify-content
                  opacity: 1,                       // ✅ Set opacity
                  borderRadius: '6px',              // ✅ Updated border-radius
                  borderWidth: '1px',               // ✅ Updated border-width
                  paddingTop: '4px',                // ✅ Updated padding top
                  paddingRight: '12px',             // ✅ Updated padding right
                  paddingBottom: '4px',             // ✅ Updated padding bottom
                  paddingLeft: '12px',              // ✅ Updated padding left
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Second Row: Year of Birth, Gender, Phone Number, Alternate Phone */}
          {/* Second Row: Year of Birth, Gender, Phone Number, Alternate Phone */}
          <div className="flex gap-0 mb-2 items-start" style={{ marginBottom: '5px' ,
          gap: '0px'
          }}>
            {/* Left side: Year of Birth + Gender */}
            <div className="flex gap-0 mb-2 items-start"> {/* ✅ Main row: dropdowns side by side */}
  {/* Year of Birth */}
            <div className="flex flex-col mr-0"> {/* Keep label above select */}
              <label 
                className="block mb-1 text-left"
                style={{
                  width: '66px',
                  height: '20px',
                  opacity: 1,
                  fontFamily: 'Nunito Sans',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '20px',
                  color: 'rgba(119, 119, 119, 1)'
                }}
              >
                Year of birth
              </label>
              <div className="relative">
                <select
                  name="yearOfBirth"
                  value={formData.yearOfBirth}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-[164.675px] h-10 px-3 text-sm text-gray-800 bg-gray-100 border border-gray-200 rounded-l-md appearance-none cursor-pointer"
                  style={{
                    width: '164.675px',
                    height: '40px',
                    padding: '4px 12px',
                    backgroundColor: 'rgba(245, 246, 247, 1)',
                    border: '1px solid rgba(223, 226, 231, 1)',
                    outline: 'none'
                  }}
                >
                  <option value="">YYYY</option>
                  {Array.from({ length: 50 }, (_, i) => 2024 - i).map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                {/* Custom arrow for Year of Birth */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Gender placed beside Year of Birth */}
            <div className="flex flex-col ml-0" style = {{ marginLeft: '20px'}}> {/* ✅ Removed margin to be flush */}
              <label 
                className="block mb-1 text-left mr-4"
                style={{
                  width: '66px', // match Year of Birth label
                  height: '20px',
                  opacity: 1,
                  fontFamily: 'Nunito Sans',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '20px',
                  color: 'rgba(119, 119, 119, 1)'
                }}
              >
                Gender
              </label>
              <div className="relative">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-[164.675px] h-10 px-3 text-sm text-gray-800 bg-gray-100 border border-gray-200 rounded-r-md appearance-none cursor-pointer"
                  style={{
                    width: '164.675px',
                    height: '40px',
                    padding: '4px 12px',
                    backgroundColor: 'rgba(245, 246, 247, 1)',
                    border: '1px solid rgba(223, 226, 231, 1)',
                    outline: 'none'
                  }}
                >
                  <option value="">Select an option</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {/* Custom arrow for Gender */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

           

            {/* Right side: Phone Number + Alternate Phone */}
            <div className="grid grid-cols-2 gap-x-[15px] ml-20" style = {{ marginLeft: '127px'}}>
              {/* Phone Number */}
              <div>
                <label 
                  className="block mb-1"
                  style={{
                    width: '79px',
                    height: '20px',
                    opacity: 1,
                    fontFamily: 'Nunito Sans',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '20px',
                    letterSpacing: '0%',
                    color: 'rgba(119, 119, 119, 1)'
                  }}
                >
                  Phone number
                </label>
                <div className="flex">
                  <div className="relative flex items-center px-3 py-0 border border-r-0 rounded-l-md bg-gray-50 border-gray-200">
                    <div className="flex items-center">
                    <img
                        key={formData.countryCode} // ✅ added
                        src={`https://flagcdn.com/h20/${(formData.countryCode || 'in').toLowerCase()}.png`}
                        alt={formData.countryCode || 'IN'}
                        className="w-6 h-4 mr-2 rounded-sm object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'https://flagcdn.com/h20/in.png'; // fallback flag (India)
                        }}
                      />
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="bg-transparent border-none outline-none text-sm text-gray-800 appearance-none cursor-pointer"
                        style = {{
                          width: 'auto',
                          minWidth: 'fit-content',
                          paddingRight: '18px',
                        }}
                      >
                        {countries.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center pr-1">
                        <svg
                          className="w-3 h-3 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    style={{
                      height: '40px',
                      width: '184px',           // ✅ Match other input fields
                      borderRadius: '6px', // ✅ Rounded right corners
                      borderWidth: '1px',
                      paddingTop: '4px',
                      paddingRight: '0px',
                      paddingBottom: '4px',
                      paddingLeft: '12px',
                      opacity: 1,
                      outline: 'none'
                    }}
                    className="w-full h-10 px-3 text-sm text-gray-800 bg-gray-100 border border-gray-200 rounded-r-none focus:ring-1 focus:ring-indigo-500 disabled:text-gray-500"
                  />
                </div>
              </div>

              {/* Alternate Phone */}
              <div style = {{ marginLeft: '15px'}}>
                <label 
                  className="block mb-1"
                  style={{
                    width: '105px',
                    height: '20px',
                    opacity: 1,
                    fontFamily: 'Nunito Sans',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '20px',
                    letterSpacing: '0%',
                    paddingLeft: '40px',
                    color: 'rgba(119, 119, 119, 1)'
                  }}
                >
                  Alternate Phone no
                </label>
                <input
                  type="tel"
                  name="alternatePhone"
                  value={formData.alternatePhone}
                  onChange={handleInputChange}
                  placeholder="e.g. 9876543210"
                  disabled={!isEditing}
                  style={{
                    width: '353.3500061035156px',
                    height: '40px',
                    marginLeft: '40px',
                    paddingTop: '4px',
                    paddingRight: '12px',
                    paddingBottom: '4px',
                    paddingLeft: '12px',
                    opacity: 1,
                    borderWidth: '1px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(245, 246, 247, 1)',
                    border: '1px solid rgba(223, 226, 231, 1)',
                    outline: 'none'
                  }}
  
                  className="w-full h-10 px-3 text-sm text-gray-800 bg-gray-100 border border-gray-200 rounded-r-md focus:ring-1 focus:ring-indigo-500 disabled:text-gray-500"
                />
              </div>
            </div>
          </div>


          {/* Third Row: Address, Pincode, Domicile State */}
          <div className="grid grid-cols-3 gap-x-2" style={{ marginBottom: '5px' }}>
            {/* Address */}
            <div >
              <label 
                className="block mb-1"
                style={{
                  width: '45px',
                  height: '20px',
                  gap: '4px',
                  opacity: 1,
                  fontFamily: 'Nunito Sans',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  color: 'rgba(119, 119, 119, 1)'
                }}
              >
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter here"
                disabled={!isEditing}
                style={{
                  width: '353.3299865722656px',
                  height: '120px',
                  paddingTop: '8px',
                  paddingRight: '12px',
                  paddingBottom: '8px',
                  paddingLeft: '12px',
                  gap: '25px',
                  opacity: 1,
                  borderWidth: '1px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(245, 246, 247, 1)',
                  border: '1px solid rgba(223, 226, 231, 1)',
                  outline: 'none',
                  resize: 'none'
                }}
                className="text-sm text-gray-800 placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 disabled:text-gray-500"
              />
            </div>

            {/* Pincode and Domicile Country (stacked) */}
            <div className="flex flex-col gap-y-3" style={{ marginBottom: '5px', marginRight: '10px' }}>
              {/* Pincode */}
              <div>
                <label 
                  className="block mb-1"
                  style={{
                    width: '43px',
                    height: '20px',
                    gap: '4px',
                    opacity: 1,
                    fontFamily: 'Nunito Sans',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '20px',
                    letterSpacing: '0%',
                    color: 'rgba(119, 119, 119, 1)'
                  }}
                >
                  Pincode
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  placeholder="Enter here"
                  disabled={!isEditing}
                  style={{
                    width: '353.29998779296875px',
                    height: '40px',
                    paddingTop: '4px',
                    paddingRight: '12px',
                    paddingBottom: '4px',
                    paddingLeft: '12px',
                    opacity: 1,
                    borderWidth: '1px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(245, 246, 247, 1)',
                    border: '1px solid rgba(223, 226, 231, 1)',
                    outline: 'none'
                  }}
                  className="text-sm text-gray-800 placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 disabled:text-gray-500"
                />
              </div>

              {/* Domicile Country */}
              <div>
                <label 
                  className="block mb-1"
                  style={{
                    width: '91px',
                    height: '20px',
                    opacity: 1,
                    fontFamily: 'Nunito Sans',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '20px',
                    letterSpacing: '0%',
                    color: 'rgba(119, 119, 119, 1)'
                  }}
                >
                  Domicile country
                </label>
                <div className="relative w-[353px]" >
                  <select
                    name="domicileCountry"
                    value={formData.domicileCountry}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    style={{
                      width: '353.37005615234375px',
                      height: '40px',
                      paddingTop: '4px',
                      paddingRight: '36px',
                      paddingBottom: '4px',
                      paddingLeft: '12px',
                      opacity: 1,
                      borderWidth: '1px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(245, 246, 247, 1)',
                      border: '1px solid rgba(223, 226, 231, 1)',
                      outline: 'none'
                    }}
                    className="text-sm text-gray-800 focus:ring-1 focus:ring-indigo-500 disabled:text-gray-500 appearance-none cursor-pointer"
                  >
                    <option value="">Select an option</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                  </select>
                  <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
              </div>
              </div>
            </div>

            {/* Domicile State */}
            <div >
              <label 
                className="block mb-1"
                style={{
                  width: '77px',
                  height: '20px',
                  opacity: 1,
                  fontFamily: 'Nunito Sans',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  color: 'rgba(119, 119, 119, 1)'
                }}
              >
                Domicile state
              </label>
              <div className="relative w-[353px]">
                <select
                  name="domicileState"
                  value={formData.domicileState}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  style={{
                    width: '353.37005615234375px',
                    height: '40px',
                    paddingTop: '4px',
                    paddingRight: '12px',
                    paddingBottom: '4px',
                    paddingLeft: '12px',
                    opacity: 1,
                    borderWidth: '1px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(245, 246, 247, 1)',
                    border: '1px solid rgba(223, 226, 231, 1)',
                    outline: 'none'
                  }}
                  className="text-sm text-gray-800 focus:ring-1 focus:ring-indigo-500 disabled:text-gray-500 appearance-none cursor-pointer"
                >
                  <option value="">Select an option</option>
                  <option value="California">California</option>
                  <option value="New York">New York</option>
                  <option value="Texas">Texas</option>
                  <option value="Florida">Florida</option>
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        {isEditing && (
          <div className="flex justify-end gap-3 pt-4 mt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-1.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}