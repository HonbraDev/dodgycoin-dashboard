import { DetailedHTMLProps, HTMLAttributes } from "react";
import { User } from "../utils/types";
import Card from "./Card";

const AccountCard = ({
  className,
  account,
  ...props
}: { account: User } & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return (
    <Card
      key={account.id}
      title={account.id}
      className={`text-center space-y-2 ${className}`}
      {...props}
    >
      <section>
        <h1 className="text-4xl font-bold">{account.money} Ð</h1>
      </section>
      <section className="flex space-x-1 justify-center items-center">
        <div className="h-5 w-5 bg-black rounded-full"></div>
        <h1 className="text-lg">Username</h1>
      </section>
    </Card>
  );
};

export default AccountCard;
