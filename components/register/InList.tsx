import { Box, Grid, Paper, Typography, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { degreeEnum, degreeLabelEnum } from '@/context/register/types';

const InList = ({ id, name, degree, city, deleteFunction, editFunction, degreeLabel }: { id: string, name: string, degree: string, city: string, deleteFunction: (id: string) => void, editFunction: (id: boolean) => void, degreeLabel: degreeLabelEnum }) => {

    const [hover, setHover] = useState(false);
    const [degreeName, setDegreeName] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        if (degreeLabel) {

            switch (degree) {
                case degreeEnum.DOCTOR:
                    setText((degreeLabel === degreeLabelEnum.DURING) ? 'DOKTORSKICH' : 'DOKTOR');
                    break;
                case degreeEnum.ENGINEER:
                    setText((degreeLabel === degreeLabelEnum.DURING) ? 'INŻYNIERSKICH' : 'INŻYNIER');
                    break;
                case degreeEnum.MASTER:
                    setText((degreeLabel === degreeLabelEnum.DURING) ? 'MAGISTERSKICH' : 'MAGISTER');
                    break;
                case degreeEnum.BACHELOR:
                    setText((degreeLabel === degreeLabelEnum.DURING) ? 'LICENCJACKICH' : 'LICENCJAT');
                    break;
                default:
                    setText('loading error...');

            }
        }
    }, [degree])


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
                    fontStyle={'oblique'}
                    fontWeight={'bold'}
                >
                    {degreeLabel === degreeLabelEnum.DURING ? 'w trakcie studiów' : 'ukończono'}
                </Typography>
                <Typography
                    variant="body1"
                    color="#A758B5"
                    align="center"
                    fontWeight={'bold'}
                >
                    {text}
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
