import { RegisterContext } from '@/context/register/RegisterContext'
import React, { useContext } from 'react'
import NewSchool from './University';
import University from './University';

const StudiesTabCreator = () => {
    const registerContext = useContext(RegisterContext);
  return (
    <>
    {
        registerContext?.schools.map((element)=>(
            <University name={element.name} degree={element.degree} id={element.id} /> 
        ))

    }
    <University />
    </>
  )
}

export default StudiesTabCreator