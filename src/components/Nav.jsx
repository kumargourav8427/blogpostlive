import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <Link to="/">
            <li>BlogPostList</li>{" "}
          </Link>

          <Link to="/items">
            <li>BlogPostItems</li>
          </Link>
          <Link to="/details">
            <li>BlogPostDetails</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
