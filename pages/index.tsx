import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import styleNavbar from "../styles/Navbar.module.css";
import Skills from '../components/skills';
import PersonalInformation from '../components/information';
import Arrow_Down from '../components/icons/icon-arrow';
import Projects from '../components/projects';
import { useState, useEffect, useRef } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const Home: NextPage = () => {
  const [background, setBgNavbar] = useState("navbar-after");
  const [scrollBtn, setScrollBtn] = useState<any>("hidden");

  // refs
  const init_ref = useRef<any>();
  const ref = useRef(null);
  const contact_ref = useRef();
  const skills_ref = useRef();
  const projects_ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const main: any = init_ref.current;
      let { y } = main.getBoundingClientRect();

      let bg_color_navbar = y <= 0 ? "animation-navbar" : "navbar-after";
      let scroll_hidden = y <= 0 ? "visible" : "hidden";

      setBgNavbar(bg_color_navbar);
      setScrollBtn(scroll_hidden);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })

  const handleBtnScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Porfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header ref={ref} className={styleNavbar.header}>
        <Navbar background={background} refContact={contact_ref} refSkill={skills_ref} refProjects={projects_ref}></Navbar>
      </header>

      <main className={styles.main}>

        <div ref={init_ref} className={styles.main_title}>
          <h1 className={styles.title}>
            Welcome to <Link href="/">My Personal Web</Link>
          </h1>
          <button onClick={handleBtnScroll} style={{ visibility: scrollBtn, transition: ".2s" }} className={styles.btn_down}>
            <Arrow_Down></Arrow_Down>
          </button>
        </div>

        <div className={styles.personal_information}>
          <PersonalInformation></PersonalInformation>
        </div>

        <div ref={projects_ref} className={styles.projects}>
          <Projects></Projects>
        </div>

        <div ref={skills_ref} className={styles.skill}>
          <Skills></Skills>
        </div>

      </main>

      <footer className={styles.footer}>
        <div ref={contact_ref} className={styles.contact}>
          <h1>Contact</h1>
          <div>
            <ul>
              <li>
                <p>
                  <b>Phone: </b>
                  <span>+593 099 015 9128</span>
                </p>
              </li>
              <li>
                <p>
                  <b>Email: </b>
                  <span>luis.valverde120@gmail.com</span>
                </p>
              </li>
              <li>
                <div className={styles.contact_links}>
                
                  <Link href="https://www.linkedin.com/in/luis-valverde-102653216" passHref>
                    <a target="_blanck">

                      <div className={styles.contact_icons}>
                        <AiFillLinkedin className={styles.icons}></AiFillLinkedin>
                      </div>

                      <span>
                        LinkedIn
                      </span>

                    </a>
                  </Link>
                </div>
              </li>
              <li>
                <div className={styles.contact_links}>

                  <Link href="https://github.com/luisvalverd" passHref>

                    <a target="_blanck">
                      <div className={styles.contact_icons}>
                        <AiFillGithub className={styles.icons}></AiFillGithub>
                      </div>

                      <span>
                        GitHub
                      </span>
                    </a>

                  </Link>

                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
