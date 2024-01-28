import { useState } from 'react';
import './InlineStyleRemover.css'; // Import the CSS file

const App = () => {
  const [inlineStyles, setInlineStyles] = useState('');

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setInlineStyles(inputText);
  };

  const handleRemoveStyles = () => {
    // Add logic to remove inline styles
    // ...

    // For now, just clear the input
    setInlineStyles('');
  };

  const getInlineStyleElements = () => {
    const stylesArray = inlineStyles.split(';').filter((style) => style.trim() !== '');

    return stylesArray.map((style, index) => (
      <div className="inline-style-element" key={index}>
        {style.trim()};
      </div>
    ));
  };

  return (
    <div className="centered-container">
      <div className="styled-container">
        <h1 className="header">Inline Style Elements Aligner</h1>
        <textarea
          className="text-area"
          placeholder="Enter inline styles separated by semicolons (;)"
          value={inlineStyles}
          onChange={handleInputChange}
        />
        <button className="remove-button" onClick={handleRemoveStyles}>
          Remove Inline Styles
        </button>
        <div className="inline-style-container">{getInlineStyleElements()}</div>

        <p className="copyright">Copy right @ahnaeem48@gmail.com</p>
      </div>
    </div>
  );
};

export default App;
