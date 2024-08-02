import { useState } from 'react';
import { Container, Box, Paper, Typography, Avatar, useTheme } from '@mui/material';
import Chat from './Chat';
import UserList from './List';
import { User } from './usersExample';

const Messages = () => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
  
    const handleSelectUser = (user: User) => {
      setSelectedUser(user);
    };
    const theme = useTheme();
    return (
      <Container sx={{ display: 'flex', height: '90vh', padding: '18px', backgroundColor: theme.palette.primary.light, borderRadius: '25px', opacity: 0, animation: '1s showAnimLev1 forwards' }}>
        <Paper sx={{ width: 300, marginRight: 2 }}>
          <UserList onSelectUser={handleSelectUser} />
        </Paper>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {selectedUser ? <Chat selectedUser={selectedUser} /> : <Typography sx={{textAlign:'center', justifyContent: 'center', justifyItems: 'center', display: 'flex'}} variant="h5">Wybierz przyszłego pracownika, z którym chciałbyś czatować</Typography>}
        </Box>
        <Paper sx={{ width: 300, marginLeft: 2, padding: 2 }}>
          {selectedUser && (
            <Box sx={{animation: '1s showAnimLev1 forwards'}}>
              <Avatar src={selectedUser.avatar} sx={{ width: 100, height: 100, marginBottom: 2, marginLeft: 'auto', marginRight: 'auto' }} />
              <Typography variant="h6" align="center">{selectedUser.name}</Typography>
              <Typography variant="body2" align="center">sdfherhetsgferhrwthrwhewgwegr</Typography>
            </Box>
          )}
        </Paper>
      </Container>
    );
  };
  
export default Messages;