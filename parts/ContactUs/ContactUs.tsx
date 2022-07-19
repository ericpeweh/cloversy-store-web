// Dependencies
import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";
import Button from "../../components/Button/Button";
import PageTitle from "../../components/PageTitle/PageTitle";
import RadioInput from "../../components/RadioInput/RadioInput";
import TextInput from "../../components/TextInput/TextInput";

// Icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

// Components
import {
	ContactAvatar,
	ContactContainer,
	ContactForm,
	ContactInformation,
	ContactInformationDesc,
	ContactInformationList,
	ContactInformationListItem,
	ContactInformationText,
	ContactInformationTitle,
	ContactUsContainer
} from "./ContactUs.styles";

const contacts = [
	{ icon: EmailIcon, label: "cloversyid@gmail.com" },
	{ icon: InstagramIcon, label: "@cloversy.id" },
	{ icon: WhatsAppIcon, label: "+62 1234 5678 9012" },
	{ icon: PhoneIcon, label: "+62 878 1234 5678" },
	{ icon: LocationOnIcon, label: "Kalbar, Pontianak Kota" }
];

const ContactUs = () => {
	return (
		<ContactUsContainer>
			<PageTitle>Kontak Kami</PageTitle>
			<ContactContainer container spacing={4}>
				<Grid item xs={5}>
					<ContactInformation>
						<ContactInformationTitle>Informasi Kontak</ContactInformationTitle>
						<ContactInformationDesc>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aspernatur at autem
							impedit a veritatis voluptates.
						</ContactInformationDesc>
						<ContactInformationList>
							{contacts.map(contact => (
								<ContactInformationListItem key={contact.label}>
									<ListItemAvatar>
										<ContactAvatar>
											{React.createElement(contact.icon, { fontSize: "large" })}
										</ContactAvatar>
									</ListItemAvatar>
									<ContactInformationText primary={contact.label} />
								</ContactInformationListItem>
							))}
						</ContactInformationList>
					</ContactInformation>
				</Grid>
				<Grid item xs={7}>
					<ContactForm>
						<Grid container spacing={5}>
							<Grid item xs={6}>
								<TextInput id="name" label="Nama anda" />
							</Grid>
							<Grid item xs={6}>
								<TextInput id="name" label="Email anda" placeholder="abc@gmail.com" />
							</Grid>
							<Grid item xs={12}>
								<RadioInput
									label="Keperluan atau pertanyaan mengenai"
									options={["Produk", "Website / Store", "Partnership", "Lainnya"]}
									row
								/>
							</Grid>
							<Grid item xs={12}>
								<TextInput id="judul" label="Judul pesan" />
							</Grid>
							<Grid item xs={12}>
								<TextInput id="pesan" label="Pesan atau pertanyaan" multiline rows={5} />
							</Grid>
							<Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
								<Button endIcon={<ArrowForwardIcon />}>Kirim pesan</Button>
							</Grid>
						</Grid>
					</ContactForm>
				</Grid>
			</ContactContainer>
		</ContactUsContainer>
	);
};

export default ContactUs;
