import React from 'react';
import { templateStyles } from '../config/templateStyles';

const templates = Object.entries(templateStyles).map(([id, style]) => ({
  id: parseInt(id),
  name: style.name,
}));

export const SelectTemplate = ({ selectedTemplate, onSelectTemplate }) => {
  return (
    <div className="mb-8 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-xl">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Choose Your Design
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => onSelectTemplate(template.id)}
            className={`cursor-pointer rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${selectedTemplate === template.id
              ? 'ring-4 ring-blue-500 ring-offset-2 shadow-2xl scale-105'
              : 'border border-gray-200 shadow-sm hover:shadow-md bg-white'
              }`}
          >
            <div
              className={`p-4 text-center text-sm font-bold flex items-center justify-center gap-2 h-full min-h-[80px] ${selectedTemplate === template.id
                ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white'
                : 'text-gray-700 hover:bg-gray-50'
                }`}
            >
              <span className="leading-tight">{template.name}</span>
              {selectedTemplate === template.id && (
                <div className="bg-white text-blue-600 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
