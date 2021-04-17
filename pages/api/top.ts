import type { NextApiRequest, NextApiResponse } from "next";
import supabaseAdmin from "../../utils/supabaseadmin";
import { User } from "../../utils/types";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const supabase = supabaseAdmin();
    const { data: rawData, error } = await supabase
      .from("users")
      .select("*")
      .order("money", { ascending: false })
      .limit(10);
    const data = rawData as User[];
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
