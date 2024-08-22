import { Box } from '@mui/material'
import React, { ReactNode } from 'react'

const IntroOptionElement = ({value, icon}: {value: string, icon: ReactNode}) => {
  return (
    <Box sx={{display: 'flex', textAlign: 'center', borderRadius: '10px', fontSize: '2em', marginX: '15px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'black'}}>
        {icon}
        <p>{value}</p>
    </Box>
  )
}

export default IntroOptionElement