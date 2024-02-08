import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Header() {
  return (
    <header>
      <FontAwesomeIcon icon={faGithub} />
      <div className="part-1"></div>
      <div className="part-2"></div>
      <div className="part-3"></div>
    </header>
  );
}
