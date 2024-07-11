import { RegisterContext } from '@/context/register/RegisterContext'
import React, { useContext } from 'react'
import NewSchool from './University';
import University from './University';
import { Box } from '@mui/material';

const StudiesTabCreator = () => {
    const registerContext = useContext(RegisterContext);
  return (
    <Box sx={{width: '100%'}}>
    {
        registerContext?.schools.map((element)=>(
            <University name={element.name} degree={element.degree} id={element.id} key={element.id} /> 
        ))

    }
    <University key={'new'}/>
    </Box>
  )
}

export default StudiesTabCreator