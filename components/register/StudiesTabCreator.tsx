import { RegisterContext } from '@/context/register/RegisterContext';
import React, { useContext, useEffect, useState } from 'react';
import University from './University';
import { Box } from '@mui/material';
import { School } from '@/context/register/types';

const StudiesTabCreator = () => {
  const registerContext = useContext(RegisterContext);
  const [schoolTab, setSchoolTab] = useState<School[]>([])
  useEffect(() => {
    registerContext && setSchoolTab(registerContext?.schools);
  }, [registerContext?.schools]);

  return (
    <Box sx={{ width: '100%' }}>
      {
        schoolTab.length === 0 && <span>Dodaj pierwszą szkołę</span>
      }
      {
        schoolTab.map((element) => {
          console.log(element);
          return (
            <University 
              city={element.city} 
              faculty={element.faculty} 
              name={element.name} 
              degree={element.degree} 
              id={element.id} 
              key={element.id} 
            />
          );
        })
      }
      <University key={'new'} />
    </Box>
  );
};

export default StudiesTabCreator;
