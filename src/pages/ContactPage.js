import React from "react";
import Header from "../components/header/Header";
import ContactBody from "../components/contact/ContactBody";
import Footer from "../components/footer/Footer";
import { c_0005, c_0006, c_0007 } from "../resources/ClassNames";
import "../styling/pages/ContactPage.css";

function ContactPage() {
  return (
    <div className={c_0005}>
      <Header className={c_0006} />
      <ContactBody />
      <Footer className={c_0007} />
    </div>
  );
}

export default ContactPage;
