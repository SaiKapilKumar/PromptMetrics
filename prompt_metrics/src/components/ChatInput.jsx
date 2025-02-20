import React, { useState } from 'react';
import { Paper, InputBase, IconButton, Box } from '@mui/material';
import { Send } from '@mui/icons-material';

const ChatInput = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage({
        text: input,
        type: 'user',
        timestamp: new Date()
      });
      setInput('');
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #e0e0e0'
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <IconButton type="submit" color="primary" sx={{ p: '10px' }}>
          <Send />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default ChatInput;
