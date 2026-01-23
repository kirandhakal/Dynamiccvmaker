import React, { useState } from 'react';
import DynamicCVMaker from './components/DynamicCVMaker';
import { SelectTemplate } from './components/SelectTemplate';
import { Footer } from './components/Footer';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <SelectTemplate
          selectedTemplate={selectedTemplate}
          onSelectTemplate={setSelectedTemplate}
        />
        <DynamicCVMaker selectedTemplate={selectedTemplate} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
