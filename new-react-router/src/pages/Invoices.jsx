import React from "react";
import { Link, NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";

function Invoices() {
  const invoices = getInvoices();
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  function changeFilterParam(element) {
    const filter = element.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  }

  const navLinks = invoices
    .filter(invoice =>
      filter
        ? invoice.name.toLowerCase().startsWith(filter.toLowerCase())
        : true
    )
    .map(invoice => (
      <NavLink
        to={`/invoices/${invoice.number}`}
        key={invoice.number}
        style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : ""
          };
        }}
      >
        {invoice.name}
      </NavLink>
    ));

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        <input type="text" value={filter || ""} onChange={changeFilterParam} />
        {navLinks}
      </nav>
      <Outlet />
    </div>
  );
}

export default Invoices;
