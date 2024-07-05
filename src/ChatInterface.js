// src/ChatInterface.js
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
import { Info } from '@mui/icons-material';

const ChatInterface = ({ onSubmit, clearMessages, model, setClearMessages }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const avatars = {
    'gemma-7b-it': {
      user: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGDLno4Hmeqw3f912o4cPVsLlev49aUzHa6g&s',
      ai: 'https://cdn.vox-cdn.com/thumbor/7GFnnpOnzDbWEsG8HS6tKo_Sdl0=/0x0:2040x1360/1400x1050/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/25297209/STK258_GOOGLE_GEMMA__B.jpg',
    },
    'mixtral-8x7b-32768': {
      user: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGDLno4Hmeqw3f912o4cPVsLlev49aUzHa6g&s',
      ai: 'https://azure.microsoft.com/en-us/blog/wp-content/uploads/2024/02/MSFT_Azure_FEB12_319938_Blog_BlogHeader_240226_600x600_V1.jpg',
    },
    'llama3-8b-8192': {
      user: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGDLno4Hmeqw3f912o4cPVsLlev49aUzHa6g&s',
      ai: 'https://media.licdn.com/dms/image/D4D12AQGSDHcylNVfcA/article-cover_image-shrink_600_2000/0/1713710970597?e=2147483647&v=beta&t=FV__dZLzmCHa6Fm6-eqDzGa4KNLie6MFDC6SQ1FGiQI',
    },
  };

  useEffect(() => {
    if (clearMessages) {
      setMessages([]); // Clear messages when clearMessages prop changes
      setClearMessages(false); // Reset clearMessages state
    }
  }, [clearMessages, setClearMessages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, fromUser: true }]); // Add user message to chat
      const response = await onSubmit(input); // Get response from API
      setMessages([...messages, { text: input, fromUser: true }, { text: response, fromUser: false }]); // Add bot response
      setInput(''); // Clear input field
    }
  };

  return (
    <Box 
      sx={{
        width: '100%',
        height: '100%',
        border: '1px solid #d9d9d9',
        borderRadius: '8px',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
      }}
    >
      <Box 
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '10px',
          padding: '10px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
        }}
      >
        <Typography variant="h6">Current Model: {model}</Typography>
        <IconButton 
          sx={{ 
            marginLeft: 'auto', 
            color: '#1890ff'
          }}
        >
          <Info />
        </IconButton>
      </Box>
      <Box sx={{ flexGrow: 1, overflowY: 'auto', padding: '10px' }}>
        {messages.map((message, index) => (
          <Box 
            key={index} 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              justifyContent: message.fromUser ? 'flex-end' : 'flex-start',
            }}
          >
            <img 
              src={message.fromUser ? avatars[model].user : avatars[model].ai} 
              alt={message.fromUser ? 'User Avatar' : 'AI Avatar'}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                marginRight: message.fromUser ? '0' : '10px',
                marginLeft: message.fromUser ? '10px' : '0',
              }}
            />
            <Box 
              sx={{
                padding: '10px',
                backgroundColor: message.fromUser ? '#1890ff' : '#e6f7ff',
                color: message.fromUser ? '#fff' : '#000',
                borderRadius: '20px',
                maxWidth: '60%',
                wordBreak: 'break-word',
              }}
            >
              {message.text}
            </Box>
          </Box>
        ))}
      </Box>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <TextField
          variant="outlined"
          placeholder="Type a message"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          InputProps={{
            sx: {
              '& fieldset': {
                borderRadius: '20px',
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            height: '56px',
            borderRadius: '20px',
            backgroundColor: '#1890ff',
            '&:hover': {
              backgroundColor: '#40a9ff',
            },
          }}
        >
          Send
        </Button>
      </form>
    </Box>
  );
};

export default ChatInterface;
