import  { useState } from 'react';

const InlineStyleRemover = () => {
  const [inputHtml, setInputHtml] = useState('');
  const [outputHtml, setOutputHtml] = useState('');

  const handleInputChange = (event) => {
    setInputHtml(event.target.value);
  };

  const handleRemoveStyles = () => {
    // Use a regex to remove all inline style attributes
    const strippedHtml = inputHtml.replace(/style\s*=\s*(['"])(.*?)\1/gi, '');

    setOutputHtml(strippedHtml);
  };

  return (
    <div>
      <h1>Inline Style Remover</h1>
      <textarea
        placeholder="Enter HTML with inline styles"
        value={inputHtml}
        onChange={handleInputChange}
      />
      <button onClick={handleRemoveStyles}>Remove Inline Styles</button>

      <div>
        <h2>Result:</h2>
        <div dangerouslySetInnerHTML={{ __html: outputHtml }} />
      </div>
    </div>
  );
};

export default InlineStyleRemover;
