import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, TextField, Avatar, Typography } from '@mui/material';
import { User, companies, employies, emp } from './usersExample';

interface UserListProps {
  onSelectUser: (user: User) => void;
  type: string
}

const UserList: React.FC<UserListProps> = ({ onSelectUser, type }) => {
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [visibleUsers, setVisibleUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [obj, setObj] = useState<User[] | null>(null);
  useEffect(()=>{
    type === 'employee' ? setObj(companies) : setObj(emp);
  },[type])
  useEffect(() => {
    if(obj){

      const result = obj.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
      setFilteredUsers(result);
      setVisibleUsers(result.slice(0, 22));
      onSelectUser(result[0]);
      setPage(1);
    }
  }, [search, obj]);

  const loadMore = () => {
    const newPage = page + 1;
    setVisibleUsers(filteredUsers.slice(0, newPage * 22));
    setPage(newPage);
  };

  return (
    <Box sx={{
        overflow: 'hidden',
        height: '93%',
        padding: '2px'
    }}>
      <TextField
        fullWidth
        
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Szukaj"
        
        sx={{ marginBottom: 2, }}
      />
      <List sx={{height: '100%', overflowY: 'auto' }} onScroll={(e) => {
        const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight;
        if (bottom) {
          loadMore();
        }
      }}>
        {visibleUsers.map((user) => (
          <ListItem button key={user.id} onClick={() => onSelectUser(user)}>
            <Avatar src={user.avatar} sx={{ marginRight: 2 }} />
            <ListItemText primary={user.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UserList;
