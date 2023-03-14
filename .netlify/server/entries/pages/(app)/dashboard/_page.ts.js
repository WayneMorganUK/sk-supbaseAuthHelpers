import { r as redirect } from "../../../../chunks/index2.js";
import { getSupabase } from "@supabase/auth-helpers-sveltekit";
const load = async (event) => {
  const { session, supabaseClient } = await getSupabase(event);
  if (!session) {
    throw redirect(303, "/");
  }
  const { data: testTable } = await supabaseClient.from("test").select("*");
  return {
    testTable,
    user: session.user
  };
};
export {
  load
};
