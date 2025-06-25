"use client";
import React, { useState, useRef, useEffect } from "react";
import "@/styles/cards.css";
import Image from "next/image";
import { TbBrowserMaximize } from "react-icons/tb";
import { SiGithub } from "react-icons/si";
import Link from "next/link";

const Cards = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (scrollRef.current) {
        event.preventDefault();
        scrollRef.current.scrollLeft += event.deltaY;
      }
    };

    const wrapper = scrollRef.current;
    if (wrapper) {
      wrapper.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const personalProjects = [
    {
      title: "Project 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "/hi.png",
      github: "#",
      web: "#",
    },
    { title: "Project 2", description: "Description 2", image: "/hi.png" },
  ];

  return (
    <ul ref={scrollRef} className="wrapper">
      {personalProjects.map((project, index) => {
        return (
          <>
            <li
              key={index}
              className={`list ${expandedIndex === index ? "expanded" : ""}`}
              onClick={() => handleClick(index)}
            >
              {expandedIndex !== index && (
                <>
                  <div className="list-img">
                    <Image
                      src="/todolist.png"
                      alt="hi"
                      className="imgg"
                      fill={true}
                    />
                  </div>
                </>
              )}
              {expandedIndex === index && (
                <div className="expanded-content">
                  <div className="dis">
                    <span>{project.title}</span>
                    <p>{project.description}</p>
                    <div className="link">
                      <Link href={project.web ?? "#"}>
                        <TbBrowserMaximize className="icon"/>
                      </Link>
                      <Link href={project.web ?? "#"}>
                        <SiGithub className="icon"/>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default Cards;
