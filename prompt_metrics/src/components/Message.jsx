import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { formatDate } from '../utils/formatDate';

const Message = ({ message }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: message.type === 'user' ? 'flex-end' : 'flex-start',
        mb: 2
      }}
    >
      <Paper
        elevation={1}
        sx={{
          p: 2,
          maxWidth: '70%',
          backgroundColor: message.type === 'user' ? 'primary.light' : 'grey.100',
          color: message.type === 'user' ? 'white' : 'text.primary'
        }}
      >
        <Typography variant="body1">{message.text}</Typography>
        <Typography variant="caption" sx={{ display: 'block', mt: 1, opacity: 0.7 }}>
          {formatDate(message.timestamp)}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Message;
