import { useAuth } from '@/context/AuthContext'
import { Box, Button } from '@mui/material'
import React from 'react'

const Swither = () => {
    const authContext = useAuth();
  return (
    <Box sx={{
        position:'fixed',
        right: '0',
        bottom: '0',
        zIndex: '1000'
    }}>
        <Button onClick={()=>{authContext.setUser('employer')}}>Firma</Button>
        <Button onClick={()=>{authContext.setUser('employee')}}>Pracownik</Button>
        <Button onClick={()=>{authContext.setUser(null)}}>Wylogowany</Button>
    </Box>
  )
}

export default Swither