import { User as DogeHouseUser } from "@dogehouse/kebab";

export type User = {
  monies: number;
  github?: string;
  cache?: DogeHouseUser;
};

export type AccountList = Record<string, User>;
