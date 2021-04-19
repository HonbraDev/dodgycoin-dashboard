import type { NextApiRequest, NextApiResponse } from "next";
import supabaseAdmin from "../../utils/supabaseadmin";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const supabase = supabaseAdmin();
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .order("money", { ascending: false })
      .limit(10);
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
