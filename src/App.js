import React from 'react';
import DynamicCVMaker from './components/DynamicCVMaker';
import { SelectTemplate } from './components/SelectTemplate';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
      <SelectTemplate />
   <DynamicCVMaker />
   <Footer />
    </div>
  );
}

export default App;
