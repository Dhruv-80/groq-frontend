// src/PerformanceTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, LinearProgress } from '@mui/material';
import './PerformanceTable.css';

const PerformanceTable = () => {
  const performanceData = [
    { model: 'Gemma-7b-IT', performance: 85 },
    { model: 'Mixtral-8x7b-32768', performance: 90 },
    { model: 'Llama3-8b-8192', performance: 88 },
  ];

  return (
    <TableContainer component={Paper} style={{ maxWidth: 400, margin: '20px auto', padding: '20px', borderRadius: '8px' }}>
      <Typography variant="h6" component="div" style={{ textAlign: 'center', marginBottom: '20px' }}>
        Model Performance
      </Typography>
      <Table aria-label="performance table">
        <TableHead>
          <TableRow>
            <TableCell>Model</TableCell>
            <TableCell align="right">Performance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {performanceData.map((row) => (
            <TableRow key={row.model}>
              <TableCell component="th" scope="row">{row.model}</TableCell>
              <TableCell align="right">
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" color="textSecondary" style={{ marginRight: '10px' }}>
                    {row.performance}%
                  </Typography>
                  <Box flex={1} marginRight={1}>
                    <LinearProgress 
                      variant="determinate" 
                      value={row.performance} 
                      sx={{ 
                        height: 10, 
                        borderRadius: 5, 
                        backgroundColor: '#f0f0f0', 
                        '& .MuiLinearProgress-bar': { backgroundColor: '#1890ff' }
                      }} 
                    />
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PerformanceTable;
