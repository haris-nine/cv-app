function Inputs({
  inputFields,
  sectionData,
  handleInputChange,
  currentSection,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {inputFields.map((field, index) => (
        <div key={index} className="flex flex-col">
          {/* Label */}
          <label
            htmlFor={`${currentSection}-${field.name}`}
            className="text-lg font-medium text-gray-200 mb-2"
          >
            {field.label}
          </label>

          {/* Input */}
          <input
            type={field.type}
            id={`${currentSection}-${field.name}`}
            name={field.name}
            placeholder={field.placeholder}
            value={sectionData[field.name] || ''} // Make sure this is a valid date string or an empty string
            onChange={(e) =>
              handleInputChange(currentSection, field.name, e.target.value)
            }
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 text-gray-800"
            autoComplete="off"
          />
        </div>
      ))}
    </div>
  )
}

export default Inputs
