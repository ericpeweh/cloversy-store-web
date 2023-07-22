describe("Account menu explore flow", () => {
	it("should show expected content and features are working", () => {
		// Open store homepage
		cy.visit("http://localhost:3000");

		// Click on login button
		cy.findByRole("button", {
			name: /login/i
		}).click();

		// Universal login, type in credentials needed and continue
		cy.loginToAuth0(Cypress.env("auth0_username"), Cypress.env("auth0_password"));

		// Open user profile menu
		cy.findByRole("button", {
			name: /user profile/i
		}).click();

		// Open dashboard page
		cy.findByRole("menuitem", {
			name: /dashboard/i
		}).click();
		cy.url().should("contain", "/account");

		// Assert menu is shown with expected list
		cy.contains(/akun saya/i);
		cy.contains(/dashboard/i);
		cy.contains(/pesanan saya/i);
		cy.contains(/wishlist/i);
		cy.contains(/voucher/i);
		cy.contains(/alamat pengiriman/i);
		cy.contains(/pesan/i);
		cy.contains(/detail akun/i);
		cy.contains(/logout/i);

		// Assert page is shown with expected content
		cy.findByRole("heading", {
			name: /pesanan saya/i
		}).should("be.visible");

		cy.contains(/belum bayar/i);
		cy.contains(/diproses/i);
		cy.contains(/dikirim/i);
		cy.contains(/beri penilaian/i);

		cy.findByRole("heading", {
			name: /informasi akun/i
		}).should("be.visible");

		cy.findByRole("heading", {
			name: /terakhir dilihat/i
		}).should("be.visible");

		// Open my orders page
		cy.findByTestId("link-my-orders").click();
		cy.url().should("contain", "/account/orders");

		// Switch between tabs
		cy.findByRole("tab", {
			name: /belum bayar/i
		}).click();

		// cy.get('[data-testid="status-badge"]').each($el => {
		// 	cy.wrap($el).should("have.text", "Belum bayar");
		// });

		cy.findByRole("tab", {
			name: /diproses/i
		}).click();

		// cy.get('[data-testid="status-badge"]').each($el => {
		// 	cy.wrap($el).should("have.text", "Diproses");
		// });

		cy.findByRole("tab", {
			name: /dikirim/i
		}).click();

		// cy.get('[data-testid="status-badge"]').each($el => {
		// 	cy.wrap($el).should("have.text", "Dikirim");
		// });

		cy.findByRole("tab", {
			name: /selesai/i
		}).click();

		// cy.get('[data-testid="status-badge"]').each($el => {
		// 	cy.wrap($el).should("have.text", "Selesai");
		// });

		cy.findByRole("tab", {
			name: /dibatalkan/i
		}).click();

		// cy.get('[data-testid="status-badge"]').each($el => {
		// 	cy.wrap($el).should("have.text", "Dibatalkan");
		// });

		// Open wihlist page
		cy.findByTestId("link-wishlist").click();
		cy.url().should("contain", "/account/wishlist");

		cy.findByRole("heading", {
			name: /wishlist anda/i
		}).should("exist");

		// Back to dashboard page
		cy.findByText(/akun/i).click();
		cy.url().should("contain", "/account");
		cy.findByRole("heading", { name: /akun saya/i }).should("exist");

		// Open vouchers page
		cy.findByTestId("link-vouchers").click();
		cy.url().should("contain", "/account/voucher");
		cy.findByRole("heading", { name: /voucher diskon/i }).should("exist");

		// Open voucher information dialog
		cy.findByRole("button", {
			name: /informasi/i
		})
			.should("exist")
			.click();

		cy.findByRole("heading", {
			name: /penggunaan voucher/i
		}).should("exist");
		cy.contains(/syarat & ketentuan/i);
		cy.contains(/memperoleh voucher/i);
		cy.contains(/cara pakai/i);

		// Close voucher information dialog
		cy.findByTestId("dialog-close-button").click();

		// Open address page
		cy.findByTestId("link-address").click();
		cy.url().should("contain", "/account/address");
		cy.findByRole("heading", { name: /alamat pengiriman/i }).should("exist");

		// Open and close add address modal
		cy.findByRole("button", {
			name: /tambah alamat/i
		})
			.should("exist")
			.click();

		cy.findByRole("heading", {
			name: /tambah alamat/i
		}).should("exist");

		cy.findByRole("button", {
			name: /simpan/i
		}).should("exist");

		cy.findByTestId("address-close-button").click();

		// Open chatting page
		cy.findByTestId("link-chat").click();
		cy.url().should("contain", "/account/chat");
		cy.findByRole("heading", { name: /pesan/i }).should("exist");

		cy.findByRole("heading", {
			name: /cloversy admin/i
		}).should("exist");

		cy.contains(/customer service/i);

		cy.findByTestId("EmojiEmotionsOutlinedIcon").should("exist");

		// Type and clear message input
		cy.findByRole("main")
			.findByRole("textbox")
			.type("Ini adalah contoh pesan testing end-to-end...")
			.clear();

		cy.findByTestId("send-chat-button").should("exist");

		// Open account details page
		cy.findByTestId("link-account-details").click();
		cy.url().should("contain", "/account/details");
		cy.findByRole("heading", { name: /detail akun/i }).should("exist");

		cy.findByRole("heading", {
			name: /foto profil/i
		}).should("exist");

		cy.findByRole("heading", {
			name: /informasi akun/i
		}).should("exist");

		cy.findByRole("heading", {
			name: /ganti kata sandi/i
		}).should("exist");

		// Should show edit account action buttons
		cy.findByRole("button", { name: /ganti foto profil/i }).should("exist");
		cy.findByRole("button", { name: /hapus foto/i }).should("exist");
		cy.findByRole("button", { name: /simpan perubahan/i }).should("exist");
		cy.findByRole("button", { name: /reset password/i }).should("exist");

		// Logout user
		cy.findByTestId("link-logout").click();

		// Login button should be display since user has logged out
		cy.findByRole("button", {
			name: /login/i
		}).should("exist");
	});
});

export {};
