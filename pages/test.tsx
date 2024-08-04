import React from 'react'
import Intro from '@/components/userpanel/content_components/Intro'
import { Box } from '@mui/material'
import InList from '@/components/register/InList'
import RegisterLocation from '@/components/register/RegisterLocation'
import ProfileUser from '@/components/profile/ProfileUser'

function test() {
  return (
    <Box sx={{
        width: "100vw",
        height:"100svh",
        backgroundColor: "primary",
        color: "secondary"
    }}>
      <ProfileUser />
    </Box>
  )
}

export default test