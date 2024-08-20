import { Avatar, Box, Fade, IconButton } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const ProfilePhoto = () => {
    const [profilePicture, setProfilePicture] = useState<string>('https://via.placeholder.com/100');
    const [hovered, setHovered] = useState<boolean>(false);
    const handleProfilePictureChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target) {
                    setProfilePicture(e.target.result as string);
                }
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };



    const handleRemoveProfilePicture = () => {
        setProfilePicture('https://via.placeholder.com/100');
    };

    return (
        <Box
            sx={{
                position: 'absolute',
                width: 200,
                height: 200,
                bottom: 0,

                left: '50%',
                transform: 'translateX(-50%) translateY(50%)',
                '&:hover > .profile-overlay': {
                    opacity: 1
                }
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Avatar
                src={profilePicture}
                variant='square'
                sx={{
                    width: 200,
                    height: 200,
                    border: '4px solid white'
                }}
            />
            <Fade in={hovered}>
                <Box
                    className="profile-overlay"
                    sx={{
                        position: 'absolute',
                        // borderRadius: '50%',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s'
                    }}
                >
                    <input
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="profile-picture-input"
                        type="file"
                        onChange={handleProfilePictureChange}
                    />
                    <label htmlFor="profile-picture-input">
                        <IconButton component="span" sx={{ color: 'white' }}>
                            <EditIcon />
                        </IconButton>
                    </label>
                    <IconButton onClick={handleRemoveProfilePicture} sx={{ color: 'white' }}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </Fade>
        </Box>
    )
}

export default ProfilePhoto