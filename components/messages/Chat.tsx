import React, { useState } from 'react';
import { Box, TextField, Button, List, ListItem, ListItemText, Typography, Paper, Avatar } from '@mui/material';

interface Message {
  sender: string;
  content: string;
}

const Chat: React.FC<{ selectedUser: { name: string, avatar: string } }> = ({ selectedUser }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'User', content: input }]);
      setInput('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, flex: 1, display: 'flex', flexDirection: 'column', height: '93%' }}>
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar src={selectedUser.avatar} sx={{ marginRight: 2 }} />
        <Typography variant="h5">{selectedUser.name}</Typography>
      </Box>
      <List sx={{ flex: 1, overflowY: 'auto', marginBottom: 2 }}>
        {messages.map((msg, index) => (
          <ListItem key={index} sx={{ display: 'flex', justifyContent: msg.sender === 'User' ? 'flex-end' : 'flex-start' }}>
            <ListItemText
              primary={msg.content}
              sx={{
                backgroundColor: msg.sender === 'User' ? '#cfe8fc' : '#f0f0f0',
                borderRadius: 2,
                padding: 1,
                maxWidth: '75%',
              }}
            />
          </ListItem>
        ))}
      </List>
      <Box display="flex" mt={2}>
        <TextField
          fullWidth
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Wpisz wiadomość..."
        />
        <Button variant="contained" color="primary" onClick={handleSend} sx={{ marginLeft: 1 }}>
          Wyślij
        </Button>
      </Box>
    </Paper>
  );
};

export default Chat;
