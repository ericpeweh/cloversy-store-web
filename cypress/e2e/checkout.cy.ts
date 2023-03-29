describe("Checkout user flow, finish on payment", () => {
	it("should checkout successfully", () => {
		// Open store homepage
		cy.visit("http://localhost:3000");

		// Click on login button
		cy.findByRole("button", {
			name: /login/i
		}).click();

		// Universal login, type in credentials needed and continue
		cy.loginToAuth0(Cypress.env("auth0_username"), Cypress.env("auth0_password"));

		// Click on recommendation list item (first item)
		cy.findByTestId("recommendation-1").click();

		// Should redirect to product details page
		cy.url().should("include", "/products/");

		// Click add to cart button (smallest size is automatically selected)
		cy.findByTestId("add-to-cart").click();

		// Assert success pop up was shown
		cy.contains(/produk dimasukkan ke keranjang!/i);

		// Press on navbar shopping cart button
		cy.findByTestId("shopping-cart-button").click();

		// Assert that correct product title was called added to cart drawer lists
		cy.findByTestId("product-title").then(productTitleEl => {
			cy.findByTestId("cart-drawer-lists").contains(productTitleEl.text());
		});

		// Press checkout button on cart drawer
		cy.findByRole("button", { name: /checkout/i }).click();

		// Should redirect to checkout page and 'tambah alamat' button is shown
		cy.url().should("include", "/checkout");
		cy.contains(/tambah alamat/i);

		// Type on order note input
		cy.findByTestId("checkout-order-note")
			.type("Ini adalah catatan pesanan orderan end-to-end (e2e) testing.")
			.blur();

		// Check send as gift checkbox and type in gift note
		cy.findByRole("checkbox", {
			name: /kirim sebagai hadiah/i
		}).check();
		cy.findByTestId("checkout-gift-note")
			.type("Ini adalah catatan hadiah orderan end-to-end (e2e) testing.")
			.blur();

		// Should display checkout details information
		cy.findByText(/alamat pengiriman/i).should("exist");
		cy.findByText(/informasi lainnya/i).should("exist");
		cy.findByText(/detail pesanan/i).should("exist");

		// Back button should be shown
		cy.findByRole("button", { name: /kembali ke keranjang/i }).should("exist");

		// Click on next button
		cy.findByRole("button", {
			name: /selanjutnya/i
		}).click();

		// Should display list of shipping method with expected names
		cy.findByText(/metode pengiriman/i).should("exist");
		cy.findByRole("button", { name: /kembali/i }).should("exist");
		cy.contains(/JNE/i);
		cy.contains(/J&T/i);
		cy.contains(/SICEPAT/i);

		// Select the first shipping method available
		cy.findByTestId("shipping-method-1").check();

		// Continue to shipping payment page
		cy.findByRole("button", {
			name: /selanjutnya/i
		}).click();

		// Should show list of payment methods
		cy.findByText(/metode pembayaran/i).should("exist");
		cy.contains(/GOPAY/i);
		cy.contains(/MANDIRI VIRTUAL ACCOUNT/i);
		cy.contains(/BNI VIRTUAL ACCOUNT/i);
		cy.contains(/BRI VIRTUAL ACCOUNT/i);
		cy.contains(/PERMATA VIRTUAL ACCOUNT/i);

		// Select the first payment method (GOPAY)
		cy.findByTestId("payment-method-1").check();

		// Checkout final information should be shown before proceed to create order
		cy.contains(/subtotal/i);
		cy.contains(/biaya pengiriman/i);
		cy.contains(/total/i);

		// Click on create order button
		cy.findByRole("button", { name: /buat pesanan/i }).click();

		// Assert order was created and success message is shown
		cy.contains(/no pesanan: /i);
		cy.contains(/terima kasih/i);
		cy.contains(/pesanan kamu telah dibuat!/i);
		cy.contains(/status pesanan dan pengiriman/i);
		cy.contains(/informasi pesanan/i);

		// Should shows all action buttons then click on "Bayar sekarang" button to proceed to payment page
		cy.findByRole("button", {
			name: /lihat daftar pesanan/i
		}).should("exist");

		cy.findByRole("button", {
			name: /belanja lagi/i
		}).should("exist");

		cy.findByRole("button", {
			name: /bayar sekarang/i
		})
			.should("exist")
			.click();

		// Should redirect to payment page and payment, additional information is shown
		cy.url().should("include", "/payment");
		cy.contains(/jumlah bayar/i);
		cy.contains(/instruksi pembayaran/i);
		cy.contains(/detail produk/i);
		cy.contains(/informasi pesanan/i);
		cy.contains(/belum bayar/i);
	});
});

export {};
