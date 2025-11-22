import { form, query } from "$app/server";
import { redirect } from "@sveltejs/kit";

let count = 0;

export const getCount = query(() => {
	if (count > 5) redirect(307, "/reset");

	return count;
});

export const increment = form(async () => {
	count++;

	await getCount().refresh();
});

export const reset = form(async () => {
	count = 0;

	await getCount().refresh();

	redirect(303, "/");
});
