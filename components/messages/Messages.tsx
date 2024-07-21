import { useState } from 'react';
import { Container, Box, Paper, Typography, Avatar } from '@mui/material';
import Chat from './Chat';
import UserList from './List';
import { User } from './usersExample';

const Messages = () => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
  
    const handleSelectUser = (user: User) => {
      setSelectedUser(user);
    };
  
    return (
      <Container sx={{ display: 'flex', height: '90vh', padding: '8px', backgroundColor: 'white' }}>
        <Paper sx={{ width: 300, marginRight: 2 }}>
          <UserList onSelectUser={handleSelectUser} />
        </Paper>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {selectedUser ? <Chat selectedUser={selectedUser} /> : <Typography variant="h5">Wybierz firmę, z którą chciałbyś czatować</Typography>}
        </Box>
        <Paper sx={{ width: 300, marginLeft: 2, padding: 2 }}>
          {selectedUser && (
            <>
              <Avatar src={selectedUser.avatar} sx={{ width: 100, height: 100, marginBottom: 2, marginLeft: 'auto', marginRight: 'auto' }} />
              <Typography variant="h6" align="center">{selectedUser.name}</Typography>
              <Typography variant="body2" align="center">sdfherhetsgferhrwthrwhewgwegr</Typography>
            </>
          )}
        </Paper>
      </Container>
    );
  };
  
export default Messages;