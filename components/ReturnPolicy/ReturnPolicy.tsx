// Dependencies
import React from "react";

// Styles
import { ContentContainer, ReturnPolicyContainer } from "./ReturnPolicy.styles";

// Components
import PageTitle from "../PageTitle/PageTitle";
import ContentDescription from "../ContentDescription/ContentDescription";

const ReturnPolicy = () => {
	return (
		<ReturnPolicyContainer>
			<PageTitle>Aturan Pengembalian</PageTitle>
			<ContentContainer>
				<ContentDescription>
					Lorem ipsum dolor <strong>sit amet consectetur</strong> adipisicing elit. Enim ex optio
					eligendi nesciunt eius quisquam iusto sapiente iure officiis laborum eum, ratione possimus
					architecto iste ut dolorum! Alias aperiam error accusamus tenetur adipisci modi
					distinctio. Esse amet aspernatur rerum porro.
				</ContentDescription>
				<ContentDescription>
					Iste ut dolorum! Alias aperiam error accusamus tenetur adipisci modi distinctio. Esse amet
					aspernatur rerum porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
					optio animi doloribus dignissimos quasi omnis a voluptatem. Eaque harum eligendi ab
					aliquid doloremque similique beatae eius eveniet assumenda enim deleniti ad, commodi
					quisquam reprehenderit tempora nihil dolore non? Eos similique culpa nam vel sed quod
					natus id eaque consectetur magnam Lorem ipsum dolor sit, amet consectetur adipisicing
					elit. Nemo doloribus doloremque dignissimos quae maxime expedita minima commodi dolor
					adipisci rem.
				</ContentDescription>
				<ContentDescription>
					Onmnis a voluptatem. Eaque harum eligendi ab aliquid doloremque similique beatae eius
					eveniet assumenda enim deleniti ad, commodi quisquam reprehenderit tempora nihil dolore
					non? Eos similique culpa nam vel sed quod natus id eaque consectetur magnam Lorem ipsum
					dolor sit, amet consectetur adipisicing elit. Nemo doloribus doloremque dignissimos quae
					maxime expedita minima commodi dolor adipisci rem.
				</ContentDescription>
				<ContentDescription>
					Nemo doloribus doloremque dignissimos quae maxime expedita minima commodi dolor adipisci
					rem.
				</ContentDescription>
				<ContentDescription>
					Quod natus id eaque consectetur magnam Lorem ipsum dolor sit, amet consectetur adipisicing
					elit. Nemo doloribus doloremque dignissimos quae maxime expedita minima commodi dolor
					adipisci rem.
				</ContentDescription>
			</ContentContainer>
		</ReturnPolicyContainer>
	);
};

export default ReturnPolicy;
