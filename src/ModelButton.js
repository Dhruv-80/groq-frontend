// src/ModelButton.js
import React from 'react';

const ModelButton = ({ model, selectedModel, onClick, imageSrc }) => {
  const isSelected = model === selectedModel;

  return (
    <div 
      onClick={() => onClick(model)} 
      style={{
        cursor: 'pointer',
        border: isSelected ? '4px solid #1890ff' : '2px solid transparent', // Blue border if selected
        padding: '5px',
        borderRadius: '4px',
        width: '120px', // Fixed width for consistency
        height: '120px', // Fixed height for consistency
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 20px', // Margin for spacing
        boxShadow: isSelected ? '0 0 0 10px rgba(24, 144, 255, 0.2)' : 'none', // Optional shadow for selected button
        transition: 'border 0.3s ease, box-shadow 0.3s ease', // Smooth transition
      }}
    >
      <img 
        src={imageSrc} 
        alt={model} 
        style={{ 
          width: '100%',  // Adjusted to fit the container
          height: '100%', // Adjusted to fit the container
          objectFit: 'cover', // Ensure the image covers the area
          borderRadius: '4px',
        }} 
      />
    </div>
  );
};

export default ModelButton;
