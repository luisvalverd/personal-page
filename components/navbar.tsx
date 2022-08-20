import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css"
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from "react-icons/ai";

interface Props {
  background?: string;
  refContact?: React.RefObject<HTMLDivElement>;
  refSkill?: React.RefObject<HTMLDivElement>;
  refProjects?: React.RefObject<HTMLDivElement>;
}


const Navbar: React.FC<Props> = (props: Props) => {
  const [listStyles, setListStyles] = useState<any>({});
  const [dropBox, setDropbox] = useState<any>("none");
  const [links, setLinks] = useState<any>("flex");
  const [linksDropBox, setLinksDropBox] = useState<any>("none");

  useEffect(() => {
    if (screen.width <= 660) {
      setDropbox("visible");
      setLinks("none");
    }
    if (screen.width > 660) {
      setDropbox("hidden");
      setLinks("flex");
    }
  }, [])

  useEffect(() => {

    const handleDropbox = () => {
      if (screen.width <= 660) {
        setDropbox("visible");
        setLinks("none");
      }
      if (screen.width > 660) {
        setDropbox("hidden");
        setLinks("flex");
      }
    }

    window.addEventListener("resize", handleDropbox);

    return () => {
      window.removeEventListener("resize", handleDropbox);
    }
  })

  const btnDropbox = () => {
    if (linksDropBox === "none") {
      setLinksDropBox("flex");
    } else {
      setLinksDropBox("none");
    }
  }

  const btnContact = () => {
    props.refContact.current?.scrollIntoView({ behavior: "smooth" });
  }

  const btnSkill = () => {
    props.refSkill.current?.scrollIntoView({ behavior: "smooth" });
  }

  const btnProjects = () => {
    props.refProjects.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles.navbar} >
      <div className={props.background}></div>
      <div className={styles.title_navbar} >
        <Link className={styles.title} href="/"><span>Personal Web</span></Link>
      </div>
      <div className={styles.links_list}>
        <ul>

          <li className={styles.dropbox} style={{ visibility: dropBox }}>
            <button onClick={btnDropbox}>
              <AiOutlineMenu className={styles.dropbox_icon}></AiOutlineMenu>
            </button>

            <ul className={styles.dropBox_list} style={{
              position: 'fixed',
              right: '10px',
              top: '4rem',
              width: "10rem",
              display: linksDropBox,
              flexDirection: "column",
              background: "#0070f3",
              padding: "0",
              justifyContent: "left",
              height: "13rem",
            }}>

              <li className={styles.link}>
                <Link href="/">Home</Link>
              </li>

              <li className={styles.link}>
                <a onClick={btnProjects}>Projects</a>
              </li>

              <li className={styles.link}>
                <a onClick={btnSkill}>Skills</a>
              </li>

              <li className={styles.link}>
                <a onClick={btnContact}>Contact</a>
              </li>

              <li className={styles.link} >

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
          </li>

          <li className={styles.link} style={{ display: links }}>
            <Link href="/">Home</Link>
          </li>

          <li className={styles.link} style={{ display: links }}>
            <a onClick={btnProjects}>Projects</a>
          </li>

          <li className={styles.link} style={{ display: links }}>
            <a onClick={btnSkill}>Skills</a>
          </li>

          <li className={styles.link} style={{ display: links }}>
            <a onClick={btnContact}>Contact</a>
          </li>

          <li className={styles.link} style={{ display: links }}>

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
          <li className={styles.link} style={{ display: links }}>

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

