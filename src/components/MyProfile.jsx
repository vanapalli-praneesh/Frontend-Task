import React, { useState } from 'react';
import { Bell, Headphones, User, Copy, Edit3 } from 'lucide-react';
import BasicInfo from './BasicInfo';
import EducationSkills from './EducationSkills';
import Experience from './Experience';

export default function MyProfile({ onBackToUsers, userData }) {
  const [activeTab, setActiveTab] = useState('basic-info');
  const [isEditing, setIsEditing] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      // Optional: Show a toast notification or feedback
      console.log('Copied to clipboard:', text);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'basic-info':
        return <BasicInfo userData={userData} />;
      case 'education-skills':
        return <EducationSkills userData={userData} />;
      case 'experience':
        return <Experience userData={userData} />;
      default:
        return <BasicInfo userData={userData} />;
    }
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
        {/* Profile Section */}
        <div 
          className="mb-6"
          style={{
            width: '1140px',
            height: '205px',
            paddingTop: '20px',
            paddingRight: '32px',
            paddingBottom: '20px',
            paddingLeft: '32px',
            borderRadius: '6px',
            backgroundColor: 'rgba(255, 255, 255, 1)',
            opacity: 1
          }}
        >
          <div 
            className="flex items-center"
            style={{
              gap: '80px'
            }}
          >
            {/* Profile Picture */}
            <div 
              className="rounded-full flex items-center justify-center"
              style={{
                width: '165px',
                height: '165px',
                borderRadius: '200px',
                borderWidth: '4px',
                borderColor: 'rgba(240, 235, 255, 1)',
                backgroundColor: 'rgba(240, 235, 255, 1)',
                opacity: 1
              }}
            >
              <User size={60} className="text-indigo-600" strokeWidth={1.5} />
            </div>
            
            {/* User Info */}
            <div className="flex-1">
              <h1 
                className="mb-2"
                style={{
                  fontFamily: 'Nunito Sans',
                  fontWeight: 600,
                  fontSize: '28px',
                  lineHeight: '150%',
                  letterSpacing: '0%',
                  color: 'rgba(35, 35, 35, 1)'
                }}
              >
                {userData?.name || 'Dave Richards'}
              </h1>
              <div className="flex items-center gap-2 mb-1">
                <span 
                  style={{
                    fontFamily: 'Nunito Sans',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '28px',
                    letterSpacing: '0%',
                    color: 'rgba(119, 119, 119, 1)'
                  }}
                >
                  {userData?.email || 'dave@mail.com'}
                </span>
                <button 
                  className="text-gray-400 hover:text-gray-600"
                  onClick={() => handleCopy(`${userData?.name || 'Dave Richards'}\n${userData?.email || 'dave@mail.com'}\n${userData?.contact || '+91 8332883854'}`)}
                  title="Copy contact information"
                >
                  <Copy size={16} />
                </button>
              </div>
              <p 
                style={{
                  fontFamily: 'Nunito Sans',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '28px',
                  letterSpacing: '0%',
                  color: 'rgba(119, 119, 119, 1)'
                }}
              >
                {userData?.contact || '+91 8332883854'}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex border-b border-gray-200" style={{ gap: '10px' }}>
            <button
              onClick={() => handleTabChange('basic-info')}
              className={`text-sm font-medium transition-colors ${
                activeTab === 'basic-info'
                  ? ''
                  : 'border-b-2 border-transparent'
              }`}
              style={{
                width: '94px',
                height: '32px',
                paddingTop: '6px',
                paddingRight: '16px',
                paddingBottom: '6px',
                paddingLeft: '16px',
                borderRadius: '6px',
                opacity: 1,
                fontFamily: 'Nunito Sans',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0%',
                textAlign: 'center',
                ...(activeTab === 'basic-info' ? {
                  color: 'rgba(104, 52, 255, 1)',
                  backgroundColor: 'rgba(240, 235, 255, 1)'
                } : {
                  color: 'rgba(119, 119, 119, 1)',
                  backgroundColor: 'rgba(245, 246, 247, 1)'
                })
              }}
            >
              Basic Info
            </button>
            <button
              onClick={() => handleTabChange('education-skills')}
              className={`text-sm font-medium transition-colors relative ${
                activeTab === 'education-skills'
                  ? ''
                  : 'border-b-2 border-transparent'
              }`}
              style={{
                width: '143px',
                height: '32px',
                paddingTop: '6px',
                paddingRight: '16px',
                paddingBottom: '6px',
                paddingLeft: '16px',
                borderRadius: '6px',
                opacity: 1,
                fontFamily: 'Nunito Sans',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0%',
                textAlign: 'center',
                ...(activeTab === 'education-skills' ? {
                  color: 'rgba(104, 52, 255, 1)',
                  backgroundColor: 'rgba(240, 235, 255, 1)'
                } : {
                  color: 'rgba(119, 119, 119, 1)',
                  backgroundColor: 'rgba(245, 246, 247, 1)'
                })
              }}
            >
              Education & skills
              <div className="absolute -top-1 right-2 w-2 h-2 bg-orange-500 rounded-full"></div>
            </button>
            <button
              onClick={() => handleTabChange('experience')}
              className={`text-sm font-medium transition-colors ${
                activeTab === 'experience'
                  ? ''
                  : 'border-b-2 border-transparent'
              }`}
              style={{
                width: '101px',
                height: '32px',
                paddingTop: '6px',
                paddingRight: '16px',
                paddingBottom: '6px',
                paddingLeft: '16px',
                borderRadius: '6px',
                opacity: 1,
                fontFamily: 'Nunito Sans',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0%',
                textAlign: 'center',
                ...(activeTab === 'experience' ? {
                  color: 'rgba(104, 52, 255, 1)',
                  backgroundColor: 'rgba(240, 235, 255, 1)'
                } : {
                  color: 'rgba(119, 119, 119, 1)',
                  backgroundColor: 'rgba(245, 246, 247, 1)'
                })
              }}
            >
              Experience
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-sm">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}