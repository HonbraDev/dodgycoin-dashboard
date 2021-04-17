import type { NextApiRequest, NextApiResponse } from "next";
import supabaseAdmin from "../../utils/supabaseadmin";
import dogehouseClient from "../../utils/dogehouseClient";
import { User } from "../../utils/types";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const supabase = supabaseAdmin();
    const client = await dogehouseClient();
    const { data: rawData, error } = await supabase
      .from("users")
      .select("*")
      .order("money", { ascending: false })
      .limit(10);
    const data = rawData as User[];
    if (error) throw error;
    const dogehouseUsers = await Promise.all(
      data.map((user) => client.query.getUserProfile(user.id))
    );
    res.status(200).json(
      data.map((user, index) => ({
        dogehouse: dogehouseUsers[index],
        ...user,
      }))
    );
  } catch (error) {
    res.status(500).json(error);
  }
};
