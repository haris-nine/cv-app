import { useState } from 'react';
import Section from './components/section';
import {
  initialState
} from './components/data';

function ResumeBuilder() {
  const sections = ['personalInfo', 'education', 'workExperience', 'technicalSkills', 'languages'];
  const [currentSection, setCurrentSection] = useState('personalInfo');
  const [formData, setFormData] = useState(initialState);


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

  return (
    <div className="flex">
      <Section 
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        formData={formData}
        setFormData={setFormData}
        sections={sections}
        handleInputChange={handleInputChange}
        handleAddWorkExperience={handleAddWorkExperience}
        handleRemoveWorkExperience={handleRemoveWorkExperience}
      />
    </div>
  );
}

export default ResumeBuilder;