"use client";

import { useState, useCallback } from 'react';

export type Message = {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
};

export type Chat = {
  id: string;
  title: string;
  date: string;
  messages: Message[];
};

// Sample response generation function (simulates AI response)
const generateResponse = async (message: string): Promise<string> => {
  // In a real implementation, this would call an API
  return new Promise((resolve) => {
    setTimeout(() => {
      const responses = [
        "I understand what you're asking. Let me help with that.",
        "That's an interesting question. Here's what I know about it.",
        "Based on the information provided, I would suggest the following approach.",
        "I can certainly help you with that request.",
        "Let me analyze that request and provide a thoughtful response."
      ];
      resolve(responses[Math.floor(Math.random() * responses.length)]);
    }, 1000);
  });
};

// Sample date formatter
const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

// Sample chat history
const initialChatHistory: Chat[] = [
  { 
    id: "1", 
    title: "Prompt Engineering Best Practices", 
    date: "2023-10-15",
    messages: [
      {
        id: "1-1",
        role: "user",
        content: "How can I improve my prompt engineering?",
        timestamp: new Date("2023-10-15T10:00:00")
      },
      {
        id: "1-2",
        role: "assistant",
        content: "To improve prompt engineering, focus on clarity, specificity, and providing context. Use examples, be explicit about the format you want, and iterate on your prompts based on the responses you receive.",
        timestamp: new Date("2023-10-15T10:00:05")
      }
    ]
  },
  { 
    id: "2", 
    title: "Cost Optimization Strategies", 
    date: "2023-10-12",
    messages: [
      {
        id: "2-1",
        role: "user",
        content: "How can I optimize costs for my LLM usage?",
        timestamp: new Date("2023-10-12T14:30:00")
      },
      {
        id: "2-2",
        role: "assistant",
        content: "To optimize costs, consider using smaller models when appropriate, implementing caching strategies, monitoring token usage, and batching requests when possible.",
        timestamp: new Date("2023-10-12T14:30:10")
      }
    ]
  },
  { 
    id: "3", 
    title: "Response Quality Analysis", 
    date: "2023-10-10",
    messages: []
  },
  { 
    id: "4", 
    title: "Token Usage Optimization", 
    date: "2023-10-08",
    messages: []
  },
];

export function useChat() {
  const [chatHistory, setChatHistory] = useState<Chat[]>(initialChatHistory);
  const [activeChat, setActiveChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Create a new chat
  const createNewChat = useCallback(() => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: "PromptMetrics ChatBot",
      date: formatDate(new Date()),
      messages: []
    };
    
    setChatHistory(prev => [newChat, ...prev]);
    setActiveChat(newChat);
    setMessages([]);
  }, []);

  // Load an existing chat
  const loadChat = useCallback((chatId: string) => {
    const chat = chatHistory.find(c => c.id === chatId);
    if (chat) {
      setActiveChat(chat);
      setMessages(chat.messages);
    }
  }, [chatHistory]);

  // Send a message
  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;
    
    // Create user message
    const userMessage: Message = {
      id: `msg-${Date.now()}-user`,
      role: 'user',
      content,
      timestamp: new Date()
    };
    
    // Update messages state
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      // Get response from AI (simulated)
      const responseContent = await generateResponse(content);
      
      // Create assistant message
      const assistantMessage: Message = {
        id: `msg-${Date.now()}-assistant`,
        role: 'assistant',
        content: responseContent,
        timestamp: new Date()
      };
      
      // Update messages state with assistant response
      setMessages(prev => [...prev, assistantMessage]);
      
      // Update chat history
      const updatedMessages = [...messages, userMessage, assistantMessage];
      
      // If this is a new chat with no title yet, use the first message as title
      let updatedChat: Chat;
      let updatedHistory: Chat[];
      
      if (!activeChat) {
        // Create new chat if none is active
        const newChat: Chat = {
          id: Date.now().toString(),
          title: content.slice(0, 30) + (content.length > 30 ? '...' : ''),
          date: formatDate(new Date()),
          messages: updatedMessages
        };
        updatedChat = newChat;
        updatedHistory = [newChat, ...chatHistory];
      } else {
        // Update existing chat
        updatedChat = {
          ...activeChat,
          messages: updatedMessages,
          // If this was the first message, update the title
          title: activeChat.title === 'New Conversation' && activeChat.messages.length === 0 
            ? content.slice(0, 30) + (content.length > 30 ? '...' : '')
            : activeChat.title
        };
        updatedHistory = chatHistory.map(chat => 
          chat.id === activeChat.id ? updatedChat : chat
        );
      }
      
      setActiveChat(updatedChat);
      setChatHistory(updatedHistory);
    } finally {
      setIsLoading(false);
    }
  }, [messages, activeChat, chatHistory]);

  return {
    messages,
    chatHistory,
    activeChat,
    isLoading,
    sendMessage,
    createNewChat,
    loadChat
  };
}
