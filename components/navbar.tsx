import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

interface Props {
  background: any;
  refContact: any;
}

const Navbar: React.FC<Props> = (props: Props) => {

  const btnContact = () => {
  props.refContact.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles.navbar}>
      <div className={props.background}></div>
      <div className={styles.title_navbar} >
        <Link className={styles.title} href="/"><span>Personal Web</span></Link>
      </div>
      <div className={styles.links_list}>
        <ul>

          <li className={styles.link}>
            <Link href="/">Home</Link>
          </li>

          <li className={styles.link}>
            <a onClick={btnContact}>Contact</a>
          </li>

          <li className={styles.link}>

            <Link href="https://www.linkedin.com/in/luis-valverde-102653216" passHref>
              <a target="_blanck">

                <div className={styles.item_icon}>
                  <AiFillLinkedin className={styles.icons}></AiFillLinkedin>
                </div>

                <span>
                  LinkedIn
                </span>

              </a>
            </Link>

          </li>
          <li className={styles.link}>

            <Link href="https://github.com/luisvalverd" passHref>

              <a target="_blank">
                <div className={styles.item_icon}>
                  <AiFillGithub className={styles.icons}></AiFillGithub>
                </div>

                <span>
                  GitHub
                </span>
              </a>

            </Link>

          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;

