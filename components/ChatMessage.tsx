import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type ChatMessageProps = {
  message: string;
  isBot: boolean;
};

export default function ChatMessage({ message, isBot }: ChatMessageProps) {
  return (
    <View style={[styles.messageContainer, isBot ? styles.botContainer : styles.userContainer]}>
      <Text style={[styles.messageText, isBot ? styles.botText : styles.userText]}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 16,
    marginVertical: 4,
  },
  botContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
    borderBottomLeftRadius: 4,
  },
  userContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#2196F3',
    borderBottomRightRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
  botText: {
    color: '#333',
  },
  userText: {
    color: '#fff',
  },
});