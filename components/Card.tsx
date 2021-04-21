import { DetailedHTMLProps, HTMLAttributes } from "react";

const Card = ({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div
    className={`p-5 rounded-md shadow bg-gray-500 ${className}`}
    {...props}
  ></div>
);

export default Card;
