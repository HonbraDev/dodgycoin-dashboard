import { DetailedHTMLProps, HTMLAttributes } from "react";

const Card = ({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div
    className={`border-gray-300 border-t border-b border-l border-r p-5 rounded-md shadow ${className}`}
    {...props}
  ></div>
);

export default Card;
