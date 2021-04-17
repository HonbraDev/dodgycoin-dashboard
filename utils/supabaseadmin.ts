import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseAdmin = () => {
  if ("supabase" in process) {
    return process["supabase"] as SupabaseClient;
  } else {
    return (process["supabase"] = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE!
    ));
  }
};

export default supabaseAdmin;
