import { UUID } from "@dogehouse/kebab";

export type User = {
  id: UUID;
  money: number;
  githubId?: string;
  fake?: boolean;
  isAdmin: boolean;
  dashboardId?: UUID;
};

export type AccountList = Record<string, User>;
