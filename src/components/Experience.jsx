import React, { useState } from 'react';
import { Edit3 } from 'lucide-react';

export default function Experience() {
  const [isEditing, setIsEditing] = useState(false);
  const [experienceData, setExperienceData] = useState({
    domain1: {
      domain: 'Technology',
      subDomain: 'MERN Stack',
      experience: 'Select an option'
    },
    domain2: {
      domain: 'Technology',
      subDomain: 'MERN Stack',
      experience: 'Select an option'
    },
    linkedin: '',
    resume: ''
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeURL, setResumeURL] = useState(null);

  const handleExperienceChange = (section, field, value) => {
    // Validation for domain and subDomain fields - only allow characters
    if (field === 'domain' || field === 'subDomain') {
      // Check if value contains only letters and spaces
      const isValid = /^[a-zA-Z\s]*$/.test(value);
      if (!isValid && value !== '') {
        alert('Please enter characters only');
        return;
      }
    }
    
    setExperienceData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleInputChange = (field, value) => {
    // Validation for profile URL fields - must be valid URL
    if (field === 'linkedin' || field === 'resume') {
      if (value !== '') {
        const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        if (!urlPattern.test(value)) {
          alert('Please enter a valid URL');
          return;
        }
      }
    }
    
    setExperienceData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="p-6">
      {/* Work Experience Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 
            style={{
              width: '140px',
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
            Work Experience
          </h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <Edit3 size={20} />
          </button>
        </div>

        {/* Domain 1 */}
        <div className="mb-6">
          <div className="mb-4">
            <label 
              className="block mb-1"
              style={{
                width: '42px',
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
              Domain
            </label>
            <input
              type="text"
              value={experienceData.domain1.domain}
              onChange={(e) => handleExperienceChange('domain1', 'domain', e.target.value)}
              placeholder="e.g. Technology"
              disabled={!isEditing}
              className={`w-full px-3 py-2 border rounded-md text-sm ${
                isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
              }`}
              style={{
                background: 'rgba(245, 246, 247, 1)', // 🟩 added background color
                border: '1px solid rgba(223, 226, 231, 1)',
              }}
            />
          </div>

          <div className="flex items-start gap-6">
            <div className="w-px h-12 bg-gray-300 mt-6 ml-2 mr-4"></div>
            <div className="ml-[-20px]">
              <label 
                className="block mb-1"
                style={{
                  width: '67px',
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
                Sub-domain
              </label>
              <input
                type="text"
                value={experienceData.domain1.subDomain}
                onChange={(e) => handleExperienceChange('domain1', 'subDomain', e.target.value)}
                placeholder="e.g. MERN Stack"
                disabled={!isEditing}
                className={`w-full px-3 py-2 border rounded-md text-sm ${
                  isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                }`}
                style = {{
                  width: '1000px',
                  height: '40px',
                  backgroundColor: 'rgba(245, 246, 247, 1)',
                  border: '1px solid rgba(223, 226, 231, 1)'
                }}
              />
            </div>
            <div>
              <label 
                className="block mb-1"
                style={{
                  width: '59px',
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
                Experience
              </label>
              <div className="relative w-[348px]">
                <select
                  value={experienceData.domain1.experience}
                  onChange={(e) => handleExperienceChange('domain1', 'experience', e.target.value)}
                  disabled={!isEditing}
                  style={{
                    width: '348px',              // 🟩 fixed width
                    height: '40px',              // 🟩 fixed height
                    paddingTop: '4px',
                    paddingRight: '36px',        // 🟩 extra padding for icon space
                    paddingBottom: '4px',
                    paddingLeft: '12px',
                    borderRadius: '6px',         // 🟩 rounded corners
                    background: 'rgba(245, 246, 247, 1)', // 🟩 background color
                    border: '1px solid rgba(223, 226, 231, 1)', // 🟩 border color
                    outline: 'none',
                    opacity: 1,
                    appearance: 'none',          // hide native arrow
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    justifyContent: 'space-between'
                  }}
                  className={`w-full px-3 py-2 border rounded-md text-sm appearance-none ${
                    isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <option>Select an option</option>
                  <option>0-1 years</option>
                  <option>1-3 years</option>
                  <option>3-5 years</option>
                  <option>5+ years</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="rgba(119, 119, 119, 1)"
                  strokeWidth="2"
                  className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Domain 2 */}
        <div className="mb-6">
          <div className="mb-4">
            <label 
              className="block mb-1"
              style={{
                width: '42px',
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
              Domain
            </label>
            <input
              type="text"
              value={experienceData.domain2.domain}
              onChange={(e) => handleExperienceChange('domain2', 'domain', e.target.value)}
              placeholder="e.g. Technology"
              disabled={!isEditing}
              className={`w-full px-3 py-2 border rounded-md text-sm ${
                isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
              }`}
              style={{
                background: 'rgba(245, 246, 247, 1)', // 🟩 added background color
                border: '1px solid rgba(223, 226, 231, 1)',
              }}
            />
          </div>

          <div className="flex items-start gap-6">
            <div className="w-px h-12 bg-gray-300 mt-6 ml-2 mr-4"></div>
            <div className="ml-[-20px]">
              <label 
                className="block mb-1"
                style={{
                  width: '67px',
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
                Sub-domain
              </label>
              <input
                type="text"
                value={experienceData.domain2.subDomain}
                onChange={(e) => handleExperienceChange('domain2', 'subDomain', e.target.value)}
                placeholder="e.g. MERN Stack"
                disabled={!isEditing}
                className={`w-full px-3 py-2 border rounded-md text-sm ${
                  isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                }`}
                style={{
                  width: '1000px',
                  background: 'rgba(245, 246, 247, 1)', // 🟩 added background color
                  border: '1px solid rgba(223, 226, 231, 1)',
                }}
              />
            </div>
            <div>
              <label 
                className="block mb-1"
                style={{
                  width: '59px',
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
                Experience
              </label>
              <div className="relative w-[348px]">
                <select
                  value={experienceData.domain2.experience}
                  onChange={(e) => handleExperienceChange('domain2', 'experience', e.target.value)}
                  disabled={!isEditing}
                  className={`w-full px-3 py-2 border rounded-md text-sm appearance-none ${
                    isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
                  }`}
                  style={{
                    width: '348px',              // 🟩 fixed width
                    height: '40px',              // 🟩 fixed height
                    paddingTop: '4px',
                    paddingRight: '36px',        // 🟩 extra padding for icon space
                    paddingBottom: '4px',
                    paddingLeft: '12px',
                    borderRadius: '6px',
                    background: 'rgba(245, 246, 247, 1)', // 🟩 added background color
                    border: '1px solid rgba(223, 226, 231, 1)',
                    outline: 'none',
                    opacity: 1,
                    appearance: 'none',          // hide native arrow
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    justifyContent: 'space-between'
                  }}
                >
                  <option>Select an option</option>
                  <option>0-1 years</option>
                  <option>1-3 years</option>
                  <option>3-5 years</option>
                  <option>5+ years</option>
                </select>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="rgba(119, 119, 119, 1)"
                    strokeWidth="2"
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                  </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LinkedIn and Resume Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 
              style={{
                width: '70px',
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
              LinkedIn
            </h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <Edit3 size={16} />
            </button>
          </div>
          <div>
            <label 
              className="block mb-1"
              style={{
                width: '62px',
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
              Profile URL
            </label>
            <input
              type="text"
              value={experienceData.linkedin}
              onChange={(e) => handleInputChange('linkedin', e.target.value)}
              placeholder="https://linkedin.com/in/username"
              disabled={!isEditing}
              className={`w-full px-3 py-2 border rounded-md text-sm ${
                isEditing ? 'border-gray-300' : 'border-gray-200 bg-gray-50'
              }`}
              style={{
                background: 'rgba(245, 246, 247, 1)', // 🟩 added background color
                border: '1px solid rgba(223, 226, 231, 1)',
              }}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 
              style={{
                width: '482px',
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
              Resume
            </h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <Edit3 size={16} />
            </button>
          </div>
          <div>
          {isEditing ? (
  // 🟩 Editing mode: always show Browse + file name + View
  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
    <p className="text-sm text-gray-500 mb-2">
      Drag & drop your resume here or
    </p>

    {/* 🟦 Hidden input for selecting file */}
    <input
      type="file"
      id="resume-upload"
      accept=".pdf,.doc,.docx"
      onChange={(e) => {
        const file = e.target.files[0];
        if (file) {
          setResumeFile(file);
          const fileURL = URL.createObjectURL(file);
          setResumeURL(fileURL);
        }
      }}
      className="hidden"
    />

    {/* 🟨 Always visible Browse button */}
    <label htmlFor="resume-upload" className="cursor-pointer">
      <button
        type="button"
        className="text-sm text-indigo-600 font-medium"
        onClick={() => document.getElementById('resume-upload').click()}
      >
        Browse files
      </button>
    </label>

    <p className="text-xs text-gray-400 mt-2">PDF, DOC, DOCX up to 2MB</p>

    {/* 🟧 Show file name + styled View button */}
    {resumeFile && (
      <div className="mt-4 flex items-center justify-center gap-3 text-sm">
        <span className="text-gray-800">{resumeFile.name}</span>
        <button
          onClick={() => window.open(resumeURL, '_blank')}
          style={{
            width: '60px',
            height: '32px',
            gap: '4px',
            opacity: 1,
            borderRadius: '6px',
            paddingTop: '10px',
            paddingRight: '16px',
            paddingBottom: '10px',
            paddingLeft: '16px',
            backgroundColor: 'rgba(240, 235, 255, 1)',
            color: 'rgba(104, 52, 255, 1)',
            fontFamily: 'Nunito Sans',
            fontWeight: 600,
            fontSize: '12px',
            lineHeight: '12px',
          }}
          className="hover:opacity-90 transition"
        >
          View
        </button>
      </div>
    )}
  </div>
) : (
  // 🟪 View mode
  <div className="border border-gray-200 rounded-md p-4 text-sm text-gray-700 flex justify-between items-center">
    {resumeFile ? (
      <>
        <span>{resumeFile.name}</span>
        {/* 🟣 Styled View button in non-edit mode */}
        <button
          onClick={() => window.open(resumeURL, '_blank')}
          style={{
            width: '60px',
            height: '32px',
            gap: '4px',
            opacity: 1,
            borderRadius: '6px',
            paddingTop: '10px',
            paddingRight: '16px',
            paddingBottom: '10px',
            paddingLeft: '16px',
            backgroundColor: 'rgba(240, 235, 255, 1)',
            color: 'rgba(104, 52, 255, 1)',
            fontFamily: 'Nunito Sans',
            fontWeight: 600,
            fontSize: '12px',
            lineHeight: '12px',
          }}
          className="hover:opacity-90 transition"
        >
          View
        </button>
      </>
    ) : (
      <span className="text-gray-500">No resume uploaded</span>
    )}
  </div>
)}


          </div>
        </div>
      </div>

      {/* Action Buttons */}
      {isEditing && (
        <div className="flex justify-end gap-3 pt-6 mt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="px-6 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}