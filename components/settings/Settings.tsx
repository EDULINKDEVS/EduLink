import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';

const Settings = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleSave = () => {
    console.log({
      firstName,
      lastName,
      school,
      birthDate,
      email,
    });
  };

  return (
    <Container maxWidth="md" sx={{opacity: 0, animation: '1s showAnimLev1 forwards'}}>
      <Paper elevation={3} style={{ padding: '2em', marginTop: '2em' }}>
        <Typography variant="h4" gutterBottom>
          Ustawienia Konta
        </Typography>
       
      </Paper>
    </Container>
  );
};

export default Settings