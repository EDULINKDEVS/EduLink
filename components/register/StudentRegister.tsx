import { Box } from '@mui/material';
import React, { useState } from 'react';
import StudentPersonal from './StudentPersonal';
import StudentStatus from './StudentStatus';
import SchoolIcon from '@mui/icons-material/School';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TraitSelector from './FeaturesChosing';
const StudentRegister = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const stepsComponentsTab = [
    <StudentPersonal setStep={setStep} />,
    <StudentStatus setStep={setStep} />,
    <TraitSelector setStep={setStep} />
  ];

  const StyledContainer = styled(Box)`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: stretch;
    justify-content: center;
  `;

  const LeftContainer = styled(Box)`
    flex: 1;
    background-color: #A758B5;
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1200px) {
      display: flex;
    }
  `;

  const RightContainer = styled(Box)`
    flex: 1.5;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;
  const BackButton = styled(Box)({
    position: 'absolute',
    top: '4px',
    left: '5px',
    cursor: 'pointer'
  })
  return (
    <StyledContainer>
      
      <BackButton onClick={()=>{
        if(step === 0){
          router.push('/');
        }
        else{
          setStep(prev => prev - 1);
        }
      }}>
      <ArrowBackIcon sx={{
      fontSize: '2em',
      color:{
        sm: 'black',
        lg: 'white'
      }
    }}/>
      </BackButton>
      <LeftContainer>
        <SchoolIcon style={{ fontSize: 300, color: 'white' }} />
      </LeftContainer>
      <RightContainer>
        <Box sx={{
          height: '80vh',
          overflowY: 'auto'
        }}>
          {stepsComponentsTab[step]}
        </Box>
      </RightContainer>
    </StyledContainer>
  );
}

export default StudentRegister;
