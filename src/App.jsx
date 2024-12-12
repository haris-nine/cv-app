import { useState } from 'react';
import Section from './components/section';
import Preview from './components/preview'; // Ensure you have this component
import {
  initialState
} from './components/data';

function ResumeBuilder() {
  const sections = ['personalInfo', 'education', 'workExperience', 'technicalSkills', 'languages'];
  const [currentSection, setCurrentSection] = useState('personalInfo');
  const [formData, setFormData] = useState(initialState);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleInputChange = (section, fieldName, value, index = null) => {
    setFormData((prevData) => {
      if (section === 'workExperience' && index !== null) {
        const updatedWorkExperience = prevData.workExperience.map((entry, idx) =>
          idx === index ? { ...entry, [fieldName]: value } : entry
        );

        return {
          ...prevData,
          workExperience: updatedWorkExperience,
        };
      }

      return {
        ...prevData,
        [section]: {
          ...prevData[section],
          [fieldName]: value,
        },
      };
    });
  };

  const handleAddWorkExperience = () => {
    setFormData((prevData) => ({
      ...prevData,
      workExperience: [
        ...prevData.workExperience,
        {
          companyName: '',
          positionTitle: '',
          location: '',
          jobType: '',
          mainResponsibilities: '',
          achievements: '',
          dateFrom: '',
          dateUntil: '',
        },
      ],
    }));
  };

  const handleRemoveWorkExperience = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      workExperience: prevData.workExperience.filter((_, idx) => idx !== index),
    }));
  };

  const openPreview = () => {
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  return (
    <div className="">
      <Section 
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        formData={formData}
        setFormData={setFormData}
        sections={sections}
        handleInputChange={handleInputChange}
        handleAddWorkExperience={handleAddWorkExperience}
        handleRemoveWorkExperience={handleRemoveWorkExperience}
        openPreview={openPreview} // Pass the openPreview function to Section
      />
      
      {/* Preview Overlay */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative">
            <button 
              onClick={closePreview}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <Preview 
              formData={formData} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumeBuilder;