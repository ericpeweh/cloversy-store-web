// Dependencies
import React from "react";
import Accordion from "../Accordion/Accordion";
import PageTitle from "../PageTitle/PageTitle";

// Styles
import { ContentContainer, FaqContainer, FaqSubtitle } from "./Faq.styles";

const Faq = () => {
	return (
		<FaqContainer>
			<PageTitle>Pertanyaan Umum</PageTitle>
			<ContentContainer>
				<FaqSubtitle>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem tempora ullam
					dolores corrupti officiis, totam minus.
				</FaqSubtitle>
				<Accordion
					title="Lorem ipsu?"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum illum ab modi officia, pariatur quo ad fugiat. Saepe mollitia quisquam quis repellendus at soluta corporis odit inventore, dignissimos ea."
				/>
				<Accordion
					title="Ding elit. Corporis earum illum "
					description="Ffugiat. Saepe mollitia quisquam quis repellendus Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum illum ab modi officia, pariatur quo ad at soluta corporis odit inventore, dignissimos ea."
				/>
				<Accordion
					title="Crporis earum illum "
					description="Uam quis repellendus at soluta corporis odit inventore, dignissimos ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum illum ab modi officia, pariatur quo ad fugiat. Saepe mollitia quisq"
				/>
				<Accordion
					title="Dcing elit. Corporis earum illum ab"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum illum ab modi officia, pariatur quo ad fugiat. Saepe mollitia quisquam quis repellendus at soluta corporis odit inventore, dignissimos ea. arum illum ab modi officia, pariatur quo ad fugiat. Saepe mollitia quisquam quis repellendus at soluta corporis odit inventore, dignissimos ea."
				/>
				<Accordion
					title="Elit Corporis earum illum a"
					description="Piu psum dolor sit amet consectetur adipisicing elit. Corporis earum illum ab modi officia, pariatur quo ad fug"
				/>
				<Accordion
					title="Dcing elit. Corporis earum illum ab"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum illum ab modi officia, pariatur quo ad fugiat. Saepe mollitia quisquam quis repellendus at soluta corporis odit inventore, dignissimos ea. arum illum ab modi officia, pariatur quo ad fugiat. Saepe mollitia quisquam quis repellendus at soluta corporis odit inventore, dignissimos ea."
				/>
				<Accordion
					title="Lorem ipsu?"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum illum ab modi officia, pariatur quo ad fugiat. Saepe mollitia quisquam quis repellendus at soluta corporis odit inventore, dignissimos ea."
				/>
				<Accordion
					title="Ding elit. Corporis earum illum "
					description="Ffugiat. Saepe mollitia quisquam quis repellendus Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum illum ab modi officia, pariatur quo ad at soluta corporis odit inventore, dignissimos ea."
				/>
				<Accordion
					title="Elit Corporis earum illum a"
					description="Piu psum dolor sit amet consectetur adipisicing elit. Corporis earum illum ab modi officia, pariatur quo ad fug"
				/>
			</ContentContainer>
		</FaqContainer>
	);
};

export default Faq;
