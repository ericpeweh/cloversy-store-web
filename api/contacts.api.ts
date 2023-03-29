// Dependencies
import API from "./index";

// Types
import { ResponseBody, NewContactUsMessage } from "../interfaces";

const contactsApi = API.injectEndpoints({
	endpoints: build => ({
		sendContactUsMessage: build.mutation<ResponseBody<{ message: string }>, NewContactUsMessage>({
			query: newMessage => ({
				url: `contacts/message`,
				body: newMessage,
				method: "POST"
			})
		})
	}),
	overrideExisting: false
});

export const { useSendContactUsMessageMutation } = contactsApi;

export default contactsApi;
