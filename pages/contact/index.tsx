import type { NextPage } from "next";
import Form from "../../components/form";
import Link from "next/link";
import Navbar from "../../components/navbar";
import stylesNavbar from "../../styles/Navbar.module.css";

const Contact: NextPage = () => {
  return (
    <div>
      <header className={stylesNavbar.navbar}>
        <Navbar></Navbar>
      </header>
      <h1>Conctact Form</h1>
      <Form></Form>
      <Link href="/">Home</Link>
    </div>
  )
}

export default Contact;



