export type UserStatus = "active" | "banned";

export interface User {
	id: string;
	full_name: string;
	email: string;
	contact: string | null;
	profile_picture: string | null;
	user_status: UserStatus;
	credits: string;
	user_role: string;
	banned_date: string | null;
	birth_date: string | null;
	created_at: string;
}

export interface UpdateAccountDetailsBody {
	full_name: string;
	contact: string;
	birth_date: string;
}
