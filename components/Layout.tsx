const Layout = ({ children }) => {
  return (
    <div className="mx-auto max-w-3xl my-5 px-5">
      <main className="w-full">{children}</main>
    </div>
  );
};

export default Layout;
