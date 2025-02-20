export const sendMessage = async (message) => {
  // Implement your API call here
  return {
    text: `Response to: ${message}`,
    type: 'bot',
    timestamp: new Date()
  };
};
