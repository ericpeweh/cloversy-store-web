// Dependencies
import { Alert, Grid, ListItemAvatar, ListItemText } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

// Icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

// Hooks
import useWindowSize from "../../hooks/useWindowSize";
import { useSendContactUsMessageMutation } from "../../api/contacts.api";

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
import Button from "../../components/Button/Button";
import PageTitle from "../../components/PageTitle/PageTitle";
import RadioInput from "../../components/RadioInput/RadioInput";
import TextInput from "../../components/TextInput/TextInput";

const contacts = [
	{ icon: EmailIcon, label: "cloversyid@gmail.com" },
	{ icon: InstagramIcon, label: "@cloversy.id" },
	{ icon: WhatsAppIcon, label: "+62 1234 5678 9012" },
	{ icon: PhoneIcon, label: "+62 878 1234 5678" },
	{ icon: LocationOnIcon, label: "Kalbar, Pontianak Kota" }
];

interface ContactUsFormProps {
	name: string;
	email: string;
	objective: "Produk" | "Website / Store" | "Partnership" | "Lainnya" | "default";
	title: string;
	message: string;
}

const contactUsInitialFormValues: ContactUsFormProps = {
	name: "",
	email: "",
	objective: "default",
	title: "",
	message: ""
};

const ContactUsSchema = Yup.object().shape({
	name: Yup.string().required("Kamu harus mengisi n"),
	email: Yup.string().email("Email tidak valid!").required("Email dibutuhkan"),
	objective: Yup.string()
		.oneOf(["Produk", "Website / Store", "Partnership", "Lainnya", "default"])
		.not(["default"], "Kamu harus memilih keperluan"),
	title: Yup.string().required("Kamu harus mengisi judul"),
	message: Yup.string()
		.required("Kamu harus mengisi pesan / pertanyaan")
		.test("len", "Message too long, max 1000 characters", value => {
			if (value === undefined) return true;
			return value.length === 0 || value.length <= 1000;
		})
});

const ContactUs = () => {
	const { wWidth } = useWindowSize();

	const [
		sendContactUsMessage,
		{
			isLoading: isSendContactUsMessageLoading,
			reset: resetSendContactUsMessage,
			isSuccess: isSendContactUsMessageSuccess,
			error: sendContactUsMessageErrorData
		}
	] = useSendContactUsMessageMutation();
	const sendContactUsError: any = sendContactUsMessageErrorData;

	return (
		<ContactUsContainer>
			<PageTitle>Kontak Kami</PageTitle>
			<ContactContainer>
				<Grid container spacing={{ md: 2, lg: 3, xl: 4 }}>
					<Grid item xs={12} md={5}>
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
					<Grid item xs={12} md={7}>
						<Formik
							initialValues={contactUsInitialFormValues}
							validationSchema={ContactUsSchema}
							onSubmit={async (values, { resetForm }) => {
								const { name: senderName, ...otherValues } = values;
								const { status } = await sendContactUsMessage({
									...otherValues,
									senderName
								}).unwrap();

								if (status === "success") resetForm();
							}}
							enableReinitialize={true}
						>
							{({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
								<ContactForm onSubmit={handleSubmit}>
									<Grid container spacing={{ xs: 2, md: 3, lg: 4, xl: 5 }}>
										<Grid item xs={12} sm={6}>
											<TextInput
												performant
												name="name"
												label="Nama anda"
												onChange={handleChange}
												value={values.name}
												onBlur={handleBlur}
												error={Boolean(errors.name && touched.name)}
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextInput
												performant
												name="email"
												label="Email anda"
												placeholder="abc@gmail.com"
												onChange={handleChange}
												value={values.email}
												onBlur={handleBlur}
												error={Boolean(errors.email && touched.email)}
											/>
										</Grid>
										<Grid item xs={12}>
											<RadioInput
												name="objective"
												label="Keperluan atau pertanyaan mengenai: "
												options={["Produk", "Website / Store", "Partnership", "Lainnya"]}
												row={wWidth > 600}
												onChange={handleChange}
												value={values.objective}
												onBlur={handleBlur}
												error={Boolean(errors.objective)}
											/>
										</Grid>
										<Grid item xs={12}>
											<TextInput
												performant
												name="title"
												label="Judul pesan"
												onChange={handleChange}
												value={values.title}
												onBlur={handleBlur}
												error={Boolean(errors.title && touched.title)}
											/>
										</Grid>
										<Grid item xs={12} sx={{ position: "relative" }}>
											<TextInput
												performant
												name="message"
												label="Pesan atau pertanyaan"
												multiline
												rows={5}
												onChange={handleChange}
												value={values.message}
												onBlur={handleBlur}
												error={Boolean(errors.message && touched.message)}
												maxLength={1000}
											/>
										</Grid>

										<Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
											<Button
												endIcon={<ArrowForwardIcon />}
												type="submit"
												onClick={() => resetSendContactUsMessage()}
												loading={isSendContactUsMessageLoading}
											>
												Kirim pesan
											</Button>
										</Grid>
										<Grid item xs={12} mt={-2}>
											{!isSendContactUsMessageLoading && sendContactUsError && (
												<Alert severity="error">
													{sendContactUsError?.data?.message ||
														"Error occured while sending message. Please try again later"}
												</Alert>
											)}
											{!isSendContactUsMessageLoading && isSendContactUsMessageSuccess && (
												<Alert severity="success" onClose={() => resetSendContactUsMessage()}>
													Berhasil mengirim pesan
												</Alert>
											)}
										</Grid>
									</Grid>
								</ContactForm>
							)}
						</Formik>
					</Grid>
				</Grid>
			</ContactContainer>
		</ContactUsContainer>
	);
};

export default ContactUs;
