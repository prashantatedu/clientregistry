import React from "react";
import { Link } from "react-router-dom";

export default function Header({ isAuthenticated = false }) {
  const guestLinks = (
    <nav>
      <ul className="flex flex-basis justify-around justify-items-center space-between">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
  return <div>{isAuthenticated ? "" : guestLinks}</div>;
}
