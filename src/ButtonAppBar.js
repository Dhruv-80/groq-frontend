// src/ButtonAppBar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar'; // Import Avatar component

export default function ButtonAppBar() {
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar className="box" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Avatar
            alt="LLAMA"
            src="https://cdn.analyticsvidhya.com/wp-content/uploads/2024/04/Introducing-OpenBioLLM-Llama3-70B-8B-1-scaled.jpg"
            sx={{ width: 40, height: 40 }} // Adjust size as needed
          />
          <Typography className="ai-model" variant="h4" component="div" sx={{ flexGrow: 1, ml:2 }}>
        AI MODEL
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
