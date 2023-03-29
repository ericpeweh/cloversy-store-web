describe("Contact us form flow", () => {
	it("should submit form successfully", () => {
		// Open contact us page
		cy.visit("http://localhost:3000/contact-us");

		// Should show contact information
		cy.contains(/informasi kontak/i);
		cy.contains(/cloversyid@gmail\.com/i);
		cy.contains(/@cloversy\.id/i);
		cy.contains(/\+62 821 5898 0966/i);
		cy.contains(/\+62 878 1800 1061/i);
		cy.contains(/kalbar, pontianak kota/i);

		// Type input into contact us form
		cy.findByRole("textbox", {
			name: /nama anda/i
		})
			.type("End-to-end")
			.blur();

		cy.findByRole("textbox", {
			name: /email anda/i
		})
			.type("invalidemail@x.y") // test for invalid email
			.blur();

		cy.findByRole("radio", {
			name: /lainnya/i
		}).check();

		cy.findByRole("textbox", {
			name: /judul pesan/i
		})
			.type("Ini adalah judul pesan end-to-end testing")
			.blur();

		cy.findByRole("textbox", {
			name: /pesan atau pertanyaan/i
		})
			.type("Ini adalah isi pesan atau pertanyaan yang digunakan dalam end-to-end testing")
			.blur();
		cy.contains(/76\/1000/i);

		// Submit message
		cy.findByRole("button", {
			name: /kirim pesan/i
		}).click();

		// Assert error alert box is shown
		cy.contains(/validation error: "email" must be a valid email/i);

		// Type in correct email
		cy.findByRole("textbox", {
			name: /email anda/i
		})
			.clear()
			.type("e2e@example.com") // valid email
			.blur();

		// Retry submit message
		cy.findByRole("button", {
			name: /kirim pesan/i
		}).click();

		// Assert alert box is shown
		cy.contains(/berhasil mengirim pesan/i);

		// Scroll to top
		cy.scrollTo("top");
	});
});

export {};
