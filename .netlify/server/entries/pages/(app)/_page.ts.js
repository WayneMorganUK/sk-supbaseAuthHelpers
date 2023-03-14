import { r as redirect } from "../../../chunks/index2.js";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";
const load = async (event) => {
  const { session } = await getSupabase(event);
  if (session) {
    throw redirect(303, "/dashboard");
  }
};
export {
  load
};
