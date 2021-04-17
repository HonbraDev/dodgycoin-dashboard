import { wrap, Wrapper } from "@dogehouse/kebab";
import { connect } from "@dogehouse/kebab/lib/raw";

const supabaseAdmin = async () => {
  if ("dogehouse" in process) {
    return process["dogehouse"] as Wrapper;
  } else {
    return (process["dogehouse"] = wrap(
      await connect(
        process.env.DOGEHOUSE_TOKEN!,
        process.env.DOGEHOUSE_REFRESH_TOKEN!,
        {}
      )
    ));
  }
};

export default supabaseAdmin;
