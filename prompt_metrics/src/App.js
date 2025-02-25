import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Dashboard from './components/Dashboard';
import ChatSidebar from './components/ChatSidebar';
import ChatWindow from './components/ChatWindow';
import Box from '@mui/material/Box';
import './styles/App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ff4081',
    },
  },
});

function App() {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleNewChat = () => {
    setSelectedChat(null);
  };

  const handleSendMessage = (message) => {
    const newMessage = {
      content: message,
      isUser: true,
      timestamp: new Date()
    };

    if (!selectedChat) {
      // Create new chat if none selected
      const newChat = {
        id: Date.now(),
        title: message.substring(0, 30) + '...',
        timestamp: new Date(),
        messages: [newMessage]
      };
      setChats([newChat, ...chats]);
      setSelectedChat(newChat);
    } else {
      // Add message to existing chat
      const updatedChat = {
        ...selectedChat,
        messages: [...(selectedChat.messages || []), newMessage]
      };
      setChats(chats.map(chat => 
        chat.id === selectedChat.id ? updatedChat : chat
      ));
      setSelectedChat(updatedChat);
    }
  };

  const handleDeleteChat = (chatId) => {
    setChats(chats.filter(chat => chat.id !== chatId));
    if (selectedChat?.id === chatId) {
      setSelectedChat(null);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <div className="main-container">
          <div className="dashboard-section">
            <Dashboard />
          </div>
          <div className="chatbot-section">
            <Box sx={{ display: 'flex', height: '100%', position: 'relative' }}>
              <ChatSidebar 
                chats={chats}
                selectedChat={selectedChat}
                onSelectChat={setSelectedChat}
                onDeleteChat={handleDeleteChat}
                isOpen={isSidebarOpen}
                onToggle={() => setSidebarOpen(!isSidebarOpen)}
              />
              <ChatWindow 
                selectedChat={selectedChat}
                onSendMessage={handleSendMessage}
                onNewChat={handleNewChat}
                isSidebarOpen={isSidebarOpen}
                onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
              />
            </Box>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
