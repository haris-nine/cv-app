import { usePDF } from 'react-to-pdf'

const PreviewSection = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold text-black mb-4 border-b border-gray-400 pb-2">
      {title}
    </h2>
    {children}
  </div>
)

const PreviewField = ({ label, value }) =>
  value && (
    <div className="mb-2">
      <span className="font-bold text-black">{label}: </span>
      <span className="text-gray-800">{value}</span>
    </div>
  )

function Preview({ formData }) {
  const { toPDF, targetRef } = usePDF({ filename: 'resume.pdf' })

  const {
    personalInfo,
    education,
    workExperience,
    technicalSkills,
    languages,
  } = formData

  return (
    <>
      <div ref={targetRef} className="max-w-4xl mx-auto px-8 py-6">
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
          <div className="grid grid-cols-2 gap-4">
            <PreviewField label="School" value={education.schoolName} />
            <PreviewField label="Degree" value={education.degree} />
            <PreviewField label="Major" value={education.major} />
            <PreviewField
              label="Graduation Date"
              value={education.dateOfGraduation}
            />
          </div>
          {education.relevantCourses && (
            <div className="mt-2">
              <span className="font-bold text-black">Relevant Courses:</span>
              <div className="text-gray-800">
                {education.relevantCourses.split(',').map((course, idx) => (
                  <div key={idx}>{course.trim()}</div>
                ))}
              </div>
            </div>
          )}
        </PreviewSection>

        {/* Work Experience */}
        <PreviewSection title="Work Experience">
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-black">
                    {job.positionTitle} at {job.companyName}
                  </h3>
                  <div className="text-gray-600 text-sm">
                    {job.dateFrom} - {job.dateUntil}
                  </div>
                </div>

                {/* Inline Fields for Location and Job Type */}
                <div className="grid grid-cols-2 gap-6">
                  <PreviewField label="Location" value={job.location} />
                  <PreviewField label="Job Type" value={job.jobType} />
                </div>

                {/* Main Responsibilities */}
                {job.mainResponsibilities && (
                  <div className="mt-2">
                    <span className="font-bold text-black">
                      Main Responsibilities:
                    </span>
                    <div className="text-gray-800">
                      {job.mainResponsibilities
                        .split('\n')
                        .map((responsibility, idx) => (
                          <div key={idx}>{responsibility.trim()}</div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {job.achievements && (
                  <div className="mt-2">
                    <span className="font-bold text-black">Achievements:</span>
                    <div className="text-gray-800">
                      {job.achievements.split('\n').map((achievement, idx) => (
                        <div key={idx}>{achievement.trim()}</div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </PreviewSection>

        {/* Technical Skills */}
        <PreviewSection title="Skills">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="font-bold text-black">
                Programming Languages:
              </span>
              <div className="mt-1 text-gray-800">
                {technicalSkills.programmingLanguages
                  .split(',')
                  .map((skill, index) => (
                    <div key={index}>{skill.trim()}</div>
                  ))}
              </div>
            </div>

            <div>
              <span className="font-bold text-black">
                Tools & Technologies:
              </span>
              <div className="mt-1 text-gray-800">
                {technicalSkills.toolsAndTechnologies
                  .split(',')
                  .map((skill, index) => (
                    <div key={index}>{skill.trim()}</div>
                  ))}
              </div>
            </div>

            <div>
              <span className="font-bold text-black">Frameworks:</span>
              <div className="mt-1 text-gray-800">
                {technicalSkills.frameworks.split(',').map((skill, index) => (
                  <div key={index}>{skill.trim()}</div>
                ))}
              </div>
            </div>

            <div>
              <span className="font-bold text-black">Databases:</span>
              <div className="mt-1 text-gray-800">
                {technicalSkills.databases.split(',').map((skill, index) => (
                  <div key={index}>{skill.trim()}</div>
                ))}
              </div>
            </div>

            <div className="col-span-2">
              <span className="font-bold text-black">Soft Skills:</span>
              <div className="mt-1 text-gray-800">
                {technicalSkills.softSkills.split(',').map((skill, index) => (
                  <div key={index}>{skill.trim()}</div>
                ))}
              </div>
            </div>
          </div>
        </PreviewSection>

        {/* Languages */}
        <PreviewSection title="Languages">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <PreviewField
                label="Language"
                value={`${languages.language} (${languages.proficiencyLevel})`}
              />
            </div>
            {languages.additionalLanguage && (
              <div>
                <PreviewField
                  label="Additional Language"
                  value={`${languages.additionalLanguage} (${languages.additionalProficiencyLevel})`}
                />
              </div>
            )}
          </div>
        </PreviewSection>
      </div>

      <button
        className="ml-8 px-4 py-2 mt-4 bg-gray-800 text-white rounded"
        onClick={() => toPDF()}
      >
        Download PDF
      </button>
    </>
  )
}

export default Preview
