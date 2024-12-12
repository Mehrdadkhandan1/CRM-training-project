import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <h2>CRM Test</h2>
        <Link href={"/add-customer"}>Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">Mehrdad Khandan | CRM project</footer>
    </>
  );
};

export default Layout;
