import React from "react";
import "./dock.scss";

function Dock({ windowState, setWindowState }) {
  const dockHandler = (e) => {
    console.log(e.target.parentElement.classList);
  };

  return (
    <footer className="dock">
      <div
        onClick={() => setWindowState((state) => ({ ...state, github: true }))}
        className="icon github"
      >
        <img src="/doc_icons/github.svg" alt="" />
      </div>
      <div
        onClick={() => setWindowState((state) => ({ ...state, note: true }))}
        className="icon note"
      >
        <img src="/doc_icons/note.svg" alt="" />
      </div>
      <div
        onClick={() => setWindowState((state) => ({ ...state, resume: true }))}
        className="icon pdf"
      >
        <img src="/doc_icons/pdf.svg" alt="" />
      </div>
      <div
        onClick={() =>window.open("https://calendar.google.com/calendar/u/0/r", "_blank")}
        className="icon calender"
      >
        <img src="/doc_icons/calender.svg" alt="" />
      </div>
      <div
        onClick={() => setWindowState((state) => ({ ...state, spotify: true }))}
        className="icon spotify"
      >
        <img src="/doc_icons/spotify.svg" alt="" />
      </div>
      <div
        onClick={() =>window.open("mailto:jagritmadaan2001@bizloanindia.com", "_blank")}
        className="icon mail"
      >
        <img src="/doc_icons/mail.svg" alt="" />
      </div>
      <div
        onClick={() =>window.open("https://www.linkedin.com/in/jagrit-madaan/", "_blank")}
        className="icon link"
      >
        <img src="/doc_icons/link.svg" alt="" />
      </div>
      <div
        onClick={() => setWindowState((state) => ({ ...state, cli: true }))}
        className="icon cli"
      >
        <img src="/doc_icons/cli.svg" alt="" />
      </div>
    </footer>
  );
}

export default Dock;
