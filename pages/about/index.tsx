import type { NextPage } from "next";
import Navbar from "../../components/navbar";
import stylesNavbar from "../../styles/Navbar.module.css";

const About: NextPage = () => {
  return (
    <div>
      <header className={stylesNavbar.navbar}>
        <Navbar></Navbar>
      </header>
      <main>
        <h1>About</h1>
      </main>
    </div>
  )
}

export default About;

