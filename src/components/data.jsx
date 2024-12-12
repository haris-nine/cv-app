const personalInfoInputs = [
  { label: 'Name', type: 'text', name: 'name', placeholder: 'Enter your name' },
  {
    label: 'Email',
    type: 'email',
    name: 'email',
    placeholder: 'Enter your email',
  },
  {
    label: 'Phone',
    type: 'tel',
    name: 'phone',
    placeholder: 'Enter your phone number',
  },
  {
    label: 'Address',
    type: 'text',
    name: 'address',
    placeholder: 'Enter your address',
  },
  {
    label: 'LinkedIn',
    type: 'url',
    name: 'linkedin',
    placeholder: 'Enter your LinkedIn profile',
  },
]

const educationInputs = [
  {
    label: 'School Name',
    type: 'text',
    name: 'schoolName',
    placeholder: 'Enter school name',
  },
  {
    label: 'Degree',
    type: 'text',
    name: 'degree',
    placeholder: 'Enter degree',
  },
  {
    label: 'Major',
    type: 'text',
    name: 'major',
    placeholder: 'Enter your major',
  },
  {
    label: 'Relevant Courses',
    type: 'text',
    name: 'relevantCourses',
    placeholder: 'Enter relevant courses (optional)',
  },
  {
    label: 'Date of Graduation',
    type: 'text',
    name: 'dateOfGraduation',
    placeholder: 'YYYY-MM-DD',
  },
]

const workExperienceInputs = [
  {
    label: 'Company Name',
    type: 'text',
    name: 'companyName',
    placeholder: 'Enter company name',
  },
  {
    label: 'Position Title',
    type: 'text',
    name: 'positionTitle',
    placeholder: 'Enter position title',
  },
  {
    label: 'Location',
    type: 'text',
    name: 'location',
    placeholder: 'Enter job location (city, country)',
  },
  {
    label: 'Job Type',
    type: 'text',
    name: 'jobType',
    placeholder: 'Enter job type (full-time, part-time, internship)',
  },
  {
    label: 'Main Responsibilities',
    type: 'text',
    name: 'mainResponsibilities',
    placeholder: 'Enter responsibilities',
  },
  {
    label: 'Achievements',
    type: 'text',
    name: 'achievements',
    placeholder: 'Enter any key achievements (optional)',
  },
  { label: 'From', type: 'text', name: 'dateFrom', placeholder: 'YYYY-MM-DD' },
  {
    label: 'Until',
    type: 'text',
    name: 'dateUntil',
    placeholder: 'YYYY-MM-DD / Present',
  },
]

const technicalSkillsInputs = [
  {
    label: 'Programming Languages',
    type: 'text',
    name: 'programmingLanguages',
    placeholder: 'Enter programming languages',
  },
  {
    label: 'Tools & Technologies',
    type: 'text',
    name: 'toolsAndTechnologies',
    placeholder: 'Enter tools/technologies you are proficient in',
  },
  {
    label: 'Frameworks',
    type: 'text',
    name: 'frameworks',
    placeholder: "Enter frameworks you're familiar with",
  },
  {
    label: 'Databases',
    type: 'text',
    name: 'databases',
    placeholder: 'Enter database technologies',
  },
  {
    label: 'Soft Skills',
    type: 'text',
    name: 'softSkills',
    placeholder: 'Enter your soft skills',
  },
]

const languagesInputs = [
  {
    label: 'Language',
    type: 'text',
    name: 'language',
    placeholder: 'Enter language',
  },
  {
    label: 'Proficiency Level',
    type: 'text',
    name: 'proficiencyLevel',
    placeholder:
      'Enter proficiency level (e.g., beginner, intermediate, fluent)',
  },
  {
    label: 'Additional Language',
    type: 'text',
    name: 'additionalLanguage',
    placeholder: 'Enter any additional language',
  },
  {
    label: 'Additional Proficiency Level',
    type: 'text',
    name: 'additionalProficiencyLevel',
    placeholder:
      'Enter proficiency level (e.g., beginner, intermediate, fluent)',
  },
]

const initialState = {
  personalInfo: { name: '', email: '', phone: '', address: '', linkedin: '' },
  education: {
    schoolName: '',
    degree: '',
    major: '',
    relevantCourses: '',
    dateOfGraduation: '',
  },
  workExperience: [
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
  technicalSkills: {
    programmingLanguages: '',
    toolsAndTechnologies: '',
    frameworks: '',
    databases: '',
    softSkills: '',
  },
  languages: {
    language: '',
    proficiencyLevel: '',
    additionalLanguage: '',
    additionalProficiencyLevel: '',
  },
}

export {
  personalInfoInputs,
  educationInputs,
  workExperienceInputs,
  technicalSkillsInputs,
  languagesInputs,
  initialState,
}
