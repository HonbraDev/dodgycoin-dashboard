import { UUID } from "@dogehouse/kebab";
import type { NextApiRequest, NextApiResponse } from "next";
import getAccount from "../../../utils/getAccount";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query.id as UUID;
    const account = await getAccount(id);
    res.status(200).json(account);
  } catch (e) {
    res.status(500).json(e);
  }
};
