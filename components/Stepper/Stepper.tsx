// Dependencies
import React, { useState } from "react";

// Components
import { Step, Stepper as MuiStepper, StepLabel } from "@mui/material";

interface StepperProps {
	steps: string[];
	activeStep: number;
}

const Stepper = ({ steps, activeStep }: StepperProps) => {
	return (
		<MuiStepper activeStep={activeStep}>
			{steps.map((label, i) => (
				<Step key={label} sx={{ mr: { xs: 0, sm: 2 }, mt: { xs: 2, sm: 0 }, ml: { xs: 0, sm: 2 } }}>
					<StepLabel>{label}</StepLabel>
				</Step>
			))}
		</MuiStepper>
	);
};

export default Stepper;
