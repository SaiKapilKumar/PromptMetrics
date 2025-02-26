export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

export interface Chat {
  id: string;
  title: string;
  date: string;
  messages: Message[];
  lastUpdated?: Date;
}

export interface ChatState {
  chatHistory: Chat[];
  activeChat: Chat | null;
  messages: Message[];
  isLoading: boolean;
}

export interface ChatContextType extends ChatState {
  sendMessage: (content: string) => Promise<void>;
  createNewChat: () => void;
  loadChat: (chatId: string) => void;
  deleteChat: (chatId: string) => void;
  clearChatHistory: () => void;
}
