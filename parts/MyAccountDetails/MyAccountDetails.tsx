// Dependencies
import React from "react";

// Styles
import {
	FormContainer,
	InputContainer,
	MyAccountDetailsContainer,
	ProfilePictureInputContainer,
	SectionTitle
} from "./MyAccountDetails.styles";

// Components
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import { Avatar, Grid } from "@mui/material";

const MyAccountDetails = () => {
	return (
		<MyAccountDetailsContainer>
			<FormContainer>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<SectionTitle>Informasi Akun</SectionTitle>
					</Grid>
					<Grid item xs={12}>
						<InputContainer>
							<ProfilePictureInputContainer>
								<Avatar sx={{ width: 80, height: 80 }} src="/images/1.jpg" />
								<Button size="small" variant="outlined">
									Ganti foto profil
								</Button>
								<Button size="small" variant="outlined" color="error">
									Hapus foto
								</Button>
							</ProfilePictureInputContainer>
						</InputContainer>
					</Grid>
					<Grid item xs={12}>
						<InputContainer>
							<TextInput label="Nama Lengkap" id="namaLengkap" />
						</InputContainer>
					</Grid>
					<Grid item xs={6}>
						<InputContainer>
							<TextInput label="Email" id="email" type="email" />
						</InputContainer>
					</Grid>
					<Grid item xs={6}>
						<InputContainer>
							<TextInput label="Telepon" id="telepon" type="tel" />
						</InputContainer>
					</Grid>
					<Grid item xs={12}>
						<Grid item xs={3} mt={1}>
							<Button color="primary" fullWidth size="small">
								Simpan
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</FormContainer>
			<FormContainer>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<SectionTitle>Ganti Kata Sandi</SectionTitle>
					</Grid>
					<Grid item xs={12}>
						<InputContainer>
							<TextInput label="Password lama" id="namaLengkap" type="password" />
						</InputContainer>
					</Grid>
					<Grid item xs={6}>
						<InputContainer>
							<TextInput label="Password Baru" id="passwordBaru" type="password" />
						</InputContainer>
					</Grid>
					<Grid item xs={6}>
						<InputContainer>
							<TextInput
								label="Konfirmasi Password Baru"
								id="konfirmasiPasswordBaru"
								type="password"
							/>
						</InputContainer>
					</Grid>
					<Grid item xs={12}>
						<Grid item xs={3} mt={1}>
							<Button fullWidth size="small">
								Ganti password
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</FormContainer>
		</MyAccountDetailsContainer>
	);
};

export default MyAccountDetails;
