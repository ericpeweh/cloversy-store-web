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
	isDeleteConfirmation?: boolean;
	onClose: () => void;
}

const ConfirmationModal = ({
	open,
	onClose,
	modalTitle,
	modalDescription,
	isDeleteConfirmation = false
}: ConfirmationModalProps) => {
	return (
		<ConfirmationModalContainer open={open} onClose={onClose}>
			<DialogTitle
				sx={{
					fontSize: { xs: "1.7rem", sm: "1.8rem", md: "1.9rem" },
					p: { xs: "1.5rem 2rem", sm: "1.5rem 2.5rem" }
				}}
			>
				{modalTitle}
			</DialogTitle>
			<DialogContent sx={{ p: { xs: 2, sm: 3 } }}>
				<DialogContentText>{modalDescription}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} variant="outlined" color="secondary" size="small">
					Batal
				</Button>
				<Button onClick={() => {}} color={isDeleteConfirmation ? "error" : "primary"} size="small">
					Hapus
				</Button>
			</DialogActions>
		</ConfirmationModalContainer>
	);
};

export default ConfirmationModal;
