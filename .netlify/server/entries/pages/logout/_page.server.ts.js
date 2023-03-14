import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { r as redirect } from "../../../chunks/index2.js";
const actions = {
  async default(event) {
    const { supabaseClient } = await getSupabase(event);
    await supabaseClient.auth.signOut();
    throw redirect(303, "/");
  }
};
export {
  actions
};
