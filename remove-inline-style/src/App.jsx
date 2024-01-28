import { useState } from "react";
import './InlineStyleRemover.css'; // Import a separate CSS file for styling

const InlineStyleRemover = () => {
  const [inputHtml, setInputHtml] = useState("");
  const [outputHtml, setOutputHtml] = useState("");

  const handleInputChange = (event) => {
    setInputHtml(event.target.value);
  };

  const handleRemoveStyles = () => {
    // Use a regex to remove all inline style attributes
    const strippedHtml = inputHtml.replace(/style\s*=\s*(['"])(.*?)\1/gi, "");

    // Split the outputHtml into lines and wrap each line in a div
    const formattedLines = strippedHtml.split('\n').map((line, index) => (
      <div key={index}>{line}</div>
    ));

    setOutputHtml(formattedLines);
  };

  const handleCopyToClipboard = () => {
    // Copy to clipboard
    const formattedText = inputHtml.replace(/style\s*=\s*(['"])(.*?)\1/gi, "").replace(/\n/g, '\r\n');
    navigator.clipboard.writeText(formattedText).then(() => {
      console.log('Text copied to clipboard');
    }).catch((error) => {
      console.error('Error copying text to clipboard:', error);
    });
  };

  return (
    <div className="inline-style-remover-container">
      <h1>Inline Style Remover</h1>
      <textarea
        className="input-textarea"
        placeholder='Enter HTML with inline styles'
        value={inputHtml}
        onChange={handleInputChange}
      />
      <button className="action-button" onClick={handleRemoveStyles}>Remove Inline Styles</button>
      <button className="action-button" onClick={handleCopyToClipboard}>Copy to Clipboard</button>

      <div className="output-container">
        <h2>Result:</h2>
        {outputHtml}
      </div>

      <p>Copy right @ahnaeem48@gmail.com</p>
    </div>
  );
};

export default InlineStyleRemover;
