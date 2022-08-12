import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css"

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.title_navbar}>
        <h3>Personal Web</h3>
      </div>
      <div className={styles.links_list}>
        <ul>
          <li className={styles.link}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.link}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.link}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;

