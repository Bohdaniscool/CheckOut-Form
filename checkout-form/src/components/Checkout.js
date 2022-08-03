import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>

                  <img src="data:image/png;base64,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" alt="name" width="60px"></img> 
            
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center"
          color='primary'
          >
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #6050072. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Previous
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
