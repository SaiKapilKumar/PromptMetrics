import React, { useState } from 'react';
import { Paper, Box, Typography } from '@mui/material';
import Message from './Message';
import ChatInput from './ChatInput';
import '../styles/ChatWindow.css';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, backgroundColor: 'primary.main', color: 'white' }}>
        <Typography variant="h6">Chat Assistant</Typography>
      </Box>
      <Box className="messages-container" sx={{ flex: 1, p: 2, overflowY: 'auto' }}>
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </Box>
      <ChatInput onSendMessage={handleSendMessage} />
    </Paper>
  );
};

export default ChatWindow;
