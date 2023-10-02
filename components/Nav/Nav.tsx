"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
    <header className={`${styles.header}`}>
      <div className="container">
        <div>
          <Image src="/logo.png" alt="Logo" height={250} width={250} />
        </div>
        <form className="search">
          <input type="text" name="search" />
          <input type="submit" value="Search" />
        </form>
        <ul className="nav">
          {loggedIn ? (
            <>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Category</Link>
              </li>
              <li>
                <Link href="#">Cart</Link>
              </li>
              <li>
                <Link href="#">Username</Link>
              </li>
              <li>
                <Link href="#">logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="#">Sign in</Link>
              </li>
              <li>
                <Link href="#">Sign up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
