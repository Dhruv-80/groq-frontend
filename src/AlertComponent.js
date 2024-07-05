// src/AlertComponent.js
import React from 'react';
import { Alert } from 'antd';

const AlertComponent = ({ selectedModel }) => (
  <Alert
    message={`Selected Model: ${selectedModel}`}
    type="info"
    showIcon
    style={{ margin: '20px 0' }}
  />
);

export default AlertComponent;
