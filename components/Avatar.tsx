'use client';
import { useState } from "react";

import React from "react";
import "@/styles/contact.css";
import Image from "next/image";
import Link from "next/link";

const Avatar = () => {

  const [click, setclick] = useState(false);

  const handleclick = () => {
    setclick(!click);
  }

  return (
    <div className="contact-section">
      <div className="contact">
        <Image
          src="/pic.png"
          alt="avatar"
          width={200}
          height={200}
          className="contact-pic"
          onClick={handleclick}
        />
        <div className="hover-content">hello! Click me to contact</div>
        <div className="first-bubble"></div>
        <div className="second-bubble"></div>
        <div className="third-bubble"></div>
     
        {click && (
          <div className="clicked-content">
           <Link href="#" className="github ">
           <span className="skill-icons--github-dark"></span>
           </Link>
           <Link href="#" className="linkdin">
           <span className="devicon--linkedin"></span>
           </Link>
           <Link href="#" className="instagram"><span className="skill-icons--instagram"></span></Link>
           <Link href="#" className="email"><span className="skill-icons--gmail-dark"></span></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Avatar;


