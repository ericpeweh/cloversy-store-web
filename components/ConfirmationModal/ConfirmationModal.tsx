// Dependencies
import { Alert, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React from "react";
import Button from "../Button/Button";

// Styles
import { ConfirmationModalContainer } from "./ConfirmationModal.styles";

// Components
import ErrorMessage from "../ErrorMessage/ErrorMessage";

type ColorType =
	| "primary"
	| "inherit"
	| "secondary"
	| "success"
	| "error"
	| "info"
	| "warning"
	| undefined;

interface ConfirmationModalProps {
	modalTitle: string;
	modalDescription: string;
	open: boolean;
	cancelText?: string;
	confirmText?: string;
	cancelColor?: ColorType;
	confirmColor?: ColorType;
	isLoading?: boolean;
	error?: any;
	onConfirm: () => void;
	onClose: () => void;
	onlyCloseWithButton?: boolean;
}

const ConfirmationModal = ({
	open,
	onClose,
	onConfirm,
	modalTitle,
	modalDescription,
	isLoading,
	error,
	cancelText = "Batal",
	confirmText = "Hapus",
	cancelColor = "primary",
	confirmColor = "primary",
	onlyCloseWithButton = false
}: ConfirmationModalProps) => {
	return (
		<ConfirmationModalContainer
			open={open}
			onClose={isLoading || onlyCloseWithButton ? () => {} : onClose}
		>
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
			<DialogContent sx={{ py: 0 }}>
				{error && (
					<Alert severity="error">
						{error?.data?.message || "Error occured while processing action."}
					</Alert>
				)}
			</DialogContent>
			<DialogActions sx={{ flexDirection: { xs: "column", sm: "row" }, gap: 1 }}>
				<Button
					onClick={isLoading ? () => {} : onClose}
					variant="outlined"
					color={cancelColor}
					size="small"
				>
					{cancelText}
				</Button>
				<Button
					onClick={onConfirm}
					color={confirmColor}
					size="small"
					loading={isLoading}
					sx={{ ml: 0 }}
				>
					{confirmText}
				</Button>
			</DialogActions>
		</ConfirmationModalContainer>
	);
};

export default ConfirmationModal;
