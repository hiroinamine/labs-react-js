import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

// Alternativa para manter a queryString apos clicar no NavLink
function QueryNavLink({ to, ...props }) {
  const location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default QueryNavLink;

// location looks like:
// {
//   pathame: "/invoices",
//   search: "?filter=sa",
//   hash: "",
//   state: null,
//   key: "ae4cz2j"
// }
