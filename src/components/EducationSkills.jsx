import React, { useState } from 'react';
import { Edit3 } from 'lucide-react';

export default function EducationSkills() {
  const [isEditing, setIsEditing] = useState(false);
  const [educationData, setEducationData] = useState({
    school: '',
    degree: '',
    course: '',
    year: '',
    grade: ''
  });
  
  const [skillsData, setSkillsData] = useState({
    skills: '',
    projects: ''
  });

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    
    // Validation for school, degree, course fields - only allow characters
    if (name === 'school' || name === 'degree' || name === 'course') {
      // Check if value contains only letters and spaces
      const isValid = /^[a-zA-Z\s]*$/.test(value);
      if (!isValid && value !== '') {
        alert('Please enter characters only');
        return;
      }
    }
    
    setEducationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillsChange = (e) => {
    const { name, value } = e.target;
    
    // Validation for skills and projects fields - only allow characters
    if (name === 'skills' || name === 'projects') {
      // Check if value contains only letters and spaces
      const isValid = /^[a-zA-Z\s]*$/.test(value);
      if (!isValid && value !== '') {
        alert('Please enter characters only');
        return;
      }
    }
    
    setSkillsData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="p-6">
      {/* Education Details Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 
            style={{
              width: '144px',
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
            Education Details
          </h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-indigo-600 hover:text-indigo-700 transition-colors bg-indigo-50/80 p-1.5 rounded-md"
          >
            <Edit3 size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4"
        style = {{ gap: '10px'}}>
          {/* School/College */}
          <div> 
            <label 
              className="block mb-1"
              style={{
                width: '88px',
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
              School / College
            </label>
            <input
              type="text"
              name="school"
              value={educationData.school}
              onChange={handleEducationChange}
              placeholder="e.g. Lincoln College"
              disabled={!isEditing}
              style={{
                width: '542px',
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

          {/* Highest degree */}
          <div>
            <label 
              className="block mb-1"
              style={{
                width: '156px',
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
              Highest degree or equivalent
            </label>
            <input
              type="text"
              name="degree"
              value={educationData.degree}
              onChange={handleEducationChange}
              placeholder="e.g. Bachelors in Technology"
              disabled={!isEditing}
              style={{
                width: '542px',
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
        </div>

        <div className="flex mb-8 items-start" style={{ marginRight: '80px' }}>
          {/* Course */}
          <div className="flex-1 mr-4">
            <label 
              className="block mb-1"
              style={{
                width: '38px',
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
              Course
            </label>
            <input
              type="text"
              name="course"
              value={educationData.course}
              onChange={handleEducationChange}
              placeholder="e.g. Computer science engineering"
              disabled={!isEditing}
              style={{
                width: '542px',
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

          {/* Year of completion */}
          <div
            className="ml-20" 
            style = {{
            marginLeft: '20px'
          }}>
            <label 
              className="block mb-1"
              style={{
                width: '100px',
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
              Year of completion
            </label>
            <div className="relative w-[353px]">
              <select
                name="year"
                value={educationData.year}
                onChange={handleEducationChange}
                disabled={!isEditing}
                style={{
                  width: '259px',
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
                  outline: 'none',
                  appearance: 'none', // 🟩 removes native arrow to show custom one
                  WebkitAppearance: 'none', // 🟩 Safari fix
                  MozAppearance: 'none'
                }}
                className="text-sm text-gray-800 focus:ring-1 focus:ring-indigo-500 disabled:text-gray-500 appearance-none cursor-pointer"
              >
                <option value="">YYYY</option>
                {Array.from({ length: 25 }, (_, i) => new Date().getFullYear() - i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Grade */}
          <div className="flex-1 mr-4 relative"
                style={{
                  flex: '0 0 auto',    // <- updated: prevents flex grow/shrink
                  marginRight: '5px',
                  transform: 'translateX(-65px)'  // small spacing to Year
                }}>
            <label 
              className="block mb-1"
              style={{
                width: '33px',
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
              Grade
            </label>
            <input
              type="text"
              name="grade"
              value={educationData.grade}
              onChange={handleEducationChange}
              placeholder="Enter here"
              disabled={!isEditing}
              style={{
                width: '259px',
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
        </div>
      </div>

      {/* Skills & Projects Section */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 
            style={{
              width: '133px',
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
            Skills & Projects
          </h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-indigo-600 hover:text-indigo-700 transition-colors bg-indigo-50/80 p-1.5 rounded-md"
          >
            <Edit3 size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Skills */}
          <div>
            <label 
              className="block mb-1"
              style={{
                width: '29px',
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
              Skills
            </label>
            <textarea
              name="skills"
              value={skillsData.skills}
              onChange={handleSkillsChange}
              placeholder="Enter here"
              rows={5}
              disabled={!isEditing}
              style={{
                width: '542px',
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

          {/* Projects */}
          <div>
            <label 
              className="block mb-1"
              style={{
                width: '44px',
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
              Projects
            </label>
            <textarea
              name="projects"
              value={skillsData.projects}
              onChange={handleSkillsChange}
              placeholder="Enter here"
              rows={5}
              disabled={!isEditing}
              style={{
                width: '542px',
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
  );
}