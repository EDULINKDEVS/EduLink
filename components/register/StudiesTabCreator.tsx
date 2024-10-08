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
  }, [registerContext?.schools, registerContext]);

  return (
    <Box sx={{ width: '100%' }}>
      {
        schoolTab.length === 0 && <span></span>
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
              degreeLabel={element.degreeLabel}
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
