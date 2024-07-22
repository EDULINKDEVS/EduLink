import React from 'react'
import Intro from '@/components/userpanel/content_components/Intro'
import { Box } from '@mui/material'
import InList from '@/components/register/InList'

function test() {
  return (
    <Box sx={{
        width: "25vw",
        height:"100svh",
        backgroundColor: "#A758B5",
        color: "white"
    }}>
        <InList degree='asda' name='szkoła nazwa nazwa' city='Poznań' deleteFunction={(value: string)=>{}} editFunction={(value:boolean) => {}}/>

    </Box>
  )
}

export default test