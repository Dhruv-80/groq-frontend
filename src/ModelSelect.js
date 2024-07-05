// src/ModelSelect.js
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function ModelSelect({ handleChange }) {
  return (
    <FormControl fullWidth>
      <InputLabel id="model-select-label">Model</InputLabel>
      <Select
        labelId="model-select-label"
        id="model-select"
        defaultValue="gemma-7b-it" // Initial model state
        label="Model"
        onChange={(e) => handleChange(e.target.value)}
      >
        <MenuItem value="gemma-7b-it">Gemma-7b-IT</MenuItem>
        <MenuItem value="mixtral-8x7b-32768">Mixtral-8x7b-32768</MenuItem>
        <MenuItem value="llama3-8b-8192">Llama3-8b-8192</MenuItem>
      </Select>
    </FormControl>
  );
}
