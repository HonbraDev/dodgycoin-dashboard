import { User } from "./types";
import Supabase from "./supabaseadmin";
import { UUID } from "@dogehouse/kebab";
import uuid from "uuid";

const getAccount = async (id: UUID): Promise<User> => {
  const supabase = Supabase();
  const { data, error } = await supabase.from("users").select("*").eq("id", id);
  if (error) throw error;
  if (!data[0]) return { id, money: 0, fake: true, isAdmin: false };
  return data[0];
};

export default getAccount;
