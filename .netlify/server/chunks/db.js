import { createClient } from "@supabase/auth-helpers-sveltekit";
const PUBLIC_SUPABASE_URL = "https://pasbhtorbntymkogqrfg.supabase.co";
const PUBLIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhc2JodG9yYm50eW1rb2dxcmZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIwNTc3MjksImV4cCI6MTk3NzYzMzcyOX0.FAXg_PHuofC2Vz4giFDMjwoxshvBG5KgmvfJw-HfwRY";
createClient(
  PUBLIC_SUPABASE_URL,
  PUBLIC_SUPABASE_ANON_KEY
);
