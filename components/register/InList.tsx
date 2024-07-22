import { Box, Grid, Paper, Typography, IconButton } from '@mui/material'
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const InList = ({ id, name, degree, city, deleteFunction, editFunction }: { id: string, name: string, degree: string, city: string, deleteFunction: (id: string) => void, editFunction: (id: boolean) => void }) => {

    const [hover, setHover] = useState(false);

    return (
        <Paper
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{
                position: 'relative',
                padding: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid #A758B5',
                borderRadius: '8px',
                my: '12px'
            }}
        >
            <Box
                sx={{
                    transition: 'filter 0.3s',
                    filter: hover ? 'blur(4px)' : 'none'
                }}
            >
                <Typography
                    variant="h4"
                    color="#A758B5"
                    align="center"
                    gutterBottom
                    fontWeight={'bold'}
                >
                    {name}
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="#A758B5"
                    align="center"
                    fontWeight={'bold'}
                >
                    {city}
                </Typography>
                <Typography
                    variant="body1"
                    color="#A758B5"
                    align="center"
                    fontWeight={'bold'}
                >
                    {degree}
                </Typography>
            </Box>
            {hover && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        gap: '16px'
                    }}
                >
                    <IconButton
                        onClick={() => editFunction(true)}
                        color="primary"
                        aria-label="edit"

                    >
                        <EditIcon sx={{
                            fontSize: '2em'
                        }} />
                    </IconButton>
                    <IconButton
                        onClick={() => deleteFunction(id)}
                        color="secondary"
                        aria-label="delete"

                    >
                        <DeleteIcon sx={{
                            fontSize: '2em'
                        }} />
                    </IconButton>
                </Box>
            )}
        </Paper>
    )
}

export default InList
