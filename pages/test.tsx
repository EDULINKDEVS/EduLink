import React from 'react'
import Intro from '@/components/userpanel/content_components/Intro'
import { Box } from '@mui/material'

function test() {
  return (
    <Box sx={{
        width: "25vw",
        height:"100svh",
        backgroundColor: "#A758B5",
        color: "white"
    }}>
        <Intro/>

    </Box>
  )
}

export default test