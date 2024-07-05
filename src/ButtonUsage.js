// src/ButtonUsage.js
import React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUsage({ onClick, children }) {
  return (
    <Button
      variant="contained"
      type="submit"
      onClick={onClick}
      sx={{ borderRadius: '10px' , marginTop:'20px'}} // Add rounded corners
    >
      {children}
    </Button>
  );
}
