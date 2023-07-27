import React from "react";
import "./dash.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Socials() {
  return (
    <div>
      <div className="header__socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a href="https://medium.com" target="_blank" rel="noreferrer">
          <BsDribbble />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <FaYoutube />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
}
