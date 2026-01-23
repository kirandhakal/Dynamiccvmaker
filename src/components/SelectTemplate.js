import React from 'react';

const templates = [
  {
    id: 1,
    name: 'Classic',
    image: 'https://res.cloudinary.com/dzcmadjl1/image/upload/v1696227803/cv-maker/template1_uxbqzq.png',
  },
  {
    id: 2,
    name: 'Modern',
    image: 'https://res.cloudinary.com/dzcmadjl1/image/upload/v1696227803/cv-maker/template2_ozxqz1.png',
  },
  {
    id: 3,
    name: 'Creative',
    image: 'https://res.cloudinary.com/dzcmadjl1/image/upload/v1696227803/cv-maker/template3_jyqk9h.png',
  },
];

export const SelectTemplate = ({ selectedTemplate, onSelectTemplate }) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Select Your Template
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => onSelectTemplate(template.id)}
            className={`cursor-pointer rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 ${
              selectedTemplate === template.id
                ? 'ring-4 ring-blue-500 ring-offset-2'
                : 'border border-gray-200'
            }`}
          >
            <img
              src={template.image}
              alt={template.name}
              className="w-full h-auto object-cover"
            />
            <div
              className={`p-3 text-center font-semibold ${
                selectedTemplate === template.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {template.name}
              {selectedTemplate === template.id && (
                <span className="ml-2">✓</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
