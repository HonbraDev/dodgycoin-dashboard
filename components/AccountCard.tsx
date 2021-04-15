import { User } from "../utils/types";
import Card from "./Card";

const AccountCard = ({ user }: { user: { id: string } & User }) => (
  <Card className="space-y-1 text-center">
    <h1 className="text-3xl">
      <span className="font-semibold">{user.monies}</span> <span>Ð</span>
    </h1>
    {user.cache ? (
      <>
        <div className="flex items-center justify-center space-x-2">
          <img className="w-5 h-5 rounded-full" src={user.cache.avatarUrl} />
          <p>{user.cache.username}</p>
        </div>
      </>
    ) : (
      <small className="text-sm">{user.id}</small>
    )}
  </Card>
);

export default AccountCard;
