export interface User {
	id: number;
	full_name: string;
	email: string;
	profile_picture: string;
	email_verified: boolean;
	birth_date: string | null;
	banned_date: string | null;
	contact: string | null;
	created_at: string;
	credits: number;
	sub: string;
	user_role: "user" | "admin";
	user_status: "active" | "banned";
}
