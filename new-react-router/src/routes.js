import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import Invoice from "./pages/Invoice";
import Invoices from "./pages/Invoices";
import Profile from "./pages/Profile";
import Users from "./pages/Users";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
      </Route>

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/users" element={<Users />}>
        <Route path="/users/purchases" element={<h2>Compras</h2>} />
        <Route
          path="/users/password"
          element={
            <>
              <h2>Alterar senha</h2>
              <Link to="/">dashboard</Link>
            </>
          }
        />
      </Route>

      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}
