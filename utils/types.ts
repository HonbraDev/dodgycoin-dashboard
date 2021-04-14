export type User = {
  monies: number;
  github?: string;
};

export type AccountList = Record<string, User>;
