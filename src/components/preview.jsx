import { usePDF } from 'react-to-pdf';  


const PreviewSection = ({ title, children }) => (
  <div className="mb-6 border-b pb-4">
    <h2 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-blue-500 pb-2">
      {title}
    </h2>
    {children}
  </div>
);

const PreviewField = ({ label, value }) => (
  value && (
    <div className="mb-2">
      <span className="font-semibold text-gray-700 mr-2">{label}:</span>
      <span className="text-gray-900">{value}</span>
    </div>
  )
);

function Preview({ formData }) {

  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});  
  

  const { 
    personalInfo, 
    education, 
    workExperience, 
    technicalSkills, 
    languages 
  } = formData;

  return (
    <>
    <div ref={targetRef} className="bg-white p-8 max-w-4xl mx-auto">
      {/* Personal Information */}
      <PreviewSection title="Personal Information">
        <div className="grid grid-cols-2 gap-4">
          <PreviewField label="Name" value={personalInfo.name} />
          <PreviewField label="Email" value={personalInfo.email} />
          <PreviewField label="Phone" value={personalInfo.phone} />
          <PreviewField label="Address" value={personalInfo.address} />
          <PreviewField label="LinkedIn" value={personalInfo.linkedin} />
        </div>
      </PreviewSection>

      {/* Education */}
      <PreviewSection title="Education">
        <div>
          <PreviewField label="School" value={education.schoolName} />
          <PreviewField label="Degree" value={education.degree} />
          <PreviewField label="Major" value={education.major} />
          <PreviewField label="Graduation Date" value={education.dateOfGraduation} />
          {education.relevantCourses && (
            <div className="mt-2">
              <span className="font-semibold text-gray-700">Relevant Courses:</span>
              <ul className="list-disc list-inside text-gray-900">
                {education.relevantCourses.split(',').map((course, idx) => (
                  <li key={idx}>{course.trim()}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </PreviewSection>

      {/* Work Experience */}
      <PreviewSection title="Work Experience">
        {workExperience.map((job, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {job.positionTitle} at {job.companyName}
              </h3>
              <div className="text-gray-600 text-sm">
                {job.dateFrom} - {job.dateUntil}
              </div>
            </div>
            <PreviewField label="Location" value={job.location} />
            <PreviewField label="Job Type" value={job.jobType} />
            
            {job.mainResponsibilities && (
              <div className="mt-2">
                <span className="font-semibold text-gray-700">Main Responsibilities:</span>
                <ul className="list-disc list-inside text-gray-900">
                  {job.mainResponsibilities.split('\n').map((responsibility, idx) => (
                    <li key={idx}>{responsibility.trim()}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {job.achievements && (
              <div className="mt-2">
                <span className="font-semibold text-gray-700">Achievements:</span>
                <ul className="list-disc list-inside text-gray-900">
                  {job.achievements.split('\n').map((achievement, idx) => (
                    <li key={idx}>{achievement.trim()}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </PreviewSection>

      {/* Technical Skills */}
      <PreviewSection title="Technical Skills">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="font-semibold text-gray-700">Programming Languages:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {technicalSkills.programmingLanguages.split(',').map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <span className="font-semibold text-gray-700">Tools & Technologies:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {technicalSkills.toolsAndTechnologies.split(',').map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <span className="font-semibold text-gray-700">Frameworks:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {technicalSkills.frameworks.split(',').map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <span className="font-semibold text-gray-700">Databases:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {technicalSkills.databases.split(',').map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>
          
          <div className="col-span-2">
            <span className="font-semibold text-gray-700">Soft Skills:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {technicalSkills.softSkills.split(',').map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </PreviewSection>

      {/* Languages */}
      <PreviewSection title="Languages">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <PreviewField label="Language" value={languages.language} />
            <PreviewField label="Proficiency" value={languages.proficiencyLevel} />
          </div>
          {languages.additionalLanguage && (
            <div>
              <PreviewField label="Additional Language" value={languages.additionalLanguage} />
              <PreviewField label="Proficiency" value={languages.additionalProficiencyLevel} />
            </div>
          )}
        </div>
      </PreviewSection>
    </div>
    <button className="ml-8 px-4 py-2 rounded bg-blue-500 hover:bg-blue-700 text-white" onClick={() => toPDF()}>Download PDF</button>  
    </>
  );
}

export default Preview;