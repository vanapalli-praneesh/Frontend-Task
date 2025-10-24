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

  const handleExperienceChange = (section, field, value) => {
    setExperienceData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleInputChange = (field, value) => {
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
          <h2 className="text-lg font-medium text-gray-900">Work Experience</h2>
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
            <label className="block text-sm text-gray-700 mb-1">
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
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">
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
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Experience
              </label>
              <div className="relative">
                <select
                  value={experienceData.domain1.experience}
                  onChange={(e) => handleExperienceChange('domain1', 'experience', e.target.value)}
                  disabled={!isEditing}
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
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Domain 2 */}
        <div className="mb-6">
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">
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
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">
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
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Experience
              </label>
              <div className="relative">
                <select
                  value={experienceData.domain2.experience}
                  onChange={(e) => handleExperienceChange('domain2', 'experience', e.target.value)}
                  disabled={!isEditing}
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
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LinkedIn and Resume Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">LinkedIn</h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <Edit3 size={16} />
            </button>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
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
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Resume</h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              <Edit3 size={16} />
            </button>
          </div>
          <div>
            {isEditing ? (
              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                <p className="text-sm text-gray-500 mb-2">Drag & drop your resume here or</p>
                <button className="text-sm text-indigo-600 font-medium">Browse files</button>
                <p className="text-xs text-gray-400 mt-2">PDF, DOC, DOCX up to 2MB</p>
              </div>
            ) : (
              <div className="border border-gray-200 rounded-md p-4 text-sm text-gray-500">
                No resume uploaded
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
