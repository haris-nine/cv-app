import Inputs from './Inputs';
import {
  personalInfoInputs,
  educationInputs,
  workExperienceInputs,
  technicalSkillsInputs,
  languagesInputs,
} from './data';

function Section({ 
  currentSection, 
  setCurrentSection, 
  formData, 
  sections, 
  handleInputChange,
  handleAddWorkExperience,
  handleRemoveWorkExperience,
  openPreview
}) {
  const currentIndex = sections.indexOf(currentSection);

  const sectionTitlesMap = {
    personalInfo: 'Personal Information',
    education: 'Education',
    workExperience: 'Work Experience',
    technicalSkills: 'Skills',
    languages: 'Languages',
  };

  const sectionInputsMap = {
    personalInfo: personalInfoInputs,
    education: educationInputs,
    workExperience: workExperienceInputs,
    technicalSkills: technicalSkillsInputs,
    languages: languagesInputs,
  };

  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1]);
    }
  };

  return (
    <section className="min-w-[80vw] min-h-[95svh] bg-sky-900 rounded-lg ms-8 grid p-10">
      <h1 className="text-2xl text-white mb-4">{sectionTitlesMap[currentSection]}</h1>

      <div className="inputs">
        {currentSection === 'workExperience' ? (
          <>
            {formData.workExperience.map((entry, index) => (
              <div key={index} className="work-experience-entry mb-6">
                <h2 className="text-lg text-white mb-2">Work Experience {index + 1}</h2>
                <Inputs
                  inputFields={sectionInputsMap[currentSection]}
                  sectionData={entry}
                  handleInputChange={(section, field, value) =>
                    handleInputChange(section, field, value, index)
                  }
                  currentSection={currentSection}
                />
                <button
                  onClick={() => handleRemoveWorkExperience(index)}
                  className="mt-2 px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={handleAddWorkExperience}
              className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded"
            >
              Add Another Work Experience
            </button>
          </>
        ) : (
          <Inputs
            inputFields={sectionInputsMap[currentSection]}
            sectionData={formData[currentSection]}
            handleInputChange={handleInputChange}
            currentSection={currentSection}
          />
        )}
      </div>

      <div className="flex justify-center self-end gap-10 p-20">
        {currentIndex !== 0 && (
          <button
            onClick={handlePrevious}
            className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-700 text-white"
          >
            Previous
          </button>
        )}

        {currentIndex !== sections.length - 1 && (
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-700 text-white"
          >
            Next
          </button>
        )}

        {currentIndex === sections.length - 1 && (
          <button
            onClick={openPreview}
            className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-700 text-white"
          >
            Preview
          </button>
        )}
      </div>
    </section>
  );
}

export default Section;