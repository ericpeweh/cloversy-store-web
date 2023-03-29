// Dependencies
import API from "./index";

// Types
import { ResponseBody } from "../interfaces";

const subscriptionApi = API.injectEndpoints({
	endpoints: build => ({
		subscribeToEmail: build.mutation<ResponseBody<{ subscribedEmail: string }>, string>({
			query: email => ({
				url: `subscription/email`,
				body: { email },
				method: "POST"
			})
		}),
		unsubscribeFromEmail: build.mutation<ResponseBody<{ subscribedEmail: string }>, string>({
			query: email => ({
				url: `subscription/email`,
				body: { email },
				method: "DELETE"
			})
		})
	}),
	overrideExisting: false
});

export const { useSubscribeToEmailMutation, useUnsubscribeFromEmailMutation } = subscriptionApi;

export default subscriptionApi;
