import Link from "next/link";

const Header = ({ title, goBack }: { title: string; goBack?: boolean }) => (
  <div className="space-y-2 mb-4">
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-bold">{title}</h1>
    </div>
    {goBack ? (
      <div>
        <Link href="/">
          <a className="text-gray-500 hover:underline">Go back</a>
        </Link>
      </div>
    ) : (
      <></>
    )}
  </div>
);

export default Header;
