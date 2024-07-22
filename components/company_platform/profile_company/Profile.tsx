import { Box } from '@mui/material';
import React, { useState } from 'react';
import AddPhotoView from './AddPhotoView';
import AddDescriptionView from './AddDescriptionView';
import ProfileView from './ProfileView';

const Profile = () => {
  const [firstLogged, setFirstLogged] = useState(true);
  const [steps, setSteps] = useState(0);

  return (
    <Box>
      {
        firstLogged
        ? (
          steps === 0 
          ? <AddPhotoView setSteps={setSteps} />
          : <AddDescriptionView setSteps={setSteps} />
        )
        : 
        <ProfileView name='Firma XYZ' description='lsadfasdfasdf sadf asd fasdf asf sdf asdf asdf sa' sectors={['branża 1', 'branża 2']} positions={['stanowisko 1', 'stanowisko 2']} hardSkills={['hard 1', 'hard 2']} />
      }
    </Box>
  )
}

export default Profile;
