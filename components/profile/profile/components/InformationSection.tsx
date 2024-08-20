import { ProfileContext } from '@/context/profile/ProfileContext';
import { Card, CardContent, Typography, Grid, Divider, Chip } from '@mui/material';
import { FC, useContext } from 'react';

const InformationSection: FC = () => {
    const data = useContext(ProfileContext);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Card sx={{ height: '100%' }}>
                    <CardContent>
                        <Typography
                            variant="h5"
                            component="h2"
                            gutterBottom
                            sx={{
                                position: 'relative',
                                display: 'inline-block',
                                '&:hover .blur-text': {
                                    filter: 'blur(4px)'
                                },
                                '&:hover .edit-label': {
                                    opacity: '1' 
                                }
                            }}
                        >
                            <span
                                className="blur-text"
                                style={{
                                    display: 'inline-block',
                                }}
                            >
                                {`${data?.profileData?.f_name} ${data?.profileData?.l_name}`}
                            </span>
                            <span
                                className="edit-label"
                                style={{
                                    display: 'flex',
                                    opacity: '0',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    pointerEvents: 'none',
                                }}
                            >
                                Edytuj
                            </span>
                        </Typography>

                        <Typography variant="body1" color="textSecondary">
                            Data urodzenia: {data?.profileData?.birth_date || 'N/A'}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Miasto zamieszkania: {data?.profileData?.loc || 'N/A'}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body2">
                            {data?.profileData?.description || 'Brak opisu'}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} md={6}>
                <Card sx={{ height: '100%' }}>
                    <CardContent>
                        <Typography variant="h6" component="h3" gutterBottom>
                            Ukończone szkoły
                        </Typography>
                        {data?.profileData?.univercities?.map((element, index) => (
                            <Typography variant="body1" key={`${element.name}-${index}`}>
                                <strong>{element.name}</strong> - {element.city}
                            </Typography>
                        ))}

                        <Divider sx={{ my: 2 }} />
                        <Typography variant="h6" component="h3" gutterBottom>
                            Umiejętności
                        </Typography>
                        <Typography variant="body1" fontWeight="bold">
                            Twarde:
                        </Typography>
                        {
                            data?.profileData?.hardSkills.map((element) => (
                                <Chip label={element} sx={{ margin: '4px' }} />

                            ))
                        }

                        <Divider sx={{ my: 1 }} />
                        <Typography variant="body1" fontWeight="bold">
                            Miękkie:
                        </Typography>
                        {data?.profileData?.softSkills.map((element) => (
                            <Chip label={element} sx={{ margin: '4px' }} />

                        ))}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default InformationSection;
