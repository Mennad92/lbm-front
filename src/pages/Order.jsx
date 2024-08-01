import * as React from 'react';

import { Box, Button, Card, CardContent, CssBaseline, Grid, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import AddressForm from '../components/order/AddressForm';
import Info from '../components/order/Info';
import InfoMobile from '../components/order/InfoMobile';
import PaymentForm from '../components/order/PaymentForm';
import Review from '../components/order/Review';
import { useState, useEffect } from 'react';
import profileService from '../services/profileService';
import { v4 as uuidv4 } from 'uuid';
import { jwtDecode } from "jwt-decode";
import { useAuthStore } from '../stores/authStore';

export default function Order() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ['Adresse de livraison', 'Détails de paiement', 'Résumé de commande'];
    const [isFetched, setIsFetched] = useState(false);
    const [profileForm, setProfileForm] = useState({
      firstName: '',
      lastName: '',
      address: '',
      phone: '',
      city: '',
      postal: ''
    });
    const [uuid, setUuid] = useState('');

    function getUserId() {
      const accessToken = useAuthStore.getState().accessToken;
      if (accessToken) {
        try {
          const decodedToken = jwtDecode(accessToken);
          return decodedToken.user_id;
        } catch (error) {
          console.error("Erreur lors du décodage du token:", error);
          return null;
        }
      }
    }
  
    const handleChange = (event) => {
      setProfileForm({
        ...profileForm,
        [event.target.name]: event.target.value
      })
    };

    useEffect(() => {
        if(!isFetched) {
            const fetchProfile = async () => {
              try {
                const response = await profileService.getProfile();
                setProfileForm({
                  firstName: response.data.first_name || '',
                  lastName: response.data.last_name || '',
                  address: response.data.address || '',
                  phone: response.data.phone || '',
                  city: response.data.city || '',
                  postal: response.data.postal || ''
                });
              } catch (err) {
              }
            };
        
            fetchProfile();
            setIsFetched(true);
            setUuid(uuidv4());

        }
    }, [isFetched]);

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (profileForm ? <AddressForm  profileData={profileForm} handleChange={handleChange} /> : 'Chargement en cours');
            case 1:
                return <PaymentForm orderId={uuid} />;
            case 2:
                return <Review profileData={profileForm} orderId={uuid} />;
            default:
                throw new Error('Unknown step');
        }
    }

    const isValidForm = () => {
        return !(profileForm.firstName && profileForm.lastName && profileForm.address && profileForm.phone && profileForm.city && profileForm.postal);
    };

    const handleNext = async () => {
        if(activeStep === steps.length - 1) {
            try {
              await profileService.updateProfile(getUserId(), profileForm);
            } catch (err) {
                console.error(err);
            }

        }        
        else {
            setActiveStep(activeStep + 1);
        }    
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <>
            <CssBaseline />
            <Grid container sx={{ height: { xs: '100%', sm: '100%' } }}>
                <Grid
                    item
                    xs={12}
                    sm={5}
                    lg={4}
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        flexDirection: 'column',
                        backgroundColor: 'background.paper',
                        borderRight: { sm: 'none', md: '1px solid' },
                        borderColor: { sm: 'none', md: 'divider' },
                        alignItems: 'start',
                        pt: 4,
                        px: 10,
                        gap: 4,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: 1,
                            width: '100%',
                            maxWidth: 500,
                        }}
                    >
                        <Info />
                    </Box>
                </Grid>
                <Grid
                    item
                    sm={12}
                    md={7}
                    lg={8}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '100%',
                        width: '100%',
                        backgroundColor: { xs: 'transparent', sm: 'background.default' },
                        alignItems: 'start',
                        pt: { xs: 0, sm: 0 },
                        px: { xs: 2, sm: 10 },
                        gap: { xs: 0, md: 0 },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: { sm: 'space-between', md: 'flex-end' },
                            alignItems: 'center',
                            width: '100%',
                            maxWidth: { sm: '100%', md: 600 },
                        }}
                    >

                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                flexGrow: 1,
                                height: 150,
                            }}
                        >
                            <Stepper
                                id="desktop-stepper"
                                activeStep={activeStep}
                                sx={{
                                    width: '100%',
                                    height: 40,
                                }}
                            >
                                {steps.map((label) => (
                                    <Step
                                        sx={{
                                            ':first-child': { pl: 0 },
                                            ':last-child': { pr: 0 },
                                        }}
                                        key={label}
                                    >
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                    </Box>
                    <Card
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            width: '100%',
                        }}
                    >
                        <CardContent
                            sx={{
                                display: 'flex',
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                ':last-child': { pb: 2 },
                            }}
                        >
                            <InfoMobile />
                        </CardContent>
                    </Card>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: 1,
                            width: '100%',
                            maxWidth: { sm: '100%', md: 600 },
                            maxHeight: '720px',
                            gap: { xs: 5, md: 'none' },
                        }}
                    >
                        <Stepper
                            id="mobile-stepper"
                            activeStep={activeStep}
                            alternativeLabel
                            sx={{ display: { sm: 'flex', md: 'none' } }}
                        >
                            {steps.map((label) => (
                                <Step
                                    sx={{
                                        ':first-child': { pl: 0 },
                                        ':last-child': { pr: 0 },
                                        '& .MuiStepConnector-root': { top: { xs: 6, sm: 12 } },
                                    }}
                                    key={label}
                                >
                                    <StepLabel
                                        sx={{ '.MuiStepLabel-labelContainer': { maxWidth: '70px' } }}
                                    >
                                        {label}
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length ? (
                            <Stack spacing={2} useFlexGap>
                                <Typography variant="h1">📦</Typography>
                                <Typography variant="h5">Merci pour votre commande!</Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Votre numéro de commande est 
                                    <strong>&nbsp;{uuid}</strong>. Vous pouvez suivre l'état d'avancement de votre commande depuis le menu Vos commandes.
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        alignSelf: 'start',
                                        width: { xs: '100%', sm: 'auto' },
                                    }}
                                >
                                    Voir vos commandes
                                </Button>
                            </Stack>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column-reverse', sm: 'row' },
                                        justifyContent: activeStep !== 0 ? 'space-between' : 'flex-end',
                                        alignItems: 'end',
                                        flexGrow: 1,
                                        gap: 0,
                                        pb: { xs: 12, sm: 0 },
                                        mt: { xs: 2, sm: 0 },
                                        mb: '20px',
                                    }}
                                >
                                    {activeStep !== 0 && (
                                        <Button
                                            startIcon={<ChevronLeftRoundedIcon />}
                                            onClick={handleBack}
                                            variant="text"
                                            sx={{
                                                display: { xs: 'none', sm: 'flex' },
                                            }}
                                        >
                                            Précédent
                                        </Button>
                                    )}

                                    {activeStep !== 0 && (
                                        <Button
                                            startIcon={<ChevronLeftRoundedIcon />}
                                            onClick={handleBack}
                                            variant="outlined"
                                            fullWidth
                                            sx={{
                                                display: { xs: 'flex', sm: 'none' },
                                            }}
                                        >
                                            Précédent
                                        </Button>
                                    )}

                                    <Button
                                        variant="contained"
                                        endIcon={<ChevronRightRoundedIcon />}
                                        onClick={handleNext}
                                        disabled={isValidForm()}
                                        sx={{
                                            width: { xs: '100%', sm: 'fit-content' },
                                        }}
                                    >
                                        {activeStep === steps.length - 1 ? 'Confirmer commande' : 'Suivant'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </Box>
                </Grid>
            </Grid>

        </>
    );
}