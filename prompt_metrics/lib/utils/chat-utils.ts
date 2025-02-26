/**
 * Generates a unique ID for a chat message or conversation
 */
export function generateId(prefix: string = 'id'): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Format a date for display in the chat interface
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
}

/**
 * Extract a meaningful title from the first message of a conversation
 */
export function extractTitleFromMessage(message: string, maxLength: number = 30): string {
  if (!message) return "New Conversation";
  
  // Remove special characters and excess whitespace
  let cleanMessage = message.replace(/[^\w\s]/gi, ' ').replace(/\s+/g, ' ').trim();
  
  // Split by sentence and use the first one
  let firstSentence = cleanMessage.split(/[.!?]/)[0];
  
  // Truncate if needed
  if (firstSentence.length > maxLength) {
    return firstSentence.substring(0, maxLength) + "...";
  }
  
  return firstSentence;
}
