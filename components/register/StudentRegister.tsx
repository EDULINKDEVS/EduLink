import { Box } from '@mui/material';
import React, { useState } from 'react';
import StudentPersonal from './StudentPersonal';
import StudentStatus from './StudentStatus';
import SchoolIcon from '@mui/icons-material/School';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TraitSelector from './FeaturesChosing';
import RegisterLocation from './RegisterLocation';
const StudentRegister = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const stepsComponentsTab = [
    <StudentPersonal key={1} setStep={setStep} />,
    <StudentStatus key={2} setStep={setStep} />,
    <TraitSelector key={3} setStep={setStep} type='traits' />,
    <TraitSelector key={4} setStep={setStep} type='hard' />,
    <RegisterLocation  key={5}/>
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
    background-color: primary;
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
    background-color: secondary;
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
          router.push('/register');
        }
        else{
          setStep(prev => prev - 1);
        }
      }}>
      <ArrowBackIcon sx={{
      fontSize: '2em',
      color:{
        sm: 'custom',
        lg: 'secondary'
      }
    }}/>
      </BackButton>
      <LeftContainer>
        <SchoolIcon style={{ fontSize: 300, color: 'secondary' }} />
      </LeftContainer>
      <RightContainer>
        <Box sx={{
          height: '80vh',
          overflowY: 'auto',
          display: 'flex',
          justifyContent: 'center'
        }}>
          {stepsComponentsTab[step]}
        </Box>
      </RightContainer>
    </StyledContainer>
  );
}

export default StudentRegister;
