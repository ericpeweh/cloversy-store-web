describe("Product explore flow", () => {
	it("should shows expected content and have feature working", () => {
		// Open store homepage
		cy.visit("http://localhost:3000");

		// Quick view all recommendation products (1-6)
		for (let i = 0; i < 6; i++) {
			// Hover on recommended product card and click quick view button
			cy.findByTestId(`recommendation-${i + 1}-container`)
				.trigger("mouseover")
				.findByTestId(`recommendation-quick-view-${i + 1}`)
				.click();

			// Quick view should pop up and show expected product title
			cy.findByTestId(`recommendation-${i + 1}`).then(productTitleEl => {
				cy.findByTestId("dialog-product-title").contains(productTitleEl.text());
			});

			// Quick view dialog also show expected product price
			cy.findByTestId(`recommendation-${i + 1}-price`).then(productPriceEl => {
				cy.findByTestId("dialog-product-price").then(dialogPriceEl => {
					expect(productPriceEl.text()).to.equal(dialogPriceEl.text());
				});
			});

			// Add to cart button should be visible to user
			cy.findByRole("button", { name: /tambahkan ke keranjang/i }).should("exist");

			// Click on close button and continue
			cy.findByRole("dialog").findByTestId("dialog-close-button").click();
		}

		// Navigate to products page
		cy.findByTestId("nav-Produk").click();
		cy.url().should("contain", "/products");

		// Open filter drawer
		cy.findByTestId("filter-button").click();
		cy.contains(/filter brand/i);
		cy.contains(/filter harga/i);
		cy.contains(/reset filters/i);

		// Apply filters
		cy.findByRole("button", { name: /all brands/i }).click();
		cy.findByRole("option", { name: /nike \(\d+\)/i }).click();
		cy.findByRole("button", { name: /terapkan/i }).click();
		cy.findByTestId("filter-button").contains(/1/i);

		// Reset filter
		// eslint-disable-next-line cypress/no-unnecessary-waiting
		cy.wait(2000);
		cy.findByText(/hasil pencarian menggunakan ,/i)
			.findByText(/reset/i)
			.click();
		cy.findByTestId("filter-button").contains(/0/i);

		// Sort product and change view mode
		cy.findByRole("button", { name: /default sorting/i }).click();
		cy.findByRole("option", { name: /sort by popularity/i }).click();
		cy.findByRole("button", { name: /sort by popularity/i }).should("exist");

		cy.findByRole("button", { name: /sort by popularity/i }).click();
		cy.findByRole("option", { name: /sort by rating/i }).click();
		cy.findByRole("button", { name: /sort by rating/i }).should("exist");

		cy.findByRole("button", { name: /sort by rating/i }).click();
		cy.findByRole("option", { name: /sort by price: low to high/i }).click();
		cy.findByRole("button", { name: /sort by price: low to high/i }).should("exist");

		cy.findByRole("button", { name: /sort by price: low to high/i }).click();
		cy.findByRole("option", { name: /sort by price: high to low/i }).click();
		cy.findByRole("button", { name: /sort by price: high to low/i }).should("exist");

		cy.findByRole("button", { name: /sort by price: high to low/i }).click();
		cy.findByRole("option", { name: /default sorting/i }).click();
		cy.findByRole("button", { name: /default sorting/i }).should("exist");

		// Open about us page
		cy.findByRole("contentinfo")
			.findByText(/tentang kami/i)
			.click();
		cy.url().should("contain", "/about-us");
		cy.findByRole("heading", { name: /cerita kami/i }).scrollIntoView({
			duration: 3000
		});

		// Open terms and condition page
		cy.findByText(/syarat & ketentuan/i).click();
		cy.url().should("contain", "/terms-conditions");
		cy.contains(/syarat & ketentuan/i);

		// Open FAQ page
		cy.findByText(/pertanyaan umum/i)
			.scrollIntoView({
				duration: 3000
			})
			.click();
		cy.url().should("contain", "/faq");
		cy.contains(/pertanyaan umum/i);

		// Show all FAQ accordion (1-9)
		for (let i = 0; i < 9; i++) {
			cy.findByTestId(`faq-${i + 1}`).click();
		}

		// Scroll to top
		cy.scrollTo("top");

		// Open return policy page
		cy.findByText(/aturan pengembalian/i)
			.scrollIntoView({
				duration: 3000
			})
			.click();
		cy.url().should("contain", "/return-policy");

		// Open privacy policy page
		cy.findByText(/aturan privasi/i)
			.scrollIntoView({
				duration: 1000
			})
			.click();
		cy.url().should("contain", "/privacy-policy");

		//  Open search drawer
		cy.findByRole("button", { name: /search/i }).click();

		// Search for 'not found'
		cy.findByTestId("search-input").type("not found");
		cy.contains(/produk tidak ditemukan!/i);

		// Search for 'nike af1' products
		cy.findByTestId("search-input").clear().type("nike af1");
		cy.findByRole("button", { name: /show all/i }).click();

		// Should be directed to /products page
		cy.url().should("contain", "/products");
		cy.contains(/hasil pencarian untuk: nike af1/i);

		// Change view mode to list
		cy.findByTestId("list-view-button").click();

		// Clear filter
		cy.findByText(/hasil pencarian untuk:/i)
			.findByText(/reset/i)
			.click();

		// Change view mode back to grid view
		cy.findByTestId("grid-view-button").click();
	});
});

export {};
