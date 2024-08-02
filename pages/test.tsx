import React from 'react'
import Intro from '@/components/userpanel/content_components/Intro'
import { Box } from '@mui/material'
import InList from '@/components/register/InList'
import RegisterLocation from '@/components/register/RegisterLocation'

function test() {
  return (
    <Box sx={{
        width: "25vw",
        height:"100svh",
        backgroundColor: "primary",
        color: "secondary"
    }}>
      <RegisterLocation />
    </Box>
  )
}

export default test