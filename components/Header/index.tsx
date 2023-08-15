import "./Header.css";

import React, { useState } from "react";

import Link from "next-intl/link";
import Image from "next/image";
import SocialLink from "../SocialLink";
import LanguageLink from "../LanguageLink";
import PhoneLink from "../PhoneLink";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <Link className="home__link" href={"/"}>
        <div className="logo">
          <Image src={"/hydro logo title.svg"} alt={""} fill />
        </div>

        <div className="mobile_logo">
          <Image src={"/hydro logo.svg"} alt={""} fill />
        </div>

        <span className="divider"></span>

        <h1>
          НИОКР
          <br />
          Производство
          <br />
          Сервис
        </h1>
      </Link>

      <div className="information">
        <div className="made_in">
          <p>Сделано в Казахстане</p>

          <div className="flag">
            <Image src={"/flag.png"} alt={""} fill />
          </div>
        </div>

        <div className="burger" onClick={toggleMenu}>
          <Image src={"/icons/menu.svg"} alt={""} fill />
        </div>

        <div className={`navigation ${isOpen ? "opend" : ""}`}>
          <div className="close" onClick={toggleMenu}>
            <Image src={"/icons/close.svg"} alt={""} fill />
          </div>

          <nav>
            <PhoneLink
              icon="/icons/phone.svg"
              phones={[
                {
                  phone: "+7 777 223 1234",
                  name: "По вопросам производства и НИОКР",
                },
                {
                  phone: "+7 776 001 6010",
                  name: "По коммерческим вопросам",
                },
              ]}
            />
            <SocialLink
              icon="/icons/location.svg"
              href="https://2gis.kz/almaty/firm/70000001018400963"
            />
            <SocialLink
              icon="/icons/whatsapp.svg"
              href="https://wa.me/77772231234 "
            />
            <SocialLink
              icon="/icons/instagram.svg"
              href="https://www.instagram.com/hydronrg.kz/"
            />
          </nav>

          <nav>
            <LanguageLink locale="ru" />
            <LanguageLink locale="en" />
            <LanguageLink locale="kk" lang="kz" />
          </nav>
        </div>
      </div>
    </header>
  );
}
