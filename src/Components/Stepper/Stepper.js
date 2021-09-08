import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Address from './Forms/Address';
import PersonalInfo from './Forms/PersonalInfo';
import OrderSummary from './Forms/OrderSummary';
import PlaceOrder from '../../Pages/PlaceOrder';
import { Link } from 'react-router-dom';
import "../index.css"


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Form 1 out of 3', 'Form 2 out of 3', 'Form 3 out of 3'];
}

function getStepContent(stepIndex, handleNext) {
    switch (stepIndex) {
        case 0:
            return <PersonalInfo handleNext={handleNext} />;
        case 1:
            return <Address handleNext={handleNext} />;
        case 2:
            return <OrderSummary handleNext={handleNext} />;
        default:
            return 'Unknown stepIndex';
    }
}

export default function StepperComponent() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    // const handleReset = () => {
    //     setActiveStep(0);
    // };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <PlaceOrder />
                        <div className="d-grid">
                            <Link className="btn form-btn"  to="/">Back To Home</Link>
                            {/* <button className="btn btn-primary" onClick={handleReset}>Reset</button> */}
                        </div>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep, handleNext)}</Typography>
                        {/* <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div> */}
                    </div>
                )}
            </div>
        </div>
    );
}