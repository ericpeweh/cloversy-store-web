// Dependencies
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React from "react";
import Button from "../Button/Button";

// Styles
import { ConfirmationModalContainer } from "./ConfirmationModal.styles";

interface ConfirmationModalProps {
	modalTitle: string;
	modalDescription: string;
	open: boolean;
	onClose: () => void;
}

const ConfirmationModal = ({
	open,
	onClose,
	modalTitle,
	modalDescription
}: ConfirmationModalProps) => {
	return (
		<ConfirmationModalContainer open={open} onClose={onClose}>
			<DialogTitle>{modalTitle}</DialogTitle>
			<DialogContent>
				<DialogContentText>{modalDescription}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} variant="outlined" color="primary">
					Batal
				</Button>
				<Button onClick={() => {}} color="primary">
					Hapus
				</Button>
			</DialogActions>
		</ConfirmationModalContainer>
	);
};

export default ConfirmationModal;
