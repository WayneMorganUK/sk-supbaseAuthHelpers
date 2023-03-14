import { getSupabase } from "@supabase/auth-helpers-sveltekit";
import { AuthApiError } from "@supabase/supabase-js";
import { i as invalid } from "../../../../chunks/index2.js";
const actions = {
  async default(event) {
    const { request, url } = event;
    const { supabaseClient } = await getSupabase(event);
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email) {
      return invalid(400, {
        error: "Please enter your email"
      });
    }
    if (!password) {
      return invalid(400, {
        error: "Please enter a password",
        values: {
          email
        }
      });
    }
    console.log("===", email, password, url.origin);
    const { error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: url.origin }
    });
    if (error) {
      if (error instanceof AuthApiError && error.status === 400) {
        return invalid(400, {
          error: "Invalid credentials.",
          values: {
            email
          }
        });
      }
      return invalid(500, {
        error: "Server error. Try again later.",
        values: {
          email
        }
      });
    }
    return {
      message: "Please check your email for a magic link to log into the website."
    };
  }
};
export {
  actions
};
